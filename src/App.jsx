import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [sleepSchedule, setSleepSchedule] = useState("Early bird");
  const [cleanliness, setCleanliness] = useState("Very clean");
  const [pets, setPets] = useState("No pets");
  const [match, setMatch] = useState(null);

  function findMatch(event) {
    event.preventDefault();

    setMatch({
      name: "Jordan Lee",
      major: "Computer Science",
      sleepSchedule: "Early bird",
      cleanliness: "Very clean",
      pets: "No pets",
    });
  }

  return (
    <main className="app">
      <section className="card">
        <h1>MoveIn Match</h1>
        <p className="intro">
          Find a college roommate with similar living preferences.
        </p>

        <form onSubmit={findMatch}>
          <label>
            Your name
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>

          <label>
            Sleep schedule
            <select
              value={sleepSchedule}
              onChange={(event) => setSleepSchedule(event.target.value)}
            >
              <option>Early bird</option>
              <option>Night owl</option>
            </select>
          </label>

          <label>
            Cleanliness
            <select
              value={cleanliness}
              onChange={(event) => setCleanliness(event.target.value)}
            >
              <option>Very clean</option>
              <option>Somewhat clean</option>
              <option>Not too worried about mess</option>
            </select>
          </label>

          <label>
            Pet preference
            <select value={pets} onChange={(event) => setPets(event.target.value)}>
              <option>No pets</option>
              <option>Likes pets</option>
              <option>Has a pet</option>
            </select>
          </label>

          <button type="submit">Find My Match</button>
        </form>

        {match && (
          <section className="result">
            <h2>Your Match: {match.name}</h2>
            <p><strong>Major:</strong> {match.major}</p>
            <p><strong>Sleep schedule:</strong> {match.sleepSchedule}</p>
            <p><strong>Cleanliness:</strong> {match.cleanliness}</p>
            <p><strong>Pet preference:</strong> {match.pets}</p>
            <p className="score">
              {name}, you and {match.name} have an 88% compatibility score!
            </p>

            <button type="button" onClick={() => setMatch(null)}>
                Try Again
            </button>
          </section>
        )}
      </section>
    </main>
  );
}

export default App;