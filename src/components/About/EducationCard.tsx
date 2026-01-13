"use client"
import { useState } from "react"
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip"

interface InstitutionInfo {
    name: string
    link: string
    tooltipDescription: string
}

interface HonorInfo {
    name: string
    years: string
    tooltipDescription: string
}

interface AchievementsInfo {
    gpa: string
    honors?: HonorInfo[]
}

interface EducationCardProps {
    year: string
    title: string
    institution?: InstitutionInfo
    degree?: string
    achievements?: AchievementsInfo
    description: string
    isHighlight?: boolean
}

export default function EducationCard({ year, title, institution, degree, achievements, description, isHighlight }: EducationCardProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className="relative group">
            {/* Glassmorphism Card */}
            <div 
                className={`
                    relative overflow-hidden rounded-2xl p-6 md:p-8 cursor-pointer
                    backdrop-blur-xl bg-white/10 dark:bg-white/5
                    border border-white/20 dark:border-white/10
                    shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
                    dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
                    transition-all duration-500 ease-out
                    hover:bg-white/15 dark:hover:bg-white/10
                    hover:border-white/30 dark:hover:border-white/20
                    hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]
                    dark:hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
                    ${isHighlight ? 'ring-2 ring-cyan-500/50' : ''}
                `}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {/* Gradient Orb Background Effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-sky-500/20 to-teal-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                
                {/* Content */}
                <div className="relative z-10">
                    {/* Year */}
                    <p className="text-muted-foreground text-sm font-medium tracking-wide mb-2">
                        {year}
                    </p>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                        {title}
                    </h3>
                    
                    {/* Institution with Tooltip */}
                    {institution && (
                        <p className="text-foreground/90 leading-relaxed mb-1">
                            It began at{" "}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a 
                                        href={institution.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-500 dark:text-emerald-400 underline underline-offset-2 decoration-emerald-500/50 hover:decoration-emerald-500 transition-all"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {institution.name}
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent 
                                    side="top" 
                                    className="max-w-xs p-4 bg-card/95 backdrop-blur-xl border border-white/20 dark:border-white/10 text-foreground rounded-xl shadow-xl"
                                >
                                    <p className="text-sm leading-relaxed mb-3">
                                        {institution.tooltipDescription}
                                    </p>
                                    <a 
                                        href={institution.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-500 dark:text-emerald-400 text-sm font-medium flex items-center gap-1 hover:underline"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Click to read more
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </TooltipContent>
                            </Tooltip>
                            {degree && `, pursuing ${degree}.`}
                        </p>
                    )}

                    {/* Degree only (no institution) */}
                    {!institution && degree && (
                        <p className="text-foreground/90 leading-relaxed mb-1">
                            {degree}
                        </p>
                    )}

                    {/* Achievements - Inline Style */}
                    {achievements && (
                        <p className="text-foreground/90 leading-relaxed mt-2">
                            Currently maintaining a{" "}
                            <span className="text-amber-500 dark:text-amber-400 font-semibold">
                                cGPA of {achievements.gpa}
                            </span>
                            {achievements.honors && achievements.honors.length > 0 && (
                                <>
                                    {" "}and awarded the{" "}
                                    {achievements.honors.map((honor, index) => (
                                        <Tooltip key={index}>
                                            <TooltipTrigger asChild>
                                                <span 
                                                    className="text-amber-500 dark:text-amber-400 font-semibold underline underline-offset-2 decoration-amber-500/50 hover:decoration-amber-500 transition-all"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {honor.name}
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent 
                                                side="top" 
                                                className="max-w-xs p-4 bg-card/95 backdrop-blur-xl border border-white/20 dark:border-white/10 text-foreground rounded-xl shadow-xl"
                                            >
                                                <p className="text-sm leading-relaxed">
                                                    {honor.tooltipDescription}
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                    {" "}in {achievements.honors[0]?.years}.
                                </>
                            )}
                        </p>
                    )}

                    {/* Expandable Description */}
                    <div className={`
                        overflow-hidden transition-all duration-500 ease-out
                        ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}
                    `}>
                        <div className="pt-4 border-t border-white/10">
                            <p className="text-foreground/80 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* Expand/Collapse Indicator */}
                    <div className="flex items-center gap-2 mt-4 text-muted-foreground text-sm">
                        <span>{isExpanded ? 'Click to collapse' : 'Click to read more'}</span>
                        <svg 
                            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
