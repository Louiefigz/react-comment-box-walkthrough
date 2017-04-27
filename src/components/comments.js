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
  }
  //The function we are calling is outside of the constructor method.
  // Also outside of render method.
  handleInput(){
    // Delete console.log code after testing behavior
    console.log("Watch out Anonymous.  I'm a real hacker")


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
