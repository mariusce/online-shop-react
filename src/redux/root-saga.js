import { all, call } from 'redux-saga/effects';

import shopSaga from './shop/shop.sagas';
import userSagas from '../redux/user/user.sagas';
import cartSagas from '../redux/cart/cart.sagas';

export default function* rootSaga() {
    yield all([
        call(shopSaga),
        call(userSagas),
        call(cartSagas)
    ])
}