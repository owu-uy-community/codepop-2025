export interface Sponsor {
  id: number;
  name: string;
  imageUrl: string;
  linkUrl: string;
}

let id = 0;
const genId = () => ++id;

const data = [
  {
    id: genId(),
    name: 'Holberton',
    imageUrl: '/sponsors/holberton-uruguay.webp',
    linkUrl: 'https://holbertonschool.uy/',
  },
  {
    id: genId(),
    name: 'Mimiquate',
    imageUrl: '/sponsors/mimiquate.webp',
    linkUrl: 'https://www.mimiquate.com/',
  },
  {
    id: genId(),
    name: 'WyeWorks',
    imageUrl: '/sponsors/wyeworks.webp',
    linkUrl: 'https://www.wyeworks.com/',
  },
  {
    id: genId(),
    name: 'Ingenious',
    imageUrl: '/sponsors/ingenious.webp',
    linkUrl: 'https://ingenious.agency/',
  }
] as Sponsor[];

export default data;
