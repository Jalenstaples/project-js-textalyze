function strToChar(string) {
    //let str = 'hello world';
    return string.split('');
  }
  if (require.main === module) {
    console.log('Running sanity checks for strToChar:');
    console.log(strToChar('hello world! I have three cents in my pocket'))
  }
  module.exports = strToChar