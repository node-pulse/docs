# Node Pulse Admiral

## What it is - Unified server fleet dashboard

- visualize Prometheus metrics
- automate deployments with built-in and community-contributed Ansible playbooks
- manage servers via web-based SSH terminal.

## How it works exactly

- After setting up Admiral, it will receive metrics sent from all your servers via the Node Pulse Agent, every 15 seconds
- Node Pulse Agent is just a simple forwarder, the metrics are collected by Prometheus node exporter and process exporter
- You can connect to your servers via the web-based SSH terminal, very handy
- There are many built-in and community-contributed Ansible playbooks. You can deploy applications and services by using Ansible Playbooks from the web UI.
- Of course, you can upload your own Ansible playbooks

## Installation

### Download

```bash
curl -LO https://github.com/node-pulse/admiral/releases/latest/download/node-pulse-admiral-latest.tar.gz

```

### Unpack

```bash
tar xzf node-pulse-admiral-latest.tar.gz -C /opt/admiral --strip-components=1
```

### Go to the direcotry

```bash
cd /opt/admiral
```

### Deploy (interactive - no manual .env editing needed)

```bash
sudo ./deploy.sh
```
