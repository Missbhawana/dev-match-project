"use client";
import { useState, useEffect } from "react";
import { FaGithub, FaMapMarkerAlt, FaCog, FaUserFriends, FaBars, FaTimes } from "react-icons/fa";
import { MdWork, MdMessage, MdDashboard } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";

export default function DeveloperDashboard() {
    const [activeTab, setActiveTab] = useState("profile");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const savedTab = localStorage.getItem("activeTab");
        if (savedTab) setActiveTab(savedTab);
    }, []);

    useEffect(() => {
        localStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    const tabs = [
        { id: "profile", icon: <FaUserFriends />, label: "Profile" },
        { id: "portfolio", icon: <AiFillProject />, label: "Portfolio" },
        { id: "skills", icon: <MdWork />, label: "Skills" },
        { id: "jobs", icon: <MdDashboard />, label: "Job Recommendations" },
        { id: "activity", icon: <MdMessage />, label: "Activity Feed" },
        { id: "settings", icon: <FaCog />, label: "Settings" },
    ];

    return (
        <div className="flex h-screen bg-gray-100 text-gray-900 flex-col">
            {/* Header */}
            <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
                <h1 className="text-2xl font-bold">DevMatch</h1>
                <button className="text-white text-2xl md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
            </header>

            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className={`absolute md:relative w-64 bg-white p-6 shadow-lg transition-all duration-300 ${sidebarOpen ? "left-0" : "-left-64"} md:left-0 md:block`}>
                    <nav className="mt-6 space-y-3">
                        {tabs.map(({ id, icon, label }) => (
                            <button
                                key={id}
                                className={`flex items-center space-x-3 p-3 rounded-lg w-full text-gray-700 hover:bg-blue-100 transition-all ${activeTab === id ? "bg-blue-500 text-white" : ""}`}
                                onClick={() => {
                                    setActiveTab(id);
                                    setSidebarOpen(false);
                                }}
                            >
                                {icon} <span>{label}</span>
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8 bg-white shadow-md rounded-lg mx-6 my-4">
                    {activeTab === "profile" && (
                        <section>
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Profile Overview</h2>
                            <div className="flex items-center space-x-6">
                                <img src="https://avatar.iran.liara.run/public" alt="Avatar" className="w-20 h-20 rounded-full shadow-md" />
                                <div>
                                    <h3 className="text-xl font-bold">Shubham Chaudhary</h3>
                                    <p className="text-gray-600">Software Engineer</p>
                                    <p className="flex items-center text-gray-600"> <FaMapMarkerAlt className="mr-2" /> New York, USA</p>
                                </div>
                            </div>
                            <p className="mt-6 text-gray-700 leading-relaxed">A passionate developer with 5 years of experience in full-stack web development.</p>
                        </section>
                    )}
                    {activeTab === "portfolio" && (
                        <section>
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Portfolio Showcase</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-200 p-4 rounded-lg shadow-md">Project 1 - E-commerce Website</div>
                                <div className="bg-gray-200 p-4 rounded-lg shadow-md">Project 2 - AI Chatbot</div>
                                <div className="bg-gray-200 p-4 rounded-lg shadow-md">Project 3 - Social Media App</div>
                            </div>
                        </section>
                    )}
                    {activeTab === "skills" && (
                        <section>
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Skills & Endorsements</h2>
                            <ul className="space-y-2">
                                <li className="bg-gray-200 p-4 rounded-lg shadow">JavaScript (React, Node.js)</li>
                                <li className="bg-gray-200 p-4 rounded-lg shadow">Python (Django, Flask)</li>
                                <li className="bg-gray-200 p-4 rounded-lg shadow">Database Management (PostgreSQL, MongoDB)</li>
                            </ul>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
}
