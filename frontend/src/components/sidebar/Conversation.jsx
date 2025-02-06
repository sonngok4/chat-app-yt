
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import useConversation from '../../store/useConversation';
import formatMessageTime from '../../utils/formatMessageTime';
import { useSocketContext } from '../../context/SocketContext';

function Conversation({ conversation, lastIndex }) {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const [latestMessage, setLatestMessage] = useState(conversation.latestMessage);

    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();
    
    const isOnline = onlineUsers.includes(conversation._id);

    useEffect(() => {
        // Set latest message when selected conversation changes
        setLatestMessage(conversation.latestMessage);
        // cleanup function
        return () => {
            setSelectedConversation(null);
        }
    }, []);
    return (
        <>
            <div
                onClick={() => setSelectedConversation(conversation)}
                className={`flex gap-2 items-center p-2 rounded-lg cursor-pointer transition-all duration-300 ${isSelected ? 'bg-sky-400 text-white hover:bg-opacity-100' : 'hover:bg-sky-500 hover:bg-opacity-50 hover:text-white'}`}>
                <div className={`avatar ${isOnline ? 'online' : ''}`}>
                    <div className="w-12 h-12 relative rounded-full overflow-hidden">
                        <img src={conversation.avatar} alt="user avatar" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col">
                        <p className="font-bold text-gray-200">{conversation.name}</p>
                        <div className="flex">
                            <p className="text-xs truncate max-w-[150px]" >{truncateMessage(latestMessage)}</p>
                            {latestMessage ? <span className="text-xs whitespace-nowrap">
                                &nbsp;&bull;&nbsp;{formatMessageTime(conversation.latestMessageTime)}</span> : null}
                            {/* "&bull;" is the unicode character for a bullet " */}
                            {/* "&nbsp;" is the unicode character for a space */}
                        </div>
                    </div>
                </div>
            </div>
            {!lastIndex && <div className="divider my-0 py-0 h-1"></div>}
        </>
    )
}

Conversation.propTypes = {
    conversation: PropTypes.object.isRequired,
    lastIndex: PropTypes.bool.isRequired,
}

export default Conversation


const truncateMessage = (message, maxLength = 30) => {
    if (!message) return '';
    if (message.length <= maxLength) return message;
    return message.substring(0, maxLength).trim() + '...';
};

//  STARTER CODE SNIPPET
// function Conversation() {
//     return (
//         <>
//             <div className="flex gap-2 items-center hover:bg-sky-500 hover:text-white p-2 rounded-lg cursor-pointer transition-all duration-300">
//                 <div className="avatar online">
//                     <div className="w-12 h-12 relative rounded-full overflow-hidden">
//                         <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="user avatar" />
//                     </div>
//                 </div>
//                 <div className="flex flex-col flex-1">
//                     <div className="flex gap-3 justify-between">
//                         <p className="font-bold text-gray-200">John Doe</p>
//                         <span className="text-xl">❤️</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="divider my-0 py-0 h-1"></div>
//         </>
//     )
// }

// export default Conversation