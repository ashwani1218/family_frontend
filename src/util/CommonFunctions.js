import { axios } from "../Axios";

export const fetchMember = (id) => {
  axios
    .get("/member/" + id)
    .then((response) => {
      if (response.data.response_code === "200") {
        console.log(response.data);
        return response.data.familyMember;
        // return familyMember;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchDocTypes = () => {
  axios
    .get("/documentTypes")
    .then((response) => {
      if (response && response.data && response.data.response_code === "200") {
        let docTypes = response.data.documentTypes;
        return docTypes;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
