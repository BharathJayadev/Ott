import { Link } from "react-router-dom";

const Login = () => {
    return ( 
        <div id="login">
            <input type="email" placeholder="   Enter your email id" /><br />
            <input type="password" placeholder="   Enter your password"/><br />
            <input type="submit" value="Login"/>
            <div id="signup">
                <Link to='/signup'>New User Signup here</Link>
            </div>
        </div>
     );
}
 
export default Login;