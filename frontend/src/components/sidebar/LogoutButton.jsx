import { CiLogout } from "react-icons/ci";
function LogoutButton() {
    return (
        <div className="mt-auto">
            <a href="#" className="btn btn-circle bg-transparent border-none hover:bg-sky-500 hover:text-black text-white transition-all duration-300">
                <CiLogout className="w-6 h-6 outline-none" />
            </a>
        </div>
    )
}

export default LogoutButton