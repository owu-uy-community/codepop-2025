export interface TeamMember {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  githubUrl?: string;
}

let id = 0;
const genId = () => ++id;

const data = [
  {
    id: genId(),
    name: "Agustín Tornielli",
    title: "Full-Stack Developer at Streaver",
    imageUrl: "/team/agustin_tornielli.webp",
    githubUrl: "https://github.com/agustints"
  },
  {
    id: genId(),
    name: "Carla Fresch Pons",
    title: "Talent Acquisition at Techie Talent",
    imageUrl: "team/carla_fresch_pons.webp"
  },
  {
    id: genId(),
    name: "Eliana Rosselli",
    title: "Software Engineer at Howdy",
    imageUrl: "team/eliana_rosselli.webp",
  },
  {
    id: genId(),
    name: "Guillermo Zorron",
    title: "Ruby on Rails developer at Xmartlabs",
    imageUrl: "team/guillermo_zorron.webp",
    githubUrl: "https://github.com/guillezorron"
  },
  {
    id: genId(),
    name: "Javier Valenzani",
    title: "Director of Pedagogy at Holberton",
    imageUrl: "/team/javier_valenzani.webp",
    githubUrl: "https://github.com/jvalenzani-hbtn"
  },
  {
    id: genId(),
    name: "Juan Azambuja",
    title: "Co Founder at Mimiquate",
    imageUrl: "/team/juan_azambuja.webp",
    githubUrl: "https://github.com/juanazam"
  },
  {
    id: genId(),
    name: "Julio Barrios",
    title: "Full Stack Engineer",
    imageUrl: "/team/julio_barrios.webp",
    githubUrl: "https://github.com/jubar"
  },
  {
    id: genId(),
    name: "Kalil de Lima",
    title: "Full Stack Engineer",
    imageUrl: "/team/kalil_de_lima.webp",
    githubUrl: "https://github.com/kaozdl"
  },
  {
    id: genId(),
    name: "Kevin Exposito",
    title: "Engineer at Mimiquate",
    imageUrl: "/team/kevin_exposito.webp",
    githubUrl: "https://github.com/kexposito"
  },
  {
    id: genId(),
    name: "Laura Rodriguez",
    title: "Computer Analyst",
    imageUrl: "/team/laura_rodriguez.webp",
    githubUrl: "https://github.com/lauralpt"
  },
  {
    id: genId(),
    name: "Marcello Farias",
    title: "Cloud Architect - DevOps",
    imageUrl: "/team/marcello_farias.webp",
    githubUrl: "https://github.com/mark3l"
  },
  {
    id: genId(),
    name: "Mauricio Mena",
    title: "Freelance Software Developer",
    imageUrl: "/team/mauricio_mena.webp",
    githubUrl: "https://github.com/lvl4ul2i"
  },
  {
    id: genId(),
    name: "Paul Messina",
    title: "Technical Lead | System Arquitect",
    imageUrl: "/team/paul_messina.webp"
  },
  {
    id: genId(),
    name: "Paula Cianelli",
    title: "Ruby on Rails SSR Developer",
    imageUrl: "/team/paula_cianelli.webp"
  },
  {
    id: genId(),
    name: "Santiago Ferreira",
    title: "Staff Software Engineer at The RealReal",
    imageUrl: "/team/santiago_ferreira.webp",
    githubUrl: "https://www.linkedin.com/in/santiagoferreira"
  }
] as TeamMember[];

export default data;
