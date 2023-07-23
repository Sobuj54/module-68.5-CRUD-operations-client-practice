import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllChocolates = ({ chocolate, chocolates, setChocolates }) => {
  const { _id, name, country, select } = chocolate;

  const hanldeDelete = () => {
    fetch(`http://localhost:5000/chocolates/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Successfully added new chocolate",
            icon: "success",
            confirmButtonText: "close",
          });
        }
        const remainingChocolate = chocolates.filter(
          (choco) => choco._id !== _id
        );
        setChocolates(remainingChocolate);
      });
  };

  return (
    <>
      {/* row 1 */}
      <tr>
        <td>
          <div>
            <div className="font-bold ">{name}</div>
          </div>
        </td>
        <td>
          <p>{country}</p>
        </td>
        <td>{select}</td>
        <th>
          <Link to={`/updateChocolate/${_id}`}>
            <FontAwesomeIcon
              className="mr-3 bg-slate-300 p-3 rounded-md"
              icon={faPen}
            />
          </Link>
          <button onClick={hanldeDelete}>
            <FontAwesomeIcon
              className="bg-orange-300 p-3 rounded-md"
              icon={faXmark}
            />
          </button>
        </th>
      </tr>
    </>
  );
};

export default AllChocolates;
