import React from "react";
import OneComment from "./one-comment";







class Comments extends React.Component{




  constructor(){
    super();
    this.state={
      newComments:["working?"],
      input: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }





  handleClick(e){
    //e is the event that we need to stop from automatically refreshing the page
    e.preventDefault();
    console.log('I just clicked this thing');
    this.setState({
      newComments: this.state.newComments.concat([this.state.input]),
      input: ""
    })
  }
// OR we can do the below code and it will work the same.
// [...this.state.newComments, this.state.input]





  //The function we are calling is outside of the constructor method.
  // Also outside of render method.
  handleInput(e){
    // Delete console.log code after testing behavior
    // console.log("Watch out Anonymous.  I'm a real hacker")
    this.setState({
      input: e.target.value
    })
    //The State will not have updated by the time it hits the below console.log.
    //setState is asynchronous. we will have to use another method in order to check
    //our updated state.
    // console.log("handleInput update - " + this.state.input  )

  }

// This method below is triggered once changes have been finalized aka state
componentDidUpdate(){
  if(this.state.input !== ""){
    // console.log("componentDidUpdate log - " + this.state.input)
  }

}





render(){
  const comments = this.props.comments.map((item, index)=> <OneComment key={index} comment={item}/>)
  const newComments = this.state.newComments.map((item, index)=> <OneComment key={index} comment={item}/>)
  return(
    <div>
      {comments}
      {newComments}

      <form>
        <input placeholder="enter comment" onChange={this.handleInput} value={this.state.input}/>
        <button onClick={this.handleClick}> Add Comment</button>
      </form>
    </div>
  )
}
}

export default Comments;
