import React, { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Storys from "./Storys";
import { WiStars } from "react-icons/wi";
import Button from "../layouts/Button";

/**
 * Redesigned AiStory (story input box)
 * - prompts: local textarea state
 * - examples: quick fill chips
 * - validation + inline error
 * - keyboard shortcut (Ctrl/Cmd + Enter) to submit
 * - smooth scroll to Storys
 */

const EXAMPLE_PROMPTS = [
  "lonely lighthouse, lost letter",
  "city rooftop, tiny revolution",
  "childhood toy, secret map",
  "midnight train, hidden violin",
];

const AiStory = () => {
  const [prompts, setPrompts] = useState("");
  const [showStories, setShowStories] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const storyRef = useRef(null);
  const textareaRef = useRef(null);

  // helper: trimmed prompt, and simple word count
  const normalized = (s) => (s || "").trim();
  const wordCount = (s) => (s ? String(s).trim().split(/\s+/).filter(Boolean).length : 0);

  const scrollToStories = useCallback(() => {
    if (storyRef.current) {
      storyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleGenerate = useCallback(() => {
    const text = normalized(prompts);
    if (!text) {
      setError("Prompt cannot be empty. Please enter a prompt (4–6 keywords recommended).");
      return;
    }
    // small heuristic: encourage short keyword prompts
    if (wordCount(text) > 20) {
      setError("Try 4–6 keywords for best results (you can still generate though).");
      // allow generation anyway — remove 'return' if you want to force it
    } else {
      setError("");
    }

    // prevent double-submit
    if (isSubmitting) return;
    setIsSubmitting(true);

    // show the Storys component (it will run the generation on mount)
    setShowStories(false); // reset so remount triggers the effect in Storys
    // tiny delay to ensure remount (helps when same prompts used multiple times)
    setTimeout(() => {
      setShowStories(true);
      setIsSubmitting(false);
      // scroll after a short delay so Storys mount and then scroll
      setTimeout(scrollToStories, 300);
    }, 120);
  }, [prompts, isSubmitting, scrollToStories]);

  // keyboard shortcut: Ctrl/Cmd + Enter to submit
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleGenerate();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleGenerate]);

  // click example chip to fill textarea
  const applyExample = (text) => {
    setPrompts(text);
    // focus the textarea for quick edit
    setTimeout(() => textareaRef.current?.focus(), 50);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="min-h-[70vh] lg:min-h-screen flex items-center justify-center bg-[#031A2E] px-4 lg:px-8 py-8">
        <div className="w-full max-w-3xl rounded-2xl bg-[#0b1f30] p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <WiStars size={44} className="text-[#01FFDC]" />
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-[#01FFDC]">Enter prompt keywords</h2>
              <p className="text-sm text-gray-300">
                Use short keywords (4–6 words) for snappy micro-stories.
              </p>
            </div>
          </div>

          <textarea
            ref={textareaRef}
            value={prompts}
            onChange={(e) => {
              setPrompts(e.target.value);
              if (error) setError("");
            }}
            placeholder="e.g. lonely lighthouse, lost letter"
            className="w-full h-36 p-3 rounded-lg bg-[#071826] border border-[#0f3a52] text-white placeholder-gray-500 focus:outline-none resize-none"
          />

          <div className="mt-3 flex flex-wrap items-center gap-3">
            {EXAMPLE_PROMPTS.map((ex) => (
              <button
                key={ex}
                onClick={() => applyExample(ex)}
                className="text-sm px-3 py-1 rounded-full bg-[#022a3a] text-[#01FFDC] hover:opacity-90 border border-[#063245]"
              >
                {ex}
              </button>
            ))}

            <div className="ml-auto text-sm text-gray-300">
              <span className="mr-3">Words: <strong className="text-white">{wordCount(prompts)}</strong></span>
              <span className="text-xs text-gray-400">Press <kbd className="px-1 py-0.5 bg-[#022a3a] rounded">Ctrl</kbd>+<kbd className="px-1 py-0.5 bg-[#022a3a] rounded">Enter</kbd> to generate</span>
            </div>
          </div>

          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

          <div className="mt-6 flex items-center gap-4">
            <div>
              <Button
                title={isSubmitting ? "Generating..." : "Generate"}
                onClick={handleGenerate}
                disabled={isSubmitting}
              />
            </div>

            <button
              onClick={() => {
                setPrompts("");
                setError("");
                setShowStories(false);
              }}
              className="ml-2 text-sm px-3 py-2 rounded-md border border-gray-600 text-gray-200 hover:bg-[#022a3a]"
            >
              Clear
            </button>

            <div className="ml-auto text-xs text-gray-400">
              <span>Tip: short keyword phrases create the best results</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={storyRef}>{showStories && <Storys prompts={prompts} />}</div>

      <hr className="border-t border-gray-200" />
      <Footer />
    </div>
  );
};

export default AiStory;
