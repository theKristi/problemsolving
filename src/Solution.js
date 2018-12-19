import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Solution ({problem}){

    let ExecuteSolution=(problem)=>{
        let solution=problem.inputs.map((input, index)=>{return `let input${index}=${input};`}).join("");
   
        console.log(solution);
        solution+="\n"+problem.solution;
        solution+=problem.init;
        let answer=eval(solution);
        console.log(answer);
        return answer;
      }
    return <div className="col-6">
                <p>Input: {problem.inputs}</p>
                <p>Output: {ExecuteSolution(problem)}</p>
           </div>
    
    

}
export default Solution;