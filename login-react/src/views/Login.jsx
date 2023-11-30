import { Link } from "react-router-dom"

export default function Login() {
    const onSubmit = (e) => {
        e.prevenDefault()
    }

    return (
        <div className="Login">
            <div className="Container">
                <h1>Log In</h1>
                <form onSubmit={onSubmit}>
                    <input type="email" placeholder="Email" className="input"/>
                    <input type="password" placeholder="Password" className="input"/>
                    <button className="btn">Log In</button>
                </form>
                <p>Not Registered? <Link to="/signup" className="link" >Create an Account</Link></p>
            </div>
        </div>
    )
}
