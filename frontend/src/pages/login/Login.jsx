// Desc: Login page for users to login to their account

import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="label p-2">
                            <span className="text-base label-text text-white">Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full h-10 text-white bg-slate-500 bg-opacity-35 placeholder-gray-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <div>
                        <label htmlFor="password" className="label p-2">
                            <span className="text-base label-text text-white">Password</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full h-10 text-white bg-slate-500 bg-opacity-35 placeholder-gray-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <div>
                        <Link to="#" className="text-sm hover:underline hover:text-blue-600 text-gray-300 mt-2 inline-block">
                            Forgot password?
                        </Link>
                    </div>
                    <span className="text-sm text-gray-300 mt-2 inline-block">
                        {"Don't have an account?"}
                    </span>
                    <Link to="/signup" className="text-sm text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block">
                        Register
                    </Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 hover:text-white" type="submit" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// STARTER CODE FOR THIS FILE
// // Desc: Login page for users to login to their account

// export default function Login() {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//                 <h1 className="text-3xl font-semibold text-center text-gray-300">
//                     Login
//                     <span className="text-blue-500"> ChatApp</span>
//                 </h1>
//                 <form action="">
//                     <div>
//                         <label htmlFor="email" className="label p-2">
//                             <span className="text-base label-text">Email</span>
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             placeholder="Enter your email"
//                             className="input input-bordered w-full h-10"
//                             required />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="label p-2">
//                             <span className="text-base label-text">Password</span>
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             placeholder="Enter your password"
//                             className="input input-bordered w-full h-10"
//                             required />
//                     </div>
//                     <div>
//                         <a href="#" className="text-sm hover:underline hover:text-blue-600 text-gray-300 mt-2 inline-block">
//                             Forgot password?
//                         </a>
//                     </div>
//                     <span className="text-sm text-gray-300 mt-2 inline-block">
//                         {"Don't have an account?"}
//                     </span>
//                     <a href="#" className="text-sm text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block">
//                         Register
//                     </a>
//                     <div>
//                         <button className="btn btn-block btn-sm mt-2" type="submit">Login</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
