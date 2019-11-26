import { all } from 'redux-saga/effects';
import { ADD_PRODUCT_SAGA } from './AddProductSaga';
import { INBOX_LIST_SAGA } from './InboxMessageListSaga';
// Wrap all sagas in a container FeedbackFormSaga
const rootSaga = function* rootSaga() {
	yield all([
		INBOX_LIST_SAGA(),
		ADD_PRODUCT_SAGA()
	]);
};

export default rootSaga;
