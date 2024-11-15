export interface Community {
  id: number;
  name: string;
  imageUrl: string;
  linkUrl: string;
}

const data = [
  {
    id: 1,
    name: "Agile UY",
    imageUrl: "/communities/agile-uy.webp",
    linkUrl: "https://www.meetup.com/agileuy/",
  },
  {
    id: 2,
    name: "Angular UY",
    imageUrl: "/communities/angular-uy.webp",
    linkUrl: "https://www.meetup.com/angular-mvd/",
  },
  {
    id: 3,
    name: "AWS Girls",
    imageUrl: "/communities/aws-girls.png",
    linkUrl: "https://www.linkedin.com/company/aws-girls-user-group-uy",
  },
  {
    id: 4,
    name: "OWASP UY",
    imageUrl: "/communities/owasp.png",
    linkUrl: "https://www.meetup.com/owasp-uruguay-chapter/",
  },
  {
    id: 5,
    name: "Elixir UY",
    imageUrl: "/communities/elixir.png",
    linkUrl: "https://owu.uy/",
  },
  {
    id: 6,
    name: "Women techmakers",
    imageUrl: "/communities/women-tech-makers.webp",
    linkUrl: "https://www.wtm.uy/",
  },
] as Community[];

export default data;
