import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import  { IStatus } from '../Redux/UserSlice/index';

const Navbar = () => {
    const count = useSelector((state: {UserSlice: IStatus}) => state.UserSlice.value)

    return (
        <div className="bg-green-800 flex justify-between items-center h-24 w-full mx-auto px-4 text-white">

            <h1 className="text-[24px] font-bold text-[#b7e62b]">Network Call Practice, Melvin</h1>
            <h1>Total User: {count}</h1>

            <ul className="flex justify-center items-center">
                <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                    <Link to="/">
                        <a>Home</a>
                    </Link>
                </li>

                <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                    <Link to="/register">
                        <a>Register</a>
                    </Link>
                </li>
            </ul>


        </div>
    )
}

export default Navbar