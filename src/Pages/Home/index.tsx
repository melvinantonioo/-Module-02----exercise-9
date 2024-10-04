import { useEffect, useState } from "react"

import IUser from "../../Types"
import axios from "axios";
import { useDispatch } from "react-redux";
import { counter } from "../../Redux/UserSlice";

const Home = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    const dispatch = useDispatch()

    const getUsers = async () => {
        try {
            const { data } = await axios.get(
                "https://66fe953d2b9aac9c997c8b0f.mockapi.io/api1/data/vin"
            );

            setUsers(data);
            dispatch(counter(data.length))
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="min-h-screen bg-gray-300 py-10 ">


            <div className="container mx-auto px-4 left-20 text-center flex justify-center">

                <div className="overflow-x-auto max-w-xl">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Users</h1>
                    <table className="table-auto w-full bg-white rounded-lg shadow-xl overflow-hidden">
                        <thead className="bg-gray-200">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((item) => (
                                <tr key={item.id}
                                    className="border-t border-gray-300"
                                >
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default Home