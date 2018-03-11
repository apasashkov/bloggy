import { connect } from 'react-redux';
import React from 'react';
import uuid from 'uuid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

import { addPost } from '../actions/posts';

const styles = {
  formContainter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '70px',
  },
  input: {
    width: '40%',
  },
  button: {
    width: '10em',
    margin: '20px 20px',
  },
};

class CreatePostForm extends React.Component {
  state = {
    title: '',
    content: '',
  }

  onPostSubmit = () => {
    const dataToSubmit = {
      id: uuid(),
      content: this.state.content,
      title: this.state.title,
      created_at: Date.now(),
      views: 0,
    };
    this.props.dispatch(addPost(dataToSubmit));
    this.props.history.push('/');
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <div style={styles.formContainter}>
        <h1> Add your post </h1>
        <TextField
          label="Title"
          value={this.state.title}
          onChange={this.handleChange('title')}
          margin="normal"
          style={styles.input}
        />
        <TextField
          label="Your Post"
          multiline
          rowsMax="8"
          rows="4"
          value={this.state.content}
          onChange={this.handleChange('content')}
          margin="normal"
          style={styles.input}
        />
        <div>
          <Button
            variant="raised"
            color="primary"
            style={styles.button}
            disabled={this.state.title.length === 0}
            onClick={this.onPostSubmit}
          >
            Submit
          </Button>
          <Button
            variant="raised"
            color="secondary"
            style={styles.button}
            onClick={() => this.props.history.push('/')}
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}

CreatePostForm.propTypes = {
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = () => ({});

export default connect(mapDispatchToProps)(CreatePostForm);
