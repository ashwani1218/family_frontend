import { axios } from "../Axios";

export const fetchDocTypes = () => {
  axios
    .get("/document/type")
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

export const getDocuments = (id) => {
  axios
    .post("/member/getDocuments", { holder: id })
    .then((response) => {
      if (response.data.status === "SUCCESS") {
        return [...response.data.member_documents];
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
