import Navbar from "../components/Navbar";
import MenuPages from "../components/Menu/MenuPages";
export default function Menu() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col  items-center jusify-center">
        <h1 className="vazirmatn-dark text-5xl  border-b-2 border-[#b5614a]  pb-6">
          منوی ما
        </h1>
      </div>
      <MenuPages />
    </>
  );
}
