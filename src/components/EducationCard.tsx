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
            className="block h-full border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold mb-2">{schoolName}</h2>
                    <p className="text-lg text-gray-700">{degree}</p>
                    <p className="text-md text-gray-600">{graduationYear}</p>
                    <p className="text-xl font-bold text-emerald-700">{grade}</p>
                </div>
            </a>
            
            

    )
}