import data from '@/data/speakers-data';
import SpeakerCard from './SpeakerCard';

export default function SpeakerList() {
  return (
    <div className="flex w-fit px-4 md:px-0 flex-wrap gap-6 mx-auto">
      {data.map((speaker) => (
        <SpeakerCard
          key={speaker.id}
          name={speaker.name}
          imageUrl={speaker.imageUrl}
          title={speaker.title}
          description={speaker.description}
          bio={speaker.bio}
        />
      ))}
    </div>
  );
}
