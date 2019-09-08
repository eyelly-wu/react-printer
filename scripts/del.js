const fs = require('fs')
const path = require('path')
const { existsSync, readdirSync, statSync, unlinkSync, rmdirSync } = fs
const paths = ['dist', 'es', 'lib', 'types']

const clearFolder = (path) => {
  let files = []
  if (existsSync(path)) {
    files = readdirSync(path)
    files.forEach(file => {
      const curPath = path + '/' + file
      if (statSync(curPath).isDirectory()) {
        clearFolder(curPath)
      } else {
        unlinkSync(curPath)
      }
    })
    rmdirSync(path)
  }
}

paths.forEach(path_ => {
  clearFolder(path.join(__dirname, '../', path_))
})

console.log('Cleared Up!')
