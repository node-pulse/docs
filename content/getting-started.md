# What Node Pulse Admiral is

Unified server fleet dashboard—visualize Prometheus metrics, automate deployments with built-in and community-contributed Ansible playbooks, and manage servers via web-based SSH terminal.

- After setting up Admiral, it will receive metrics sent from all your servers via the Node Pulse Agent, every 15 seconds
- Node Pulse Agent is just a simple forwarder, the metrics are collected by Prometheus node exporter and process exporter
- You can connect to your servers via the web-based SSH terminal, very handy
- There are many built-in and community-contributed Ansible playbooks. You can deploy applications and services by using Ansible Playbooks from the web UI.
- Of course, you can upload your own Ansible playbooks

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
