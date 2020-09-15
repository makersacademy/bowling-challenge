module.exports = function(grunt) {

    grunt.initConfig({
        jasmine_node: {
            task_name: {
                options: {
                    coverage: {},
                    forceExit: true,
                    match: '.',
                    matchAll: false,
                    specFolders: ['spec'],
                    extensions: 'js',
                    specNameMatcher: 'spec',
                    captureExceptions: true,
                    junitreport: {
                        report: false,
                        savePath: './build/reports/jasmine/',
                        useDotNotation: true,
                        consolidate: true
                    }
                },
                src: ['**/*.js']
            }
        },
        jshint: {
            options: {
                node: true,
                jasmine: true
            },
            all: [
                'Gruntfile.js',
                './src/**/*.js',
                './spec/**/*.js'
            ]
        },
        watch: {
            files: [
                './src/**/*.js',
                './spec/**/*.js'
            ],
            tasks: ['jasmine_node', 'jshint']
        }
    });

    grunt.loadNpmTasks('grunt-jasmine-node-coverage');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jasmine_node', 'jshint']);
    grunt.registerTask('jasmine', ['jasmine_node']);
};