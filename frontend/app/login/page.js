"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/libs/fetch/fetchAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const router = useRouter();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);

    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError("");
        setSuccessMessage("");

        const data = {
            email: email,
            password: password,
        };

        try {
            const result = await login(data);
            console.log("Login result:", result);
            if (result.token) {
                localStorage.setItem("token", result.token); // Update key to match response
                setEmail('');
                setPassword('');
                setSuccessMessage(
                    result.message || "Login successful. Redirecting..."
                );
                setTimeout(() => {
                    router.push("/");
                    setTimeout(() => {
                        window.location.reload();
                    }, 100);
                }, 2000);
            } else {
                setIsLoading(false);
                setError(result.message || "Email or password is incorrect");
            }
        } catch (error) {
            setIsLoading(false);
            if (error.response) {
                setError(
                    error.response.data.message || "Email or password is incorrect"
                );
            } else if (error.request) {
                setError("No response received from server. Please try again.");
            } else {
                setError("Email or password is incorrect");
            }
            console.error("Login error:", error);
        }
    };
    return (
        <main>
            <div className="w-full h-screen flex justify-center items-center bg-opacity-25 bg-gray-400 ">
                <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg p-4">
                    <h1 className="text-center font-light text-4xl rounded-t-xl m-0 py-4">Sign In</h1>
                    <form className="p-6" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            className="py-2 px-3 w-full text-lg font-light outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="py-2 px-3 w-full text-lg font-light outline-none mt-3"
                        />
                        {error && <p className="text-red-500 mt-3">{error}</p>}
                        {successMessage && <p className="text-green-500 mt-3">{successMessage}</p>}
                        <div className="flex mt-5 justify-between items-center">
                            <a
                                className="cursor-pointer p-2 rounded transition hover:border hover:bg-gray-500"
                                href="/register"
                            >
                                Not Yet Registered?
                            </a>
                            <button
                                type="submit"
                                className="font-medium p-2 transition-all hover:border rounded hover:bg-gray-500"

                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </aside>
            </div>
        </main>
    )
}

export default Login;
