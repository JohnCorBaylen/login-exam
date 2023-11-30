import { Link } from "react-router-dom"

export default function Login() {
    const onSubmit = (e) => {
        e.prevenDefault()
    }

    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={onSubmit}>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password" />
                <button>Log In</button>
            </form>
            <p>Not Registered? <Link to="/signup">Create an Account</Link></p>
        </div>
    )
}
