import * as React from 'react';

type AuthState = {
  userToken: string | null;
  signIn: () => void;
  signOut: () => void;
  signUp: () => void;
};

const initialAutthState: AuthState = {
  userToken: null,
  signIn: () => {},
  signOut: () => {},
  signUp: () => {},
};

const AuthContext = React.createContext(initialAutthState);

export default AuthContext;
