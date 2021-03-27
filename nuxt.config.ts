import { NuxtConfig } from "@nuxt/types"

const config: NuxtConfig = {
  target: "static",
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss"],
  modules: ["@nuxt/content"],
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "Alessio Dionisi ~ Software Engineer",
    meta: [
      { charset: "UTF-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
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
  tailwindcss: {
    jit: true,
  },
}

export default config
