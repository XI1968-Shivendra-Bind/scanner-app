import { createContext, useContext } from 'react';

export const AuthContext = createContext(null);

const useAuthContext = () => {
  const [authState, setAuthState] = useContext(AuthContext);
  if (!authState) {
    throw new Error('Auth context must be initialized');
  }
  return [authState, setAuthState];
};

export default useAuthContext;
