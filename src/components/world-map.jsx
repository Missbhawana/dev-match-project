"use client"
import { useRef } from "react"
import { motion } from "framer-motion"
import DottedMap from "dotted-map"
import Image from "next/image"
import { useTheme } from "next-themes"

export function WorldMap({ dots = [], lineColor = "#0ea5e9" }) {
    const svgRef = useRef(null)
    const map = new DottedMap({ height: 100, grid: "diagonal" })
    const { theme } = useTheme()

    const svgMap = map.getSVG({
        radius: 0.22,
        color: theme === "dark" ? "#FFFFFF40" : "#00000040",
        shape: "circle",
        backgroundColor: theme === "dark" ? "black" : "white"
    })

    const projectPoint = (lat, lng) => {
        const x = ((lng + 180) / 360) * 800 // Scale longitudes to match SVG width
        const y = ((90 - lat) / 180) * 400  // Scale latitudes to match SVG height
        return { x, y }
    }

    const createCurvedPath = (start, end) => {
        const midX = (start.x + end.x) / 2
        const midY = Math.min(start.y, end.y) - 50
        return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
    }

    return (
        <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
            <Image
                src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                className="h-full w-full pointer-events-none select-none"
                alt="world map"
                height="495"
                width="1056"
                draggable={false}
            />
            <svg
                ref={svgRef}
                viewBox="0 0 800 400"
                className="w-full h-full absolute inset-0 pointer-events-none select-none"
            >
                {/* Animated Paths */}
                {dots.map((dot, i) => {
                    const startPoint = projectPoint(dot.start.lat, dot.start.lng)
                    const endPoint = projectPoint(dot.end.lat, dot.end.lng)
                    return (
                        <g key={`path-group-${i}`}>
                            <motion.path
                                d={createCurvedPath(startPoint, endPoint)}
                                fill="none"
                                stroke="url(#path-gradient)"
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.5 * i,
                                    ease: "easeOut"
                                }}
                            />
                        </g>
                    )
                })}

                <defs>
                    <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Pins (Start and End Points) */}
                {dots.map((dot, i) => {
                    const startPoint = projectPoint(dot.start.lat, dot.start.lng)
                    const endPoint = projectPoint(dot.end.lat, dot.end.lng)

                    return (
                        <g key={`points-group-${i}`}>
                            {/* Start Point */}
                            <g key={`start-${i}`}>
                                <circle cx={startPoint.x} cy={startPoint.y} r="4" fill={lineColor} />
                                <circle cx={startPoint.x} cy={startPoint.y} r="4" fill={lineColor} opacity="0.5">
                                    <animate attributeName="r" from="4" to="10" dur="1.5s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                                </circle>
                            </g>

                            {/* End Point */}
                            <g key={`end-${i}`}>
                                <circle cx={endPoint.x} cy={endPoint.y} r="4" fill={lineColor} />
                                <circle cx={endPoint.x} cy={endPoint.y} r="4" fill={lineColor} opacity="0.5">
                                    <animate attributeName="r" from="4" to="10" dur="1.5s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                                </circle>
                            </g>
                        </g>
                    )
                })}
            </svg>
        </div>
    )
}
