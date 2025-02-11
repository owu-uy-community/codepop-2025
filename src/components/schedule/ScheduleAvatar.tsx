import { Avatar, Button, Link } from '@nextui-org/react';
import GithubIcon from '../icons/GithubIcon';

interface ScheduleAvatarProps {
  avatarUrl: string;
  githubUrl: string;
}

export default function ScheduleAvatar({
  avatarUrl,
  githubUrl,
}: ScheduleAvatarProps) {
  return (
    <div className="hidden md:flex flex-col justify-between border-r-4 border-dashed border-yellow-400 pr-6 relative z-10">
      <Avatar className="w-20 h-20 text-large" isBordered src={avatarUrl} />
      <Button
        href={githubUrl}
        as={Link}
        color="warning"
        variant="light"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon className="text-yellow-800 size-6" />
      </Button>
    </div>
  );
}
