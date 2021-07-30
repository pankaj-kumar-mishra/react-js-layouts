import { useReducer, createContext, useContext } from "react";
import PropTypes from "prop-types";

const initialState = {
  language: "English",
  updateLanguage: () => {},
};

const langReducer = (state = initialState, action) => {
  switch (action) {
    case "English":
      return { ...state, language: action };
    case "Hindi":
      return { ...state, language: action };
    case "Odia":
      return { ...state, language: action };

    default:
      return state;
  }
};

const LanguageContext = createContext(initialState);

const ScreenOne = () => {
  const data = useContext(LanguageContext);
  return (
    <div>
      <h6>Screen 👉 1</h6>
      <h6 className="text-danger">Language: {data.language}</h6>
      <button
        onClick={() => data.updateLanguage("English")}
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
        onClick={() => data.updateLanguage("Hindi")}
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
        onClick={() => data.updateLanguage("Odia")}
        className="btn btn-outline-dark"
      >
        Oriya
      </button>
    </div>
  );
};

const CombineReducerContext = (props) => {
  const [state, dispatch] = useReducer(langReducer, initialState);

  const langValue = { language: state.language, updateLanguage: dispatch };

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

CombineReducerContext.propTypes = {};

export default CombineReducerContext;
