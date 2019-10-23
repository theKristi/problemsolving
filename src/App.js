import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Problem from './Problem';
import Solution from './Solution';
import Prism from "prismjs";
import MyNavbar from './MyNavBar';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
    problemDisplayed:props.problems[0],
    problemIndex:0
    }
    this.displayProblemAtIndex=this.displayProblemAtIndex.bind(this);
    this.displayNextProblem=this.displayNextProblem.bind(this);
    this.displayPreviousProblem=this.displayPreviousProblem.bind(this);
}
 displayProblemAtIndex(index){
   //console.log(index);
   this.setState({
     problemDisplayed: this.props.problems[index],
     problemIndex:index
  });

 }
 componentDidUpdate(){

   Prism.highlightAll();
 }
 displayNextProblem(){
   let newIndex= this.state.problemIndex+1;
   //console.log("new:"+newIndex)
   this.displayProblemAtIndex(newIndex)
 }
 displayPreviousProblem(){
  let newIndex= this.state.problemIndex-1;
  //console.log("new:"+newIndex)
  this.displayProblemAtIndex(newIndex)
}
  render() {
    return (
      <div className="App">
        <MyNavbar/>
        <Problem problem={this.state.problemDisplayed} />
        <Solution problem={this.state.problemDisplayed}/>
        <Next displayNextProblem={this.displayNextProblem} hasNext={this.state.problemIndex<this.props.problems.length-1}/>
        <Previous displayPreviousProblem={this.displayPreviousProblem} hasPrev={this.state.problemIndex>0}/>
      </div>
    );
  }
}
function Next({displayNextProblem, hasNext}){
  return hasNext? <div className="col-11">
  <button className="btn btn-primary btn-lg float-right" onClick={displayNextProblem}>Next</button>
</div>:null
}
function Previous({displayPreviousProblem, hasPrev}){
  return hasPrev? <div className="col-11">
  <button className="btn btn-primary btn-lg float-left" onClick={displayPreviousProblem}>Previous</button>
</div>:null
}

export default App;