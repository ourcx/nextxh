import { defineConfig } from 'vitepress'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "小海博客",
  description: "第二代博客，使用vitepress快速搭建",
  head: [['link', { rel: 'icon', href: './public/favicon.ico' }]],
  base: './',
  appearance: true,
  themeConfig: {
    returnToTopLabel: "返回顶部",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: './public/icon.jpg',
    
    nav: [
      { text: '主页', link: '/' },
      { text: 'b站', link: 'https://space.bilibili.com/515482775?spm_id_from=333.1007.0.0' },
      {
        text: '其他',
        items: [
          {
            // 该部分的标题
            text: '有趣的小功能',
            items: [
              { text: 'markdown编辑器', link: '...' },
              { text: '个人发展', link: '...' }
            ]
          }
        ]
      },
    ],

    sidebar: [
      {
        text: '总体目录',
        items: [
          { text: 'd3数据可视化', link: '/d3/index' },
          { text:"c语言",link:'/c/index'},
          { text:"算法",link:'/js算法/前端算法'},
          { text:"js复习",link:'#'},
          { text: '项目经历', link: '/project' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ourcx' },
    ],


    footer: {
      message: '请保持友善',
      copyright: 'Copyright © 2025-present 小海'
    },
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
          dateStyle: "full",
          timeStyle: "medium",
        },
      },
    
  },
  

})

