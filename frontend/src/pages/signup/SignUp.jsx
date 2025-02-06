// Desc: Sign up page

import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";
import GenderCheckbox from "./GenderCheckbox";

export default function SignUp() {
    const [signUpForm, setSignUpForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signUp } = useSignUp();
    const handleCheckboxChange = (gender) => {
        setSignUpForm({ ...signUpForm, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(signUpForm);

    }
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    SignUp
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="label p-2">
                            <span className="text-base label-text text-white">Full Name</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            className="input input-bordered w-full h-10 text-white bg-slate-500 bg-opacity-35 placeholder-gray-400"
                            value={signUpForm.name}
                            onChange={(e) => setSignUpForm({ ...signUpForm, name: e.target.value })}
                            required />
                    </div>
                    <div>
                        <label htmlFor="email" className="label p-2">
                            <span className="text-base label-text text-white">Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full h-10 text-white bg-slate-500 bg-opacity-35 placeholder-gray-400"
                            value={signUpForm.email}
                            onChange={(e) => setSignUpForm({ ...signUpForm, email: e.target.value })}
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
                            className="input input-bordered w-full h-10 text-white bg-slate-500 bg-opacity-35 placeholder-gray-400"
                            value={signUpForm.password}
                            onChange={(e) => setSignUpForm({ ...signUpForm, password: e.target.value })}
                            required />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="label p-2">
                            <span className="text-base label-text text-white">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full h-10 text-white bg-slate-500 bg-opacity-35 placeholder-gray-400"
                            value={signUpForm.confirmPassword}
                            onChange={(e) => setSignUpForm({ ...signUpForm, confirmPassword: e.target.value })}
                            required />
                    </div>
                    <div>
                        <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={signUpForm.gender} />
                    </div>
                    <span className="text-sm mt-2 inline-block">
                        {"Already have an account?"}
                    </span>
                    <Link to={"/login"} className="text-sm text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block">
                        Login
                    </Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 hover:text-white" type="submit" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Sign  Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// STARTER CODE FOR SIGN UP COMPONENT
// import GenderCheckbox from "./GenderCheckbox";

// export default function SignUp() {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//                 <h1 className="text-3xl font-semibold text-center text-gray-300">
//                     SignUp
//                     <span className="text-blue-500"> ChatApp</span>
//                 </h1>
//                 <form action="">
//                     <div>
//                         <label htmlFor="name" className="label p-2">
//                             <span className="text-base label-text">Full Name</span>
//                         </label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             placeholder="Enter your full name"
//                             className="input input-bordered w-full h-10"
//                             required />
//                     </div>
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
//                         <label htmlFor="confirm-password" className="label p-2">
//                             <span className="text-base label-text">Confirm Password</span>
//                         </label>
//                         <input
//                             type="password"
//                             id="confirm-password"
//                             name="confirm-password"
//                             placeholder="Enter your password"
//                             className="input input-bordered w-full h-10"
//                             required />
//                     </div>
//                     <div>
//                         <GenderCheckbox />
//                     </div>
//                     <span className="text-sm mt-2 inline-block">
//                         {"Already have an account?"}
//                     </span>
//                     <a href="#" className="text-sm text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block">
//                         Login
//                     </a>
//                     <div>
//                         <button className="btn btn-block btn-sm mt-2" type="submit">SignUp</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
