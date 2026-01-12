import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    once?: boolean;
}

export default function FadeIn({ children, delay = 0, className = "", direction = "up", once = true }: FadeInProps) {
    
    const variants: Variants = {
        hidden: { 
            opacity: 0, 
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            x: 0,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: once, margin: "-100px" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}