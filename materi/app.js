function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let temp = [];

    for(let i=0; i<arr.length; i++){
        temp.push(arr[i]);
        // console.log(arr[i])
        if(temp.length == size){
            newArr.push(temp);
            temp = [];
            // console.log(temp)
        }else if(i == arr.length-1){
            newArr.push(temp);
        }
    }
    return newArr;
}
  
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));