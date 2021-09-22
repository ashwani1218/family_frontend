import React from 'react';
import { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import { axios } from '../Axios';
import { addMember } from '../redux/action/MemberAction';
import { useParams } from 'react-router-dom';
import { Flex, Heading } from "@chakra-ui/react";

const MemberProfile = (props) => {

    const [documents, setDocument] = useState([]);
    const [member, setMember] = useState({id:"",firstName:"",lastName:""});
    let { id } = useParams();

    useEffect(() => {
        
        const persistMember = () => {
            axios.get("/member/" + id)
                .then((response) => {
                    if (response && response.data) {
                        let familyMember = response.data.familyMember;
                        setMember(() => familyMember);
                        props.dispatch(addMember(familyMember));
                        axios.post('/getDocuments', { holder: familyMember.id })
                            .then((response) => {
                                if (response.data) {
                                    setDocument(response.data.member_documents);
                                }
                                console.log(documents);
                            }).catch((err) => { console.error(err) })
                    }
                })
                .catch((err) => { console.log(err) })
            
        }
        persistMember();
    }, [])

    return(
        <div className="MemberProfile">
            <div className="Header" borderRadius="100px">
                <Flex bg = "gray.200" rounded="md" justifyContent="center" align="center" p={10}>
                    <Heading>Member: {member.firstName}</Heading>
                </Flex>
            </div>
        </div>
    )

    
};
const mapStateToProps = (state) => ({
    member: state.member,
 })

export default connect(mapStateToProps)(MemberProfile);