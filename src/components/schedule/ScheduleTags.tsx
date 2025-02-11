import { Chip } from '@nextui-org/react';

interface ScheduleTagsProps {
  tags: string[];
}

export default function ScheduleTags({ tags }: ScheduleTagsProps) {
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

  if (!tags) return null;

  return (
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
  );
}
