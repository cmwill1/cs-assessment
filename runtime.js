const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();                   
doublerInsert(largeArray);
let resultsInsert = perf.stop();


console.log('Results for the largeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


//RESULTS

//tinyArray
// insert 54.6 μs
// append 227.5 μs

// smallArray
// insert 65 μs
// append 144.4 μs

//mediumArray
// insert 235.2 μs
// append 190.2 μs

// largeArray
// insert 13.6881 ms
// append 745 μs

//extraLargeArray
// insert 1.4223435 s
// append 6.951 ms

// Read over the results, and write a paragraph that explains the pattern you see. How does each function “scale”? Which of the two functions scales better? How can you tell?
// ANSWER: 

//The pattern that we see in these examples is that as the arrays become larger, the insert function will run slower because it follows linear time complexity. In this case a larger array = greater time.  The append function by comparison does not follow this pattern due to the fact it follows constant time complexity, so the function can execute quicker, even when the array grows due to the mechanism it uses to sort through the array.  

//extra cred: While running the insert function, we use the unshift method which will take the input and move it to the start of the array, thus indexing the sequence as it moves along. On a small array this can be done quickly, but as the array grows, this will take more and more time. The push method on the other hand will take the number and add it onto the end of the array; it does not need to index each place in the array as the insert function does, thus as the array grows, it can still perform quicker than the insert function. 