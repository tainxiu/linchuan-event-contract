<script setup>
const exchanges = [
  {
    id: '01',
    name: 'Binance',
    title: '币安返佣',
    summary: '邀请码 TIANXIU · 自动 20%',
    linkLabel: '打开币安注册链接',
    link: 'https://www.bsmkweb.cc/register?ref=TIANXIU',
    code: 'TIANXIU',
    rebates: ['自动 20%'],
    notes: [
      '先用新账号通过下方链接绑定邀请码。',
      '老账号保持 90 天不登录。',
      '90 天后再通过下方链接登录，可实现绑定 2 个号。'
    ]
  },
  {
    id: '02',
    name: 'Hibt',
    title: '事件合约 & 永续',
    summary: '事件返佣 11% · 永续返佣 55%',
    linkLabel: '打开 Hibt 邀请链接',
    link: 'https://www.hibt.com/register?promotionCode=DLTJ',
    code: 'DLTJ',
    rebates: ['事件返佣 11%', '永续返佣 55%'],
    notes: [
      '返佣到账与查看：首页 → 更多 → 合伙人计划。返佣每 6 小时自动到账一次。',
      '提现规则：新手充值后 24 小时才能提现，24 小时后可随时提现。',
      '充币建议先小额测试：Hibt 选择 USDT 与 BEP20（BSC）网络，再从币安链上转账。',
      '提币建议先小额测试：币安复制 BSC 充值地址，Hibt 选择 USDT 与 BEP20（BSC）网络提币。'
    ],
    extra: {
      title: '下载与安装',
      paragraphs: [
        '安卓：直接下载群文件 hibt-official 压缩包，解压安装即可。',
        '苹果有 VPN：复制视频链接到浏览器打开，按视频方法下载。',
        '苹果无 VPN：可购买 VPN，费用为 30 元/年（50G）。'
      ],
      links: [
        {
          label: '打开 iOS 下载视频',
          href: 'https://www.youtube.com/shorts/0pCjKqnEQk4?feature=share'
        },
        {
          label: '打开 VPN 购买链接',
          href: 'https://okzweb.com/#/register?code=PjO2gHIw'
        }
      ]
    }
  },
  {
    id: '03',
    name: 'TurboFlow',
    title: '事件合约 & 永续',
    summary: '事件总交易量 0.6% · 永续 60%',
    linkLabel: '打开 TurboFlow 邀请链接',
    link: 'https://www.turboflow.xyz/join/?r=ztx888',
    code: 'ztx888',
    rebates: ['事件总交易量 0.6%', '永续合约 60%'],
    notes: [
      '通过主播推广码注册的账号会自动成为代理商账户，代理商号交易事件无法自己返自己。',
      '正确流程：登录代理商账号 → 主页 → 邀请返佣 → 事件合约返佣 → 复制你自己的邀请码 → 重新通过这个邀请码注册新号 → 用新号交易。',
      '请尽量体验 3 分钟以上；注意该平台 K 线与币安平台可能不一致。',
      '如果你想邀请别人来交易，并且对方也需要自返，需要登录 https://cydataboard.biz/#/invite 后台，给对方设置一个推广码。推广码格式自己定，收益统一写 0，事件返佣比例自己定；你邀请完成后，对方还需要再邀请自己一次。'
    ],
    extra: {
      title: '下载与安装',
      links: [
        {
          label: '打开 TestFlight 下载链接',
          href: 'https://testflight.apple.com/join/f32Hxx8D'
        }
      ]
    }
  },
  {
    id: '04',
    name: 'OKX',
    title: 'OKX 返佣',
    summary: '邀请码 TX777 · 自动 20%',
    linkLabel: '打开 OKX 注册链接',
    link: 'https://www.growthhubzz.com/join/TX777',
    code: 'TX777',
    rebates: ['自动 20%'],
    notes: [
      '老账号需要保持 90 天不登录、不交易。',
      '90 天后通过下方链接在浏览器登录，即可直接换绑。'
    ]
  },
  {
    id: '05',
    name: 'Gate',
    title: 'Gate 返佣',
    summary: '注册后把 UID 发给小助理设置',
    linkLabel: '打开 Gate 注册链接',
    link: 'https://www.gateport.company/share/LINCHUAN',
    rebates: ['发送 UID 给小助理', '人工设置返佣'],
    notes: [
      '先通过下方链接完成注册。',
      '注册完成后，把 Gate UID 发给小助理阿风，由小助理人工设置返佣。'
    ]
  }
]
</script>

<template>
  <section class="rebate-page">
    <div class="rebate-warning">
      <strong>需要帮助可以联系小助理</strong>
      <p>注册、下载、充值或返佣设置遇到问题，都可以找小助理阿风协助处理。</p>
    </div>

    <div class="exchange-grid">
      <details v-for="exchange in exchanges" :key="exchange.name" class="exchange-card">
        <summary>
          <span>{{ exchange.id }} {{ exchange.name }}</span>
          <strong>{{ exchange.title }}</strong>
          <small>{{ exchange.summary }}</small>
        </summary>

        <div class="exchange-body">
          <div class="exchange-layout">
            <div class="exchange-row exchange-guide">
              <b>使用说明</b>
              <ol>
                <li v-for="note in exchange.notes" :key="note">{{ note }}</li>
              </ol>
            </div>

            <div class="exchange-side">
              <div class="exchange-row">
                <b>注册链接</b>
                <a :href="exchange.link" target="_blank" rel="noreferrer">{{ exchange.linkLabel }}</a>
                <p>{{ exchange.link }}</p>
              </div>

              <div class="exchange-row">
                <b>邀请码与返佣</b>
                <div class="referral-combo">
                  <span v-if="exchange.code" class="referral-code">{{ exchange.code }}</span>
                  <span v-for="rebate in exchange.rebates" :key="rebate" class="rebate-tag">{{ rebate }}</span>
                </div>
              </div>
            </div>
          </div>

          <div v-if="exchange.extra" class="exchange-row exchange-extra">
            <b>{{ exchange.extra.title }}</b>
            <p v-for="paragraph in exchange.extra.paragraphs" :key="paragraph">{{ paragraph }}</p>
            <a
              v-for="link in exchange.extra.links"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noreferrer"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
      </details>
    </div>
  </section>
</template>
