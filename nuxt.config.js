const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ]
  },
    build: {
       
        vendor: ['axios', 'vuetify', 'vuelidate'],
        extractCSS: true,
        extend (config, ctx) {
          // Excludes /assets/svg from url-loader
          const urlLoader = config.module.rules.find((rule) => rule.test.toString() === '/\\.(png|jpe?g|gif|svg)$/');
          //urlLoader.exclude = /(assets\/svg)/
          //config.module.rules.splice(config.module.rules.indexOf(urlLoader), 1);
          const index = config.module.rules.indexOf(urlLoader);
    
          // Includes /assets/svg for svg-sprite-loader
          /*config.module.rules.push({
            test: /\\.(png|jpe?g|gif)$/,
            loader: 'url-loader',
            query: {
              limit: 1000, // 1KO
              name: 'img/[name].[hash:7].[ext]',
            },
          });*/
          config.module.rules[index].test = /\\.(jpe?g|gif|png)$/;
    
          // Uncomment line below to view webpack rules
           console.dir(config.module.rules[index]);
      },
    },
    plugins: [
        '~/plugins/plugins',
    ],
    head: {
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'}
        ],
        link:[
            {rel: "stylesheet", href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"},
            {rel: "stylesheet", href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", 
                integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", 
                crossorigin:"anonymous"},
            {rel: "stylesheet", href:"/css/main.css"}
        ],
    },
    router: {
        scrollBehavior(to, from, savedPosition) {
          if (savedPosition) {
            return savedPosition
          } else {
            let position = {}
            if (to.matched.length < 2) {
              position = { x: 0, y: 0 }
            } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
              position = { x: 0, y: 0 }
            }
            if (to.hash) {
              position = { selector: to.hash }
            }
            return position
          }
        }
      }

}