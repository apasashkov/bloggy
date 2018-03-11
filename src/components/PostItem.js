import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import moment from 'moment';
import ViewsIcon from 'material-ui-icons/RemoveRedEye';
import Typography from 'material-ui/Typography';

const styles = {
  viewsStyle: {
    width: '2em',
  },
};

class PostItem extends React.Component {
  onListItemClick = () => {
    this.props.history.push(`/posts/id=${this.props.post.id}`);
  }

  render() {
    const { title, created_at: createdAt, views } = this.props.post;
    return (
      <ListItem onClick={this.onListItemClick} button divider>
        <ListItemText primary={title} secondary={moment(createdAt).format('MMMM Do YYYY')} />
        <ListItemIcon>
          <ViewsIcon />
        </ListItemIcon>
        <Typography style={styles.viewsStyle}>{views}</Typography>
      </ListItem>
    );
  }
}

PostItem.propTypes = {
  history: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};


export default PostItem;
