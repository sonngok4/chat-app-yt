import useGetConversationList from "../../hooks/useGetConversationList";
import Conversation from "./Conversation";

function ConversationList() {
    const { loading, conversationList } = useGetConversationList();

    return (
        <div className="flex py-3 flex-col overflow-auto">
            {conversationList.map((conversation, index) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    lastIndex={index === conversationList.length - 1} />
            ))}
            {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
        </div>
    )
}

export default ConversationList


// STARTER CODE SNIPPET
// import Conversation from "./Conversation"

// function ConversationList() {
//     return (
//         <div className="flex py-2 flex-col overflow-auto">
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//             <Conversation />
//         </div>
//     )
// }

// export default ConversationList