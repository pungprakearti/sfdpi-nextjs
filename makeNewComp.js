const fs = require('fs')

// Check number of arguments and exit if incorrect
const checkArgs = () => {
  if (process.argv.length !== 3) {
    throw new Error(
      'Incorrect number of arguments:\nnode ./makeNewComp.js <ComponentName>'
    )
  }
  // Return filename
  return process.argv[2]
}

// Check to see if folder exists in components directory
const checkDir = (dir) => {
  if (fs.existsSync(dir)) {
    throw new Error('Component already exists')
  }
  return
}

// Create files
const createFiles = () => {
  // Create folder
  fs.mkdirSync(dir)

  // tsx file
  const tsxFilePath = dir + '/' + filename + '.tsx'
  const tsxFileTemplate = `import styles from './${filename}.module.scss'

type Props = {
  prop: string
}

const ${filename}: React.FC<Props> = ({ prop }) => (
  <div className={styles.wrap}>
    {prop}
  </div>
)

export default ${filename}
`

  // Sass file
  const scssFilePath = dir + '/' + filename + '.module.scss'
  const scssFileTemplate = `@import 'styles/main.scss';

.wrap {
  border: 1px solid violet;
}
`

  // Index file
  const indexFilePath = dir + '/index.ts'
  const indexFileTemplate = `export { default } from './${filename}'
`

  // Create files
  const fileArray = [
    {
      path: tsxFilePath,
      template: tsxFileTemplate,
    },
    {
      path: scssFilePath,
      template: scssFileTemplate,
    },
    {
      path: indexFilePath,
      template: indexFileTemplate,
    },
  ]
  fileArray.forEach((f) => {
    fs.writeFileSync(f.path, f.template, (error) => {
      throw new Error(error)
    })
  })
}

// Main
let filename
let dir
try {
  filename = checkArgs()
  dir =
    process.argv[1].slice(0, process.argv[1].lastIndexOf('/')) +
    '/components/' +
    filename
  checkDir(dir)
  createFiles()
  console.log('\x1b[36m' + filename + ' created successfully')
} catch (error) {
  console.log('\x1b[31m' + error)
}
