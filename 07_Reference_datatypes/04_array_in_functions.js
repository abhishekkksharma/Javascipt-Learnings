let arr = [10,20,30,40]
function getsum(arr){
    let len = arr.length;
    let sum=0;
    // for (let index = 0; index < len; index++) {
    //     sum= sum+arr[index];
    // }
    arr.forEach(element => {
        sum+=element;
    });
    return sum;
}
console.log(getsum(arr));
