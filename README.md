backfiles.
----------

#### zshrc
  - git 快捷键

#### grunt 相关配置
自动监听页面：grunt-livereload + Chrome Plug-in

优点：安装、配置简单方便。
缺点：需要配合指定的浏览器插件（Firefox也有相关插件，IE么你懂的）。

1. 需要安装2个插接件：grunt-contrib-watch、connect-livereload

执行命令：npm install --save-dev grunt-contrib-watch connect-livereload

2. 安装浏览器插件：Chrome LiveReload

3. 配置一个Web服务器（IIS/Apache），LiveReload需要在本地服务器环境下运行（对file:///文件路径支持并不是很好）。

4. 修改 `Gruntfile.js` 文件，见 `grunt-config/` 目录下的配置

参考文章：http://www.bluesdream.com/blog/grunt-plugin-livereload-wysiwyg-editor.html

- grunt-mustache
  - 将模板文件转换成单个 js 字符串数据，类似，`.soy` 文件转换成 `.soy.js` 文件，便于在 js 中进行引用。