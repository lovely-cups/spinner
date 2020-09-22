//process.stdout.write('hello from spinner1.js... \rheyyy\n');
let counter = 0;
let frames = ["|", "/", "-", "\\"];
for (let i =0; i < frames.length; i++){
setTimeout(() =>{
  process.stdout.write(`\r${frames[i]}   `)
}, counter);
counter += 200;
}

setTimeout(() => {
  process.stdout.write("\n");
}, counter);
/*setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ')
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ')
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ')
}, 1300);
*/
