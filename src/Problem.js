import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Problem({problem}){
    return <div>
                <p>{problem.problemStatement}</p>
                <p>{problem.solution}</p>
           </div>
}
export default Problem;
