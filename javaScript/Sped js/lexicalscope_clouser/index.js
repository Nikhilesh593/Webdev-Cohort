let fname = "nikhil"
console.log(`vlue of fname is ${fname}`);

function sayname() {
    // fname = "sahu"
    function ndsayname() {

        console.log(`vlue of fname insidefunction function is ${fname}`);
    }
    console.log(`vlue of fname in function is ${fname}`);
    return ndsayname;

}
const innerfun = sayname()
innerfun()