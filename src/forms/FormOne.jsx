import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Component
const FormOne = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{ firstName: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
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
        <label htmlFor="firstName">First Name </label>
        <Field name="firstName" type="text" />
        <ErrorMessage
          render={(msg) => <span style={{ color: "red" }}> {msg}</span>}
          name="firstName"
        />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormOne;
