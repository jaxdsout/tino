import About from "./components/About";
import Header from "./components/Header";
import Links from "./components/Links";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex flex-col items-center h-screen justify-between">
      <div className="flex flex-col items-center">
        <Header />
        <Navbar />
      </div>

      <About />

      <Contact />

      <div className="bg-gray-500/30 w-full flex justify-end items-center p-3">
        <Links />
      </div>

    </div>
  );
}

export default App;
