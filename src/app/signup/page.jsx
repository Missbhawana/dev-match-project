"use client";
import { useState } from "react";
import { Github, Facebook, Twitter, Linkedin } from "lucide-react";
import { FloatingPaths } from "@/components/FloatingPaths";
import FloatingNav from "@/components/floating-nav";
import Link from "next/link";
export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [userType, setUserType] = useState("developer");

    return (
        <>
            <FloatingNav />
            <div className="relative h-screen w-screen flex items-center justify-center bg-background text-foreground">
                <div className="absolute inset-0">
                    <FloatingPaths position={1} />
                    <FloatingPaths position={-1} />
                </div>
                <div className="relative z-10 w-96 p-6 bg-card bg-transparent">
                    <h2 className="text-3xl font-semibold text-center mb-6 animate-fade-in">
                        Sign Up
                    </h2>
                    {/* User Type Toggle */}
                    <div className="flex justify-center space-x-4 mb-4">
                        <button
                            className={`px-4 py-2 rounded-lg ${userType === "developer"
                                ? "bg-primary text-white"
                                : "bg-muted text-foreground"
                                }`}
                            onClick={() => setUserType("developer")}
                        >
                            Developer
                        </button>
                        <button
                            className={`px-4 py-2 rounded-lg ${userType === "recruiter"
                                ? "bg-primary text-white"
                                : "bg-muted text-foreground"
                                }`}
                            onClick={() => setUserType("recruiter")}
                        >
                            Recruiter
                        </button>
                    </div>
                    {/* Form */}
                    <form className="space-y-4">
                        {!isLogin && (
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full h-14 p-3 border border-border bg-input text-foreground rounded-lg focus:ring-2 focus:ring-primary"
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full h-14 p-3 border border-border bg-input text-foreground rounded-lg focus:ring-2 focus:ring-primary"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full h-14 p-3 border border-border bg-input text-foreground rounded-lg focus:ring-2 focus:ring-primary"
                        />
                        <button
                            type="submit"
                            className="w-full h-14 bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-transform transform hover:scale-105"
                        >
                            Sign Up
                        </button>
                    </form>
                    {/* Social Auth */}
                    <div className="flex items-center justify-center mt-6 space-x-4 animate-slide-in">
                        {[
                            { icon: <Github size={24} />, name: "GitHub" },
                            { icon: <Facebook size={24} className="text-blue-600" />, name: "Facebook" },
                            { icon: <Twitter size={24} className="text-blue-400" />, name: "Twitter" },
                            { icon: <Linkedin size={24} className="text-blue-500" />, name: "LinkedIn" },
                        ].map((social, index) => (
                            <button
                                key={index}
                                className="relative flex items-center justify-center bg-muted p-3 rounded-full hover:bg-muted-dark group shadow-md shadow-primary/50 transition-transform transform hover:scale-110"
                            >
                                {social.icon}
                                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-card text-foreground text-xs rounded-lg px-2 py-1 top-10">
                                    {social.name}
                                </span>
                            </button>
                        ))}
                    </div>
                    {/* Toggle Login/Signup */}
                    <p className="text-center mt-6 text-sm">
                        Already have an account?
                        <Link className="text-blue-500 hover:text-blue-700" href={"/login"}> login</Link>
                    </p>
                </div>
            </div>
        </>
    );
}
