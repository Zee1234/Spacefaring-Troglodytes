const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let rules = {}
rules.stylus = {
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
}

rules.pug = {
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
}

rules.js_pre = {
  enforce: 'pre',
  test: /\.(js)$/,
  use: [
    { loader: 'source-map-loader' }
  ],
  exclude: /(node_modules)/
}

rules.js = {
  test: /\.(js)$/,
  exclude: /(node_modules|bower_components)/,
  use: [
    {
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
  ]
}

rules.ts_pre = {
  enforce: 'pre',
  test: /\.(ts)$/,
  use: [
    { loader: 'tslint-loader' }
  ],
  exclude: /(node_modules)/
}

rules.ts = {
  test: /\.(ts)$/,
  exclude: /(node_modules|bower_components)/,
  use: [
    {
      loader: 'awesome-typescript-loader',
    },
  ]
}



rules.images = {
  test: /\.(png|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {}
    }
  ]
}




module.exports = {
  stats: {
    colors: false, // Babel screws up the look of my command line. Known bug, not fixed. So work around it.
  },

  devtool: 'source-map',
  entry: {
    game: path.resolve(__dirname, 'src','scripts','main.ts')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },


  module: {
    rules: [
      rules.stylus,
      rules.pug,
      rules.js_pre,
      rules.js,
      rules.ts_pre,
      rules.ts,
      rules.images
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
      '.'
    ],
    extensions: [ '.js', '.json', '.ts']
  }
}