import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: "/images/blog1.png ",
      alt: "Person using laptop",
    },
    {
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: "/images/blog2.png",
      alt: "Laptop with charts",
    },
    {
      title: "Revamping the Membership Model with Triathlon Australia",
      image: "/images/blog3.png",
      alt: "Laptop on desk",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-gray-700 text-center mb-4">
          Caring is the new marketing
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.alt}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4">{post.title}</h3>
                <Link
                  href="#"
                  className="text-green-500 hover:text-green-600 inline-flex items-center"
                >
                  Readmore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
