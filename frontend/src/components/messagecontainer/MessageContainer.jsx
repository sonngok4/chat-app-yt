import { TiMessages } from "react-icons/ti";
import MessageInput from "./MessageInput";
import MessagesList from "./MessagesList.jsx";

function MessageContainer() {
    const noChatSelected = true;
    return (
        <div className="md:min-w-[450px] flex flex-col">
            {noChatSelected ? <NoChatSelected /> : (
                <>
                    <div className="bg-slate-500 p-4 flex items-center">
                        <span className="label-text">To:&nbsp;</span>
                        <span className="text-gray-900 font-bold"> John Doe</span>
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