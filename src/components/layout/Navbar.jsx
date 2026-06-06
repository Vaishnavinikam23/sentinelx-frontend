import { Shield, Bell, LogOut } from "lucide-react";

function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
            <div className="flex h-16 items-center justify-between px-6">

                <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-blue-600 p-2">
                        <Shield size={20} className="text-white" />
                    </div>

                    <div>
                        <h1 className="text-lg font-bold text-white">
                            SentinelX
                        </h1>

                        <p className="text-xs text-slate-400">
                            Security Operations Center
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-6">

                    <button className="relative">
                        <Bell
                            size={20}
                            className="text-slate-400"
                        />

                        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
                    </button>

                    <div className="text-right">
                        <p className="text-sm font-medium text-white">
                            SOC Analyst
                        </p>

                        <p className="text-xs text-slate-400">
                            Active Session
                        </p>
                    </div>

                    <button className="flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800">
                        <LogOut size={16} />
                        Logout
                    </button>

                </div>
            </div>
        </header>
    );
}

export default Navbar;