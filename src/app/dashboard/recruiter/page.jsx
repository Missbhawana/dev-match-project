"use client";
import { useState } from "react";
import { FaBars, FaTimes, FaBuilding, FaUserTie, FaSearch, FaBookmark, FaComments, FaRobot } from "react-icons/fa";

export default function RecruiterDashboard() {
    const [activeTab, setActiveTab] = useState("profile");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-white text-gray-800">
            {/* Sidebar */}
            <aside className={`fixed md:relative w-64 bg-gray-100 border-r border-gray-300 h-full p-6 space-y-6 flex flex-col transition-all duration-300 ${sidebarOpen ? "left-0" : "-left-64"} md:left-0`}>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">HireMatch</h2>
                    <button className="md:hidden text-gray-700" onClick={() => setSidebarOpen(false)}>
                        <FaTimes size={24} />
                    </button>
                </div>
                <nav className="space-y-4">
                    {[
                        { name: "profile", icon: <FaBuilding /> },
                        { name: "jobs", icon: <FaUserTie /> },
                        { name: "search", icon: <FaSearch /> },
                        { name: "saved", icon: <FaBookmark /> },
                        { name: "messages", icon: <FaComments /> },
                        { name: "ai", icon: <FaRobot /> },
                    ].map(({ name, icon }) => (
                        <button
                            key={name}
                            className={`flex items-center space-x-3 p-3 rounded-lg transition-transform hover:scale-105 w-full ${activeTab === name ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-blue-200 text-gray-800"
                                }`}
                            onClick={() => {
                                setActiveTab(name);
                                setSidebarOpen(false);
                            }}
                        >
                            {icon}
                            <span className="capitalize">{name}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Mobile Menu Button */}
            <button className="md:hidden fixed top-4 left-4 text-gray-700 z-50" onClick={() => setSidebarOpen(true)}>
                <FaBars size={24} />
            </button>

            {/* Main Content */}
            <div className="mt-6">
                <main className="flex-1 p-6 overflow-y-auto">
                    {activeTab === "profile" && (
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Company Profile</h2>
                            <input type="file" className="w-full mb-4 border border-gray-300 p-2 rounded-lg" />
                            <input type="text" placeholder="Company Name" className="w-full p-3 border border-gray-300 rounded-lg mb-4" />
                            <textarea placeholder="Company Description" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
                        </div>
                    )}
                    {activeTab === "jobs" && (
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Post Job Listings</h2>
                            <input type="text" placeholder="Job Title" className="w-full p-3 border border-gray-300 rounded-lg mb-4" />
                            <textarea placeholder="Job Description" className="w-full p-3 border border-gray-300 rounded-lg mb-4"></textarea>
                            <input type="text" placeholder="Required Skills" className="w-full p-3 border border-gray-300 rounded-lg mb-4" />
                            <input type="number" placeholder="Budget ($)" className="w-full p-3 border border-gray-300 rounded-lg mb-4" />
                        </div>
                    )}
                    {activeTab === "search" && (
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Developer Search</h2>
                            <input type="text" placeholder="Search by Skills" className="w-full p-3 border border-gray-300 rounded-lg mb-4" />
                            <input type="text" placeholder="Search by Location" className="w-full p-3 border border-gray-300 rounded-lg mb-4" />
                            <input type="number" placeholder="Experience (Years)" className="w-full p-3 border border-gray-300 rounded-lg mb-4" />
                        </div>
                    )}
                    {activeTab === "saved" && (
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Saved Candidates</h2>
                            <ul className="space-y-2">
                                {["John Doe - Frontend Developer", "Jane Smith - Backend Engineer"].map((candidate, index) => (
                                    <li key={index} className="p-3 bg-gray-200 rounded-lg">{candidate}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === "messages" && (
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Messaging System</h2>
                            <textarea placeholder="Type a message..." className="w-full p-3 border border-gray-300 rounded-lg mb-4"></textarea>
                            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg hover:scale-105 transition-transform">Send Message</button>
                        </div>
                    )}
                    {activeTab === "ai" && (
                        <div>
                            <h2 className="text-3xl font-bold mb-4">AI Hiring Assistant</h2>
                            <p className="text-gray-600">Automated candidate recommendations.</p>
                            <button className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-3 rounded-lg hover:scale-105 transition-transform">
                                Generate Recommendations
                            </button>
                            <div className="p-3 bg-gray-200 rounded-lg mt-4">AI is analyzing potential matches...</div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
