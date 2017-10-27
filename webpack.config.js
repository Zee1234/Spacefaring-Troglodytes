const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')




module.exports = {
  stats: {
    colors: false, // Babel screws up the look of my command line. Known bug, not fixed. So work around it.
  },


  entry: {
    game: path.resolve(__dirname, 'src','scripts','main.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },


  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'stylus-loader',
            options: {
              use: [require('nib')()],
              import: ['~nib/lib/nib/index.styl']
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
              data: {
                hi: 'Hello World!',
                require,
                __dirname
              }
            }
          }
        ]
      },
      {
        test: /\.(js|mjs)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                "targets": {
                  "browsers": ["last 2 versions", "safari >= 7"]
                }
              }],
            ]
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo',
      template: './src/templates/index.pug'
    })
  ],

  resolve: {
    modules: [
      'node_modules',
      'src',
    ]
  }
}