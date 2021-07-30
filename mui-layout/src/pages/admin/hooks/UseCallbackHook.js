import { useState, memo, useCallback } from "react";
import PropTypes from "prop-types";

// NOTE here momo() make this component as pure component(if state not updated then it will not rerender)
// export default memo(Header);etc.. // if this header is in separate file
const Header = memo(({ headerText }) => {
  console.log("Header>>", headerText);
  return <h4>{headerText}</h4>;
});
const Button = memo(({ btnText, handleClick }) => {
  console.log("Btn Text>>", btnText, "<<Button click");
  return (
    <button onClick={handleClick} className="btn btn-danger">
      {btnText}
    </button>
  );
});
const Footer = memo(({ footerText }) => {
  console.log("Footer Text>>", footerText);
  return <h5>{footerText}</h5>;
});

const UseCallbackHook = (props) => {
  const [headername, setHeadername] = useState("Home page");
  const [aboutname, setAboutname] = useState("About page");

  //   MSG useCallback will render it's functional component when some value changes like useEffect
  const updateHeader = useCallback(() => {
    setHeadername("Home page UPDATE");
  }, [headername]);
  const updateAbout = useCallback(() => {
    setAboutname("About page UPDATE");
  }, [aboutname]);

  const handleReset = useCallback(() => {
    setHeadername("Home page");
    setAboutname("About page");
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <Header headerText={headername} />
          <Button btnText="Home update" handleClick={updateHeader} />
        </div>
        <div>
          <Header headerText={aboutname} />
          <Button btnText="About update" handleClick={updateAbout} />
        </div>
      </div>
      <br />
      <br />
      <div className="text-center">
        <Button btnText="Reset" handleClick={handleReset} />
        <Footer footerText="Footer" />
      </div>
    </div>
  );
};

UseCallbackHook.propTypes = {};

export default UseCallbackHook;
