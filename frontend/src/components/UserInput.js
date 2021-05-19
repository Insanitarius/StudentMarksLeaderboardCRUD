import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Should be of min 3 characters")
    .required("Please enter Student's Name"),
  rollNo: Yup.number("Must be a number")
    .typeError("Must be a number")
    .min(0, "RollNo cannot be negative")
    .required("Please enter the Roll Number"),
  maths: Yup.number("Must be a number")
    .typeError("Must be a number")
    .min(0, "Marks cannot be negative")
    .max(100, "Marks should be less than or equal to 100")
    .required("Please enter the Marks"),
  physics: Yup.number("Must be a number")
    .min(0, "Marks cannot be negative")
    .typeError("Must be a number")
    .max(100, "Marks should be less than or equal to 100")
    .required("Please enter the Marks"),
  chemistry: Yup.number("Must be a number")
    .min(0, "Marks cannot be negative")
    .typeError("Must be a number")
    .max(100, "Marks should be less than or equal to 100")
    .required("Please enter the Marks"),
});

const UserInput = () => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">Enter Student Details</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Formik
            initialValues={{ name: "" }}
            validationSchema={UserSchema}
            onSubmit={(values, setSubmitting) => {
              // console.log(values);
              // alert(values.name);
              Axios.post(process.env.REACT_APP_BACKENDURL, {
                name: values.name,
                rollNo: values.rollNo,
                maths: values.maths,
                phy: values.physics,
                chem: values.chemistry,
              }).then(() => {
                console.log("Success");
              });
              setSubmitting(false);
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="name">Student Name</label>
                  <Field
                    type="name"
                    name="name"
                    placeholder="Enter Name of student"
                    className={`form-control ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="rollNo">Roll Number</label>
                  <Field
                    type="rollNo"
                    name="rollNo"
                    placeholder="Enter Roll Number of Student"
                    className={`form-control ${
                      touched.rollNo && errors.rollNo ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="rollNo"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="maths">Maths marks</label>
                  <Field
                    type="maths"
                    name="maths"
                    placeholder="Enter Maths Marks"
                    className={`form-control ${
                      touched.maths && errors.maths ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="maths"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="physics">Physics Marks</label>
                  <Field
                    type="physics"
                    name="physics"
                    placeholder="Enter Physics Marks"
                    className={`form-control ${
                      touched.physics && errors.physics ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="physics"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="chemistry">Chemistry Marks</label>
                  <Field
                    type="chemistry"
                    name="chemistry"
                    placeholder="Enter Chemistry Marks"
                    className={`form-control ${
                      touched.chemistry && errors.chemistry ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="chemistry"
                    className="invalid-feedback"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please wait..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default UserInput;
