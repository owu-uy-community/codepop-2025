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
      <div className="flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white/60 hover:bg-white/80 transition-background shadow-lg border-b-[5px] border-b-yellow-400">
        <div className="bg-yellow-400/70 rounded-full w-32 h-32 absolute blur-3xl bottom-0 left-0"></div>

        <div className="overflow-hidden p-0">
          <Image
            alt={name}
            isBlurred
            isZoomed
            className="object-contain saturate-150"
            height={160}
            src={imageUrl}
            width={210}
          />
        </div>

        <div className="flex flex-1 justify-center absolute bottom-0 bg-yellow-400 w-full px-4 text-gray-700 font-sour-gummy">
          {name}
        </div>
      </div>
    </Link>
  );
}
