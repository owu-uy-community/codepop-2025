import GithubIcon from '@components/icons/GithubIcon';
import { Button, Image, Link } from '@nextui-org/react';

interface TeamItemProps {
  name: string;
  title: string;
  imageUrl: string;
  githubUrl?: string;
}

export default function TeamItem({
  name,
  title,
  imageUrl,
  githubUrl,
}: TeamItemProps) {
  return (
    <div className="w-[200px] flex flex-col items-center rounded-lg overflow-hidden bg-white/40 hover:bg-white/50 transition-background py-3 shadow-lg relative">
      <div className="bg-yellow-400/60 rounded-full w-32 h-32 absolute blur-3xl bottom-0 left-0"></div>
      <div className="bg-yellow-400/60 rounded-full w-24 h-24 absolute blur-3xl top-0 right-0"></div>

      <div className="relative overflow-hidden">
        <Image
          alt={name}
          className="object-cover rounded-t-md rounded-b-none border-b-5 border-b-yellow-400 saturate-150"
          height={240}
          src={imageUrl}
          width={180}
        />

        {githubUrl && (
          <Button
            href={githubUrl}
            as={Link}
            target="_blank"
            color="warning"
            className="rounded-full p-2 min-w-2 w-fit bg-yellow-400 absolute bottom-4 right-2 z-50"
          >
            <GithubIcon className="text-yellow-800 size-6" />
          </Button>
        )}
      </div>
      <div className="flex flex-col overflow-hidden mt-2 px-2">
        <span className="font-sour-gummy text-lg">{name}</span>
        <span className="text-tiny">{title}</span>
      </div>
    </div>
  );
}
