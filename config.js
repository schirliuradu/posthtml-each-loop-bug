/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local',
      },
      assets: {
        source: 'src/assets/images',
        destination: 'images',
      },
    },
    tailwind: {
      css: 'src/assets/css/main.css',
    },
  },

  locals: {
    components: [
      {
        template: 'test_component_first',
        props: {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptate.",
          items: [
            {
              title: "Lorem",
              text: "ipsum"
            },
           {
              title: "Lorem ipsum",
              text: "ipsum"
            }
          ]
        }
      },
      {
        template: 'test_component_second',
        props: {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptate.",
          items: [  
            {
              title: "Lorem",
              text: "ipsum"
            },
           {
              title: "Lorem ipsum",
              text: "ipsum"
            }
          ]
        }
      },
      {
        template: 'test_component_third',
        props: {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptate.",
        }
      },
    ]
  }
}
