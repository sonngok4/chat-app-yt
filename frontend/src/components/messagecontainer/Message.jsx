import PropTypes from 'prop-types';
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../store/useConversation';
import formatMessageTime from '../../utils/formatMessageTime';

function Message({ message }) {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();

    const fromMe = message.senderId === authUser._id;

    const chatClassName = fromMe ? 'chat chat-end' : 'chat chat-start';

    const avatar = fromMe ? authUser.avatar : selectedConversation.avatar;

    const bubbleColor = fromMe ? 'bg-blue-500' : 'bg-gray-100';

    const messageColor = fromMe ? 'text-white' : 'text-black';

    const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div className={`${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full overflow-hidden">
                    <img src={avatar} alt="receiver avatar" />
                </div>
            </div>
            <div className={`chat-bubble ${messageColor} ${bubbleColor} ${shakeClass}`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-sx flex gap-1 items-center">{formatMessageTime(message.createdAt)}</div>
        </div>
    )
}

Message.propTypes = {
    message: PropTypes.object.isRequired,
}

export default Message


// STARTER CODE FOR THIS FILE
// function Message() {
//     return (
//         <div className="chat chat-end">
//             <div className="chat-image avatar">
//                 <div className="w-10 rounded-full overflow-hidden">
//                     <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="receiver avatar" />
//                 </div>
//             </div>
//             <div className={`chat-bubble text-white bg-blue-500`}>Hi, how are you?</div>
//             <div className="chat-footer opacity-50 text-sx flex gap-1 items-center">02/06/2023 11:59</div>
//         </div>
//     )
// }

// export default Message