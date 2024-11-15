import data from '@/data/team-data';
import TeamItem from '@components/TeamItem';

export default function Team() {
  return (
    <div className="flex flex-1 flex-wrap gap-6 justify-center w-full items-stretch">
      {data.map((member) => (
        <TeamItem
          key={member.id}
          name={member.name}
          title={member.title}
          imageUrl={member.imageUrl}
          githubUrl={member.githubUrl || undefined}
        />
      ))}
    </div>
  );
}
