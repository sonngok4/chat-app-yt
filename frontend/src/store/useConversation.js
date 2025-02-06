import { create } from 'zustand';

const useConversation = create(set => ({
	selectedConversation: null,
	setSelectedConversation: selectedConversation =>
		set({ selectedConversation }),
	messagesList: [],
	setMessagesList: messagesList => set({ messagesList }),
	sendMessage: message => {
		set(state => ({
			messagesList: [...state.messagesList, message],
		}));
	},
	resetMessage: () => set({ messagesList: [] }),
	updateLatestMessage: (conversationId, newMessage) => 
        set(state => {
            const updatedConversationList = state.conversationList?.map(conversation => 
                conversation._id === conversationId 
                    ? {
                        ...conversation, 
                        latestMessage: newMessage.content, 
                        latestMessageTime: newMessage.createdAt
                    }
                    : conversation
            );

            return {
                conversationList: updatedConversationList
            };
        }),
}));

export default useConversation;
