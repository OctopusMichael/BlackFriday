import Content from "./components/Content";
import Date from "./components/Date";
import Footer from "./components/Footer";

import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className=" max-w-[1440px]  h-auto  mx-auto lg:flex gap-5 ">
        <header>
          <Hero />
        </header>
        <main>
          <Date />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
