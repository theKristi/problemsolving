import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./prism.css";
class Problem extends Component{
   
    
    render(){
   
    return <div className="col-md-6 col-sm-12">
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
