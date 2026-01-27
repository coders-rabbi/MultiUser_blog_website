import React, { useContext } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Handle Email/Password Login
        login(email, password)
            .then((userCredential) => {
                Swal.fire({
                    title: "Welcome Back!",
                    text: "Login successful!",
                    icon: "success"
                });
                // Optional: useNavigate() to redirect user here
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error",
                    text: error.message,
                    icon: "error"
                });
            });
    };

    // Handle Google Sign-In
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {

            })
            .catch(error => {
                console.error("Google Error:", error.message);
            });
    };

    return (
        <div>
            <div>
                <h1 className='text-center text-black text-2xl'>Login Here !</h1>
            </div>
            <div className='w-[400px] mx-auto mt-10 p-7 border border-gray-300 rounded-lg shadow-lg'>

                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input w-full" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input name="password" type="password" className="input w-full" placeholder="Password" required />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type="submit" className="btn btn-neutral mt-4 w-full">Login</button>
                    </fieldset>
                </form>

                <div className="divider">OR</div>
                <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-outline btn-primary w-full mt-2"
                >
                    Continue with Google
                </button>
                <div className="divider">Sign Up</div>
                <Link to="/register" className="btn btn-outline btn-secondary w-full mt-2">Sign Up</Link>
            </div>
        </div>
    );
};

export default Login;