import { useEffect } from 'react';
import useConversation from '../../store/useConversation';
import { useSocketContext } from '../../context/SocketContext'; // Assume you have a socket context

const useMessageUpdates = () => {
    const { updateLatestMessage } = useConversation();
    const { socket } = useSocketContext();

    useEffect(() => {
        // Listen for new messages
        socket?.on('newMessage', (newMessage) => {
            // Update the latest message for the specific conversation
            updateLatestMessage(newMessage.conversationId, newMessage);
        });

        // Cleanup listener
        return () => {
            socket?.off('newMessage');
        };
    }, [socket, updateLatestMessage]);
};

export default useMessageUpdates;