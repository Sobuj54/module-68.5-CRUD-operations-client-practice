import { useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const UpdateChocolate = () => {
  const chocolate = useLoaderData();
  const { _id, name, country } = chocolate;
  const [quality, setQuality] = useState();

  const handleUpdateChocolate = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;

    const createdChocolate = { name, country, quality };

    console.log(createdChocolate);

    fetch(`http://localhost:5000/chocolates/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createdChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Successfully added new chocolate",
            icon: "success",
            confirmButtonText: "close",
          });
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="text-4xl text-center bg-[#61222c] py-6 text-white font-bold rounded-md">
        Chocolate management system
      </h2>
      <Link to="/">
        <button className=" mt-6  border-2 py-1 px-3">
          <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
          All Chocolates
        </button>
      </Link>

      <div className=" mt-10 bg-slate-200 py-10 rounded-xl mb-20">
        <h2 className="text-3xl font-bold text-center mb-2">
          Update Chocolates
        </h2>
        <p className="mb-10 text-center">
          Use the form below to update products
        </p>
        <form onSubmit={handleUpdateChocolate} className="w-3/5 mx-auto">
          {/* chocolate name field */}
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Chocolate Name"
                className="input input-bordered rounded-md w-full"
                name="name"
                defaultValue={name}
              />
            </label>
          </div>
          {/* chocolate country field */}
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <label className="">
              <input
                type="text"
                placeholder="Chocolate Country Name"
                className="input input-bordered rounded-md w-full"
                name="country"
                defaultValue={country}
              />
            </label>
          </div>
          {/* category with drop down options */}
          <div className="form-control mt-3 ">
            <div>
              <label className="label">
                <span className="label-text">Choose an option</span>
              </label>
              <select
                required
                onChange={(e) => setQuality(e.target.value)}
                className="w-full select select-bordered">
                <option></option>
                <option>Premium</option>
                <option>Medium</option>
                <option>Normal</option>
              </select>
            </div>
          </div>
          <input
            type="submit"
            value="Update a Chocolate"
            className="btn btn-neutral mt-7 w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateChocolate;
