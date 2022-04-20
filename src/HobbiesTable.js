import React, { useState } from "react";

export const HobbiesTable = () => {

    const [hobbies, setHobbies] = useState([
    {
      name: "riding",
      description: "i love bike riding",
      dateofcreation: "12/11/1900"
    },
    {
      name: "painting",
      description: "i love oil painting",
      dateofcreation: "7/11/2900"
    },
    {
      name: "volleyball",
      description: "i love playing volleyball",
      dateofcreation: "2/11/2020"
    }
  ]);

  //input field states
  const [addHobby, setAddHobby] = useState({
    name: "",
    description: "",
    dateofcreation: ""
  });

  //form handling change event
  const handleAddHobbychange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newAddHobby = { ...addHobby };
    newAddHobby[fieldName] = fieldValue;
    setAddHobby(newAddHobby);
  };

  const handleAddHobbySubmit = (e) => {
    e.preventDefault();
    const newHobby = {
      name: addHobby.name,
      description: addHobby.description,
      dateofcreation: addHobby.dateofcreation
    };
    const newHobbies = [...hobbies, newHobby];
    setHobbies(newHobbies);
    console.log(newHobbies);
  };
  const clearHobbies = () => {
    setHobbies([]);
  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>DateofCreation</th>
          </tr>
        </thead>
        <tbody>
          {hobbies.map((hobby) => (
            <tr>
              <td>{hobby.name}</td>
              <td>{hobby.description}</td>
              <td>{hobby.dateofcreation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>
        <i>Add New Hobby</i>
      </h2>
      <button onClick={clearHobbies}>Clear All</button>
      <form onSubmit={handleAddHobbySubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a hobby name"
          onChange={handleAddHobbychange}
        />
        &nbsp;&nbsp;
        <input
          type="text"
          name="description"
          required="required"
          placeholder="Enter a hobby description"
          onChange={handleAddHobbychange}
        />
        &nbsp;&nbsp;
        <input
          type="text"
          name="dateofcreation"
          required="required"
          placeholder="Enter a date of creation"
          onChange={handleAddHobbychange}
        />
        &nbsp;&nbsp;
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default HobbiesTable;
