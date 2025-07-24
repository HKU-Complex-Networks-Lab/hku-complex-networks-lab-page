'use client'

import { useEffect, useRef } from 'react'

interface Node {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    connections: Set<number>
    originalConnections: Set<number>
    angle: number
}

export function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number>()
    const nodesRef = useRef<Node[]>([])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const createSmallWorldNetwork = () => {
            const N = Math.max(100, Math.floor(Math.min(canvas.width, canvas.height) / 25)) // Number of nodes
            const k = Math.max(4, Math.floor(N / 8)) // Each node connects to k nearest neighbors (must be even)
            const p = 0.5 // Rewiring probability
            
            const nodes: Node[] = []
            const centerX = canvas.width / 2
            const centerY = canvas.height / 2
            const radius = Math.min(canvas.width, canvas.height) * 0.5

            // Step 1: Create ring of N nodes
            for (let i = 0; i < N; i++) {
                const angle = (2 * Math.PI * i) / N
                nodes.push({
                    x: centerX + radius * Math.cos(angle),
                    y: centerY + radius * Math.sin(angle),
                    vx: (Math.random() - 0.5) * 0.2,
                    vy: (Math.random() - 0.5) * 0.2,
                    radius: Math.random() * 2 + 2,
                    connections: new Set<number>(),
                    originalConnections: new Set<number>(),
                    angle: angle
                })
            }

            // Step 2: Connect each node with its k neighbors (k/2 to left, k/2 to right)
            for (let i = 0; i < N; i++) {
                for (let j = 1; j <= k / 2; j++) {
                    const leftNeighbor = (i - j + N) % N
                    const rightNeighbor = (i + j) % N
                    
                    nodes[i].connections.add(leftNeighbor)
                    nodes[i].connections.add(rightNeighbor)
                    nodes[i].originalConnections.add(leftNeighbor)
                    nodes[i].originalConnections.add(rightNeighbor)
                }
            }

            // Step 3: Rewire edges with probability p
            for (let i = 0; i < N; i++) {
                const connectionsToRewire = Array.from(nodes[i].originalConnections)
                
                connectionsToRewire.forEach(neighbor => {
                    if (Math.random() < p && i < neighbor) { // Only rewire once per edge
                        // Remove original connection
                        nodes[i].connections.delete(neighbor)
                        nodes[neighbor].connections.delete(i)
                        
                        // Find a new random target (avoiding self and existing connections)
                        let newTarget: number
                        let attempts = 0
                        do {
                            newTarget = Math.floor(Math.random() * N)
                            attempts++
                        } while (
                            (newTarget === i || 
                            nodes[i].connections.has(newTarget) ||
                            newTarget === neighbor) &&
                            attempts < 50
                        )
                        
                        // Add new random connection if valid target found
                        if (attempts < 50) {
                            nodes[i].connections.add(newTarget)
                            nodes[newTarget].connections.add(i)
                        } else {
                            // Keep original connection if no valid target found
                            nodes[i].connections.add(neighbor)
                            nodes[neighbor].connections.add(i)
                        }
                    }
                })
            }

            nodesRef.current = nodes
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            const nodes = nodesRef.current

            // Draw connections with different styles for original vs rewired
            nodes.forEach((node, i) => {
                node.connections.forEach(connectionIndex => {
                    if (i < connectionIndex) { // Draw each edge only once
                        const connectedNode = nodes[connectionIndex]
                        if (connectedNode) {
                            // Check if this is an original (local) or rewired (long-range) connection
                            const isOriginalConnection = node.originalConnections.has(connectionIndex)
                            
                            ctx.beginPath()
                            ctx.moveTo(node.x, node.y)
                            ctx.lineTo(connectedNode.x, connectedNode.y)
                            
                            if (isOriginalConnection) {
                                // Local connections - thicker, more visible
                                ctx.strokeStyle = 'rgba(59, 130, 246, 0.15)'
                                ctx.lineWidth = 1
                            } else {
                                // Long-range connections - thinner, different color
                                ctx.strokeStyle = 'rgba(239, 68, 68, 0.2)'
                                ctx.lineWidth = 0.8
                            }
                            
                            ctx.stroke()
                        }
                    }
                })
            })

            // Update and draw nodes
            nodes.forEach((node, i) => {
                // Gentle orbital motion around original position
                const centerX = canvas.width / 2
                const centerY = canvas.height / 2
                const radius = Math.min(canvas.width, canvas.height) * 0.3
                
                // Update angle slightly for orbital motion
                node.angle += 0.0005
                const targetX = centerX + radius * Math.cos(node.angle)
                const targetY = centerY + radius * Math.sin(node.angle)
                
                // Add small random perturbation
                node.x += (targetX - node.x) * 0.001 + node.vx
                node.y += (targetY - node.y) * 0.001 + node.vy
                
                // Update random velocity
                node.vx += (Math.random() - 0.5) * 0.01
                node.vy += (Math.random() - 0.5) * 0.01
                
                // Damping
                node.vx *= 0.95
                node.vy *= 0.95
                
                // Draw node
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
                
                // Color nodes based on their connectivity
                const connectionCount = node.connections.size
                const maxConnections = Math.max(...nodes.map(n => n.connections.size))
                const intensity = connectionCount / maxConnections
                
                ctx.fillStyle = `rgba(99, 102, 241, ${0.3 + intensity * 0.4})`
                ctx.fill()
                
                // Add a subtle glow for highly connected nodes
                if (intensity > 0.7) {
                    ctx.beginPath()
                    ctx.arc(node.x, node.y, node.radius + 2, 0, Math.PI * 2)
                    ctx.fillStyle = `rgba(99, 102, 241, 0.1)`
                    ctx.fill()
                }
            })

            animationRef.current = requestAnimationFrame(animate)
        }

        resizeCanvas()
        createSmallWorldNetwork()
        animate()

        const handleResize = () => {
            resizeCanvas()
            createSmallWorldNetwork()
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: 'transparent' }}
        />
    )
}