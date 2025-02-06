import { useEffect, useRef } from "react";
import useGetMessagesList from "../../hooks/useGetMessagesList"
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message"
import useListenMessagesList from "../../hooks/useListenMessagesList";

function MessagesList() {

    const { messagesList, loading } = useGetMessagesList();

    useListenMessagesList();
    
    const messagesEndRef = useRef(null); // Ref để cuộn xuống cuối

    useEffect(() => {
        // Cuộn xuống cuối khi danh sách tin nhắn thay đổi
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messagesList, loading]);

    return (
        <div className="px-4 flex-1 overflow-auto">
            {!loading && messagesList.length > 0 && messagesList.map((message) => <Message key={message._id} message={message} />)}

            {loading && [...Array(5)].map((_, index) => <MessageSkeleton key={index} />)}

            {!loading && messagesList.length === 0 && (
                <p className="text-gray-500 text-center p-4">No messages</p>
            )}

            <div ref={messagesEndRef} />
        </div>
    )
}

export default MessagesList

// STARTER CODE SNIPPET:
// import Message from "./Message"

// function MessagesList() {
//     return (
//         <div className="px-4 flex-1 overflow-auto">
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//         </div>
//     )
// }

// export default MessagesList