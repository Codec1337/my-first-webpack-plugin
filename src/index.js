const chalk = require('chalk')

class bugFreeWebpackPlugin {
    constructor() {}
    apply(compiler) {
        compiler.hooks.done.tapAsync("myFirstWebpackPlugin", (arg, callback) => {
            // 输出无bug
            chalk.green('谢天谢地，永无bug')
            callback()
        })
    }
}


module.exports = {
    bugFreeWebpackPlugin
}
