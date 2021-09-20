//Default member
const MemberReducerDefaultState = {
    members: []
}

let MemberReducer = (state = MemberReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_MEMBERS":
            return { members: [...action.payload.members] };
        case "GET_MEMBERS":
            return [state.members];
        default:
            return state;
    }
};
export default MemberReducer;