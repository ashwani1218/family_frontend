//Default member
const MemberReducerDefaultState = {
    members: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = MemberReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_MEMBERS":
            return { members: [...action.members] };
        
        default:
            return state;
    }
};
