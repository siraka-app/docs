import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SIRAKA",
  description: "Sistem Rapor Merdeka",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Daftar Gratis!', link: '/gratis' },
      { text: 'Panduan', link: '/docs/index.html' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          {
            text: 'Customization Examples',
            link: '/customization-examples',
            items: [
              { text: 'Layouts', link: '/customization-examples/layouts' },
            ]
          },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  sitemap: {
    hostname: 'https://siraka-app.github.io/docs/'
  },
})
