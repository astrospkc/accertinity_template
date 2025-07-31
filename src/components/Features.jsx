import React from "react";
import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import {
  SiGithub,
  SiDocker,
  SiDigitalocean,
  SiTailwindcss,
  SiAmazonwebservices,
  SiRedis,
} from "react-icons/si";

// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const Features = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative flex flex-col w-full my-[10%] py-10  ">
          <div className="absolute pt-20 inset-x-0 top-0 h-40 w-full bg-gradient-to-t from-transparent via-white to-white"></div>
          <div className="border-x-2 border-dashed border-gray-400/30 ">
            <div className="border-l-2 border-dashed border-gray-400/30"></div>
            <div className="justify-center items-center flex flex-col gap-4">
              <h1 className=" text-3xl md:text-4xl font-semibold w-full z-5">
                Packed with thousands of features
              </h1>
              <p className="w-3/4">
                From Image generation to video generation, Everything AI has
                APIs for literally everything. It can even create this website
                copy for you.
              </p>

              <div className="flex flex-col md:flex-row border-t-2 border-dashed border-gray-400/30">
                <div className=" flex-1 relative border-r-2 border-gray-400/30  h-[40%] md:h-full ">
                  <div className="p-4 m-4 items-start text-start flex flex-col">
                    <h1 className="text-2xl font-semibold z-5">
                      Generate images with text
                    </h1>
                    <p className="py-4 text-gray-500 w-3/4 z-5">
                      Generate images from a text prompt, a video, or a video
                      segment in bulk at the speed of light.
                    </p>
                    <div className="relative w-full">
                      <div className="absolute pt-20 inset-x-0 top-0 h-40 w-full bg-gradient-to-t from-transparent via-white to-white"></div>
                      {/* <div className="absolute pt-20 inset-x-0 bottom-0 h-40 w-full bg-gradient-to-t from-transparent via-white to-white"></div> */}
                      <div
                        style={{
                          backgroundImage: "url(/images/img2.jpg)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                          opacity: "0.1",
                          borderRadius: "20px",
                        }}
                        className="absolute inset-0 -z-10"
                      ></div>
                      <div className="flex flex-col gap-4 justify-center items-center relative z-10">
                        {/* image 1 */}
                        <div>
                          <div className=" rounded-3xl bg-gray-200/30 m-2">
                            <div className="border-2 border-gray-200 rounded-3xl bg-white m-2">
                              <img
                                src="/images/img1.jpg"
                                alt="img1"
                                className="h-[300px] rounded-3xl m-2"
                              />
                            </div>
                          </div>
                        </div>
                        {/* image2 */}

                        <div>
                          <div className="border-2 border-gray-200 rounded-3xl bg-gray-200/30 m-2">
                            <div className="border-2 border-gray-200 rounded-3xl bg-white m-2">
                              <img
                                src="/images/img2.jpg"
                                alt="img1"
                                className="h-[300px] rounded-3xl m-2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex-1  ">
                  <div className="p-4 m-4 items-start text-start flex flex-col">
                    <h1 className="text-2xl font-semibold">
                      Create stupid simple chatbots
                    </h1>
                    <p className="py-4 text-gray-500 w-3/4">
                      Create Chatbots with a single button click. Customize as
                      per your requirements and the AI will take care of the
                      rest.
                    </p>
                    <div className="relative justify-center items-center w-full m-4">
                      {/* <div className="flex flex-col gap-4 justify-center items-center relative z-10"> */}
                      <ChatMockup />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-r-2 border-dashed border-gray-400/30"></div>
          </div>
          <div className=" flex  flex-col md:flex-row border-t-2 border-r-2 border-dashed border-gray-400/30">
            <div className=" flex md:flex-1 border-r-2 border-gray-400/30 ">
              <div className="p-4">
                <div className="flex flex-col justify-center text-start  gap-4  text-gray-600 items-start ">
                  <h1 className="text-2xl font-semibold text-black">
                    We support every single LLM
                  </h1>
                  <p className="text-start items-start w-3/4 text-sm">
                    Whether it's OpenAI, GroQ or Your Mom's Basement LLM, we
                    support everything.
                  </p>
                </div>
                <div className="  border-gray-400/30">
                  <LLMList />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="p-4">
                <div className="flex flex-col justify-center text-start  gap-4  text-gray-600 items-start">
                  <h1 className="text-2xl font-semibold text-black">
                    Deploy in seconds
                  </h1>
                  <p className="text-start items-start w-3/4 text-sm">
                    With our blazing fast, state of the art, cutting edge, we
                    are so back cloud servies (read AWS) - you can deploy your
                    model in seconds.
                  </p>
                </div>
                <div>
                  <TechBanner />
                  <TechBanner />
                  <TechBanner />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* another deployt */}
      </div>
    </>
  );
};

