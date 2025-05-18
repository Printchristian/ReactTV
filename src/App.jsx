import React, { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./components/ShowSelection";
import ShowDetails from "./components/ShowDetails";


export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <h1>React TV</h1>
        <ShowSelection shows={tvShows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
