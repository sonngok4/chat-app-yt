import { useEffect } from "react";
import { IoIosClose, IoIosSearch } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../store/useConversation";
import MessageInput from "./MessageInput";
import MessagesList from "./MessagesList.jsx";

function MessageContainer() {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {

        // cleanup functions
        return () => {
            setSelectedConversation(null);
        }
    }, [setSelectedConversation])
    return (
        <div className="md:min-w-[450px] flex flex-col">
            {!selectedConversation ? <NoChatSelected /> : (
                <>
                    <div className="flex bg-slate-500 justify-between items-center px-3">
                        <div>
                            <span className="label-text">To:&nbsp;</span>
                            {/* "&nbsp;" is the unicode character for a space */}
                            <span className="text-gray-900 font-bold">{selectedConversation.name}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <button className="btn btn-circle bg-transparent border-none hover:bg-transparent hover:text-black text-white transition-all duration-300">
                                <IoIosSearch className="w-6 h-6 text-3xl" />
                            </button>

                            <button onClick={() => setSelectedConversation(null)} className="btn btn-circle bg-transparent border-none hover:bg-transparent hover:text-black text-white transition-all duration-300">
                                <IoIosClose size={40} className="w-10 h-10 text-3xl" />
                            </button>
                        </div>
                    </div>
                    <MessagesList />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="p-4 text-center text-gray-400 text-sm sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2">
                <span>No chat selected.</span>
                <span>Click on a conversation to start a conversation.</span>
                <TiMessages size={50} className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}

// STARTER CODE FOR THIS FILE:
// import MessagesList from "./MessagesList.jsx"
// import MessageInput from "./MessageInput"

// function MessageContainer() {
//     return (
//         <div className="md:min-w-[450px] flex flex-col">
//             <>
//                 <div className="bg-slate-500 p-4 flex items-center">
//                     <span className="label-text">To:&nbsp;</span>
//                     <span className="text-gray-900 font-bold"> John Doe</span>
//                 </div>
//                 <MessagesList />
//                 <MessageInput />
//             </>
//         </div>
//     )
// }

// export default MessageContainer