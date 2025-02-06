import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client';

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([]);

    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io("https://chat-app-yt-eic6.onrender.com/", {
                query: {
                    userId: authUser._id,
                }
            });

            setSocket(socket);

            // socket.on() is listen to the events, can be used to both on client and server side
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            })

            return () => socket.close();

        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }

        return () => {
            if (socket) {
                socket.disconnect();
            }
        };
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, setSocket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    )
}

SocketContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}