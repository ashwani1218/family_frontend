import { axios } from "../Axios";

export const getMember = (id) =>
  axios.get("/member/" + id).then((response) => {
    if (response.data.status === "SUCCESS") {
      let familyMember = response.data.familyMember;
      return familyMember;
    }
  });
