import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Component
const FormThree = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("This field is required"),
      })}
      onSubmit={(values) => {
        // To Give The Feel of an API
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext();
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="email">Email Address </label>
        <Field name="email" type="text" />
        <ErrorMessage
          render={(msg) => <span style={{ color: "red" }}> {msg}</span>}
          name="email"
        />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormThree;
