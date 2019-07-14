#!/usr/bin/env node

const execa = require('execa')
const chalk = require('chalk')
const path = require('path')
const ora = require('ora')

const colors = {
  subtle: chalk.gray,
  success: chalk.green,
  fail: chalk.red,
  info: chalk.blue
}

const spinner = ora(colors.info('Compiling components'))
spinner.color = 'blue'
spinner.spinner = 'dots'

const success = { frames: [colors.success('👍')] }

const subprocess = execa('./node_modules/.bin/gatsby', ['develop'], {
  cwd: __dirname,
  env: { DIRECTORY_ROOT: process.cwd() }
})

async function start() {
  console.log()
  spinner.start()

  try {
    await subprocess
  } catch (error) {
    spinner.fail()
    console.log(colors.fail('Could not compile'), '\n')
    console.log(error)
  }
}

subprocess.stdout.on('data', function(log) {
  const parsed = log.toString()

  if (parsed.includes('http://localhost')) {
    spinner.stop()
    spinner.spinner = success
    spinner.start(' ')
  }
  if (parsed.includes('Compiling...')) {
    spinner.spinner = 'dots'
    spinner.start('Recompiling')
  }
  if (parsed.includes('Compiled')) {
    spinner.stop()
    spinner.spinner = success
    spinner.start(' ')
  }
})

start()
