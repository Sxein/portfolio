interface EducationCardProps {
    schoolName: string
    degree: string
    graduationYear: string
    grade: string
    link ?: string
}

export default function EducationCard({ schoolName, degree, graduationYear, grade, link }: EducationCardProps) {
    return (
        // Add a link wrapper if link prop is provided
            <a href={link} 
            target={link! ? "_blank" : undefined} 
            rel={link ? "noopener noreferrer" : undefined} 
            className="block h-full bg-card text-card-foreground border border-border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold mb-2">{schoolName}</h2>
                    <p className="text-lg text-foreground">{degree}</p>
                    <p className="text-md text-muted-foreground">{graduationYear}</p>
                    <p className="text-xl font-bold text-amber-600 dark:text-amber-500">{grade}</p>
                </div>
            </a>
    )
}