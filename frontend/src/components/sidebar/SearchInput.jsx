import { IoSearchSharp } from "react-icons/io5";
function SearchInput() {
    return (
        <form action="" className="flex items-center gap-2 p-2">
            <input
                type="text"
                placeholder="Search"
                className="input input-bordered rounded-full w-full bg-slate-500 text-white bg-opacity-35 placeholder-gray-200"
            />
            <button type="submit" className="btn btn-circle bg-transparent outline-none border-none hover:bg-sky-500 hover:text-black text-white transition-colors duration-300">
                <IoSearchSharp className="w-6 h-6 outline-none" />
            </button>
        </form>
    )
}

export default SearchInput


// STARTER CODE SNIPPET:
// import { IoSearchSharp } from "react-icons/io5";
// function SearchInput() {
//     return (
//         <form action="" className="flex items-center gap-2 p-2">
//             <input
//                 type="text"
//                 placeholder="Search"
//                 className="input input-bordered rounded-full w-full"
//             />
//             <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//                 <IoSearchSharp className="w-6 h-6 outline-none" />
//             </button>
//         </form>
//     )
// }

// export default SearchInput