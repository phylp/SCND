function getPrime(num){
  for(var j = 2; j < num; j++){
    if(num % j === 0){
      return;
    } else if(j === num-1){
      console.log(num);
      return;
    }
  }
}

process.stdin.on('data', function(data){
  var value = parseInt(data,10);
  getPrime(value);
});


// **** CONTINUOUS PRINT OPTION ****
// function getPrime(){
//   var max = Number.MAX_VALUE;
//   for(var i = 3; i < max; i++){
//     for(var j = i-1; j > 1; j--){
//       if(i % j === 0){
//         break;
//       } else {
//         if(j === 2){
//           console.log(i);
//         }
//       }
//     }
//   }
// }

// process.stdin.on('data', function(data){
//   getPrime();
// });
