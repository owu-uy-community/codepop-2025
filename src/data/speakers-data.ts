export interface Speaker {
  id: number;
  name: string;
  imageUrl: string;
  title: string;
  description: string;
  bio: string; // Info that appears in the footer of the card. it should be short.
}

let id = 0;
const genId = () => ++id;

const data = [
  {
    id: genId(),
    name: 'Code Pop',
    imageUrl: 'https://www.owu.uy/_next/image?url=%2Fcarpincho.png&w=3840&q=75',
    title: 'Quiero ser speaker',
    description: 'Aún hay tiempos para ser parte de la conferencia, ¡anímate! ',
    bio: 'OWU Code POP 2025',
  },
  {
    id: genId(),
    name: 'Luis Galeas',
    imageUrl: '/speakers/luis-galeas.png',
    title: 'Mas allá del Hype',
    description:
      'Por qué las prácticas y arquitecturas sobrevaloradas no cumplen tus expectativas',
    bio: 'Founder & CEO of Ambar',
  },
];

export default data;
