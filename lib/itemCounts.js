/**
 * Given an input Array, returns an object containing the count of each item in the input.
 *
 * @param {Array} array - The array of items to count
 * @returns {object} An object containing the counts of the items in the input array
 */
function itemCounts(array) {
  let count = {};
for (let i=0;i<array.length;i++) {
  // console.log(count[array[i]])
 if ( count[ array[i] ]===undefined){
  //  count.hasOwnProperty();
  // count[ array[i] ]=== null)
   count[array[i]] = 1;
 } else {
  
  count[array[i]] += 1;
  
  }
}


  // Your code here.
  // Run 'npm test' to see what tests need to pass.
  // See README.md for a written description.

  return count;
}

if (require.main === module) {
  console.log('Running sanity checks for itemCounts:');
  console.log(itemCounts(['a','d','a','b']));
  console.log(itemCounts(['b','b','c','c']));
  

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}



module.exports = itemCounts;
