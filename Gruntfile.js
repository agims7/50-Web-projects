module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/default.css':'css/default.scss'
  			}
  		}
  	},
  	watch: {
		scripts: {
	        files: ['**/*.html', 'css/*.scss'],
			tasks: ['sass'],
	        options: {
	            spawn: false,
	        },
	    } 
	}
  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['watch']);
};