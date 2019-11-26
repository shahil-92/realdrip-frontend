import { put, takeEvery, call } from 'redux-saga/effects'
import ApiCaller from '../ApiCaller'

const API_DATA = (payload) => {
  const body = {
    name: payload.name,
    delivery_method: payload.delivery_method,
    pack_size: payload.pack,
    country_of_origin: payload.country_of_origin,
    pallet: payload.pallet,
    grade: payload.grade,
    pack_date: payload.pack_date !== "" ? payload.pack_date : "",
    quantity: payload.quantity,
    receive_inspect: payload.inspectFile,
    size: payload.unitSize,
    stored_temperature: payload.stored_temperature,
    issues: payload.issues,
    variety: payload.variety,
    image: payload.imageFile,
    starting_bid_price: payload.starting_bid_price,
    start_time: payload.start_time !== null ? payload.start_time.toDate() : null,
    end_time: payload.end_time !== null ? payload.end_time.toDate() : null,
    categories_id: payload.categories_id,
    expiration_date: payload.expiration_date
  }
  return ApiCaller(`marketplace/commodities/?token=${payload.authToken}`, 'POST', body).then(response => response)
}
export const ADD_PRODUCT_SAGA = function* perform_addProducts() {
  yield takeEvery('ADD_PRODUCT_SUBMIT', function* (action) {
    yield put({ type: 'ADD_PRODUCT_STARTED' })
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload))
      yield put({ type: 'ADD_PRODUCT_SUCCESS', payload: DATA })
    } catch (error) {
      yield put({ type: 'ADD_PRODUCT_FAILED' })
    }
  })
}
