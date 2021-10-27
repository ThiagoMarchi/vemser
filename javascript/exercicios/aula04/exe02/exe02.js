let numbers = [1,3,45,56,23,78];  

let sortNumbers = (arr) =>{
    var max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    console.log(Math.max.apply(null, arr));
    
    var min = Math.min.apply(null, arr);
    arr.splice(arr.indexOf(min), 1);
    console.log(Math.min.apply(null, arr));  
} 

sortNumbers(numbers);