const actionType = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
};

const authState = {
  isLoading: false,
  isLogged: false,
  user: {
    email: '',
    userName: '',
  },
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case actionType.LOGIN_START:
      return { ...state, isLoading: true };

    default:
      return state;
  }
};

export default authReducer;
