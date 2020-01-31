function sanitize(string) {
    return string.toLowerCase();
    }
    if (require.main === module) {
        console.log('Running sanity checks for sanatize:');
        console.log(sanitize('aaaAAAAaaaaAAA Hello World I HAVE three CENTS IN MY pocket!'))
    }
    module.exports = sanitize