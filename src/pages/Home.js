import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { axios } from "../Axios";
import MemberCard from "../components/MemberCard";
import { Flex, Heading } from "@chakra-ui/react";
import { connect } from "react-redux";
import { addMembers } from "../redux/action/MemberAction";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Home = (props) => {
  const [members, updateMembers] = useState([]);
  // const dispatch = useDispatch();
  useEffect(() => {
    const getMembers = () => {
      axios
        .get("/member")
        .catch((err) => {
          console.error(err);
        })
        .then((response) => {
          if (response && response.data) {
            updateMembers(response.data.members);
            props.dispatch(addMembers(response.data.members));
          }
        })
        .then(() => {
          console.log(members);
        });
    };
    getMembers();
  }, []);

  return (
    <div className="home">
      <div className="Header">
        <Flex bg="gray.200" justifyContent="center" align="center" p={10}>
          <Heading>Document Manager</Heading>
        </Flex>
      </div>
      <div className="Header">
        <Flex bg="gray.300" justifyContent="space-between" p={10} rounded="3xl">
          <Heading>Members</Heading>
          <NavLink to="/addMember">
            <Button
              type="primary"
              shape="round"
              icon={<PlusOutlined />}
              size={"large"}
            ></Button>
          </NavLink>
        </Flex>
      </div>
      <div className="members">
        <MemberCard members={members} />
      </div>
    </div>
  );
};

export default connect()(Home);
