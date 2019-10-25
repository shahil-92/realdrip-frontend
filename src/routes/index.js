import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Signup from '../pages/signup';
import EmailConfirmation from '../pages/emailConfirmation'
import Home from '../pages/Home';
import WardSignIn from '../pages/wardSignin'
import WardActivation from '../pages/wardActivation'
import WardDashBoard from '../pages/wardDashboard'
import WardOperation from '../pages/wardOperation'
import WardDevice from '../pages/wardDevice'
import WardNurse from '../pages/wardNurse'
import OperationDetail from '../pages/operationDetail'
import ConnectedInuse from '../pages/connectedInuse'
export default (props) => (
	<Router>
		<Switch>
			<Route exact path="/" component={props => <Home {...props} />} />
			<Route exact path="/ward-signin" component={props => <WardSignIn {...props}/>} />
			<Route exact path="/ward-activation" component={props => <WardActivation {...props}/>} />
			<Route exact path="/signup" component={props => <Signup {...props}/>} />
			<Route exact path="/ward-dashboard" component={props => <WardDashBoard {...props}/>} />
			<Route exact path="/ward-operation" component={props => <WardOperation {...props}/>} />
			<Route exact path="/ward-device" component={props => <WardDevice {...props}/>} />
			<Route exact path="/ward-nurse" component={props => <WardNurse {...props}/>} />
			<Route exact path="/email-confirmation" component={EmailConfirmation} />
			<Route exact path="/operation-detail" component={props => <OperationDetail {...props}/>}/>
			<Route exact path="/connected-inuse" component={props => <ConnectedInuse {...props}/>}/>

		</Switch>
	</Router>
);
