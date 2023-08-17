//4) making our own modules and export it 
console.log("This is mod.js")
let sum=0;

function add(arr){
    arr.forEach(element => {
        sum+=element
    });
    return sum;
}

module.exports=add;