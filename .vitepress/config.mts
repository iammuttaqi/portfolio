import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-Us",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "meta",
      { property: "og:site_name", content: "Muntaser Muttaqi Portfolio" },
    ],
    [
      "meta",
      {
        property: "keywords",
        content:
          "muntaser muttaqi, muttaqi, web developer, full stack developer, web developer bangladesh, laravel, livewire, inertiajs, vuejs, tailwindcss, laravel bangladesh",
      },
    ],
    ["meta", { property: "author", content: "Muntaser Muttaqi" }],
    ["meta", { property: "og:title", content: "Muntaser Muttaqi" }],
    ["meta", { property: "og:type", content: "Portfolio" }],
    ["meta", { property: "og:url", content: "https://iammuttaqi.vercel.app" }],
    ["meta", { property: "og:image", content: "/hero-image-1.png" }],
    ["meta", { property: "twitter:title", content: "Muntaser Muttaqi" }],
    [
      "meta",
      { property: "twitter:description", content: "Full-stack Developer" },
    ],
    ["meta", { property: "twitter:image", content: "/hero-image-1.png" }],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:site", content: "@iammuttaqi" }],
  ],
  title: "Muntaser Muttaqi",
  description: "Full-stack Developer",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "Muttaqi",
    logo: {
      src: "/logo.png",
      alt: "Muttaqi",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "About Me", link: "/about" },
      { text: "Experience", link: "/experience" },
      { text: "Skills", link: "/skills" },
      { text: "Contact", link: "/contact" },
      { text: "Testimonials", link: "/testimonials" },
      { text: "Resume/CV", link: "https://iammuttaqi.github.io" },
    ],

    sidebar: [],

    socialLinks: [
      { icon: "github", link: "https://github.com/iammuttaqi" },
      { icon: "x", link: "https://x.com/iammuttaqi" },
      { icon: "linkedin", link: "https://linkedin.com/in/iammuttaqi" },
      { icon: "discord", link: "https://discord.com/users/657308086679109652" },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message:
        "Email me here: <a style='color: var(--vp-c-brand-1)' href='mailto:muntasermuttaqi@gmail.com'>muntasermuttaqi@gmail.com</a>",
    },
  },
});
