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
          "I'm a Software Engineer with 8+ years of experience. I started working in 2013 as a freelancer, now I mainly develop backend services and web applications with Go, CockroachDB, Vue.js and Kubernetes.",
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
