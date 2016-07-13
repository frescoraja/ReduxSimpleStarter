import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ comment: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.comment.trim().length > 0) {
      this.props.saveComment(this.state.comment);
    }
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form className="comment-box"
        onSubmit={this.handleSubmit}>
        <h4>Add comment:</h4>
        <textarea
          onChange={this.handleChange}
          value={this.state.comment}
        />
        <div>
        <button action="submit">submit comment</button>
        </div>
      </form>
    )
  }
}

export default connect(null, actions)(CommentBox);
