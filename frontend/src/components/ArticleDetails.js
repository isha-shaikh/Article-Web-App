import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";



const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles/${id}`)
      .then((response) => setArticle(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="bg-slate-600 min-h-screen py-8">
      <div className="container mx-auto px-4 ">
        {article ? (
          <div className="bg-white p-6 shadow-lg rounded-lg ">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="rounded-lg mb-6"
            />
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
              {article.title}
            </h1>
            <p className="text-gray-700 text-lg mb-4">{article.content}</p>
            <p className="text-gray-500 text-sm">
              Reported by: {article.reporterName}
            </p>
            <button
              onClick={handleNavigate}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md mt-5"
            >
              Back
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading article...</p>
        )}
      </div>
    </div>
  );
};

export default ArticleDetails;
