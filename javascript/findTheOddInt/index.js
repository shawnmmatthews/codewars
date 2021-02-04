const array = [20,1,1,2,2,3,3,5,5,4,20,4,5]

function findOdd(array) {
  let counts = {}
  let countArray = array.map((val) => { counts[val] = (counts[val] || 0)+1; });
  console.log(countArray);
}

findOdd(array);
