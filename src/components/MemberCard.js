import React from 'react';
import { Box, Grid } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';

const MemberCard = (props) => {

    const memberList = props.members.map((member) => {
        const firstName = member.firstName;
        return(
        <NavLink to={{
            pathname: '/member/'+firstName,
            member
        }} key={member.firstName}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="100%"
                h="100"
                boxShadow="dark-lg"
                p="6"
                rounded="md"
                bg="white"
            >
                {member.firstName} {member.lastName}
            </Box>
        </NavLink>
    )});

    return (
        <Grid
            templateColumns="repeat(3, 1fr)" gap={6}
            maxHeight="500"
            bg="gray.10"
            columns={4}
            spacing="10"
            p="10"
            textAlign="center"
            borderRadius="lg"
            rounded="lg"
            color="black.100">
                {memberList}
        </Grid>
    );
}

export default MemberCard;