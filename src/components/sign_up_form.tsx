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

    

}

export default SignUpForm;