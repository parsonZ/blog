const { execSync } = require('child_process');
const path = require('path')

module.exports = () => {
   // return new Promise((res, rej) => {
	console.log('---拉取代码开始---')
        const pull = execSync('git', ['pull'])
        pull.on('close', (code, signal) => {
            console.log('---拉去代码结束--- code:' + code)
	    console.log(`子进程因收到信号 ${signal} 而终止`)
        })

  	console.log('---install开始---')
	const install = execSync('npm', ['install'])
	install.on('close', (code, signal) => {
	    console.log('---install结束--- code:' + code)
	    console.log(`子进程因收到信号 ${signal} 而终止`)
	})

	console.log('---build开始---')
	const build = execSync('npm', ['run', 'build'])
	build.on('close', (code, signal) => {
	    console.log('---build结束--- code:' + code)
	    console.log(`子进程因收到信号 ${signal} 而终止`)
	})
   // })
}
