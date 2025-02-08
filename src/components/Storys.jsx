import axios from "axios";
import React, { useState, useEffect } from "react";
import { IoCopy } from "react-icons/io5";
import { Rings } from "react-loader-spinner";

const Storys = ({ prompts }) => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  const generateStory = async () => {
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      if (!apiKey) {
        throw new Error(
          "API key is missing. Please set VITE_API_KEY in your environment variables."
        );
      }

      const stories = [];
      for (let i = 0; i < 5; i++) {
        const response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
          {
            contents: [
              {
                parts: [
                  {
                    text: `Generate short story given keywords: ${prompts} within 60 words`,
                  },
                ],
              },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (
          response.data &&
          response.data.candidates &&
          response.data.candidates[0] &&
          response.data.candidates[0].content &&
          response.data.candidates[0].content.parts
        ) {
          const candidate = response.data.candidates[0];
          stories.push({
            id: i + 1,
            title: `Generated Story ${i + 1}`,
            description: candidate.content.parts[0].text,
            side: i % 2 === 0 ? "left" : "right",
          });
        } else {
          console.log(`No story generated for attempt ${i + 1}.`);
          stories.push({
            id: i + 1,
            title: `Generated Story ${i + 1}`,
            description: "No story generated",
            side: i % 2 === 0 ? "left" : "right",
          });
        }
      }

      setEntries(stories);
    } catch (error) {
      console.error("Error generating stories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (prompts) {
      generateStory();
    }
  }, [prompts]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center lg:px-32 px-5 bg-white">
      <h1 className="font-semibold text-center text-4xl 2xl:text-5xl lg:mt-14 mt-24 mb-8 text-[#01FFDC]">
        Story Generating
      </h1>

      <div className="min-h-screen">
        <div className="min-h-screen flex justify-center">
          <div className="w-full mx-auto">
            {loading ? (
              <div className="flex justify-center items-center min-h-screen">
                <Rings
                  height="200"
                  width="200"
                  color="#01FFDC"
                  radius="12"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="rings-loading"
                />
              </div>
            ) : (
              entries.map((entry, index) => (
                <div className="flex flex-row w-full" key={entry.id}>
                  {entry.side === "left" ? (
                    <>
                      <div className="lg:w-2/5 px-2 py-10 mx-4">
                        <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                          <div className="text-gray-600 mb-2 flex justify-end">
                            <div className="flex flex-row">
                              <IoCopy
                                className="text-textColor hover:text-[#01FFDC] cursor-pointer 2xl:text-3xl"
                                onClick={() =>
                                  copyToClipboard(entry.description)
                                }
                              />
                            </div>
                          </div>
                          <div className="text-gray-600 2xl:text-2xl">
                            {entry.description}
                          </div>
                        </div>
                      </div>
                      <div className="w-1/5 flex justify-center items-center">
                        <div className="relative flex h-full w-1 lg:w-2 bg-[#031A2E] items-center justify-center">
                          <div className="absolute flex flex-col justify-center h-16 w-16 lg:h-24 lg:w-24 rounded-full border-2 border-[#031A2E] leading-none text-center z-10 bg-white font-bold">
                            <div>{index + 1}</div>
                          </div>
                        </div>
                      </div>
                      <div className="w-2/5 px-2 py-10"></div>
                    </>
                  ) : (
                    <>
                      <div className="lg:w-2/5 px-2 py-10 mx-4"></div>
                      <div className="w-1/5 flex justify-center items-center">
                        <div className="relative flex h-full w-1 lg:w-2 bg-[#031A2E] items-center justify-center">
                          <div className="absolute flex flex-col justify-center h-16 w-16 lg:h-24 lg:w-24 mr-4 rounded-full border-2 border-[#031A2E] text-[#031A2E] leading-none text-center z-10 bg-white font-bold">
                            <div>{index + 1}</div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-2/5 px-2 py-10">
                        <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                          <div className="text-gray-600 mb-2 flex justify-end">
                            <div className="flex flex-row">
                              <IoCopy
                                className="text-textColor hover:text-[#01FFDC] cursor-pointer 2xl:text-3xl"
                                onClick={() =>
                                  copyToClipboard(entry.description)
                                }
                              />
                            </div>
                          </div>
                          <div className="text-gray-600 2xl:text-2xl">
                            {entry.description}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storys;
