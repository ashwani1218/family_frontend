import React from 'react';
import { useState , useEffect } from 'react';
import { axios } from '../Axios';
import MemberCard from "../components/MemberCard"
import { Flex ,Heading } from "@chakra-ui/react"


const Home = () => {

    const [members, updateMembers] = useState([]);
    

    useEffect(() => {
        const getMembers = async () => {
            const response = await axios.get('/members')
                .catch((err) => { console.error(err) })
            if (response && response.data) updateMembers(response.data.members);
            console.log(members);
        }
        getMembers();
        
    }, []);

    return (
        <div className="home">
            <div className="Header">
                <Flex justifyContent="center" align="center" p={30}>
                    <Heading>Family</Heading>
                </Flex>
            </div>
            <div className="members">
                <MemberCard members={members} />
            </div>
           
        </div>
    )

}

export default Home;