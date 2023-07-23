import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const AllChocolates = ({ chocolate }) => {
  const { _id, name, country, select } = chocolate;

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
          <FontAwesomeIcon
            className="bg-orange-300 p-3 rounded-md"
            icon={faXmark}
          />
        </th>
      </tr>
    </>
  );
};

export default AllChocolates;
