import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../store/useConversation";

const useGetMessagesList = () => {
    const [loading, setLoading] = useState(false);
    const { messagesList, setMessagesList, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessagesList = async () => {
					setLoading(true);
					try {
						const res = await fetch(
							`api/messages/${selectedConversation._id}`,
							{
								method: 'GET',
								headers: {
									'Content-Type': 'application/json',
								},
							},
						);

						if (!res.ok) {
							throw new Error(res.statusText);
						}

                        const data = await res.json();                

						if (data.error) {
							throw new Error(data.error);
						}
                        
						// Update messages list in the store
						setMessagesList(data.messages);
					} catch (error) {
						toast.error(error.message);
					} finally {
						setLoading(false);
					}
				};

                if (selectedConversation?._id) getMessagesList();
    }, [selectedConversation?._id, setMessagesList])
    
    return { loading, messagesList };
};

export default useGetMessagesList;
