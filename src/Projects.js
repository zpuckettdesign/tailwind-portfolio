import React from "react";

const posts = [
  {
    title: "Braden's Pricing Tool",
    href: "https://bradens-soc.netlify.app/",
    category: { name: "Click Here for App", href: "https://bradens-soc.netlify.app/" },
    description:
      "React app created to instantly calculate a retail price for a product. This app is still under development for additional features and UI.",
    imageUrl: "../images/bradens.png",
    author: {
      name: "GitHub Repository",
      href: "https://github.com/zpuckettdesign/bradens-soc2.0",
      imageUrl: "../images/GitHub-Mark.png",
    },
  },
  {
    title: "Grassland Heights WebPage",
    href: "https://grasslandheights.org/",
    category: { name: "Click Here for App", href: "https://grasslandheights.org/" },
    description:
      "Church website made with WordPress.",
    imageUrl: "../images/grassland.png",
    author: {
        name: "GitHub Repository",
        href: "",
        imageUrl: "../images/GitHub-Mark.png",
      },
    
  },
  {
    title: "YayNayz",
    href: "http://www.yaynayz.com/",
    category: { name: "Click Here for App", href: "http://www.yaynayz.com/" },
    description:
      "Yaynayz is a useful polling/voting app for finding out quickly if people agree or disagree.",
    imageUrl: "../images/yaynayz.png",
    author: {
      name: "GitHub Repository",
      href: "https://github.com/zpuckett/yaynayz",
      imageUrl: "../images/GitHub-Mark.png",
    },
  },
  {
    title: "Express Note Taker",
    href: "https://github.com/zpuckett/express-note-taker",
    category: { name: "Click here for App", href: "https://github.com/zpuckett/express-note-taker" },
    description:
      "This app is design for a simple work space to keep track of notes. Created from Express.js.",

    imageUrl: "../images/noteexpresswt.gif",
    author: {
      name: "GitHub Repository",
      href: "https://github.com/zpuckett/express-note-taker",
      imageUrl: "../images/GitHub-Mark.png",
    },
  },
  {
    title: "Weather Dashboard",
    href: "https://weatherdashboardzp.netlify.app/",
    category: { name: "Click Here for App", href: "https://weatherdashboardzp.netlify.app/" },
    description:
      "Weather-Dashboard is an application to find the current weather condition of a selected city both the current and 5-Days forecast at the same time. A server-side API was used to pull data objects for components",
    imageUrl: "../images/weatherdash.jpeg",
    author: {
      name: "GitHub Repository",
      href: "https://github.com/zpuckett/weather-dashboard",
      imageUrl: "../images/GitHub-Mark.png",
    },
  },
  
];

export default function Projects() {
  return (
      <a href="#Projects">
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Feel free to look around.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </a>
  );
}
