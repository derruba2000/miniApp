module.exports = function(grunt) {

    
  var prjConfig = {
    app: 'src',
    dist: 'dist',
    test: 'test'
  };
    
  grunt.initConfig({
      
     //Project Settings
     appfolder: prjConfig,
     copy: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= appfolder.app %>',
                src: ['scripts/**', 'views/**', 'app.js', 'index.html', 'lib/*.js', 'lib/*.js.map'],
                dest: '<%= appfolder.dist %>'
            }]
        }
     },
    connect: {
        miniApp: {
          options: {
            port: 9000,
            base: '<%= appfolder.dist %>',
            keepalive: true
          }
        }
    },
    karma: {
        unit: {
            configFile: '<%= appfolder.app %>/karma.Unit.conf.js',
            singleRun: true
        },
        e2e: {
            configFile: '<%= appfolder.app %>/karma.E2E.conf.js',
            singleRun: true
        }
    },
    clean: {
        dist:['<%= appfolder.dist %>/*']
    },
    protractor: {
        options: {
            configFile: "node_modules/protractor/referenceConf.js", // Default config file
            keepAlive: true,
            noColor: false, 
            args: {}
        },
        MyE2E: {
            options:{
                configFile: '<%= appfolder.app %>/protractor.conf.js',
                args: {}
            }
        }
    },
    shell: {
        options: {
            stderr: false
        },
        target: {
            command: 'ls'
        },
        killbg: {
            command: 'kill %%'
        }
    },
    bgShell: {
        _defaults: {
            bg: true
        },
        startselenium: {
            cmd: 'webdriver-manager start'
        }
    }
  });

    
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-bg-shell');
  
  grunt.registerTask('build', ['copy']);
  grunt.registerTask('start', ['clean', 'build','connect']);
  grunt.registerTask('UnitTest', ['karma:unit']);
  grunt.registerTask('E2ETest_karma', ['karma:e2e']);
  grunt.registerTask('E2ETest_protractor', ['bgShell:startselenium', 'protractor:MyE2E']);

};