"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSearch, FaBriefcase, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import FloatingNav from "@/components/floating-nav";
import { FloatingPaths } from "@/components/FloatingPaths";
const jobData = [
    { id: 1, company: "Google", title: "Software Engineer", location: "Remote", salary: "$120k", skills: ["React", "Node.js"] },
    { id: 2, company: "Microsoft", title: "AI Developer", location: "On-site", salary: "$130k", skills: ["Python", "AI"] },
    { id: 3, company: "Tesla", title: "Data Scientist", location: "Hybrid", salary: "$140k", skills: ["SQL", "Machine Learning"] },
];

export default function JobListings() {
    const [search, setSearch] = useState("");
    const [filteredJobs, setFilteredJobs] = useState(jobData);

    const handleSearch = () => {
        setFilteredJobs(
            jobData.filter(job => job.title.toLowerCase().includes(search.toLowerCase()) || job.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase())))
        );
    };

    return (
        <>
            <FloatingNav name="/jobs" />
            <div className="fixed inset-0 z-[-10]">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="p-6   min-h-screen">
                <h1 className="text-3xl text-black font-bold mb-4">Job Listings</h1>
                <div className="flex gap-3 mb-6">
                    <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by skill or title..." className="w-full" />
                    <Button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 flex items-center gap-2">
                        <FaSearch /> Search
                    </Button>
                </div>

                <h2 className="text-2xl text-black font-semibold mb-4">Featured Jobs</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job) => (
                        <div key={job.id} className="bg-transparent backdrop-blur-xl backdrop-saturate-200
text-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
                            <h3 className="text-xl font-semibold  text-black flex items-center gap-2">
                                <FaBriefcase /> {job.title}
                            </h3>
                            <p className="text-gray-400 flex items-center gap-2 mt-2">
                                <FaMapMarkerAlt /> {job.location}
                            </p>
                            <p className="text-green-400 flex items-center gap-2 mt-2">
                                <FaDollarSign /> {job.salary}
                            </p>
                            <p className="mt-2">Key Skills: <span className="text-blue-300">{job.skills.join(", ")}</span></p>
                            <Button className="mt-3 bg-green-500 hover:bg-green-700 w-full">Apply Now</Button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}