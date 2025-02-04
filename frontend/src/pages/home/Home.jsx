// Desc: Home page for logged in users

import SideBar from "../../components/sidebar/SideBar";
import MessageContainer from "../../components/messagecontainer/MessageContainer";

export default function Home() {
    return (
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <SideBar />
            <MessageContainer />
        </div>
    )
}
