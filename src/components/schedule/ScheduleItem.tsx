import { Avatar } from '@nextui-org/react';
import ScheduleAvatar from './ScheduleAvatar';
import ScheduleSpeakerTime from './ScheduleSpeakerTime';
import ScheduleTags from './ScheduleTags';

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
  return (
    <div className="relative flex flex-col w-full px-2">
      {groupLabel && (
        <div className="absolute z-30 top-0 right-4 bg-yellow-400 px-4 py-1 -translate-y-full rounded-tr-lg rounded-tl-lg text-tiny uppercase font-semibold">
          {groupLabel}
        </div>
      )}
      <div className="flex flex-1 w-full px-4 md:px-6 py-4 bg-white/50 rounded-lg border-b-4 border-yellow-400 relative overflow-hidden">
        <div className="bg-yellow-400/50 rounded-full w-48 h-48 absolute blur-3xl top-5 left-22"></div>

        <ScheduleAvatar avatarUrl={avatarUrl} githubUrl="#" />

        <div className="relative z-10 flex flex-col w-full items-start ml-0 md:ml-6 text-left">
          <Avatar
            className="absolute z-10 right-2 top-1 w-12 h-12 md:hidden"
            isBordered
            src={avatarUrl}
          />

          <ScheduleSpeakerTime speaker={speaker} time={time} />

          <span className="flex flex-col font-bangers text-3xl mt-1 md:mt-0 ">
            {title}
          </span>

          <span className="text-sm md:text-lg mt-4 md:mt-1">{description}</span>

          <ScheduleTags tags={tags} />
        </div>
      </div>
    </div>
  );
}
