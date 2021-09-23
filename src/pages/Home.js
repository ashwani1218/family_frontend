import React from 'react';
import { useState , useEffect } from 'react';
import { axios } from '../Axios';
import MemberCard from "../components/MemberCard"
import { Flex, Heading } from "@chakra-ui/react";
import { connect ,} from 'react-redux';
import { addMembers } from '../redux/action/MemberAction'


const Home = (props) => {

    const [members, updateMembers] = useState([]);
    // const dispatch = useDispatch();
    useEffect(() => {
        const getMembers =  () => {
            axios.get('/members')
                .catch((err) => { console.error(err) })
                .then((response) =>{
                    if (response && response.data) {
                    updateMembers(response.data.members);
                    props.dispatch(addMembers(response.data.members));
                    
                    }
                })
                .then(() => { console.log(members); })
        }
        getMembers();
    }, []);

    return (
        <div className="home">
            <div className="Header">
                <Flex bg = "gray.200" justifyContent="center" align="center" p={10}>
                    <Heading>Family</Heading>
                </Flex>
            </div>
            <div className="members">
                <MemberCard members={members} />
            </div>    
        </div>
    )

}

export default connect()(Home);