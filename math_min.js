
function math_min(numbers){
    if(numbers.length == 0){
        return null;
    }
    let smallest = numbers[0];
    for (let i =0; i< numbers.length; i++){
        if(numbers[i]< smallest){
            smallest =numbers[i];
        }
    }
    return smallest;
}
const numbers=[3,7,5,9,10,20,4,115,2,8];
console.log(math_min(numbers));

