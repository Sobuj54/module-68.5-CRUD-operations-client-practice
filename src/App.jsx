import "./App.css";
import { useLoaderData, Link } from "react-router-dom";
import AllChocolates from "./components/AllChocolates";

function App() {
  const chocolates = useLoaderData();

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="text-4xl text-center bg-[#61222c] py-6 text-white font-bold rounded-md">
        Chocolate management system
      </h2>
      <Link to="/addChocolate">
        <button className=" mt-6  border-2 py-1 px-3">
          <span className="text-xl">+</span> New Chocolate
        </button>
      </Link>
      {/* all chocolate showing */}

      <div className="  mt-10">
        <table className="table">
          {/* head */}
          <thead className="bg-rose-300">
            <tr className="text-center text-lg">
              <th>Name</th>
              <th>Country/Factory</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {chocolates.map((chocolate) => (
              <AllChocolates
                key={chocolate._id}
                chocolate={chocolate}></AllChocolates>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
