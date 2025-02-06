import { useEffect } from 'react';
import notificationSound from '../assets/sounds/notification.mp3';
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../store/useConversation';

const useListenMessagesList = () => {
	const { socket } = useSocketContext();
	const { messagesList, setMessagesList } = useConversation();

	useEffect(() => {
        // Listen for new messages
        socket?.on("newMessage", (newMessage) => { 
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessagesList([...messagesList, newMessage]);
        })

        return () => socket?.off("newMessage"); // Cleanup listener when component unmounts
	}, [socket, messagesList, setMessagesList]);
};

export default useListenMessagesList;
