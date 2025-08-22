import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/termux-guides/', 
  srcDir: "docs",
  title: "Termux Guides",
  description: "A Growing Collection of guides for Termux",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Shizuku Guide' link: '/shizuku'}
    ],

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Shizuku Guide', link: '/shizuku' },
        ]
      }
    ],



    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
