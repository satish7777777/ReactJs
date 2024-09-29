import React, { useEffect,useState } from "react";

function DisplayData({ data, deleteData }) {
  const [tableRows, setTableRows] = useState([]);
  useEffect(() => {
    console.log("dat", data);
    renderData();
  }, [data]);

  const renderData = () => {
    // const prepiredData = data.map((element) => {
    //   console.log("display data",element);
  
    return (
      <table>
        <thead>
          <tr>
            <th> Name</th>
            <th>ID</th>
            <th>Address</th>
            <th>Role</th>
            {/* <tbody>{tableRows}</tbody> */}
          </tr>
        </thead>
        <tbody>
          {data.map((element) => {
            return (
              <tr>
                <td>{element.name}</td>
                <td>{element.ID}</td>
                <td>{element.Address}</td>
                <td>{element.Srole}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  // setTableRows(prepiredData);

  return (
    <>
      <div className="h-full w-full bg-yellow-200">
        <div>{renderData()}</div>
        <button onClick={deleteData}>Delete</button>
      </div>
    </>
    // <div>{renderData()}</div/>
  );
}

export default DisplayData;

