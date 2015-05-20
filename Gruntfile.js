module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                mangle: {
                    except: ['jQuery', 'Backbone']
                }
            },
            my_target: {
                files: {
                    'js/bootstrap.min.js': ['bower_components/bootstrap-sass/assets/javascripts/bootstrap.js']
                }
            }
        },
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

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.registerTask('default', ['uglify','jekyll']);

};