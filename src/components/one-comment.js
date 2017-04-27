import React from "react";


class OneComment extends React.Component{



  render(){
    return (
      <div>
        <li>{this.props.comment}</li>
      </div>
    )
  }
}

export default OneComment;
