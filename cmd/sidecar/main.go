package main

import (
	"context"

	"github.com/kubeshop/testkube/pkg/event/bus"
	"github.com/kubeshop/testkube/pkg/k8sclient"
	"github.com/kubeshop/testkube/pkg/log"
	"github.com/kubeshop/testkube/pkg/logs"
	"github.com/kubeshop/testkube/pkg/logs/config"
	"github.com/kubeshop/testkube/pkg/logs/sidecar"
	"github.com/kubeshop/testkube/pkg/ui"

	"github.com/nats-io/nats.go/jetstream"
)

func main() {
	log := log.DefaultLogger.With("service", "logs-sidecar")

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	cfg := Must(config.Get())

	// Event bus
	natsConn := Must(bus.NewNATSConnection(cfg.NatsURI))
	defer func() {
		log.Infof("closing nats connection")
		natsConn.Close()
	}()

	js := Must(jetstream.New(natsConn))

	clientset, err := k8sclient.ConnectToK8s()
	if err != nil {
		ui.ExitOnError("Creating k8s clientset", err)
		return
	}

	podsClient := clientset.CoreV1().Pods(cfg.Namespace)

	logsStream, err := logs.NewNATSStream(natsConn, cfg.ExecutionId)
	if err != nil {
		ui.ExitOnError("error creating logs stream", err)
		return
	}

	// run Sidecar Logs Proxy - it will proxy logs from pod to nats
	proxy := sidecar.NewProxy(clientset, podsClient, logsStream, js, log, cfg.Namespace, cfg.ExecutionId)
	if err := proxy.Run(ctx); err != nil {
		log.Errorw("error proxying logs", "error", err)
	}
}

// Must helper function to panic on error
func Must[T any](val T, err error) T {
	if err != nil {
		panic(err)
	}
	return val
}