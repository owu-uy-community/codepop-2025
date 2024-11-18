import GithubIcon from '@components/icons/GithubIcon';
import { Image, Link } from '@nextui-org/react';

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
    <div className="flex flex-col w-[160px] h-[180px] perspective-800 group">
      <div
        className={`w-[160px] h-[180px] flex flex-col items-center rounded-lg overflow-hidden shadow-lg relative
        backface-hidden transform transition duration-[.4s] group-hover:rotate-y-180 t-0`}
      >
        <div className="bg-yellow-400/60 rounded-full w-24 h-24 absolute blur-3xl top-0 right-0"></div>

        <div className="relative overflow-hidden">
          <Image
            alt={name}
            className="object-cover rounded-t-md rounded-b-none border-b-5 border-b-yellow-400 saturate-150"
            height={180}
            src={imageUrl}
            width={160}
          />

          <span className="font-sour-gummy text-sm absolute z-40 bottom-0 left-0 px-1 pb-1 w-full text-center bg-yellow-400">
            {name}
          </span>
        </div>
      </div>

      <div
        className="w-[160px] h-[180px] backface-hidden transform transition duration-[.4s] -rotate-y-180 group-hover:rotate-y-0 
      rounded-lg shadow-lg absolute t-0 bg-yellow-400 overflow-hidden"
      >
        <div className="bg-yellow-100 rounded-full w-20 h-20 absolute blur-3xl -bottom-2 -left-2"></div>
        <div className="flex flex-col h-full items-center px-2 py-4">
          <h3 className="mb-2 text-xl font-semibold text-gray-700">{name}</h3>
          <span className="text-tiny">{title}</span>

          {githubUrl && (
            <div className="flex flex-1 items-end justify-center">
              <Link href={githubUrl} target="_blank">
                <GithubIcon className="text-yellow-900 size-8" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
