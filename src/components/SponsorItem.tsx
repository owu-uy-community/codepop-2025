import { Image, Link } from '@nextui-org/react';

interface SponsorItem {
  name: string;
  linkUrl: string;
  imageUrl?: string;
  children?: React.ReactNode;
}

export default function SponsorItem({
  name,
  linkUrl,
  imageUrl,
  children,
}: SponsorItem) {
  return (
    <Link
      href={linkUrl}
      target="_blank"
      className="border-1 border-slate-800 shadow-lg rounded-md relative bg-white/40 overflow-hidden hover:bg-yellow-400 hover:cursor-pointer transition-transform-background"
    >
      <div className="bg-yellow-400 rounded-full w-20 h-20 absolute blur-3xl top-10"></div>
      <div className="bg-lime-300 rounded-full w-14 h-14 absolute blur-2xl -right-4 -top-4"></div>
      {imageUrl && (
        <Image
          className="h-32 w-56 rounded-md object-contain p-4"
          alt={`Logo de ${name}`}
          src={imageUrl}
        />
      )}

      {children && children}
    </Link>
  );
}
