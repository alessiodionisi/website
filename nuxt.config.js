export default {
  mode: "universal",
  target: "static",
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
          "I'm a passionate Software Engineer driven by the curiosity to learn and discover new technologies.",
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
