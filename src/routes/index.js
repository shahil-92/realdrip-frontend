import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Signup from '../pages/signup';
import EmailConfirmation from '../pages/emailConfirmation'
import Home from '../pages/Home';
import WardSignIn from '../pages/wardSignin'
import WardActivation from '../pages/wardActivation'

export default (props) => (
	<Router>
		<Switch>
			<Route exact path="/" component={props => <Home {...props} />} />
			<Route exact path="/ward-signin" component={props => <WardSignIn {...props}/>} />
			<Route exact path="/ward-activation" component={props => <WardActivation {...props}/>} />
			<Route exact path="/signup" component={props => <Signup {...props}/>} />
			<Route exact path="/email-confirmation" component={EmailConfirmation} />
		</Switch>
	</Router>
);
