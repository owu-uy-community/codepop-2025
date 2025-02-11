import ScheduleItem from '@/components/schedule/ScheduleItem';
import { afternoonEvents, morningEvents } from '@/data/schedule-data';
import { Chip } from '@nextui-org/react';
import SchedduleClose from './ScheduleClose';

export default function Schedule() {
  if (!morningEvents && !afternoonEvents) {
    return (
      <div className="flex flex-1 p-6 font-bangers justify-center w-full">
        Ups! No hay eventos programados actualmente.
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full items-center gap-6 mt-8">
      {morningEvents.map((event) => (
        <ScheduleItem
          key={event.id}
          groupLabel={event.groupLabel}
          avatarUrl={event.avatarUrl}
          time={event.time}
          title={event.title}
          speaker={event.speaker}
          description={event.description}
          tags={event.tags}
        />
      ))}

      <Chip
        className="font-bold text-md bg-yellow-400 font-sour-gummy text-xl my-4 mx-auto"
        radius="sm"
      >
        DESCANSO
      </Chip>

      {afternoonEvents.map((event) => (
        <ScheduleItem
          key={event.id}
          groupLabel={event.groupLabel}
          avatarUrl={event.avatarUrl}
          time={event.time}
          title={event.title}
          speaker={event.speaker}
          description={event.description}
          tags={event.tags}
        />
      ))}

      <SchedduleClose />
    </div>
  );
}
