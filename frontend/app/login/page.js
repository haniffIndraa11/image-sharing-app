import React from 'react'

const Login = () => {
    return (
        <main>
            <div className="w-full h-screen flex justify-center items-center bg-opacity-25 bg-gray-400 ">
                <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg p-4">
                    <h1 className="text-center font-light text-4xl rounded-t-xl m-0 py-4">Sign In</h1>
                    <form className="p-6">
                        <input
                            type="email"
                            name=""
                            placeholder="Email"
                            className="py-2 px-3 w-full text-lg font-light outline-none" />
                        <input
                            type="password"
                            name=""
                            placeholder="Password"
                            className="py-2 px-3 w-full text-lg font-light outline-none mt-3" />
                        <div className="flex mt-5 justify-between items-center">
                            <a
                                className=" cursor-pointer p-2 rounded transition hover:border hover:bg-gray-500"
                                href="/register">Not Yet Registered?</a>
                            <button
                                type="submit"
                                className="font-medium p-2 transition-all hover:border rounded hover:bg-gray-500">Sign In</button>
                        </div>
                    </form>
                </aside>
            </div>
        </main>
    )
}

export default Login
