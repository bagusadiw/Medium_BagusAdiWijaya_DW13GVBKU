import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import './fonts/toledo-serial-medium-regular.ttf';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import FollowContainer from './components/follow/followContainer.component';
import {ModalSignUp} from './components/sign-up/modalSignUp.component';
import {Home} from './components/home/home.component';
import {Article} from './components/article/article.component';
import {CategoryContainer} from './components/category/category-container.component';

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/category" component={CategoryContainer} />
			<Route path="/article" component={Article} />
			<Route path="/modal" component={ModalSignUp} />
			<Route path="/follow" component={FollowContainer} />
		</Switch>
	</Router>, document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
