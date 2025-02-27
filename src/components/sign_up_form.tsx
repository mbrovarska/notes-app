import { useState } from "react";
import { Formik, Field, Form, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup";

type Props ={};


const SignUpForm = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [successful, setSuccessful] = useState<boolean>();
    const [message, setMessage] = useState<string>();

   const validationSchema = () => {
        return Yup.object().shape({
            email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),
            password: Yup.string()
            .test(
                "len",
                "The password must be between 8 and 40 characters.",
                (val: any) =>
                    val &&
                    val.toString().length >= 8 &&
                    val.toString().length <= 40
            )
            .required("This field is required!"),
        });
    }
    const initialValues ={
        email: "",
        password: ""
    };

    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={}
        >
        <Form>
            {
                !successful && (
                <div>
                  <div className="form-group">
                  <label htmlFor="email"> Email </label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password"> Password </label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>

                )
            }

            {
                message && (
                    <div className="form-group">
                  <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
                )
            }
        </Form>
        </Formik>
    )

}

export default SignUpForm;