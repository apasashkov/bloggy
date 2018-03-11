import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';

import PostItem from './PostItem';

const styles = {
  listStyle: {
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const ListOfPosts = (props) => {
  const { posts, history } = props;
  return (
    <div>
      <List style={styles.listStyle}>
        {posts.map((post, index) => (
          <PostItem
            post={post}
            key={`post-${index}`}
            history={history}
          />))
        }
      </List>
    </div>
  );
};

export default ListOfPosts;

