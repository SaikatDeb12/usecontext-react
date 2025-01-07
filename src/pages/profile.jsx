import { ChangeProfile } from "../components/changeProfile";
import { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";
export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      Profile is of : {username}
      <ChangeProfile />
    </div>
  );
};
