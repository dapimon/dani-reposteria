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
    name: "Producto especial",
    category: "Especiales",
    description: "Agrega aquí tu producto destacado y una descripción breve.",
    price: "$20.000",
    image: "/images/cookies-rellenas.jpeg"
  },
  {
    id: 5,
    name: "Producto especial",
    category: "Especiales",
    description: "Agrega aquí tu producto destacado y una descripción breve.",
    price: "$20.000",
    image: "/images/cookies-rellenas.jpeg"
  },
  {
    id: 6,
    name: "Producto especial",
    category: "Especiales",
    description: "Agrega aquí tu producto destacado y una descripción breve.",
    price: "$20.000",
    image: "/images/cookies-rellenas.jpeg"
  }
];
