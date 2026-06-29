// const { defineConfig } = require('@vue/cli-service')
module.exports = ({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/portfolio-2023'
  : '/',
  // publicPath: './',
  // outputDir:'./dist',
  // assetsDir:'./static',
  // filenameHashing: false,
  // transpileDependencies: true,
})