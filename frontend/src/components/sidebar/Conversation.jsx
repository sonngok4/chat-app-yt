
function Conversation() {
    return (
        <>
            <div className="flex gap-2 items-center hover:bg-sky-500 hover:text-white p-2 rounded-lg cursor-pointer transition-all duration-300">
                <div className="avatar online">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden">
                        <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="user avatar" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200">John Doe</p>
                        <span className="text-xl">❤️</span>
                    </div>
                </div>
            </div>
            <div className="divider my-0 py-0 h-1"></div>
        </>
    )
}

export default Conversation


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