
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0 || matrix === []) return []; 
let arr=[];
for (let i=0; i < matrix.length; i++) {
  if (i % 2===0) {
    let elem = matrix[i].sort((a,b)=>a-b);
    arr.push(...elem)
  }
  else {
    let elem = matrix[i].sort((a,b)=>b-a);
    arr.push(...elem)
  }
}
return arr;
  }