export type EventTag =
  | "Elixir"
  | "Ruby"
  | "Networking"
  | "Programming"
  | "Python"
  | "Workshop";

export interface ScheduleEvent {
  id: number;
  groupLabel?: string;
  avatarUrl: string;
  time: string;
  title: string;
  description: string;
  speaker: string;
  tags: EventTag[];
}

export const morningEvents = [
  {
    id: 1,
    groupLabel: "Por la mañana",
    avatarUrl: "https://www.owu.uy/carpincho.png",
    time: "09:00 - 09:30",
    title: "Bienvenida y acreditaciones  ☕️",
    speaker: "owu",
    description:
      "¡Te invitamos a comenzar la jornada disfrutando de un delicioso desayuno!",
    tags: ["Networking"],
  },
  {
    id: 2,
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    time: "10:00 - 11:15",
    title: "Un alquimista de Elixir",
    speaker: "Gabriel Roldán",
    description: "Gabriel |> haciendo_magia |> y_dejando_a_todos |> locos!",
    tags: ["Elixir", "Programming"],
  },
  {
    id: 3,
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    time: "11:30 - 12:30",
    title: "Hablando del ruby que va en rails!",
    speaker: "Leticia Esperón",
    description:
      "Porque adoptar Ruby on Rails hoy en día es la mejor opción que puedes hacer!",
    tags: ["Ruby", "Programming"],
  },
] as ScheduleEvent[];

export const afternoonEvents = [
  {
    id: 4,
    groupLabel: "Por la tarde",
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    time: "15:00 - 16:00",
    title: "Hablando del ruby que va en rails!",
    speaker: "Mikaela Pisani",
    description: "Phyton como herramienta para dominar la AI",
    tags: ["Python", "Programming"],
  },
  {
    id: 5,
    avatarUrl: "https://www.owu.uy/carpincho.png",
    time: "16:00 - 16:30",
    title: "Cafe y networking  ☕️",
    speaker: "owu",
    description:
      "Nada mejor que comentar todo lo que hemos visto hasta ahora con un cafecito!",
    tags: ["Networking"],
  },
  {
    id: 6,
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026708c",
    time: "16:30 - 18:30",
    title: "Elixir de la teoría a la práctica",
    speaker: "Marcelo Dominguez",
    description:
      "Bueno, acá van a pasar cosas de alquimista, ya no se que poner. No olvides traer tu laptop!",
    tags: ["Elixir", "Programming", "Workshop"],
  },
] as ScheduleEvent[];
