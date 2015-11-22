#global module:false

"use strict"

module.exports = (grunt) ->
  grunt.loadNpmTasks "grunt-bower-task"
  grunt.loadNpmTasks "grunt-contrib-connect"
  grunt.loadNpmTasks "grunt-ftp-deploy"
  grunt.loadNpmTasks "grunt-contrib-copy"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-exec"

  grunt.initConfig
    copy:
      jquery:
        files: [{
          expand: true
          cwd: "bower_components/jquery/dist/"
          src: "jquery.min.js"
          dest: "vendor/js/"
        }]
      bootstrap:
        files: [{
          expand: true
          cwd: "bower_components/bootstrap/dist/css/"
          src: "bootstrap.min.css"
          dest: "vendor/css/"
        },
          {
            expand: true
            cwd: "bower_components/bootstrap/dist/js/"
            src: "bootstrap.min.js"
            dest: "vendor/js/"
          }
        ]
    "ftp-deploy": 
      build:
        auth:
          host: 'ftp.billyoreilly.com.au'
          port: 21
          authKey: 'key1'
        src: '_site'
        dest: 'public_html/billistrations.com/'
        exclusions: [

        ]
    exec:
      jekyll:
        cmd: "jekyll build --trace"
    watch:
      options:
        livereload: true
      source:
        files: [
          "_drafts/**/*"
          "_includes/**/*"
          "_layouts/**/*"
          "_posts/**/*"
          "_sass/**/*"
          "css/**/*"
          "js/**/*"
          "work/*"
          "php/*"
          "_config.yml"
          "*.html"
          "*.md"
        ]
        tasks: [
          "exec:jekyll"
        ]

    connect:
      server:
        options:
          port: 4000
          base: '_site'
          livereload: true

  grunt.registerTask "build", [
    "copy"
    "exec:jekyll"
  ]


  grunt.registerTask "deploy", [
    "ftp-deploy:build"
  ]

  grunt.registerTask "serve", [
    "build"
    "connect:server"
    "watch"
  ]

  grunt.registerTask "default", [
    "serve"
  ]