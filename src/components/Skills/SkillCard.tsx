interface SkillCardProps {
    name: string;
    Icon: React.ComponentType<{className?: string}>;
}

export default function SkillCard({ name, Icon }: SkillCardProps) {
    return (
        <div className="w-44 px-4 py-2 bg-card rounded-lg text-card-foreground border border-border flex flex-row items-center gap-4 shadow-sm hover:scale-105 transition-transform duration-200">
            <Icon className="size-5 md:size-6 shrink-0"/>
            <span className="font-medium text-stone-500 truncate">{name}</span>
        </div>
    )
}