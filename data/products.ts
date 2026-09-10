export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
};

export const categories = ["Repostería", "Panadería", "Especiales"];

export const products: Product[] = [
  {
    id: 1,
    name: "Cookies rellenas",
    category: "Repostería",
    description: "Galletas de chispas de chocolate, con un delicioso centro líquido de arequipe.",
    price: "$25.000",
    image: "/images/cookies-rellenas.jpg"
  },
  {
    id: 2,
    name: "Croissant de queso",
    category: "Panadería",
    description: "Masa delicada, dorada y crujiente por fuera, con un delicioso relleno de queso.",
    price: "$12.000",
    image: "/images/croissant-queso.jpeg"
  },
  {
    id: 3,
    name: "Rollo de canela ",
    category: "Panadería",
    description: "Suaves, esponjosos y llenos de ese delicioso aroma a canela que los hace irresistibles,",
    price: "$20.000",
    image: "/images/galeria-3.jpeg"
  },
  {
    id: 4,
    name: "Alfajores",
    category: "Especiales",
    description: "Deliciosos alfajores rellenos de arequipe.",
    price: "$15.000",
    image: "/images/alfajor2.jpeg"
  },
  {
    id: 5,
    name: "Pan de queso",
    category: "Especiales",
    description: "Delicioso pan de queso, suave y lleno de sabor.",
    price: "$20.000",
    image: "/images/panqueso.jpeg"
  },
  {
    id: 6,
    name: "Pan de chocolate",
    category: "Especiales",
    description: "Delicioso pan de chocolate, suave y relleno cremoso.",
    price: "$20.000",
    image: "/images/pan-chocolate1.jpeg"
  },
  {
    id: 7,
    name: "Pastel arequipe",
    category: "Especiales",
    description: "Delicioso pastel relleno de arequipe.",
    price: "$20.000",
    image: "/images/pastel-arequipe1.jpeg"
  }
];
