import React, { useState } from "react";
import toast from "react-hot-toast";

const Shortener = () => {
  const [url, setUrl] = useState(null);
  const [typedUrl, setTypedUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleUrlChange = (e) => {
    setTypedUrl(e.target.value);
  };

  const getShortUrl = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${typedUrl}`
    );
    const data = await response.json();
    if (typedUrl == null || response.ok !== true) {
      setError(true);
      setUrl(null);
    }
    const shortenUrl = data.result;
    setUrl(shortenUrl);
    // setError(false);
  };

  const notify = () => {
    toast.success("Successfully copied!");
  };

  return (
    <div className="sm:mt-12">
      <form onSubmit={getShortUrl}>
        <div className="sm:flex">
          {/* input */}
          <div className="min-w-0 flex">
            <label htmlFor="url" className="sr-only">
              URL Input
            </label>
            <input
              onChange={handleUrlChange}
              type="text"
              className="block w-full py-2 px-3 h-12 rounded-lg text-lime-800 placeholder-lime-500"
              placeholder="Paste your link here"
            />
          </div>

          {/* Button */}
          <div className="mt-2 sm:mt-0 sm:ml-3">
            <button className="w-full py-2 px-3 h-12 rounded-md shadow border-2 mb-2 border-black bg-gradient-to-r from-lime-600 to-lime-100 hover:from-lime-300 hover:to-lime-900 hover:text-white">
              Shorten it!
            </button>
          </div>
        </div>
      </form>

      {/* Shortened urls */}
      {url && (
        <div className="my-5 sm:mt-5 bg-[#a3e635] rounded-lg p-5 shadow-xl shadow-[#1f2937] max-w-md">
          <p className="text-lime-900 font-medium text-xl mb-5">
            Your shortened links:
          </p>
          <div className="flex flex-col gap-2 mt-1 md:gy-5">
            {/* first link */}
            <div className="flex justify-between">
              <p className="text-white font-medium text-lg">{url.short_link}</p>
              {/* copy btn */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(url.short_link);
                  notify();
                }}
                className="block w-24 px-4 py-1 h-9 rounded-md shadow bg-gradient-to-r from-lime-900 to-lime-200"
              >
                Copy!
              </button>
            </div>
            {/* second link */}
            <div className="flex justify-between">
              <p className="text-white font-medium text-lg">
                {url.short_link2}
              </p>
              {/* copy btn */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(url.short_link1);
                  notify();
                }}
                className="block w-24 px-4 py-1 h-9 rounded-md shadow bg-gradient-to-r from-lime-900 to-lime-200"
              >
                Copy!
              </button>
            </div>
            {/* third link */}
            <div className="flex justify-between">
              <p className="text-white font-medium text-lg">
                {url.short_link3}
              </p>
              {/* copy btn */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(url.short_link2);
                  notify();
                }}
                className="block w-24 px-4 py-1 h-9 rounded-md shadow bg-gradient-to-r from-lime-900 to-lime-200"
              >
                Copy!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* error */}
      {error && (
        <p className="mt-3 text-red-500 font-semibold text-lg">
          Please enter a valid URL!
        </p>
      )}
    </div>
  );
};

export default Shortener;
