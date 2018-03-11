import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ListOfPosts from '../../components/ListOfPosts';
import selectPosts from '../../selectors/posts';

import { fetchPosts } from '../../actions/posts';
import postsDummyData from '../../sample_data/posts';

class DashBoard extends Component {
  componentDidMount() {
    if (!this.props.posts.length) {
      this.props.dispatch(fetchPosts(postsDummyData));
    }
  }
  render() {
    return (
      <div className="dashBoard">
        <ListOfPosts
          posts={this.props.posts}
          history={this.props.history}
        />
      </div>
    );
  }
}

DashBoard.propTypes = {
  history: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  posts: selectPosts(state.posts, state.filters),
});

export default connect(mapStateToProps)(DashBoard);
