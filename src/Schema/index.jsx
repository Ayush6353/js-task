import * as Yup from "yup";

export const SchemaYup = Yup.object({
email:Yup.string().email().required("Please Enter your email"),
password:Yup.string().min(6).required("Please Enter your Password"),
});