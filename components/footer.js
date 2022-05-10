import { useState } from "react";
import axios from "axios";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
      setEmail("");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div className="bg-indigo-600 dark:bg-indigo-800 mt-4">
      <div className="text-center text-white container mx-auto p-5">
        <div className="mb-8 mt-4">
          <div className="block mb-2 text-sm font-medium text-white ">
            <h1 className="font-bold text-xl">Get notified...</h1>
            <small>
              When I release a new product or publish something important.
            </small>
          </div>
          <input
            type="email"
            id="email"
            className="bg-gray-50 dark:bg-gray-800  border border-gray-300 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
            placeholder="email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={`text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm sm:w-auto px-2 py-3 text-center ml-2${
              state === "LOADING" ? "button-gradient-loading" : ""
            }`}
            type="button"
            disabled={state === "LOADING"}
            onClick={subscribe}
          >
            Subscribe
          </button>
        </div>
        <small>
          {state === "ERROR" && <p className="text-white">{errorMessage}</p>}
          {state === "SUCCESS" && <p className=" text-white">Success!</p>}
        </small>
      </div>
    </div>
  );
}
