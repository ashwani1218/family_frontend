import React from 'react';
import { useEffect , useState} from 'react'



const MemberProfile = (props) => {

    const [documents, setDocument] = useState([]);
    const [member, setMember] = useState({});

    useEffect(() => {
        setMember(() => props.location.member);
        
    }, [])

    return(
        <div className="MemberProfile">
            {member.firstName}
        </div>
    )
};

export default MemberProfile;