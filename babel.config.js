
module.exports = (api) => {
  const env = api.env()
  api.cache(false)
  return {
    presets: [
      [
        '@babel/env',
        {
          'targets': {
            'esmodules': true
          },
          'modules': env === 'lib' ? 'cjs' : false
        },
      ],
      ['@babel/react'],
      [
        '@babel/typescript',
        {
          isTSX: true,
          allExtensions: true
        }]
    ],
    plugins: [

    ]
  }
}
