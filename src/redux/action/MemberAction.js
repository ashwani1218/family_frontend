export const addMember = ({
  firstName="",
  lastName="",
  id=""
} = {} ) => {
  return {
    type: "ADD_MEMBER",
    member: {
      id,
      firstName,
      lastName,
    }
  }
};