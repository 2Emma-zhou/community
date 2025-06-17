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
Serves as the connection pipeline to devices and systems. It handles real-time protocol translation into JSON payloads, and is built entirely on Node-RED.

#### Namespace
The core of supOS. A semantic MQTT broker and parser that handle data with topic hierarchies and structured JSON payloads.

#### Sink
The storage layer of supOS, which enables efficient data querying and compression.
- Time-series data are stored in TimescaleDB, TDengine, etc.
- Relational data (e.g., CRM data) are stored in PostgreSQL.

#### Event Flow
Orchestrates data into higher-level event/information flows.  It supports merging JSON payloads and appending system-generated prompts for LLM-powered optimization.

## What can supOS Do?

<iframe width="560" height="315" src="https://www.youtube.com/embed/KNg5maYvltE?si=slagCY9jdE-INcBq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## How supOS Works?

### The Core Innovation: Unified Namespace (UNS)

At its heart, supOS Community Edition stands out thanks to its groundbreaking concept — Unified Namespace (UNS), a revolutionary approach that 
- Streamlines data management by centralizing information across applications;
- Eliminates traditional silos between systems;
- Ensures your data is fully optimized and utilized for any scenario.

### Community-Driven Power
As an open-source project, supOS Community Edition thrives on the collective contributions of its global community. By leveraging the power of diverse open-source tools and expertise, **supOS COmmunity Edition** serves both individual users and businesses.

## Join the Revolution
supOS Community Edition isn’t just a solution—it’s a movement. We invite everyone interested in open-source technology to contribute and shape our future together.

*Join us today as we continue to push the boundaries of what’s possible with open-source technology!*
- Github: https://github.com/FREEZONEX/supOS-CE
- Discord: https://lnkd.in/egT8aFE3