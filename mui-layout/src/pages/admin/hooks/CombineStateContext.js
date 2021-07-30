import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const LanguageContext = createContext({
  language: "English",
  setLanguage: () => {},
});

const ScreenOne = () => {
  const data = useContext(LanguageContext);
  return (
    <div>
      <h6>Screen 👉 1</h6>
      <h6 className="text-danger">Language: {data.language}</h6>
      <button
        onClick={() => data.setLanguage("English")}
        className="btn btn-outline-dark"
      >
        English
      </button>
    </div>
  );
};
const ScreenTwo = () => {
  const data = useContext(LanguageContext);
  return (
    <div>
      <h6>Screen 👉 2</h6>
      <h6 className="text-danger">Language: {data.language}</h6>
      <button
        onClick={() => data.setLanguage("Hindi")}
        className="btn btn-outline-dark"
      >
        Hindi
      </button>
    </div>
  );
};
const ScreenThree = () => {
  const data = useContext(LanguageContext);
  return (
    <div>
      <h6>Screen 👉 3</h6>
      <h6 className="text-danger">Language: {data.language}</h6>
      <button
        onClick={() => data.setLanguage("Odia")}
        className="btn btn-outline-dark"
      >
        Oriya
      </button>
    </div>
  );
};

const CombineStateContext = (props) => {
  const [language, setLanguage] = useState("English");

  //   NOTE in context property is same so we use here ES6
  const langValue = { language, setLanguage };

  return (
    <LanguageContext.Provider value={langValue}>
      <div className="d-flex align-items-center justify-content-between">
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
      </div>
    </LanguageContext.Provider>
  );
};

CombineStateContext.propTypes = {};

export default CombineStateContext;
