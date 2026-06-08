import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const { data } = await API.get(
        `/blog/${id}`
      );

      setBlog(data.blog);
    } catch (error) {
      console.log(error);
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="py-20 bg-(--surface-soft) min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[500px] object-cover rounded-3xl shadow-lg mb-8"
        />

        <h1 className="text-5xl font-bold text-(--primary) mb-4">
          {blog.title}
        </h1>

        <div className="flex gap-6 text-gray-500 mb-8">
          <span>
            By {blog.author}
          </span>

          <span>
            {new Date(
              blog.createdAt
            ).toLocaleDateString()}
          </span>
        </div>

        <div className="surface-card p-8 rounded-3xl">
          <p className="text-lg leading-9 text-(--muted) whitespace-pre-line">
            {blog.content}
          </p>
        </div>

      </div>
    </section>
  );
};

export default BlogDetails;