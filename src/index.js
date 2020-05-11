import './scss/index.scss';

console.log('working');

async function start() {
   return await Promise.resolve('async work')
}

start().then(console.log);
