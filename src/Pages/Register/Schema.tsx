import {object, string} from 'yup'

const Schema = object({
    firstName: string()
        .min(3, "First Name Must Be 3 Character")
        .max(10, "First Name cannot Be more than 10 character")
        .required("required"),

    lastName: string()
        .min(3, "Last Name must be 3 character")
        .max(10, "Last Name cannot be more than 10 characters")
        .required("required"),

    email: string().email("Invalid Format").required("required"),

    password: string()
        .min(3, "Password Must be 3 characters")
        .matches(
            /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/,
            "Password need to have atleast 1 number and special characters"
        )
        .required("required")
})

export default Schema