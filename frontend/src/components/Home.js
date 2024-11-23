import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/articles")
      .then((response) => setArticles(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-zinc-600 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-6 shadow-lg rounded-lg"
            >
              <div className="flex justify-center items-center">
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="rounded-lg mb-4"
                />
              </div>

              <h2 className="text-2xl font-semibold mb-2 text-gray-700">
                {article.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{article.summary}</p>
              <p className="text-gray-500 text-xs">By {article.reporterName}</p>
              <Link
                to={`/articles/${article.id}`}
                className="text-blue-500 hover:text-blue-700 font-medium mt-4 inline-block"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
