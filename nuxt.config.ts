import { NuxtConfig } from "@nuxt/types"

const config: NuxtConfig = {
  target: "static",
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss"],
  modules: ["@nuxt/content"],
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "Alessio Dionisi ~ Site Reliability Engineer",
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
          "I'm a SRE / SWE with 9+ years of experience. I started working in 2013 as a freelancer (full stack), from 2017 to 2019 I worked mainly as a frontend, then in 2020 I moved to backend for 1 year and now I work as SRE.",
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
