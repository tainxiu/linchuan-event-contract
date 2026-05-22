---
layout: home
---

<script setup>
import { withBase } from 'vitepress'
</script>

<section class="home-entry">
  <div class="home-entry-hero">
    <img class="home-entry-avatar" :src="withBase('/images/linchuan-avatar.png')" alt="临川事件头像" />
    <p class="home-entry-kicker">Event Contract Notes</p>
    <h1>临川事件合约交易笔记</h1>
  </div>

  <div class="home-entry-grid">
    <a class="home-entry-card" :href="withBase('/临川事件合约推广链接/临川事件交易所注册返佣链接')">
      <span>01 事件合约</span>
      <strong>事件合约邀请返佣链接</strong>
      <p>交易所注册链接、邀请码、返佣比例和新手操作说明。</p>
    </a>
    <a class="home-entry-card" :href="withBase('/临川事件合约教学/MACD/大纲')">
      <span>02 指标研究</span>
      <strong>事件合约指标研究</strong>
      <p>围绕 MACD 等指标，记录参数、逻辑和短线参考用法。</p>
    </a>
    <a class="home-entry-card" :href="withBase('/临川事件合约教学/第一期-新手基础/新手基础')">
      <span>03 做单技巧</span>
      <strong>事件合约做单技巧分享</strong>
      <p>趋势、盘口、确认 K、流动性和进场纪律的教学整理。</p>
    </a>
    <a class="home-entry-card" :href="withBase('/临川直播战绩表格/5月份/5.22号开仓战绩')">
      <span>04 实战战绩</span>
      <strong>事件合约直播实战战绩</strong>
      <p>后续用于沉淀直播开仓记录、结果统计和复盘结论。</p>
    </a>
  </div>
</section>
