import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: './',
  title: "糖与刀",
  description: "药娘的糖与刀",
  themeConfig: {
    siteLogo: "/logo.png",
    logo: "/logo.png",
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '朝日的网站', link: 'http://zhaore.top' },
      { text: "赞助我们", link: "/pay.md" },
    ],

    sidebar: [
      {
        text:'# 前言 # 切勿按照本书内容使用药物，如有医疗需求请咨询正规医疗机构。本书中关于药物的部分包含虚构内容，并非与现实完全一致。本书中所有角色、事件纯属虚构，请勿对号入座或映射现实。对跨性别者有歧视、仇恨者请自行离开。'
      },
      {
        text: '第一卷：序章',
        items: [
          { text: '1・芸子老师', link: '/01/001.md' },
          { text: '2 · 初识', link: '/01/002.md' },
          { text: '3・睡吧睡吧', link: '/01/003.md' },
          { text: '4 · 压抑感', link: '/01/004.md' },
          { text: '5・独属于我们的乌托邦', link: '/01/005.md' },
          { text: '6 · 芸子的工作', link: '/01/006.md' },
          { text: '7・吵架', link: '/01/007.md' },
          { text: '8 · 半睡半醒 ', link: '/01/008.md' },
          { text: '9 · 唱违心的歌 ', link: '/01/009.md' },
          { text: '10 · 雨糖的画', link: '/01/010.md' },
          { text: '11 · 我真的是个烂人 ', link: '/01/011.md' },
          { text: '12 · 辗转反侧（上） ', link: '/01/012.md' },
          { text: '13 · 辗转反侧（下） ', link: '/01/013.md' },
          { text: '14 · 纯酱（上）', link: '/01/014.md' },
          { text: '15 · 纯酱（下） ', link: '/01/015.md' },
          { text: '16 · 写好自己的歌 ', link: '/01/016.md' },
          { text: '17 · 糖是温暖的希望，刀是冰冷的真实 ', link: '/01/017.md' },
          { text: '18 · 糖与刀 ', link: '/01/018.md' },
          { text: '19 · 刀 ', link: '/01/019.md' },
          { text: '20 · 芸子的歌 ', link: '/01/020.md' },
          { text: '21 · 歌 ', link: '/01/021.md' },
          { text: '22 · 明明不配救赎却渴望着被救赎 ', link: '/01/022.md' },
          {text: '23 • 双盲诗', link: '/01/023.md'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zhaore-X/Trans-candy-and-bladeh' }
    ]
  }
})
