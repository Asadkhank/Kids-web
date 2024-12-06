import React, { useState } from "react";
import pic1 from "../assets/Kid1.webp";
import pic2 from "../assets/Kid2.webp";
import pic3 from "../assets/Kid3.webp";
import pic4 from "../assets/Kid4.webp";
import pic5 from "../assets/Kid5.webp";
import pic6 from "../assets/Kid6.webp";
import pic7 from "../assets/Kid3.webp"; // New image for the added card

const newsArticles = [
  {
    id: 1,
    title: "Toy Storage: A Guide to a Clutter-Free Home",
    category: "Kids News",
    date: "August 15, 2023",
    description:
      "Every parent knows the challenge of maintaining a tidy home while keeping toys accessible for playtime.",
    image: pic1,
  },
  {
    id: 2,
    title: "The Power of Pretend Play: Imaginative Toys",
    category: "Kids News",
    date: "August 22, 2023",
    description:
      "Pretend play is a cornerstone of childhood development. This is the kind of imaginative play that allows children to unlock their potential.",
    image: pic2,
  },
  {
    id: 3,
    title: "Sustainability in Toyland: Eco-Friendly Toy Choices",
    category: "Kids News",
    date: "August 28, 2023",
    description:
      "Explore how eco-friendly toys contribute to sustainability efforts in the toy industry.",
    image: pic3,
  },
  {
    id: 4,
    title: "The Digital Age: Balancing Screens and Physical Play",
    category: "Kids News",
    date: "August 29, 2023",
    description:
      "How can parents balance technology exposure with hands-on physical play to foster development?",
    image: pic4,
  },
  {
    id: 5,
    title: "Choosing the Perfect Toy: A Guide for Parents",
    category: "Kids News",
    date: "September 1, 2023",
    description:
      "Tips for selecting the right toy for your child, ensuring they get the most out of their playtime.",
    image: pic5,
  },
  {
    id: 6,
    title: "Educational Toys: Learning Through Play",
    category: "Kids News",
    date: "September 5, 2023",
    description:
      "How educational toys can take center stage in fostering critical thinking and life skills.",
    image: pic6,
  },
  // New card added
  {
    id: 7,
    title: "Why Kids Love Outdoor Play",
    category: "Kids News",
    date: "September 10, 2023",
    description:
      "Exploring the benefits of outdoor activities for children and why they're essential for development.",
    image: pic7,
  },
];

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // First set includes the first 6 articles
  const firstSet = newsArticles.slice(0, 6);
  // Second set includes articles starting from the 7th
  const secondSet = newsArticles.slice(6, 13);

  const currentCards = currentPage === 1 ? firstSet : secondSet;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentCards.map((article) => (
          <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-68 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">
                {article.category} • {article.date}
              </p>
              <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm">{article.description}</p>
              <a href="#" className="text-blue-500 mt-4 inline-block hover:underline">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => setCurrentPage(1)}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          1
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          className={`px-4 py-2 rounded-md ${
            currentPage === 2 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          2
        </button>
      </div>
    </div>
  );
};

export default Blogs;
