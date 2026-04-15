"use client"
import { FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FloatingPaths } from "@/components/FloatingPaths";
import FloatingNav from "@/components/floating-nav";
const developers = [
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 1,
        name: "John Doe",
        role: "Full-Stack Developer",
        location: "New York, USA",
        skills: ["React", "Node.js", "MongoDB"],
        avatar: "/avatars/john.png",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe"
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Frontend Developer",
        location: "San Francisco, USA",
        skills: ["JavaScript", "Tailwind CSS", "Next.js"],
        avatar: "/avatars/jane.png",
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith"
    },
    {
        id: 3,
        name: "Gaurav Sharma",
        role: "Backend Developer",
        location: "Mathura, India",
        skills: ["Node.js", "Express", "Redis"],
        avatar: "/avatars/gaurav.png",
        github: "https://github.com/gauravsharma",
        linkedin: "https://linkedin.com/in/gauravsharma"
    }
];
import Link from "next/link"
export default function DevelopersPage() {
    return (
        <>
            <FloatingNav name="/developers" />
            <div className="fixed inset-0 z-[-10]">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="min-h-screen  p-8">
                <h1 className="text-3xl font-semibold text-center mb-8">Meet Our Developers</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {developers.map((dev) => (
                        <Link key={dev.id} href={"/dashboard/profile"}>
                            <div className="bg-transparent backdrop-blur-xl backdrop-saturate-200p-6 rounded-lg shadow-lg flex flex-col items-center">
                                <img src="https://avatar.iran.liara.run/public" alt={dev.name} className="w-24 h-24 rounded-full mb-4" />
                                <h2 className="text-xl font-semibold">{dev.name}</h2>
                                <p className="text-gray-400">{dev.role}</p>
                                <p className="flex items-center text-gray-400 mt-1">
                                    <FaMapMarkerAlt className="mr-1" /> {dev.location}
                                </p>
                                <div className="mt-3">
                                    {dev.skills.map((skill, index) => (
                                        <span key={index} className="bg-blue-600 px-3 py-1 text-sm rounded-full mr-2">{skill}</span>
                                    ))}
                                </div>
                                <div className="flex mt-4 space-x-4">
                                    <a href={dev.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                        <FaLinkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
