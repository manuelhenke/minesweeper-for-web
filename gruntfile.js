module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        /**
         * Get package meta data
         */
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            assets: [
                'dist/assets/'
            ],
            css: [
                'dist/*.css',
                'dist/*.css.map'
            ],
            js: [
                'dist/*.js'
            ]
        },
        sass: {
            all: {
                options: {
                    update: true,
                    style: 'expanded'
                },
                files: {
                    'dist/style.css': ['src/main.scss'],
                }
            }
        },
        jshint: {
            all: [
                'Gruntfile.js',
                'src/**/*.js',
                'test/**/*.js'
            ]
        },
        concat: {
            all: {
                options: {
                    separator: ';\n'
                },
                src: [
                    'node_modules/jquery/dist/jquery.js',
                    'src/**/*.js',
                ],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'dist/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        src: ['assets/**'],
                        dest: 'dist/'
                    },
                ],
            },
        },
        watch: {
            sccsChange: {
                files: [
                    'src/**/*.scss'
                ],
                tasks: [
                    'clean:css',
                    'sass'
                ],
                options: {
                    spawn: false
                }
            },
            jsChange: {
                files: [
                    'src/**/*.js'
                ],
                tasks: [
                    'clean:js',
                    'concat'
                ],
                options: {
                    spawn: false
                }
            },
            assetsChange: {
                files: [
                    'assets/**'
                ],
                tasks: [
                    'clean:assets',
                    'copy'
                ],
                options: {
                    spawn: false
                }
            }
        }
    });


    // Clear files and folders.
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Validate js files.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Concatenate files.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Compile Sass to CSS.
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Run tasks whenever watched files change.
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Copy files and folders. 
    grunt.loadNpmTasks('grunt-contrib-copy');


    // Default task(s).
    grunt.registerTask('default', [
        'clean',
        'sass',
        'jshint',
        'concat',
        //'uglify',
        'copy',
        'watch',
    ]);

};