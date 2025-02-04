import ConversationList from "./ConversationList"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

function SideBar() {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col h-full'>
            <SearchInput />
            <div className="divider px-3"></div>
            <ConversationList />
            <LogoutButton />
        </div>
    )
}

export default SideBar


// STARTER CODE FOR THIS FILE:
// import ConversationList from "./ConversationList"
// import LogoutButton from "./LogoutButton"
// import SearchInput from "./SearchInput"

// function SideBar() {
//     return (
//         <div className='border-r border-slate-500 p-4 flex flex-col h-full'>
//             <SearchInput />
//             <div className="divider px-3"></div>
//             <ConversationList />
//             <LogoutButton />
//         </div>
//     )
// }

// export default SideBar