interface SkillCardProps {
    name: string;
    Icon: React.ComponentType<{className?: string}>;
}

export default function SkillCard({ name, Icon }: SkillCardProps) {
    return (
        <div className="md:w-32 md:h-32 w-28 h-28  bg-white rounded-lg text-white flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
            <Icon className="size-8 md:size-12"/>
            <span className="mt-2 text-black font-medium">{name}</span>
        </div>
    )
}