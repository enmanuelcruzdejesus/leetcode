var findMin = function(nums) {

    //min  =11
    //[11,13,15,17]
    // l        
    // r   
    //m         

    let l = 0;
    let r = nums[nums.length- 1];
    let min = nums[0];

    while(l <= r){

        let m = Math.floor((l + r) / 2);
        min = Math.min(nums[m],min);
        if(nums[l] < nums[m] && min > nums[l]){
            r = m - 1;
        }
        else{
            l = m + 1;
        }

    }

    return min;
          
    
};

findMin([3,4,5,1,2])