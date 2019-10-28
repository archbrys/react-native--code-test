// Initial State
const initialState = {
    users: [],
    page: 1,
    noMoreToLoad : false
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
                users : [...state.users, ...action.users],
                page: action.page,
                noMoreToLoad : action.users.length === 0 ? true : false
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