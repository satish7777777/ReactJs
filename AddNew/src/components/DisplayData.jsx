import React, { useEffect } from 'react';

function DisplayData({ data }) {
    // Ensure data is an array
    const safeData = Array.isArray(data) ? data : [];

    useEffect(() => {
        console.log("data", data);
    }, [data]);

    const renderData = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Address</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {safeData.map((element, index) => (
                        <tr key={index}>
                            <td>{element.name}</td>
                            <td>{element.EmployeId}</td>
                            <td>{element.Salary}</td>
                            <td>{element.Placce}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className="h-full w-full bg-yellow-200">
            <div>{renderData()}</div>
        </div>
    );
}

export default DisplayData;

