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
    }
  });

    grunt.task.registerMultiTask('log', 'Log stuff.', function() {
  grunt.log.writeln(this.target + ': ' + this.data);
});
    
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-shell');
  
    
  grunt.registerTask('build', ['copy']);
  grunt.registerTask('start', ['clean', 'build','connect']);
  grunt.registerTask('UnitTest', ['karma:unit']);
  grunt.registerTask('E2ETest', ['karma:e2e']);

};