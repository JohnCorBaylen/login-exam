import { Link } from "react-router-dom"

export default function Signup() {
    const onSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className="Signup">
            <div className="Container">
                <h1>Sign Up</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Full Name" className="input" />
                    <input type="email" placeholder="Email" className="input" />
                    <input type="password" placeholder="Password" className="input" />
                    <input type="password" placeholder="Confirm Password" className="input" />
                    <button className="btn">Sign In</button>
                </form>
                <p>Already Reagistered? <Link to="/login" className="link">Go to Login</Link></p>
            </div>
        </div>
    )
}
