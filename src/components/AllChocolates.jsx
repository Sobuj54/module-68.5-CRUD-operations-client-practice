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
        <th> </th>
      </tr>
    </>
  );
};

export default AllChocolates;
