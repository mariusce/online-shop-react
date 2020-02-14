import { takeLatest, call, put, all } from 'redux-saga/effects';

import UserActionTypes from './user.types'; 
import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { 
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpFailure,
    signUpSuccess
 } from './user.actions';

 function *getSnapShotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);

        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data()}));
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithEmail({payload}) {
    const { email, password } = payload;
    console.log('sign in: ', email, password);
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth);
    } catch (error) {
        yield signInFailure(error);
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure());
    }
}

export function* signUp({payload}) {
    const { displayName, email, password, confirmPassword } = payload;
    
    if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
    }
    
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );

        yield (createUserProfileDocument, user, { displayName });
        yield put(signUpSuccess({ email, password }));
    } catch (error) {
        yield put(signUpFailure());
    }
}

// export function* signInAfterSignUp() {
//     yield signInWithEmail()
// }

export function* onGoogleSignInStart() {
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
        );
}

export function* onEmailSignInStart() {
    yield takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_START,
        signInWithEmail
        );
}

export function* onCheckUserSession() {
    yield takeLatest(
        UserActionTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    )
}

export function* onUserSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onUserSignUp() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onUserSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInWithEmail)
}

export default function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onUserSignOut),
        call(onUserSignUp),
        call(onUserSignUpSuccess)
    ])
}