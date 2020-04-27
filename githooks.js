const { execSync } = require('child_process');
const path = require('path')

module.exports = () => {
	const cwd = { cwd: '../default-vita' }

	console.log('---拉取代码开始, 稍后...---')
	execSync('git pull', cwd)
	console.log('---拉去代码结束---')

	console.log('---install开始, 稍后...---')
	execSync('npm install', cwd)
	console.log('---install结束---')

	console.log('---build开始, 稍后...---')
	execSync('npm run build', cwd)
	console.log('---build结束---')
}
