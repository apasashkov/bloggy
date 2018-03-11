import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import DashBoard from '../containers/DashBoard/';
import Header from '../components/Header/';
import NotFoundPage from '../components/NotFoundPage';
import Post from '../components/Post';
import CreatePostForm from '../components/CreatePostForm';

class AppRouter extends React.Component {
  componentDidMount = () => {

  }

  render() {
    return (
      <BrowserRouter>
        <div id="main">
          <Header />
          <Switch>
            <Route path="/" exact={true} component={DashBoard} />
            <Route path="/posts/id=:id" component={Post} />
            <Route path="/posts/new" component={CreatePostForm} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
