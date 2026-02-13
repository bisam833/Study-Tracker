import { useState, useEffect } from "react";
import axios from "axios";

const SESSION_DURATION = 1500; // 25 minutes

export default function Timer() {
  const [seconds, setSeconds] = useState(SESSION_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const [subject, setSubject] = useState("DSA");
  const [sessions, setSessions] = useState([]);

  // 🔹 Fetch sessions when page loads
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sessions")
      .then((res) => setSessions(res.data))
      .catch((err) => console.error(err));
  }, []);

  // 🔹 Timer countdown logic
  useEffect(() => {
    let interval = null;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    if (seconds === 0 && isRunning) {
      setIsRunning(false);

      const newSession = {
        subject,
        duration: 25,
      };

      axios
        .post("http://localhost:5000/api/sessions", newSession)
        .then((res) => {
          setSessions((prev) => [res.data, ...prev]);
        })
        .catch((err) => console.error(err));
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(SESSION_DURATION);
  };

  return (
    <div className="h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="bg-gray-900 p-10 rounded-3xl shadow-2xl text-center w-[420px]">
        <h1 className="text-2xl font-bold mb-4">
          Study Session ⏱
        </h1>

        {/* Subject Dropdown */}
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mb-6 bg-gray-800 text-white px-4 py-2 rounded-xl w-full"
        >
          <option>DSA</option>
          <option>React</option>
          <option>DBMS</option>
          <option>OS</option>
        </select>

        {/* Timer Display */}
        <div className="text-6xl font-bold mb-8 tracking-widest">
          {formatTime()}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="bg-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            {isRunning ? "Pause" : "Start"}
          </button>

          <button
            onClick={resetTimer}
            className="bg-gray-700 px-6 py-3 rounded-xl hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>

        {/* Completed Sessions */}
        {sessions.length > 0 && (
          <div className="text-left mt-4">
            <h3 className="text-sm text-gray-400 mb-2">
              Completed Sessions:
            </h3>

            <ul className="space-y-2 max-h-40 overflow-y-auto">
              {sessions.map((s) => (
                <li
                  key={s._id}
                  className="bg-gray-800 p-2 rounded-lg text-sm"
                >
                  {s.subject} - {s.duration} mins
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
