function duplicateCount(text){
const textArray = text.toLowerCase().split("");
  const uniqueItems = new Set();
  const duplicates = new Set();
  for (const value of textArray) {
    if (uniqueItems.has(value)) {
      duplicates.add(value);
      uniqueItems.delete(value);
    } else {
      uniqueItems.add(value);
    }
  }
  console.log(duplicates.size);
}

//Lessons learned
//Sets don't allow duplicates so turning an array into a set will always provide a unique list. This can probably more easily be handled with regex.