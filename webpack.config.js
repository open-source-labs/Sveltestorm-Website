const path = require('path');
const postcss = require('postcss');
const postcssCssnext = require('postcss-cssnext');
const postcssImport = require('postcss-import');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: '/index.html',
  // favicon: "./favicon.ico"
});

console.log('in the webpack', process.env.NODE_ENV)
module.exports = {
  
  mode: process.env.NODE_ENV,
  entry: '/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    static: {
      publicPath: './dist/',
    },
    port: 8080,
    //proxy server setup
    proxy: {
      '/api/': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      {
        test: /\.(html|svelte)$/,
        include: [path.resolve('src')],
        use: [
          {
            loader: 'svelte-loader',
            options: {
              style: ({ content, attributes, filename }) => {
                return postcss([
                  postcssImport,
                  postcssCssnext({
                    browsers: ['Last 2 versions', 'IE >= 11'],
                  }),
                ])
                  .process(content, { from: filename })
                  .then((result) => {
                    return { code: result.css, map: null };
                  })
                  .catch((err) => {
                    console.log('failed to preprocess style', err);
                    return;
                  });
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.svelte'],
  },
};
