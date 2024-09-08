import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: '常见问题',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: '常见问题', slug: 'guides/01hz' },
            { label: '购买须知', slug: 'guides/02gmxz' },
            { label: '🈲 禁止的功能以及网站', slug: 'guides/03jxgl' },
            { label: ' 更流畅的流媒体解锁服务', slug: 'guides/04lmt' },
            { label: '为 ChatGPT/OpenAI 提供及时响应', slug: 'guides/05gpt' },
            { label: '不对 Tiktok 提供任何保证', slug: 'guides/06tiktok' },
            { label: '还是没有解决问题？', slug: 'guides/07wjj' },
            { label: '退款政策', slug: 'guides/08tk' },
          ],
        },
        {
          label: '苹果IOS',
          autogenerate: { directory: 'IOS' },
        },
        {
          label: 'Android',
          autogenerate: { directory: 'Android' },
        },
        {
          label: 'Windows',
          autogenerate: { directory: 'Windows' },
        },
        {
          label: 'MacOS',
          autogenerate: { directory: 'MacOS' },
        },
      ],
    }),
  ],
});








