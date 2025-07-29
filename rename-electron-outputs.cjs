const fs = require('fs')
const path = require('path')

const distPath = path.join(__dirname, 'dist', 'electron')

const renameToCjs = (filename) => {
    const from = path.join(distPath, filename + '.js')
    const to = path.join(distPath, filename + '.cjs')
    if (fs.existsSync(from)) fs.renameSync(from, to)
}

renameToCjs('main')
renameToCjs('preload')