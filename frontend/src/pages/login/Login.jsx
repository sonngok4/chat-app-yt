// Desc: Login page for users to login to their account

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                <form action="">
                    <div>
                        <label htmlFor="email" className="label p-2">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full h-10"
                            required />
                    </div>
                    <div>
                        <label htmlFor="password" className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full h-10"
                            required />
                    </div>
                    <div>
                        <a href="#" className="text-sm hover:underline hover:text-blue-600 text-gray-300 mt-2 inline-block">
                            Forgot password?
                        </a>
                    </div>
                    <span className="text-sm text-gray-300 mt-2 inline-block">
                        {"Don't have an account?"}
                    </span>
                    <a href="#" className="text-sm text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block">
                        Register
                    </a>
                    <div>
                        <button className="btn btn-block btn-sm mt-2" type="submit">Login</button>
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
