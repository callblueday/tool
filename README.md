backfiles.
----------

#### zshrc
  - git 快捷键

#### grunt 相关配置
- 自动监听页面：grunt-livereload + Chrome Plug-in

优点：安装、配置简单方便。
缺点：需要配合指定的浏览器插件（Firefox也有相关插件，IE么你懂的）。

1. 需要安装2个插接件：grunt-contrib-watch、connect-livereload

执行命令：npm install --save-dev grunt-contrib-watch connect-livereload

2. 安装浏览器插件：Chrome LiveReload

3. 配置一个Web服务器（IIS/Apache），LiveReload需要在本地服务器环境下运行（对file:///文件路径支持并不是很好）。

4. 修改Gruntfile.js文件：