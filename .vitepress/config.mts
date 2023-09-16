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
      { text: "Resume/CV", link: "/resume" },
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
