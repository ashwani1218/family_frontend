const MemberReducerDefaultState = {
    member: {} 
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = MemberReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_MEMBER":
            return { member: action.member };
        default:
            return state;
    }
};