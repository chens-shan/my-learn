const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting () {
        return this.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname
          }
        ])
        .then(answers => {
          this.answers = answers
        })
      }
    writing() {
        // Yeoman 自动在生成文件阶段调用此方法
        // 我们这里尝试往项目目录中写入文件
        // 这里的fs模块与Node中的fs不一样，这是一个高度封装的模块，功能更加强大
        const templates = [
            'public/favicon.ico',
            'public/index.html',
            'src/App.vue',
            'src/main.js',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
          ]
          templates.forEach(item => {
            // item => 每个文件路径
            this.fs.copyTpl(
              this.templatePath(item),
              this.destinationPath(item),
              this.answers
            )
          })
    }
}