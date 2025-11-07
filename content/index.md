---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Node Pulse Admiral"
  text: ""
  tagline: The control panel for your server fleet—deploy monitoring agents, track inventory, and visualize Prometheus metrics in one integrated platform.
  image:
    src: /images/logo.jpg
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started.html
    - theme: alt
      text: View on GitHub
      link: https://github.com/node-pulse/admiral

features:
  - title: Push-Based Architecture
    details: Agents push metrics through firewalls and NAT without requiring inbound ports. Built-in buffering ensures no data loss during outages.
  - title: Efficient Data Model
    details: 98.32% bandwidth reduction and 99.8% database reduction through agent-side parsing. 10-30x faster queries with direct column access.
  - title: Real-Time Monitoring
    details: 15-second metric intervals with Valkey Streams buffering and parallel digest workers for scalable, real-time visibility.
---

## Quick Start

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
