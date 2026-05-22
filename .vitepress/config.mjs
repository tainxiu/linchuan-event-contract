export default {
  title: '临川事件合约交易笔记',
  description: '合约教学、指标研究与交易复盘',
  lang: 'zh-CN',
  base: '/linchuan-event-contract/',
  cleanUrls: true,
  markdown: {
    languageAlias: {
      pinescript: 'javascript'
    }
  },
  themeConfig: {
    siteTitle: '临川事件合约交易笔记',
    nav: [
      { text: '首页', link: '/' },
      { text: '合约教学', link: '/临川事件合约教学/第一期-新手基础/新手基础' },
      { text: '返佣链接', link: '/临川事件合约推广链接/临川事件交易所注册返佣链接' },
      { text: '直播战绩', link: '/临川直播战绩表格/5月份/5.22号开仓战绩' },
      { text: 'MACD', link: '/临川事件合约教学/MACD/大纲' }
    ],
    sidebar: [
      {
        text: '临川事件合约教学',
        items: [
          {
            text: '第一期：新手基础',
            link: '/临川事件合约教学/第一期-新手基础/新手基础'
          },
          {
            text: '第二期：如何成为事件高手',
            link: '/临川事件合约教学/第二期-如何成为事件高手/如何成为事件高手'
          },
          {
            text: 'MACD 大纲',
            link: '/临川事件合约教学/MACD/大纲'
          }
        ]
      },
      {
        text: '临川事件合约推广链接',
        items: [
          {
            text: '交易所注册返佣链接',
            link: '/临川事件合约推广链接/临川事件交易所注册返佣链接'
          }
        ]
      },
      {
        text: '临川直播战绩表格',
        items: [
          {
            text: '5.22 号开仓战绩',
            link: '/临川直播战绩表格/5月份/5.22号开仓战绩'
          }
        ]
      }
    ],
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    search: {
      provider: 'local'
    }
  },
  lastUpdated: true
}
