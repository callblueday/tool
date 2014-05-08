module.exports = function(grunt) {
    // 项目配置(任务配置)
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      watch: {
        client: {
          files: ['**/*.html', '**/*.css', '**/*.js', '**/*.mst'],
          options: {
            livereload: true
          }
        }
      },
      mustache: {
        files : {
          src: 'lib/mustache.js/',
          dest: 'lib/mustache.js/templates.js',
          options: {
            prefix: 'var templates = ',
            postfix: ';',
            verbose: true
          }
        }
      }
    });

    // 加载插件
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mustache');

    // 默认任务
    grunt.registerTask('default', ['watch']);
    // 自定义任务
    // grunt.registerTask('live', ['watch']);
  };