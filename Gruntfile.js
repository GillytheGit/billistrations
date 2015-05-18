module.exports = function(grunt) {

    grunt.initConfig({
        jekyll: {
            dist: {
                options: {
                    config: '_config.yml'
                }
            },
            serve: {
                options: {
                    dest: '_site',
                    drafts: true,
                    serve: true,
                    watch: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-jekyll');
    grunt.registerTask('default', ['jekyll']);

};