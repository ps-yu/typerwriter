const sentence = "hello there from lighhouse labs"
let time = 0;
for (let i = 0; i < sentence.length; i++) {
  time += 50;
  setTimeout( () => {
    process.stdout.write(sentence[i]);
  }, time);
}
setTimeout(() =>{
  console.log('\n')
}, time)