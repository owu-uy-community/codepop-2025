export interface TeamMember {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  githubUrl?: string;
}

const data = [
  {
    id: 1,
    name: "Santiago Ferreira",
    title: "Developer",
    imageUrl: "/team/santiago_ferreira.webp",
    githubUrl: "https://github.com/san650",
  },
  {
    id: 2,
    name: "Federico Kauffman",
    title: "CTO, Streaver",
    imageUrl: "/team/federico_kauffman.webp",
    githubUrl: "https://github.com/",
  },
  {
    id: 3,
    name: "Leticia Esperon",
    title: "Director of Engineering, Village",
    imageUrl: "/team/leticia_esperon.webp",
    githubUrl: "https://github.com/",
  },
  {
    id: 4,
    name: "Franco Correa",
    title: "Engineer, Revenuecat",
    imageUrl: "/team/franco_correa.webp",
    githubUrl: "https://github.com/",
  },
  {
    id: 5,
    name: "Kevin Exposito",
    title: "Engineer, Mimiquate",
    imageUrl: "/team/kevin_exposito.webp",
    githubUrl: "https://github.com/",
  },
  {
    id: 6,
    name: "Marcelo Dominguez",
    title: "Engineer, Mimiquate",
    imageUrl: "/team/marcelo_dominguez.webp",
    githubUrl: "https://github.com/",
  },
  {
    id: 7,
    name: "Mikaela Pisani",
    title: "ML Lead, Rootstrap",
    imageUrl: "/team/mikaela_pisani.webp",
    githubUrl: "https://github.com/",
  },
  {
    id: 8,
    name: "Francisco Bergeret",
    title: "Technical Lead, Perficient",
    imageUrl: "/team/francisco_bergeret.webp",
    githubUrl: "https://github.com/",
  },
  {
    id: 9,
    name: "Tomas Piaggio",
    title: "Director of Engineering",
    imageUrl: "/team/tomas_piaggio.webp",
    githubUrl: "https://github.com/",
  },
  {
    id: 10,
    name: "Javier Valenzani",
    title: "Director, Holberton",
    imageUrl: "/team/javier_valenzani.webp",
    githubUrl: "https://github.com/",
  },
] as TeamMember[];

export default data;
