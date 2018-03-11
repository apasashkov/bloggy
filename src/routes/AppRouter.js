import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import async from '../components/utils/async';

import Header from '../components/Header/';
import NotFoundPage from '../components/NotFoundPage';
import DashBoard from '../containers/DashBoard/';
import CreatePostForm from '../components/CreatePostForm';

// code splitting for Post component
const Post = async(() => import(/* webpackChunkName: "post" */ '../components/Post'));

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
