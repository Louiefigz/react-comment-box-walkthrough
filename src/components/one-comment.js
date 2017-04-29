import React from "react";


class OneComment extends React.Component{



  render(){
    return (
      <div>


          <div className="box box1 shadow1">
            <h3>{this.props.comment}</h3>
          </div>



      </div>
    )
  }
}

export default OneComment;
