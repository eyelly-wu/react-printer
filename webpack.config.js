const { resolve } = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'react-printer.js',
    library: 'Printer',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  externals: {
    react: {
      commonjs: 'React',
      commonjs2: 'React',
      root: 'React'
    }
  },
  module: {
    rules: [
      {
        test: /.(ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            ['@babel/preset-typescript',
              {
                isTSX: true,
                allExtensions: true
              }]
          ]
        }
      }
    ]
  }
}
