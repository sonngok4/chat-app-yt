
function Message() {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full overflow-hidden">
                    <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="receiver avatar" />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500`}>Hi, how are you?</div>
            <div className="chat-footer opacity-50 text-sx flex gap-1 items-center">02/06/2023 11:59</div>
        </div>
    )
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