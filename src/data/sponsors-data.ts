export interface Sponsor {
  id: number;
  name: string;
  imageUrl: string;
  linkUrl: string;
}

const data = [
  {
    id: 1,
    name: 'Cedar Code',
    imageUrl: '/sponsors/cedar-code.webp',
    linkUrl: 'https://www.cedarcode.com/',
  },
  {
    id: 2,
    name: 'Estudio Hans',
    imageUrl: '/sponsors/estudio-hans.webp',
    linkUrl: 'https://estudiohahn.com/home',
  },

  {
    id: 4,
    name: 'Holberton',
    imageUrl: '/sponsors/holberton-uruguay.webp',
    linkUrl: 'https://holbertonschool.uy/',
  },
  {
    id: 5,
    name: 'Kaizen Softworks',
    imageUrl: '/sponsors/kaizen-softworks.webp',
    linkUrl: 'https://www.kzsoftworks.com/',
  },
  {
    id: 6,
    name: 'Mimiquate',
    imageUrl: '/sponsors/mimiquate.webp',
    linkUrl: 'https://www.mimiquate.com/',
  },
  {
    id: 7,
    name: 'Neo Coast',
    imageUrl: '/sponsors/neocoast.webp',
    linkUrl: 'https://www.neocoast.com/',
  },
  {
    id: 8,
    name: 'ORT Uruguay',
    imageUrl: '/sponsors/ort.webp',
    linkUrl: 'https://www.ort.edu.uy/',
  },
  {
    id: 9,
    name: 'Pyxis',
    imageUrl: '/sponsors/pyxis.webp',
    linkUrl: 'https://pyxis.tech/',
  },
  {
    id: 10,
    name: 'Qubika',
    imageUrl: '/sponsors/qubika.svg',
    linkUrl: 'https://qubika.com/',
  },
  {
    id: 11,
    name: 'Revenue cat',
    imageUrl: '/sponsors/revenue-cat.webp',
    linkUrl: 'https://www.revenuecat.com/',
  },
] as Sponsor[];

export default data;
