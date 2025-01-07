import { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";

export const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);
  const [newUsername, setNewUsername] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="enter name:"
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change username
      </button>
    </div>
  );
};
