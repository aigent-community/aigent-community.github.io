import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "aigent community",
  description: "To be added",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'AIgents', link: '/aigents' }
    ],

    sidebar: [
      {
        text: 'AIgents',
        items: [
          //{ text: 'Test', link: '/aigents' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aigent-community/aigent-community.github.io' },
      { icon: 'twitter', link: 'https://x.com/aigentcommunity' }
    ]
  }
})
