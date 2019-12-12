module.exports = {
  base: '/blog/',
  title: 'Jonny Wei 的博客',
  description: '一部故事书，记录我的程序员生涯',
  head: [
    ['link', {rel: 'icon', href: '/images/logo.jpg'}]
  ],
  port: 9999,
  themeConfig: {
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: '最近更新', // 文档更新时间：每个文件git最后提交的时间
    nav: [ //header导航栏
      {text: '主页', link: '/'},
      {text: 'English', link: '/english/'}, // 内部链接 以docs为根目录
      { //下拉项
        text: 'GitHub',
        items: [
          {text: 'GitHub地址', link: 'https://github.com/18174005984'},// 外部链接
          {text: 'GitHub地址', link: 'https://github.com/18174005984'},// 外部链接
          {text: 'GitHub地址', link: 'https://github.com/18174005984'},// 外部链接
        ]
      }
    ],
    sidebar: {
      '/english/': getVueSidebar('阅读','语法'),
    },
    smoothScroll: true,
  },
  markdown: {},
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom']
  ],
};

function getVueSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'bb/20191212',
        'bb/20191212',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: []
    },
  ]
}

