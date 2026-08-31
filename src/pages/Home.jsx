// import { link } from "react-router-dom";
import Navbar from "../components/Navbar";
import crossant from "../assets/crossant.png";

export default function Home() {
  return (
    <>
      <section>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-10 lg:px-16">
          <div className="md:translate-x-10">
            <h1 className="text-9xl crimson-text-semibold-italic ">
              Coffee
              <br />
              Meets
              <br />
              Creativity.
            </h1>
            <p className="text-3xl crimson-text-regular ">
              Immerse yourself in a space where
              <br />
              flavors blend and creativity thrives
            </p>
          </div>
          <div className="w-full">
            <img src={crossant} alt="crosan" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
}
