import { Chip } from '@nextui-org/react';
import { useAnimate, useInView } from 'motion/react';
import { useEffect } from 'react';

interface ScheduleTagsProps {
  tags: string[];
}

export default function ScheduleTags({ tags }: ScheduleTagsProps) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current.querySelectorAll('.tag'),
        { opacity: 1, x: 0, scale: [0, 1.2, 0.9, 1] },
        { duration: 0.8, delay: 0.6 }
      );
    }
  }, [isInView, animate, scope]);

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
    <div className="flex flex-1 gap-2 mt-4" ref={scope}>
      {tags.map((tagName) => (
        <Chip
          key={tagName}
          size="sm"
          radius="sm"
          className={`${getTagColor(
            tagName
          )} font-semibold opacity-0 scale-75 tag`}
          variant="flat"
        >
          {tagName}
        </Chip>
      ))}
    </div>
  );
}
