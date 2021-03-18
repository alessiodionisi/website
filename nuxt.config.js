export default {
  target: "static",
  ssr: false,
  buildModules: ["@nuxt/typescript-build"],
  modules: ["bootstrap-vue/nuxt", "@nuxt/content"],
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "Alessio Dionisi ~ Software Engineer",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      {
        hid: "description",
        name: "description",
        content:
          "I'm a Software Engineer with 7+ years of experience driven by the curiosity to learn and discover new technologies.",
      },
    ],
    link: [
      {
        rel: "icon",
        href: "icon.png",
      },
    ],
  },
}
