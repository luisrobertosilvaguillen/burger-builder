export const FIREBASE_API_KEY = '[YOUR_FIREBASE_API_KEY]'; 
 
export const FIREBASE_AUTH_BASE_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key='; 
export const FIREBASE_AUTH_URL = FIREBASE_AUTH_BASE_URL + FIREBASE_API_KEY;
 
export const FIREBASE_AUTH_WITH_VERIFY_PASSWORD_BASE_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key='; 
export const FIREBASE_AUTH_WITH_VERIFY_PASSWORD = FIREBASE_AUTH_WITH_VERIFY_PASSWORD_BASE_URL + FIREBASE_API_KEY;