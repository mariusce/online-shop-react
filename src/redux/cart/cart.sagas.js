import { takeLatest, call, put, all } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types'
import { clearCart } from './cart.actions';

export function* emptyCart() {
    yield put(clearCart());
}

export function* onSignOutSucces() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, emptyCart)
}

export default function* cartSagas() {
    yield all([call(onSignOutSucces)]);
}