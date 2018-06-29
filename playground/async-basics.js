console.log('starting app');

setTimeout(() => {
console.log('Inside of callback');
}, 2000);

setTimeout(() => {
console.log('the second callback');
},0);

console.log('Finishing App');
