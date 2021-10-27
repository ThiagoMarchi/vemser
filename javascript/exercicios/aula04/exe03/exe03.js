let string = 'para de dar tiro no pé';  

let capitalizeString = () => {     
    let array = string.split(" ");     
    for (let i = 0; i < array.length; i++) {     
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);  
    }     
        
    let string2 = array.join(" ");     console.log(string2); 
    }

    capitalizeString(string);