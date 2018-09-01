module.exports = {
    build: {
       
        vendor: ['axios', 'vuetify'],
    },
    plugins: [
        '~/plugins/vuetify',
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
                crossorigin:"anonymous"}
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