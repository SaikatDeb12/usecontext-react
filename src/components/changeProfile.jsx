import { useState } from "react";
export const Changeprofile = (props) => {
  const [newUsername, setUsername] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></input>
      <button onClick={props.setUsername(newUsername)}>Change Username</button>
    </div>
  );
};
