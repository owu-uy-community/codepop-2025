import data from '@/data/communities-data';
import CommunityItem from '@components/CommunityItem';

export default function Communities() {
  return (
    <div className="flex flex-1 flex-wrap gap-6 justify-center">
      {data.map((community) => (
        <CommunityItem
          key={community.id}
          name={community.name}
          imageUrl={community.imageUrl}
          linkUrl={community.linkUrl}
        />
      ))}
    </div>
  );
}
