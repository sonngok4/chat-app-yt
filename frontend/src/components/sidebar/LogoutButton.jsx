import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";
function LogoutButton() {
    const { loading, logout } = useLogout();
    return (
        <div className="mt-auto">
            {!loading ?
                <button className="btn btn-sm btn-circle bg-transparent border-none hover:bg-sky-500 hover:text-black text-white transition-all duration-300"
                    onClick={logout}><CiLogout className="w-6 h-6 outline-none" />
                </button>
                :
                <button className="btn btn-sm btn-circle bg-transparent border-none hover:bg-sky-500 hover:text-black text-white transition-all duration-300"
                    disabled><CiLogout className="w-6 h-6 outline-none" />
                </button>}
        </div>
    )
}

export default LogoutButton