import { ApiResponse } from "@/helper/apiResponse";
import { Product } from "@/types/products";

export async function GET() {
  const data: Product[] = [
    {
      id: "1",
      title: "Tulsi Mala",
      thumbnail:
        "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
      images: [],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consequatur.",
      category: "Pooja Items",
      price: 299,
      discount: 20,
      rating: 4.5,
      stock: 10,
    },
    {
      id: "2",
      title: "Brass Diya",
      thumbnail:
        "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
      images: [],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consequatur.",
      category: "Pooja Items",
      price: 299,
      discount: 15,
      rating: 4.5,
      stock: 10,
    },
    {
      id: "3",
      title: "Ganga Jal",
      thumbnail:
        "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
      images: [],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consequatur.",
      category: "Pooja Items",
      price: 299,
      discount: 30,
      rating: 4.5,
      stock: 10,
    },
    {
      id: "4",
      title: "Rudraksha Bracelet",
      thumbnail:
        "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
      images: [],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consequatur.",
      category: "Pooja Items",
      price: 299,
      discount: 10,
      rating: 4.5,
      stock: 10,
    },
    {
      id: "5",
      title: "Puja Thali Set",
      thumbnail:
        "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
      images: [],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consequatur.",
      category: "Pooja Items",
      price: 299,
      discount: 10,
      rating: 4.5,
      stock: 10,
    },
    {
      id: "6",
      title: "Agarbatti Pack",
      thumbnail:
        "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
      images: [],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consequatur.",
      category: "Pooja Items",
      price: 299,
      discount: 20,
      rating: 4.5,
      stock: 10,
    },
    {
      id: "7",
      title: "Brass Bell",
      thumbnail:
        "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
      images: [],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consequatur.",
      category: "Pooja Items",
      price: 299,
      discount: 0,
      rating: 4.5,
      stock: 10,
    },
    {
      id: "8",
      title: "Camphor Box",
      thumbnail:
        "https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg",
      images: [],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consequatur.",
      category: "Pooja Items",
      price: 299,
      discount: 0,
      rating: 4.5,
      stock: 10,
    },
  ];

  return ApiResponse(true, "success", data, 200);
}
