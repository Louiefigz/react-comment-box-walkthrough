import React, { Component } from 'react';
import Comments from "./components/comments";

class App extends Component {
  render() {
    return (
      <div>
        <Comments comments={this.props.comments}/>
      </div>
    );
  }
}

App.defaultProps={

  comments: ["kanye is probably an alien", "tupac is still alive",
  "alice in wonderland could be a horror film", "I'd rather have two wives",
   "when is the last time you heard a seal laugh?" ]
}

export default App;
