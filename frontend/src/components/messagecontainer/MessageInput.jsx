import { IoSendSharp } from "react-icons/io5";
function MessageInput() {
    return (
        <form action="" className="flex items-center gap-2 p-4 my-3">
            <div className="w-full rounded-full overflow-auto relative">
                <input
                    type="text"
                    name="message"
                    id="message"
                    className="w-full h-full text-sm border border-gray-300 rounded-lg px-4 py-2 text-black"
                    placeholder="Type your message" />
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <IoSendSharp className="text-blue-500 size-5" />
                </button>
            </div>
        </form>
    )
}

export default MessageInput

// STARTER CODE SNIPPET:
// import { IoSendSharp } from "react-icons/io5";
// function MessageInput() {
//     return (
//         <form action="" className="flex items-center gap-2 p-4 my-3">
//             <div className="w-full rounded-full overflow-auto relative">
//                 <input
//                     type="text"
//                     name="message"
//                     id="message"
//                     className="w-full h-full text-sm border border-gray-300 rounded-lg px-4 py-2 text-black"
//                     placeholder="Type your message" />
//                 <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
//                     <IoSendSharp className="text-blue-500 size-5" />
//                 </button>
//             </div>
//         </form>
//     )
// }

// export default MessageInput