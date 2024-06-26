import React from 'react'
import { Link } from 'react-router-dom';


export default function Register() {
  return (
    <body class="font-poppins h-screen w-screen flex flex-col">
  
    <div
        id="body"
        class="h-full lg:mx-24 flex flex-col items-center justify-center"
    >
        <div class="flex flex-col justify-around items-center gap-8 mb-16">
            <div
                id="registerForm"
                class="h-full flex flex-col justify-center bg-indigo-100 rounded-2xl px-4 py-8 shadow-xl border-2 border-black"
            >
                <form method="POST">
                  
                    <div
                        class="flex flex-col justify-center items-center gap-4"
                    >
                        <h1 class="text-primary text-3xl font-bold mb-2">
                            Create Account
                        </h1>
                        <p class="text-gray-500 text-sm text-center px-8 pb-4">
                            Create a new account.
                        </p>
                        <div
                            class="w-4/5 flex flex-row gap-4 justify-center items-center"
                        >
                            <input
                                type="text"
                                class="w-4/5 text-sm h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="First Name"
                                name="first_name"
                                required
                            />
                            <input
                                type="text"
                                class="w-4/5 text-sm h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Surname"
                                name="last_name"
                            />
                        </div>
                        <div
                            class="w-4/5 flex flex-row gap-4 justify-center items-center"
                        >
                            <input
                                type="text"
                                class="w-4/5 text-sm h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Username"
                                name="username"
                                required
                            />
                            <input
                                type="email"
                                class="w-4/5 text-sm h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Email"
                                name="email"
                            />
                        </div>
                        <div
                            class="w-4/5 flex flex-row gap-4 justify-center items-center"
                        >
                            <input
                                type="password"
                                class="w-4/5 text-sm h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Password"
                                name="password1"
                                required
                            />
                            <input
                                type="password"
                                class="w-4/5 text-sm h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Password Again"
                                name="password2"
                                required
                            />
                        </div>
                        <div
                            class="w-4/5 flex flex-row gap-4 justify-center items-center"
                        >
                         
                        </div>

                        <button
                            type="submit"
                            class="bg-white mt-2 h-12 w-4/5 rounded-2xl text-primary font-bold hover:bg-primary hover:text-white border-primary border-2"
                        >
                            Create Account
                        </button>
                        <p class="mt-2 text-grey-500 text-sm">
                            Already have an account?
                            <Link
                                to="/"
                                class="text-primary font-bold hover:text-secondary"
                            >
                                Login here.
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
  )
}
