export const addMembers = (members) => {
  return {
    type: "ADD_MEMBERS",
    members
  }
};

export const addMember = (
  { id = "",
    firstName = "",
    lastName = ""
  } = {}) => {
  return {
    type: "ADD_MEMBER",
    member: {
      id,firstName,lastName
    }
  }
}