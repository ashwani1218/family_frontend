import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { axios } from "../Axios";
import { addMember } from "../redux/action/MemberAction";
import { useParams } from "react-router-dom";
import { Flex, Heading, Container } from "@chakra-ui/react";
import DocumentView from "../components/DocumentView";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const MemberProfile = (props) => {
  const [documents, setDocument] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [member, setMember] = useState({ id: "", firstName: "", lastName: "" });
  let { id } = useParams();
  const docUrl = `/${id}/addDocument`;

  useEffect(() => {
    const persistMember = () => {
      axios
        .get("/member/" + id)
        .then((response) => {
          if (response.data.status === "SUCCESS") {
            let familyMember = response.data.familyMember;
            setMember(() => familyMember);
            props.dispatch(addMember(familyMember));
            axios
              .post("/member/getDocuments", { holder: familyMember.id })
              .then((response) => {
                if (response.data.status === "SUCCESS") {
                  setDocument(() => [...response.data.member_documents]);
                  setIsFetched(() => true);
                }
                console.log(documents);
              })
              .catch((err) => {
                console.error(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    persistMember();
  }, []);

  return (
    <div className="MemberProfile">
      <div className="Header" background="grey">
        <Container>
          <Flex rounded="md" justifyContent="center" align="center" p={10}>
            <Heading>
              {member.firstName} {member.lastName}
            </Heading>
          </Flex>
        </Container>
      </div>
      <div className="Header">
        <Flex bg="gray.300" justifyContent="space-between" p={10} rounded="3xl">
          <Heading>Documents</Heading>
          <NavLink to={docUrl}>
            <Button
              type="primary"
              shape="round"
              icon={<PlusOutlined />}
              size={"large"}
            />
          </NavLink>
        </Flex>
      </div>
      {isFetched && (
        <div className="Documents">
          <DocumentView documents={documents} />
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  member: state.member,
});

export default connect(mapStateToProps)(MemberProfile);
