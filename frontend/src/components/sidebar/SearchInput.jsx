import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversationList from "../../hooks/useGetConversationList";
import useConversation from "../../store/useConversation";

function SearchInput() {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversationList } = useGetConversationList();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search.trim()) {
            setSelectedConversation(null);
            return;
        };
        // Perform search logic here

        const conversation = conversationList.find(conv => conv.name.toLowerCase().includes(search.toLowerCase()));
        if (conversation) {
            setSelectedConversation(conversation);
        } else {
            setSelectedConversation(null);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 p-2" onChange={handleSubmit}>
            <input
                type="text"
                placeholder="Search"
                className="input input-bordered rounded-full w-full bg-slate-500 text-white bg-opacity-35 placeholder-gray-200"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn btn-circle bg-transparent outline-none border-none hover:bg-sky-500 hover:text-black text-white transition-colors duration-300">
                <IoSearchSharp className="w-6 h-6 outline-none" />
            </button>
        </form>
    )
}

export default SearchInput


// STARTER CODE SNIPPET:
// import { IoSearchSharp } from "react-icons/io5";
// function SearchInput() {
//     return (
//         <form action="" className="flex items-center gap-2 p-2">
//             <input
//                 type="text"
//                 placeholder="Search"
//                 className="input input-bordered rounded-full w-full"
//             />
//             <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//                 <IoSearchSharp className="w-6 h-6 outline-none" />
//             </button>
//         </form>
//     )
// }

// export default SearchInput