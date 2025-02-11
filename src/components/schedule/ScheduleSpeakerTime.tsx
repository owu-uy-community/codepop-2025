import { Chip, Link } from '@nextui-org/react';
import GithubIcon from '../icons/GithubIcon';

interface ScheduleSpeakerTimeProps {
  speaker: string;
  time: string;
}

export default function ScheduleSpeakerTime({
  speaker,
  time,
}: ScheduleSpeakerTimeProps) {
  return (
    <div className="flex flex-col-reverse md:flex-row flex-1 w-full items-start md:items-center justify-between ">
      <div className="flex flex-row items-center gap-2 mt-4 md:mt-0">
        <span className="font-sour-gummy flex flex-start w-full text-lg text-yellow-700">
          {speaker}
        </span>
        <Link href="https://github.com/nextui-org/nextui">
          <GithubIcon className="text-yellow-800 size-4" />
        </Link>
      </div>
      <Chip
        className="font-bold text-md bg-yellow-400 font-sour-gummy text-base md:text-xl"
        radius="sm"
      >
        {time}
      </Chip>
    </div>
  );
}
