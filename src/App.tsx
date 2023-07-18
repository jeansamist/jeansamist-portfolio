// import { useState } from "react";
import { Hero } from "./sections/Hero";
import { Topbar } from "./components/Topbar";
// import { Socials } from "./sections/Socials";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main>
      <Topbar />
      <Hero />
    </main>
  );
}

export default App;
