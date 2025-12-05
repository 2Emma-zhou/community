---
sidebar_position: 1
slug: /
hide_title: true
sidebar_label: Tier0是什么?
---

## 概念
基于统一命名空间（UNS）构建，背靠工业级开源技术，Tier0 是一款开源的工业数据集成平台。

<img width={750} src="http://communityimage2.oss-cn-hangzhou.aliyuncs.com/1.png" />

:::info
Node-RED 和 Grafana是成熟的开源工具，广泛应用于 Tier0 工作流程。如需详细教程，请参考：
<a href="https://nodered.org/docs/tutorials/first-flow">NodeRed 官方教程</a> 及 
<a href="https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/create-dashboard/">Grafana 官方教程</a>
:::

## 架构

<img width={750} src="http://communityimage2.oss-cn-hangzhou.aliyuncs.com/2.jpg" />

#### 数据采集层（Source Flow）
以 Node-RED 为核心，Tier0 的数据采集器，是搭建统一命名空间的必备组件。
#### 命名空间层 （Namespace）
Tier0 的核心模块。将工厂数据建模为 “文件夹 - 文件” 结构的树形目录，内置 MQTT 消息代理，用户可通过与目录结构完全对应的 MQTT 主题，轻松识别、访问数据。
:::info
示例：假设用户需要对工厂里 A 车间 A 生产线的一台数控机床进行建模，模型主题可设为 factory/workshopA/productionLineA/CNC。
:::
#### 数据存储层 (Sink)
Tier0 的数据存储层，支持高效的数据查询与压缩存储：
- 时序数据存储于 TimescaleDB；
- 关系型数据（如客户管理系统数据）存储于 PostgreSQL。
#### 事件流转层（Event Flow）
以 Node-RED 为核心，完成事件驱动型数据流转。

## 加入我们
Tier0不仅是一套解决方案，更是一场技术上的共同创新运动。我们邀请所有对开源技术感兴趣的朋友一起参与进来，共同塑造平台的未来。
如果你喜欢我们的项目，欢迎在 GitHub 上收藏⭐️我们！
*即刻加入我们，一同探索开源技术的无限可能吧！*
- Github: https://github.com/FREEZONEX/Tier0-Edge
- Discord: https://lnkd.in/egT8aFE3