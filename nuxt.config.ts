// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  ssr: true,

  // when enabling ssr option you need to disable inlineStyles and maybe devLogs
  features: {
    inlineStyles: false,
    devLogs: false,
  },

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    server: {
      allowedHosts: ['*', '3000-tom4ate-portifolio-84re9bfn35b.ws-us118.gitpod.io']
    },
    ssr: {
      noExternal: ['vuetify'],
    },
  },

  css: [],
  modules: ['@nuxt/fonts', 'vuetify-nuxt-module', 'nuxt-icons', '@nuxtjs/i18n'],

  vuetify: {
    vuetifyOptions: {
      theme: {
        themes: {
          dark: {
            colors: {
              // primary: '#82e569',
              primary: '#00ff00',
            }
          }
        }
      }
    },
    moduleOptions: {
      // check https://nuxt.vuetifyjs.com/guide/server-side-rendering.html
      ssrClientHints: {
        reloadOnFirstRequest: false,
        viewportSize: true,
        prefersColorScheme: false,

        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false,
        },
      },

      // /* If customizing sass global variables ($utilities, $reset, $color-pack, $body-font-family, etc) */
      // disableVuetifyStyles: true,
      styles: {
        configFile: 'assets/settings.scss',
      },
    },
  },

  i18n: {
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'pt',
    // fallbackLocale: 'pt',
    strategy: 'no_prefix',
    // TODO: Make server identify Translation
    // experimental: {localeDetector: './server/localeDetector.ts'},
    locales: ['en', 'pt'].map((lang) => ({
      code: lang,
      files: [`${lang}.json`],
    })),
  },
})