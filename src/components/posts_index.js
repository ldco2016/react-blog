import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
  // this function (lifecycle method) will be
  // automatically called by React
  // immediately after this component
  // has been rendered by the DOM
  componentDidMount() {
    // data loading process
    this.props.fetchPosts();
  }
  // helper function
  renderPosts() {
      // .map or loop over list of posts and generate
      // one <li> for every post fetched.
      // Utilizing lodash map function which has the ability
      // to deal with objects.
      return _.map(this.props.posts, post => {
        return (
          <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        );
      });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
