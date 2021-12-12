// @ts-check

import { Command } from 'commander'

import downloadPackage from './actions/download.js'
import publishPackage from './actions/publish.js'

const program = new Command()

program
  .name('jscrates')
  .description(`Welcome to JSCrates 📦, yet another package manager for Node`)
  .version(`v2.2.0`, '-v, --version', 'display current version')

program
  .command('download')
  .description(`Download a package from official JSCrates registry`)
  .argument('<package name>', 'package to download')
  .argument('[version]', 'version of the package to download')
  .action(downloadPackage)

program
  .command('publish')
  .description(
    `Publish your package to our repository and make it available for everyone.`
  )
  .action(publishPackage)

program.parse(process.argv)
