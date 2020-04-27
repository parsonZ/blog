const { exec } = require('child_process');

module.export = async () => {
    return new Promise((res, rej) => {
        const compile = exec('git', ['pull'], { cwd: '/root/default-vita/' })
        compile.on('close', code => {
            res(code)
        })
    })
}
