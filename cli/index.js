const cli = require('commander')

const manifest = require('./package.json')

async function run() {
  cli
    .description('Tool for bumping and tagging applications')
    .version(manifest.version)

  cli
    .command('start')
    .description('Bump version of one or more apps')
    .action(bump)

  cli
    .command('tag [app]')
    .description('Create and push tag for one or more apps')
    .action(tag)

  await cli.parseAsync(process.argv) // todo: we might not need
}

run().catch(console.error)
