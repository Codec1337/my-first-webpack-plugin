class myWebpackPlugin {
    constructor() {}
    apply(compiler) {
        compiler.hooks.done.tapAsync("myFirstWebpackPlugin", (arg, callback) => {
            // 输出无bug
            console.log('%c谢天谢地，永无bug', 'color: red;')
            
            callback()
        })
    }
}

module.exports = {
    myWebpackPlugin
}
