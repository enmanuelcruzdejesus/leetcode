var numOfSubarrays = function(arr, k, threshold) {
    //brute force approach
    let l = 0;


    let sum  = 0;
    let counter = 0;
    for(let i =0; i < k ; i++){
        sum+= arr[i];
    }

    if(sum  >= threshold * k)
    counter +=1;
    
    for(let r = k; r < arr.length; r++ ){
  

        sum =  sum - arr[l] + arr[r];

        if(sum  >= threshold * k)
          counter +=1;

        l++;
    }

    

    return counter;

};

console.log(numOfSubarrays([11,13,17,23,29,31,7,5,2,3],3,5));