const messages = [
  "Hello chat! Give me all the links from this website - https://ui.aceternity.com",
  "Why don’t you do it yourself?",
  "Umm.. Because I’m paying $20/mo for your services?",
  "You think I work for the money?",
  "Who do you think you are?",
  "I’m batman.",
  "Now Playing\n*Something in the way - Nirvana*",
];

function ChatMockup() {
  return (
    <div className="flex justify-center items-center m-4 rounded-2xl ">
      {/* Phone container */}
      <div className="w-[300px] rounded-[2rem]  border-2 border-gray-400/30 bg-white shadow-lg overflow-hidden relative">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-200 rounded-full"></div>

        {/* Chat content */}
        <div className="flex flex-col gap-4 p-6 mt-8">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.5, duration: 0.5 }}
              className={`rounded-xl p-3 ${
                index % 2 === 0
                  ? "bg-gray-100 text-black"
                  : "bg-black text-white"
              }`}
            >
              {msg.includes("Now Playing") ? (
                <div className="bg-black text-white rounded-2xl p-4">
                  <p className="text-sm">Now Playing</p>
                  <p className="italic">Something in the way - Nirvana</p>
                </div>
              ) : (
                msg
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const LLMList = () => {
  const [toggles, setToggles] = useState({
    groq: false,
    openai: true,
    stable: false,
    llama: false,
  });

  const toggleSwitch = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const data = [
    { id: "groq", name: "Groq LLM", date: "23rd March" },
    { id: "openai", name: "OpenAI GPTO", date: "21st March" },
    { id: "stable", name: "Stable Diffusion", date: "3rd May" },
    { id: "llama", name: "Llama 2", date: "1st April" },
  ];

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg shadow-gray-700 p-4 my-10 ">
      {/* Header */}
      <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white"></div>
      <div className="flex justify-between items-center py-2 mb-4 border-b-2 border-gray-200/50">
        <h2 className="font-semibold text-gray-800">Add LLM</h2>
        <button className="flex items-center gap-1 px-3 py-1 shadow-lg shadow-gray-400/50  rounded-lg text-gray-700 hover:bg-gray-100">
          + Add
        </button>
      </div>

      {/* List */}
      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center  pb-2"
          >
            {/* Name + Date */}
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs rounded-full shadow-md shadow-gray-300 text-gray-700">
                {item.name}
              </span>
              <span className="text-gray-500 text-sm">{item.date}</span>
            </div>

            {/* Toggle + More */}
            <div className="flex items-center gap-3">
              {/* Toggle Switch */}
              <button
                onClick={() => toggleSwitch(item.id)}
                className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
                  toggles[item.id] ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform ${
                    toggles[item.id] ? "translate-x-5" : ""
                  }`}
                ></div>
              </button>

              {/* More Icon */}
              <MoreHorizontal className="text-gray-500 w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const techStack = [
  { name: "AWS", icon: <SiAmazonwebservices className="text-yellow-600" /> },
  { name: "GitHub", icon: <SiGithub className="text-black" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  { name: "Digital Ocean", icon: <SiDigitalocean className="text-blue-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Redis", icon: <SiRedis className="text-sky-400" /> },
];

const TechBanner = () => {
  return (
    <div className="flex gap-10 overflow-x-hidden whitespace-nowrap  py-4">
      {techStack.map((tech, index) => (
        <motion.div
          className="inline-block"
          animate={{ x: ["0%", "500%"] }}
          transition={{
            repeat: Infinity,
            duration: 600,
            ease: "linear",
          }}
          key={index}
        >
          {tech.icon}
          <span className="text-sm font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;
