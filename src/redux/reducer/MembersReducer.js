//Default member
const MembersReducerDefaultState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = MembersReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_MEMBERS":
            return [ ...state, action.members ];
        
        default:
            return state;
    }
};
