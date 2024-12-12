import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, } from 'firebase/auth';
import { auth, mapAuthCodeToMessage } from '@services/firebase';
export function register(name, email, password) {
    return handleAuthError(async () => {
        await createUserWithEmailAndPassword(auth, email, password);
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, { displayName: name });
        }
        else {
            throw Error('Something went wrong! Please try again!');
        }
    });
}
export function login(email, password) {
    return handleAuthError(async () => {
        await signInWithEmailAndPassword(auth, email, password);
    });
}
export function logout() {
    return signOut(auth);
}
async function handleAuthError(authFunction) {
    try {
        await authFunction();
    }
    catch (error) {
        if (error instanceof FirebaseError) {
            throw Error(mapAuthCodeToMessage(error.code));
        }
        throw Error('Something went wrong! Please try again!');
    }
}
