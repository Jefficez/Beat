export const rdLogin = (state = {}, action) => {
    switch (action.type) {
        case 'Logged': {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
