import React from "react";
import { Box, Grid, Divider } from "@chakra-ui/react";

const DocumentView = (props) => {
  const DocCard = props.documents.map((doc) => {
    const id = doc.id;

    return (
      <Box
        bg="gray.300"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        h="100"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        key={doc.id}
      >
        {doc.documentTitle}
      </Box>
    );
  });

  return (
    <div>
      <Divider bg="black.300" orientation="horizontal" />
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        maxHeight="500"
        bg="gray.100"
        columns={4}
        spacing="10"
        p="10"
        textAlign="center"
        borderRadius="lg"
        rounded="lg"
        color="black.100"
      >
        {DocCard}
      </Grid>
    </div>
  );
};

export default DocumentView;
