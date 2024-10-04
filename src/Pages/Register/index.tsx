import axios from "axios"

import IUser from "../../Types"
import { Field, Form, Formik, FormikProps } from "formik"
import Schema from "./Schema"
import { toast, ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"


const Register = () => {
    const navigate = useNavigate();

    const postUser = async (params: IUser) => {
        try {
            await axios.post("https://66fe953d2b9aac9c997c8b0f.mockapi.io/api1/data/vin", {
                firstName: params.firstName,
                lastName: params.lastName,
                email: params.email,
                password: params.password
            })

            toast.success("Register Success!!!!!", {
                onClose: () => {
                    navigate('/');
                }
            })
        } catch (error) {

        }
    }

    return (
        <div>
            <Formik
                initialValues={{
                    id: 0,
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                }}
                validationSchema={Schema}
                onSubmit={(values) => {
                    console.log(values);
                    postUser(values)
                }}
            >

                {(props: FormikProps<IUser>) => {
                    const { values, errors, touched, handleChange } = props;

                    return (
                        <div className="flex justify-center items-center min-h-screen bg-gray-200">
                            <div className="bg-sky-300 p-8 rounded-lg shadow-md w-full max-w-md">
                                <ToastContainer position="top-center" autoClose={2000} theme="dark" />
                                <Form>
                                    <div className="mb-4">
                                        <h1 className="text-[2em]">Register</h1>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="firstName"
                                            className="block text-gray-700 font-medium mb-2 text-left"
                                        >First Name: </label>
                                        <Field
                                            className="border border:1px-solid-black rounded w-full bg-zinc-200 ring-2 ring-inset ring-cyan-700 h-[3em] p-2"
                                            type="text"
                                            name="firstName"
                                            onChange={handleChange}
                                            value={values.firstName}
                                        />
                                        {touched?.firstName && errors.firstName ? (
                                            <div className="text-left text-red-500 text-sm mt-1">{errors.firstName}</div>
                                        ) : null}
                                    </div>

                                    <div>
                                        <label htmlFor="lastName">Last Name: </label>
                                        <Field
                                            className="border border:1px-solid-black rounded w-full bg-transparent  bg-zinc-200 ring-2 ring-inset ring-cyan-700  h-[3em] p-2"
                                            type="text"
                                            name="lastName"
                                            onChange={handleChange}
                                            value={values.lastName}
                                        />
                                        {touched?.lastName && errors.lastName ? (
                                            <div className="text-left text-red-500 text-sm mt-1">{errors.lastName}</div>
                                        ) : null}
                                    </div>

                                    <div>
                                        <label htmlFor="email">Email: </label>
                                        <Field
                                            className="border border:1px-solid-black rounded w-full bg-transparent  bg-zinc-200 ring-2 ring-inset ring-cyan-700  h-[3em] p-2"
                                            type="text"
                                            name="email"
                                            onChange={handleChange}
                                            value={values.email}
                                        />
                                        {touched?.email && errors.email ? (
                                            <div className="text-left text-red-500 text-sm mt-1">{errors.email}</div>
                                        ) : null}
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="password">Password: </label>
                                        <Field
                                            className="border border:1px-solid-black rounded w-full bg-transparent  bg-zinc-200 ring-2 ring-inset ring-cyan-700  h-[3em] p-2"
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            value={values.password}
                                        />
                                        {touched?.password && errors.password ? (
                                            <div className="text-left text-red-500 text-sm mt-1">{errors.password}</div>
                                        ) : null}
                                    </div>
                                    <button
                                        className="bg-blue-500 h-[3em] text-white w-full p-2 rounded-lg hover:bg-blue-600 transition"
                                        type="submit">
                                        Save
                                    </button>

                                </Form>
                            </div>
                        </div>

                    )
                }}

            </Formik>
        </div>
    )
}

export default Register