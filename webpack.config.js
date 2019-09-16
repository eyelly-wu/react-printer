const { resolve } = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'Printer',
    libraryTarget: 'var'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  externals: {
    react: 'React'
  },
  module: {
    rules: [
      {
        test: /.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env',
              {
                'targets': {
                  'esmodules': false
                },
                'modules': 'umd'
              }],
            '@babel/preset-react',
            ['@babel/preset-typescript',
              {
                isTSX: true,
                allExtensions: true
              }]
          ],
          plugins: ["add-module-exports"]
        }
      }
    ]
  }
}
