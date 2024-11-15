import GithubIcon from '@components/icons/GithubIcon';
import { Avatar, Button, Chip, Link } from '@nextui-org/react';

interface ScheduleItemProps {
  groupLabel?: string;
  avatarUrl: string;
  time: string;
  title: string;
  description: string;
  speaker: string;
  tags: string[];
}

export default function ScheduleItem({
  groupLabel,
  avatarUrl,
  time,
  speaker,
  title,
  description,
  tags,
}: ScheduleItemProps) {
  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'elixir':
        return 'bg-violet-300';
      case 'ruby':
        return 'bg-rose-400';
      case 'javascript':
        return 'bg-yellow-400';
      case 'python':
        return 'bg-blue-300';
      case 'workshop':
        return 'bg-lime-400';
      default:
        return 'bg-neutral-300';
    }
  };

  return (
    <div className="relative flex flex-col w-full ">
      {groupLabel && (
        <div className="absolute z-30 top-0 right-4 bg-yellow-400 px-4 py-1 -translate-y-full rounded-tr-lg rounded-tl-lg text-tiny uppercase font-semibold">
          {groupLabel}
        </div>
      )}
      <div className="flex flex-1 w-full px-6 py-4 bg-white/50 rounded-lg border-b-4 border-yellow-400 relative hover:scale-105 overflow-hidden transition-transform">
        <div className="bg-yellow-400/50 rounded-full w-48 h-48 absolute blur-3xl top-5 left-22"></div>

        <div className="flex flex-col justify-between border-r-4 border-dashed border-yellow-400 pr-6 relative z-10">
          <Avatar className="w-20 h-20 text-large" isBordered src={avatarUrl} />
          <Button
            href="https://github.com/nextui-org/nextui"
            as={Link}
            color="warning"
            variant="light"
          >
            <GithubIcon className="text-yellow-800 size-6" />
          </Button>
        </div>

        <div className="flex flex-col w-full items-start ml-6 relative z-10">
          <span className="font-sour-gummy flex flex-start w-full text-lg text-yellow-700">
            {speaker}
          </span>
          <div className="flex flex-1 w-full items-center justify-between">
            <span className="flex flex-col font-bangers text-3xl ">
              {title}
            </span>
            <Chip
              className="font-bold text-md bg-yellow-400 font-sour-gummy text-xl"
              radius="sm"
            >
              {time}
            </Chip>
          </div>

          <span className="text-lg mt-1">{description}</span>

          {tags && (
            <div className="flex flex-1 gap-2 mt-4">
              {tags.map((tagName) => (
                <Chip
                  key={tagName}
                  size="sm"
                  radius="sm"
                  className={`${getTagColor(tagName)} font-semibold`}
                  variant="flat"
                >
                  {tagName}
                </Chip>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
