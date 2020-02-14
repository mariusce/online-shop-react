import { takeLatest, call, put, all } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsError} from './shop.actions';

export function* fetchCollectionsAsync() {
    try {
        const collectionsRef = firestore.collection('collections');

        const snapshot = yield collectionsRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsError(error))
    }
}


export function* onFetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
        );
}

export default function* shopSaga() {
    yield all([call(onFetchCollectionsStart)])
}

