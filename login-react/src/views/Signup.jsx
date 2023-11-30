import { Link } from "react-router-dom"

export default function Signup() {
    const onSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>Sign In</button>
            </form>
            <p>Already Reagistered? <Link to="/login" >Go to Login</Link></p>
        </div>
    )
}
