---
sidebar_position: 1
slug: /
hide_title: true
---

## What is supOS?

### Concept
supOS is an open-source industrial data integration platform built on the Unified Namespace (UNS) methodology and powered by production-grade open-source technologies.

<img width={750} src="http://communityimage2.oss-cn-hangzhou.aliyuncs.com/1.png" />

:::info
Node-RED and Grafana are widely used in the supOS workflow. They both are mature open-source tools with extensive documentation. For detailed tutorials, please refer to:
- <a href="https://nodered.org/docs/tutorials/first-flow">NodeRed</a>.
- <a href="https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/create-dashboard/">Grafana</a>.
:::

### Architecture

<img width={750} src="http://communityimage2.oss-cn-hangzhou.aliyuncs.com/2.jpg" />

#### Source Flow
Node-RED as core, serves as the data collector of supOS, which is necessary for building a unified namespace.

#### Namespace
The core of supOS. Models your data into a folder-file structured tree map. With its embedded MQTT broker, your data is easily recognized and accessed through MQTT topics that exactly follow the data hierarchy.
:::info
For example, you have a CNC machine in your factory, workshop A, production line A, and the modeled topic could be `factory/workshopA/productionLineA/CNC`.
:::

#### Sink
The storage layer of supOS, which enables efficient data querying and compression.
- Time-series data is stored in TimescaleDB.
- Relational data (e.g. CRM data) is stored in PostgreSQL.

#### Event Flow
Node-RED as core, completes event-driven data flows.

## What can supOS Do?

<iframe width="560" height="315" src="https://www.youtube.com/embed/KNg5maYvltE?si=slagCY9jdE-INcBq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## How supOS Works?

### The Core Innovation: Unified Namespace (UNS)

At its heart, supOS Community Edition stands out thanks to its groundbreaking concept — Unified Namespace (UNS), a revolutionary approach that 
- Streamlines data management by centralizing information across applications;
- Eliminates traditional silos between systems;
- Ensures your data is fully optimized and utilized for any scenario.

### Community-Driven Power
As an open-source project, supOS Community Edition thrives on the collective contributions of its global community. By leveraging the power of diverse open-source tools and expertise, **supOS Community Edition** serves both individual users and businesses.

## Join the Revolution
supOS Community Edition isn’t just a solution—it’s a movement. We invite everyone interested in open-source technology to contribute and shape our future together.

If you like our work, give us a ⭐️ on GitHub—it helps more people discover the project.

*Join us today as we continue to push the boundaries of what’s possible with open-source technology!*
- Github: https://github.com/FREEZONEX/supOS-CE
- Discord: https://lnkd.in/egT8aFE3