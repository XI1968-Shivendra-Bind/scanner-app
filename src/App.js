import { ThemeProvider } from '@material-ui/styles';

import { useState } from 'react';
import SignIn from './components/SignIn';
import theme from './styles/theme';

import { AuthContext } from './hooks/useAuth';
import auth from './context/auth';

function App() {
  const [authState, setAuthState] = useState(auth);
  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={[authState, setAuthState]}>
        <SignIn />
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
