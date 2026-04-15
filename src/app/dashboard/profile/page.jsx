"use client"
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Star, GitHub, Mail, Image } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingPaths } from "@/components/FloatingPaths";
import FloatingNav from "@/components/floating-nav";
const DeveloperProfile = () => {
    const skills = [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 80 },
    ];

    const projects = [
        { name: "Portfolio Website", link: "#" },
        { name: "E-commerce App", link: "#" },
        { name: "Task Manager", link: "#" },
    ];

    const experiences = [
        { company: "TechCorp", role: "Senior Developer", description: "Led development of web applications." },
        { company: "WebSolutions", role: "Frontend Engineer", description: "Built responsive UI components." },
    ];

    const testimonials = [
        { name: "John Doe", review: "Amazing work! Very professional and skilled." },
        { name: "Jane Smith", review: "Delivered great results on time." },
    ];

    return (
        <>
            <FloatingNav name="/developers" />
            <div className="fixed inset-0 z-[-10]">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <motion.div
                className="max-w-4xl mx-auto p-6 space-y-6 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >

                <Card className="p-6 flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="https://avatar.iran.liara.run/public" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-2xl font-bold">Shubham Chaudhary</h2>
                        <p className="text-gray-600">Full-Stack Developer | React & Node.js</p>
                    </div>
                </Card>

                {/* Skills & Expertise */}
                <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
                    {skills.map((skill, index) => (
                        <div key={index} className="mb-2">
                            <div className="flex justify-between items-center">
                                <p>{skill.name}</p>
                                <span className="text-gray-700 font-medium">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} />
                        </div>
                    ))}
                </Card>

                {/* Portfolio Section */}
                <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
                    {projects.map((project, index) => (
                        <div key={index} className="mb-4">
                            <div className="w-full h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                                <Image size={48} className="text-gray-500" />
                            </div>
                            <p className="text-blue-500 cursor-pointer mt-2">{project.name}</p>
                        </div>
                    ))}
                </Card>

                {/* Work Experience */}
                <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-4">
                            <h4 className="font-bold">{exp.role} - {exp.company}</h4>
                            <p className="text-gray-600">{exp.description}</p>
                        </div>
                    ))}
                </Card>

                {/* Ratings & Reviews */}
                <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Ratings & Reviews</h3>
                    {testimonials.map((test, index) => (
                        <div key={index} className="mb-4">
                            <p className="font-semibold">{test.name}</p>
                            <p className="text-gray-600">{test.review}</p>
                        </div>
                    ))}
                </Card>

                {/* Availability & Rates */}
                <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Availability & Rates</h3>
                    <p>Open for work</p>
                    <p>Hourly Rate: $50/hr</p>
                    <p>Project-based: Available on request</p>
                </Card>

                {/* Contact CTA */}
                <Card className="p-6 flex justify-between items-center">
                    <p>Interested in working together?</p>
                    <Button className="flex items-center space-x-2">
                        <Mail size={16} />
                        <span>Contact Me</span>
                    </Button>
                </Card>
            </motion.div>
        </>
    );
};

export default DeveloperProfile;
