"use client"
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
    return (
        <div className="relative group">
            <div className={`
                relative overflow-hidden rounded-2xl p-6 md:p-7
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
            `}>
                {/* Gradient Orb Background Effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-sky-500/20 to-teal-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                    {/* Year + Current Badge */}
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
                            {year}
                        </span>
                        {isHighlight && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                                Current
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                        {title}
                    </h3>
                    
                    {/* Institution + Degree */}
                    {institution ? (
                        <div className="mb-3">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a 
                                        href={institution.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-500 dark:text-emerald-400 font-medium underline underline-offset-2 decoration-emerald-500/50 hover:decoration-emerald-500 transition-all"
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
                                    >
                                        Visit website
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </TooltipContent>
                            </Tooltip>
                            {degree && (
                                <p className="text-sm text-muted-foreground mt-0.5">{degree}</p>
                            )}
                        </div>
                    ) : (
                        degree && (
                            <p className="text-sm text-muted-foreground mb-3 italic">{degree}</p>
                        )
                    )}

                    {/* Achievements — Front and Center */}
                    {achievements && (
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                            {/* GPA Chip */}
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30">
                                <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                                    cGPA {achievements.gpa}
                                </span>
                            </div>

                            {/* Honors Chips */}
                            {achievements.honors?.map((honor, index) => (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30 hover:bg-cyan-500/25 transition-colors">
                                            <svg className="w-3.5 h-3.5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                                                {honor.name}
                                            </span>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent 
                                        side="top" 
                                        className="max-w-xs p-4 bg-card/95 backdrop-blur-xl border border-white/20 dark:border-white/10 text-foreground rounded-xl shadow-xl"
                                    >
                                        <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-1">
                                            {honor.years}
                                        </p>
                                        <p className="text-sm leading-relaxed">
                                            {honor.tooltipDescription}
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    )}

                    {/* Short Description */}
                    <p className="text-sm text-foreground/75 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
