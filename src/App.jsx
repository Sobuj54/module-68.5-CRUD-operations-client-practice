import "./App.css";
import { useLoaderData, Link } from "react-router-dom";

function App() {
  const chocolates = useLoaderData();

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="text-4xl text-center bg-[#61222c] py-6 text-white font-bold rounded-md">
        Chocolate management system {chocolates.length}
      </h2>
      <Link to="/addChocolate">
        <button className=" mt-6  border-2 py-1 px-3">
          <span className="text-xl">+</span> New Chocolate
        </button>
      </Link>
    </div>
  );
}

export default App;
