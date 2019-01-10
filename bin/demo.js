#!/usr/bin/env node

console.log('命令行已启动')
const program = require('commander')
 
program.version('1.0.0')
  .usage('<command> [项目名称]')
  .command('init','初始化项目')
  .command('g', '自动生成项目文件')
  .command('r','删除项目文件')
  .parse(process.argv);
