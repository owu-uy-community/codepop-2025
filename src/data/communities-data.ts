export interface Community {
  id: number;
  name: string;
  imageUrl: string;
  linkUrl: string;
}

export default [
  {
    id: 1,
    name: "Elixir Montevideo",
    imageUrl: "/communities/elixir-mvd.webp",
    linkUrl: "https://www.meetup.com/elixir-montevideo/",
  },
  {
    id: 2,
    name: "Ruby Uruguay",
    imageUrl: "/communities/ruby-uy.webp",
    linkUrl: "https://ruby.uy/",
  },
  {
    id: 3,
    name: "Python Montevideo",
    imageUrl: "/communities/py-mvd.webp",
    linkUrl: "https://www.meetup.com/py-mvd/",
  }
] as Community[];
