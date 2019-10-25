// Initial State
const initialState = {
    users: [],
};

  // Reducers (Modifies The State And Returns A New State)
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // Update Users
        case 'USERS': {
            return {
                // State
                ...state,
                // Redux Store
                users : [...action.users]
            }
        }

        // Default
        default: {
            return state;
        }
    }
};

// Exports
export default userReducer;