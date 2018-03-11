import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import Paper from 'material-ui/Paper';

import { fetchPosts, incrementPostViews } from '../actions/posts';
import postsDummyData from '../sample_data/posts';

const styles = {
  paperStyle: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headingStyle: {
    textAlign: 'center',
    paddingTop: '20px',
    marginBottom: 0,
  },
  contentStyle: {
    padding: '30px',
    margin: 0,
    textAlign: 'justify',
    textJustify: 'inter-word',
  },
  goBackButton: {
    width: '10em',
    margin: '20px 0',

  },
};

class Post extends React.Component {
  componentDidMount() {
    if (!this.props.post) {
      this.props.dispatch(fetchPosts(postsDummyData));
      // next-released: add redux-thunk for proper views increment
    } else {
      this.props.dispatch(incrementPostViews(this.props.post.id));
    }
  }

  renderPost = () => (
    <Paper style={styles.paperStyle}>
      <h1 style={styles.headingStyle}>{this.props.post.title}</h1>
      <p style={styles.contentStyle}>{this.props.post.content}</p>
      <Button
        variant="raised"
        color="primary"
        style={styles.goBackButton}
        onClick={() => this.props.history.push('/')}
      >
        Go Back
      </Button>
    </Paper>
  )

  render() {
    console.log('post route props:', this.props);
    const { post } = this.props;
    return !post ? <CircularProgress /> : this.renderPost();
  }
}

Post.propTypes = {
  history: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = (state, ownProps) => ({
  post: state.posts.filter(post => ownProps.match.params.id === `${post.id}`)[0],
});

export default connect(mapStateToProps)(Post);
