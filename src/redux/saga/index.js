import { all } from 'redux-saga/effects';
import { WARD_LOGIN_SAGA } from './wardLoginSaga';
import { INBOX_LIST_SAGA } from './InboxMessageListSaga';
// Wrap all sagas in a container FeedbackFormSaga
const rootSaga = function* rootSaga() {
	yield all([
		INBOX_LIST_SAGA(),
		WARD_LOGIN_SAGA()
	]);
};

export default rootSaga;
