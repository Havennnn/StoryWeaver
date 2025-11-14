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
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error(
          "API key is missing."
        );
      }

      const stories = [];
      for (let i = 0; i < 5; i++) {
        const response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
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
  <div className="min-h-screen w-full bg-[#031A2E] py-12 px-5 lg:px-32 text-white">
    <div className="max-w-6xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="font-semibold text-3xl lg:text-4xl text-[#01FFDC]">Story Generating</h1>
        <p className="mt-2 text-sm text-[#A9BDD0]">
          Short micro-stories generated from your keywords. Click the copy icon to save a story.
        </p>
      </header>

      <main>
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Rings height="140" width="140" color="#01FFDC" radius="12" visible={true} ariaLabel="rings-loading" />
            <p className="mt-4 text-[#9fb0bf]">Generating stories…</p>
          </div>
        ) : entries.length === 0 ? (
          <div className="rounded-xl border border-[#073046] bg-[#0b1f30] p-12 text-center">
            <p className="text-[#A9BDD0] mb-6">No stories yet — enter keywords to generate.</p>
            <div className="flex justify-center">
              <button
                onClick={() => generateStory?.()}
                className="inline-flex items-center px-5 py-2 rounded-full bg-[#01FFDC] text-[#001219] font-semibold shadow"
              >
                Generate Stories
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {entries.map((entry, index) => (
              <article
                key={entry.id}
                className="relative bg-[#0b1f30] border border-[#073046] rounded-2xl p-6 shadow hover:scale-[1.01] transition-transform"
              >
                <div className="absolute -top-6 left-6">
                  <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center font-bold text-[#031A2E] border-2 border-[#031A2E]">
                    {index + 1}
                  </div>
                </div>

                <div className="py-5 ml-0 lg:ml-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-white">{entry.title ?? `Story ${index + 1}`}</h3>

                    <button
                      onClick={() => copyToClipboard(entry.description)}
                      aria-label={`Copy story ${index + 1}`}
                      className="p-2 rounded hover:bg-[#06222c]"
                    >
                      <IoCopy className="text-xl text-[#A9BDD0]" />
                    </button>
                  </div>

                  <p className="mt-4 text-[#c9dbea] leading-relaxed whitespace-pre-wrap">{entry.description}</p>

                  <div className="mt-4 flex items-center justify-between text-sm text-[#8fa9b8]">
                    <span>Words: {String(entry.description || "").split(/\s+/).filter(Boolean).length}</span>
                    <span>Side: {entry.side}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  </div>
);

};

export default Storys;