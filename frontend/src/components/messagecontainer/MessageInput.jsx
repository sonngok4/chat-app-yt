import { IoSendSharp } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";
function MessageInput() {
    const [message, setMessage] = useState('');
    const { loading, sendMessage } = useSendMessage();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        await sendMessage(message)
        setMessage('');
    }
    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4">
            <div className="w-full rounded-full overflow-auto relative">
                <input
                    type="text"
                    name="message"
                    id="message"
                    className="w-full h-full text-sm border border-gray-300 rounded-lg px-4 py-2 text-black"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message" />
                {message ? <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    {loading ? <span className="loading loading-spinner"></span> : <IoSendSharp className="text-blue-500 size-5" />}
                </button> : null}
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