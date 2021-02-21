import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Component
const FormTwo = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{ lastName: "" }}
      validationSchema={Yup.object({
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
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
        <label htmlFor="lastName">Last Name </label>
        <Field name="lastName" type="text" />
        <ErrorMessage
          render={(msg) => <span style={{ color: "red" }}> {msg}</span>}
          name="lastName"
        />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormTwo;
