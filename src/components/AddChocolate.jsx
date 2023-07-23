import { useState } from "react";
import Swal from "sweetalert2";

const AddChocolate = () => {
  const [quality, setQuality] = useState();

  const handleAddChocolate = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;

    const createdChocolate = { name, country, select: quality };

    console.log(createdChocolate);

    fetch("http://localhost:5000/chocolates", {
      method: "POST",
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
    <div>
      <h2 className="text-4xl bg-[#61222c] py-6 text-white font-bold rounded-md">
        Chocolate management system
      </h2>

      <div className=" mt-10">
        <form onSubmit={handleAddChocolate} className="w-3/5 mx-auto">
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
                defaultValue={quality}
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
            value="Add a Chocolate"
            className="btn btn-neutral mt-7 w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default AddChocolate;
