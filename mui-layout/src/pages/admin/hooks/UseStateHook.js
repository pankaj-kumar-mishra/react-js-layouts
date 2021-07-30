import { useState } from "react";
import PropTypes from "prop-types";

const UseStateHook = (props) => {
  const initialProfile = {
    firstname: "Pankaj",
    middlename: "Kumar",
    lastname: "Mishra",
    email: "pmishra403@gmail.com",
    phoneno: 9937489302,
    status: "Sleeping",
  };

  const [profile, setProfile] = useState(initialProfile);

  const { firstname, middlename, lastname, email, phoneno } = profile;

  const nameHandler = (name, value) => {
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div>
      <h4>{`Name: ${firstname} ${middlename} ${lastname}.`}</h4>
      <h5>{`Email: ${email}`}</h5>
      <h5>{`Phoneno: ${phoneno}`}</h5>
      <form className="mt-4" action="#">
        <input
          type="text"
          name="firstname"
          onChange={(e) => nameHandler("firstname", e.target.value)}
          className="me-2"
        />
        <input
          type="text"
          name="middlename"
          onChange={(e) => nameHandler("middlename", e.target.value)}
          className="me-2"
        />
        <input
          type="text"
          name="lastname"
          onChange={(e) => nameHandler("lastname", e.target.value)}
          className="me-2"
        />
        <input
          type="email"
          name="email"
          onChange={(e) => nameHandler("email", e.target.value)}
          className="me-2"
        />
        <input
          type="number"
          name="phoneno"
          onChange={(e) => nameHandler("phoneno", e.target.value)}
          className="me-2"
        />
      </form>
    </div>
  );
};

UseStateHook.propTypes = {};

export default UseStateHook;
