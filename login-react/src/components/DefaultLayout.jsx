import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout() {
    const {user, token} = useStateContext()

    if(!token) {
        return <Navigate to="/login" />
    }

    return (
        <div>
            <nav>
                <div>
                    <h1>LOGO</h1>
                </div>
                <div>
                    <h1>Name: {user.name}</h1>
                    <a href="#">Logout</a>
                </div>
            </nav>
            <main className="outlet">
                <Outlet/>
            </main>
        </div>
    )
}
