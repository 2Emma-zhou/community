---
sidebar_position: 1
slug: /
hide_title: true
sidebar_label: What is Tier0?
---

## Concept
Tier0 is an open-source industrial data integration platform built on the Unified Namespace (UNS) methodology and powered by production-grade open-source technologies.

<img width={750} src="http://communityimage2.oss-cn-hangzhou.aliyuncs.com/1.png" />


## Architecture

<img width={750} src="http://communityimage2.oss-cn-hangzhou.aliyuncs.com/2.jpg" />

#### Source Flow
Node-RED as core, serves as the data collector of Tier0, which is necessary for building a unified namespace.

#### Namespace
The core of Tier0. Models your data into a folder-file structured tree map. With its embedded MQTT broker, your data is easily recognized and accessed through MQTT topics that exactly follow the data hierarchy.
:::info
For example, you have a CNC machine in your factory, workshop A, production line A, and the modeled topic could be `factory/workshopA/productionLineA/CNC`.
:::

#### Sink
The storage layer of Tier0, which enables efficient data querying and compression.
- Time-series data is stored in TimescaleDB.
- Relational data (e.g. CRM data) is stored in PostgreSQL.

#### Event Flow
Node-RED as core, completes event-driven data flows.


## Join Us
Tier0 Community Edition isn’t just a solution—it’s a movement. We invite everyone interested in open-source technology to contribute and shape our future together.

If you like our work, give us a ⭐️ on GitHub—it helps more people discover the project.

*Join us today as we continue to push the boundaries of what’s possible with open-source technology!*
- Github: https://github.com/FREEZONEX/Tier0-Edge
- Discord: https://lnkd.in/egT8aFE3