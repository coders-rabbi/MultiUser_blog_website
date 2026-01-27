import React, { useContext } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const Register = () => {
    const { createAccount, googleLogin } = useContext(AuthContext);

    const handleRegistration = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const userCreatedData = { name, email, password, role: "user" };

        // createAccount(email, password)
        fetch("http://localhost:5000/user_create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userCreatedData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log("User Created:", data.user);
                Swal.fire({
                    title: "Good job!",
                    text: "Your account has been created successfully!",
                    icon: "success"
                });
            })
            .catch(error => {
                console.error("Error:", error.message);
            });

    }

    return (
        <div>
            <div>
                <h1 className='text-center text-black text-2xl'>Create Your Account !</h1>
            </div>
            <div className='w-[400px] mx-auto mt-10 p-7 border border-gray-300 rounded-lg shadow-lg'>
                <form onSubmit={handleRegistration}>
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input name="name" type="text" className="input w-full" placeholder="Name" required />

                        <label className="label">Email</label>
                        <input name="email" type="email" className="input w-full" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input name="password" type="password" className="input w-full" placeholder="Password" required />

                        <div>
                            <Link to="/login" className="link link-hover">Already have an account? Login</Link>
                        </div>

                        <button type="submit" className="btn btn-neutral mt-4 w-full">Register</button>
                    </fieldset>
                </form>

            </div>
        </div>
    );
};

export default Register;