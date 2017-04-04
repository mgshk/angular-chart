module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 9000,
					hostname: 'localhost',
					base: 'src/',
					keepalive: true
				}
			},
		},
	});

	grunt.registerTask('default', 'connect:server');
};
