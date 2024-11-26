import data from '@/data/team-data';
import { shuffle } from '@/utils';
import TeamItem from '@components/TeamItem';

export default function Team() {
  const shuffledTeam = shuffle(data);
  return (
    <div className="flex flex-1 flex-wrap gap-6 justify-center w-full items-stretch">
      {shuffledTeam.map((member) => (
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
