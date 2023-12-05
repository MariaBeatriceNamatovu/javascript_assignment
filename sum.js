
function add(a,b){
    let i = 0;
    let sum = 0;
    for (i = a + 1; i < b; i++){
      sum = sum + i;
    }
    return sum;
  }
  
  let x = 5;
  let y = 10;
  
  console.log(add(x,y));