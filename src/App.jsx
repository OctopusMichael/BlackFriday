import Content from "./components/Content";
import Date from "./components/Date";
import Footer from "./components/Footer";

import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="max-w-[500px] mx-auto flex flex-col ">
        <header>
          <Hero />
        </header>
        <main>
          <Content />
          <Date />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
