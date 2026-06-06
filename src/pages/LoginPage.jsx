import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { saveToken } from "../utils/tokenStorage";

function LoginPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = await login(formData);

            console.log("TOKEN:", token);

            saveToken(token);

            navigate("/");
        } catch (err) {
            console.error(err);
            setError("Invalid credentials");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#020617] px-6">
            <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl lg:grid-cols-2">

                {/* Left Panel */}
                <div className="hidden border-r border-slate-800 p-12 lg:flex lg:flex-col lg:justify-between">
                    <div>
                        <h1 className="text-5xl font-bold tracking-tight text-white">
                            Sentinel<span className="text-blue-500">X</span>
                        </h1>

                        <p className="mt-3 text-lg text-slate-400">
                            Security Operations Center
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-4 text-3xl font-bold text-white">
                            Real-Time Threat Monitoring
                        </h2>

                        <p className="max-w-md text-slate-400 leading-7">
                            Monitor security events, investigate threats,
                            visualize attack patterns, and receive
                            real-time alerts through a centralized SOC dashboard.
                        </p>
                    </div>

                    <div className="text-sm text-slate-500">
                        © 2026 SentinelX Platform
                    </div>
                </div>

                {/* Right Panel */}
                <div className="flex items-center justify-center p-10 lg:p-16">
                    <div className="w-full max-w-md">

                        <h2 className="text-4xl font-bold text-white">
                            Welcome Back
                        </h2>

                        <p className="mt-3 mb-10 text-slate-400">
                            Sign in to access your security dashboard
                        </p>

                        {error && (
                            <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Username
                                </label>

                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-4 text-white outline-none transition-all duration-200 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-4 text-white outline-none transition-all duration-200 focus:border-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-blue-700"
                            >
                                Sign In
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;