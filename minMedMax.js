 const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let k1;
  let com;
  let k2;
  let array = [n1, n2, n3]
  while (!com) {
    k2 =0;
    for(i =1; i < 3; i++){
      if(array[i -1] > array[i]){
        k1 = array[i];
        array[i] = array[i -1];
        array[i -1] = k1;
        k2 =1;
      };
      if (k2 == 0){
        com = true;
      }
    };
  };
    return {max: array[2],med: array[1],min: array[0]};
//dada
};


module.exports = minMedMax
