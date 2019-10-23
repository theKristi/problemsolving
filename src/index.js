


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let problems=[
    {
    problemStatement:`Find maximum consecutive repeating character in string
     Input : str = "aaaaaabbcbbbbbcbbbb" 
     Output: a`,
    solution:`function findMaxRepeatingChar(input0){
    let maxChar;
    let curChar;
    let lastChar;
    let maxCount=0;
    let curCount=0;
    for(let i=0;i<input0.length;i++){
        curChar=input0[i]
        if(!maxChar)
            maxChar=curChar;
                
        if(curChar===lastChar||!lastChar){    
            curCount++;
                
        }
        else{
            curCount=0;
        }   
        if(curCount>maxCount){
            maxChar=curChar;
            maxCount=curCount;
        }
                lastChar=curChar;
    }
        return maxChar;
}`,
    inputs:['"aaaaaabbcbbbbbcbbbb"'],
    output:'a',
    init:'findMaxRepeatingChar(input0)'
    },
    {
        problemStatement:`Merge two sorted arrays into one sorted array
        int[] A = {1,5,7,12,18,32}
        
        int[] B = {2,4,9,16,27,76,98}`,
        solution:`function mergeArrays(input0, input1){
            let merged = [];
            let index1 = 0;
            let index2 = 0;
            let current = 0;
          
            while (current < (input0.length + input1.length)) {
          
              let isInput0Depleted = index1 >= input0.length;
              let isInput1Depleted = index2 >= input1.length;
          
              if (!isInput0Depleted && (isInput1Depleted || (input0[index1] < input1[index2]))) {
                merged[current] = input0[index1];
                index1++;
              } else {
                merged[current] = input1[index2];
                index2++;
              }
          
              current++;
            }
          
            return merged.toString();
        }`,
        inputs:['[1,5,7,12,18,32]','[2,4,9,16,27,76,98]'],
        init:'mergeArrays(input0, input1)'
    },
    {
        problemStatement: " Segregate 0s on left side and 1s on right side of the array. Traverse array only once.",
        solution:`function seperateNegPos(input0){
            let left = 0, right = input0.length-1; 
          
            while (left < right) 
            { 
                /* Increment left index while we see 0 at left */
                while (input0[left] > 0 && left < right) 
                    left++; 
          
                /* Decrement right index while we see 1 at right */
                while (input0[right] < 1 && left < right) 
                    right--; 
          
                /* If left is smaller than right then there is a 1 at left 
                  and a 0 at right.  Exchange arr[left] and arr[right]*/
                if (left < right) 
                { let swap=input0[left]
                    input0[left] = input0[right]; 
                    input0[right] = swap; 
                    left++; 
                    right--; 
                } 
             
            }
            return input0.reverse().toString(); 
        }`,
        inputs:['[4,-3,2,-5,5,-1,3]'],
        init:'seperateNegPos(input0)'
    },
    {
        problemStatement: " Segregate 0s on left side and 1s on right side of the array. Traverse array only once.",
        solution:`function seperate10(input0){
            /* Initialize left and right indexes */
            let left = 0, right = input0.length-1; 
          
            while (left < right) 
            { 
                /* Increment left index while we see 0 at left */
                while (input0[left] == 0 && left < right) 
                    left++; 
          
                /* Decrement right index while we see 1 at right */
                while (input0[right] == 1 && left < right) 
                    right--; 
          
                /* If left is smaller than right then there is a 1 at left 
                  and a 0 at right.  Exchange arr[left] and arr[right]*/
                if (left < right) 
                { 
                    input0[left] = 0; 
                    input0[right] = 1; 
                    left++; 
                    right--; 
                } 
            }
            return input0.toString(); 
        }`,
        inputs:['[0,1,0,1,0,0,1,1,1,0]'],
        init:'seperate10(input0)'
    }
]
ReactDOM.render(<App problems={problems}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
