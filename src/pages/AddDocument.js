import React from "react";
import { axios } from "../Axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Flex, Heading } from "@chakra-ui/react";

const AddDocument = (props) => {
  let { id } = useParams();
  const [docTypes, setDocTypes] = useState([]);
  const [options, setOptions] = useState([]);
  const [member, setMember] = useState({ id: "", firstName: "", lastName: "" });

  useEffect(() => {
    axios
      .get("/member/" + id)
      .then((response) => {
        if (response.data.response_code === "200") {
          setMember(() => response.data.familyMember);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("/documentTypes")
      .then((response) => {
        if (response.data.response_code === "200") {
          setDocTypes(() => response.data.document_types);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    let optionMap = [];
    docTypes.map((doc) => {
      console.log(doc.type);
      return optionMap.push(doc.type);
    });
    console.log(optionMap);
    setOptions(() => optionMap);
    console.log(options);
  }, []);

  //Implement using formik for validation of fields
  return (
    <div>
      <div className="Header">
        <Flex
          bg="gray.200"
          justifyContent="center"
          align="center"
          rounded="3xl"
          p={10}
        >
          <Heading>Add Document: {member.firstName}</Heading>
        </Flex>
      </div>
      <div>
        <form></form>
      </div>
    </div>
  );
};

export default connect()(AddDocument);
