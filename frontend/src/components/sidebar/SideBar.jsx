import { useAuthContext } from "../../context/AuthContext"
import ConversationList from "./ConversationList"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

function SideBar() {
    const { authUser } = useAuthContext();
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col h-full'>
            <SearchInput />
            <div className="divider px-3"></div>
            <ConversationList />
            <div className="mt-auto flex justify-between items-center p-3">
                <LogoutButton />
                <div className="flex gap-2 items-center">
                    <button className="btn btn-circle bg-transparent border-slate-500 hover:bg-blue-500 hover:border-blue-500 btn-sm">
                        <img src={authUser.avatar} alt=""/>
                    </button>
                    <p className="font-bold text-white">{authUser.name}</p>
                </div>
            </div>
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