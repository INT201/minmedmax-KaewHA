 const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {

  let array = [n1, n2, n3], swap, com = false,swaped ;
  while (!com) {
    swaped = 0;
    for(i =1; i < array.length; i++){
      if(array[i -1] > array[i]) {
        swap = array[i];
        array[i] = array[i -1];
        array[i -1] = swap;
        swaped =1;  
      };
      if (swaped == 0){
        com = true;
      }
    };
  };
    return {array};
//dada
};

console.log(minMedMax(124, 32, 7));


module.exports = minMedMax
