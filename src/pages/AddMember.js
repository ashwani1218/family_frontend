import {
  Box,
  Flex,
  FormControl,
  Container,
  Button,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import React from "react";
import { axios } from "../Axios";

const AddMember = (props) => {
  const validateName = (value) => {
    let error;
    if (!value) error = "Name is required";
    return error;
  };

  return (
    <div>
      <div className="Header">
        <Flex
          bg="gray.200"
          justifyContent="center"
          align="center"
          p={10}
          rounded="3xl"
        >
          <Heading>Add Member</Heading>
        </Flex>
      </div>
      <br />
      <br />
      <br />
      <Box>
        <Container justifyContent="center" align="center">
          <Formik
            initialValues={{ first_name: "", last_name: "" }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                let request = values;
                let first_name = request.first_name;
                let last_name = request.last_name;
                axios
                  .post("/member", { first_name, last_name })
                  .then((response) => {
                    console.log(response);
                    if (response.data.response_code === "200") {
                      alert("Member Added");
                      window.location.href = "http://localhost:3000/";
                    } else {
                      alert("Unable to add Member");
                      window.location.href = "http://localhost:3000/";
                    }
                  })
                  .catch((error) => {
                    alert("Unable to add Member");
                  });
                // alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => (
              <Form>
                <Field name="first_name" validate={validateName}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="first_name">First name</FormLabel>
                      <Input
                        {...field}
                        id="first_name"
                        placeholder="Firstname"
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="last_name" validate={validateName}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="last_name">Last name</FormLabel>
                      <Input {...field} id="last_name" placeholder="Lastname" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </Box>
    </div>
  );
};

export default AddMember;
