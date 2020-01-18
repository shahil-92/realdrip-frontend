import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Signup from '../pages/signup';
import EmailConfirmation from '../pages/emailConfirmation'
import Home from '../pages/Home';
import PurchaseValidation from '../pages/PurchaseValidation'
import WardSignIn from '../pages/wardSignin'
import WardActivation from '../pages/wardActivation'
import WardDashBoard from '../pages/wardDashboard'
import WardOperation from '../pages/wardOperation'
import WardDevice from '../pages/wardDevice'
import WardNurse from '../pages/wardNurse'
import OperationDetail from '../pages/operationDetail'
import ConnectedInuse from '../pages/connectedInuse'
import NurseDetail from '../pages/nurseDetail'
import WardAccountSetting from '../pages/wardAccountSetting'
import ManagementSignIn from '../pages/managementSignIn'
import ManagementDashboard from '../pages/managementDashboard'
import ManagementWard from '../pages/managementWard'
import ManagementDevices from '../pages/managementDevices'
import ManagementNurses from '../pages/managementNurses'
import ManagementSetting from '../pages/managementSetting'
import AddNurse from '../pages/addNurse'
import AddNewDevice from '../pages/AddNewDevice'
import AddNewWardAccount from '../pages/AddNewWardAccount'
import EditDevices from '../pages/EditDevices'
import EditNurse from '../pages/EditNurse'
import ConfirmMailSent from '../pages/confirmMailSent'
import PasswordRecovery from '../pages/passwordRecovery'
import RecoveryMailSent from '../pages/recoveryMailSent'
import DeviceValidatePopUp from '../pages/deviceValidatePopUp'
import PasswordUpdatedPopUp from '../pages/passwordUpdatedPopUp'
import DeleteOperationPopUp from '../pages/deleteOperationPopUp'
import OperationDetailNotUpdated from '../pages/OperationDetailNotUpdated'
import WifiiPopUpWrap from '../pages/WifiiPopUpWrap'
export default (props) => (
	<Router>
		<Switch>
			<Route exact path="/" component={props => <Home {...props} />} />
			<Route exact path="/purchase-validation" component={props => <PurchaseValidation {...props} />} />
			<Route exact path="/ward-signin" component={props => <WardSignIn {...props}/>} />
			<Route exact path="/ward-activation" component={props => <WardActivation {...props}/>} />
			<Route exact path="/signup" component={props => <Signup {...props}/>} />
			<Route exact path="/ward-dashboard" component={props => <WardDashBoard {...props}/>} />
			<Route exact path="/ward-operation" component={props => <WardOperation {...props}/>} />
			<Route exact path="/ward-device" component={props => <WardDevice {...props}/>} />
			<Route exact path="/ward-nurse" component={props => <WardNurse {...props}/>} />
			<Route exact path="/email-confirmation" component={EmailConfirmation} />
			<Route exact path="/operation-detail" component={props => <OperationDetail {...props}/>}/>
			<Route exact path="/operation-detail-not-update" component={props => <OperationDetailNotUpdated {...props}/>}/>
			<Route exact path="/connected-inuse" component={props => <ConnectedInuse {...props}/>}/>
			<Route exact path="/nurse-detail" component={props => <NurseDetail {...props}/>}/>
			<Route exact path="/ward-setting" component={props => <WardAccountSetting {...props}/>}/>
			<Route exact path="/management-signin" component={props => <ManagementSignIn {...props}/>}/>
			<Route exact path="/management-dashboard" component={props => <ManagementDashboard {...props}/>}/>
			<Route exact path="/management-ward" component={props => <ManagementWard {...props}/>}/>
			<Route exact path="/management-device" component={props => <ManagementDevices {...props}/>}/>
			<Route exact path="/management-nurse" component={props => <ManagementNurses {...props}/>}/>
			<Route exact path="/management-setting" component={props => <ManagementSetting {...props}/>}/>
			<Route exact path="/add-ward" component={props => <AddNewWardAccount {...props}/>}/>
			<Route exact path="/add-nurse" component={props => <AddNurse {...props}/>}/>
			<Route exact path="/add-device" component={props => <AddNewDevice {...props}/>}/>
			<Route exact path="/edit-device" component={props => <EditDevices {...props}/>}/>
			<Route exact path="/edit-nurse" component={props => <EditNurse {...props}/>}/>
			<Route exact path="/confirm-mail" component={props => <ConfirmMailSent {...props}/>}/>
			<Route exact path="/password-recovery" component={props => <PasswordRecovery {...props}/>}/>
			<Route exact path="/recovery-mailsent" component={props => <RecoveryMailSent {...props}/>}/>
			<Route exact path="/device-validate-popup" component={props => <DeviceValidatePopUp {...props}/>}/>
			<Route exact path="/password-update-popup" component={props => <PasswordUpdatedPopUp {...props}/>}/>
			<Route exact path="/delete-oprtn-popup" component={props => <DeleteOperationPopUp {...props}/>}/>
			<Route exact path="/wifii" component={props => <WifiiPopUpWrap {...props}/>}/>
		</Switch>
	</Router>
);
