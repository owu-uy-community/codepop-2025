import { Image, Link } from '@nextui-org/react';

interface CommunityItemProps {
  name: string;
  imageUrl: string;
  linkUrl: string;
}

export default function CommunityItem({
  name,
  imageUrl,
  linkUrl,
}: CommunityItemProps) {
  return (
    <Link href={linkUrl} target="_blank">
      <div className="w-[100px] flex flex-col items-center rounded-lg overflow-hidden bg-white/40 hover:bg-white/50 transition-background shadow-lg relative">
        <div className="bg-yellow-400/40 rounded-full w-32 h-32 absolute blur-3xl bottom-0 left-0"></div>

        <div className="relative overflow-hidden">
          <Image
            alt={name}
            className="object-cover saturate-150"
            height={100}
            src={imageUrl}
            width={100}
          />
        </div>
      </div>
    </Link>
  );
}
