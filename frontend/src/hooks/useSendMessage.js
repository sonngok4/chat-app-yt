import { useState } from 'react';
import toast from 'react-hot-toast';
import useConversation from '../store/useConversation';

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const {
		messagesList,
		setMessagesList,
		selectedConversation,
	} = useConversation();

	const sendMessage = async message => {
		setLoading(true);
		try {
			const res = await fetch(
				`/api/messages/send/${selectedConversation._id}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ message }),
				},
			);
			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.error);
			}
			setMessagesList([...messagesList, data]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { sendMessage, loading };
};

export default useSendMessage;
