const arr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
];

let first = arr[1];
let ans = first(5,10);
console.log(ans);

//same as
console.log(arr[1](5,10));

