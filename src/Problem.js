import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Prism from "prismjs";
import "./prism.css";
class Problem extends Component{
   
    
    render(){
   
    return <div className="col-6">
                <p>{this.props.problem.problemStatement}</p>
                <pre>
                <code className="language-javascript">
                {
                    this.props.problem.solution
                }
                </code>
            </pre>
           </div>
}
}
export default Problem;
