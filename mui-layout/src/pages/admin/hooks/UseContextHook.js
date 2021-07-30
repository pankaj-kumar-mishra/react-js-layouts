import { useContext } from "react";
import PropTypes from "prop-types";
import {
  DemoContext,
  DemoProvider,
  DemoConsumer,
  PostContext,
  PostProvider,
  PostConsumer,
  UserContext,
  UserProvider,
  UserConsumer,
} from "./DemoContext";

// MSG USING HOOKS
const ContextHook1 = () => {
  const data = useContext(DemoContext);
  return (
    <div>
      <h6>👉(useContext)-Demo</h6>
      <h6 className="text-danger">
        {data.name} - {data.framework}
      </h6>
      <p className="text-warning">{data.results?.toString()}</p>
    </div>
  );
};
const ContextHook2 = () => {
  const data = useContext(PostContext);
  return (
    <div>
      <h6>👉(useContext)-Post</h6>
      <h6 className="text-danger">
        {data.id} - {data.location}
      </h6>
      <p className="text-warning">{data.title}</p>
    </div>
  );
};
const ContextHook3 = () => {
  const data = useContext(UserContext);
  return (
    <div>
      <h6>👉(useContext)-User</h6>
      <h6 className="text-danger">
        {data.name} - {data.email}
      </h6>
      <p className="text-warning">{data.status}</p>
    </div>
  );
};

// MSG WITHOUT HOOKS
const ContextHook4 = () => {
  return (
    <div>
      <h6>👉(Consumer inside Provider)</h6>
      <DemoConsumer>
        {(data) => {
          return (
            <>
              <h6 className="text-danger">{data.framework}</h6>
              <p className="text-warning">{data.results?.toString()}</p>
            </>
          );
        }}
      </DemoConsumer>
    </div>
  );
};
const ContextHook5 = () => {
  return (
    <div>
      <h6>👉(Consumer)</h6>
      <DemoConsumer>
        {(data) => {
          return (
            <>
              <h6 className="text-danger">{data.framework}</h6>
              <p className="text-warning">{data.results?.toString()}</p>
            </>
          );
        }}
      </DemoConsumer>
    </div>
  );
};

const UseContextHook = (props) => {
  const newDemoContextData = {
    framework: "Javascript",
    results: ["Four", "Five"],
  };
  const newPostCotextData = {
    id: 1,
    location: "Srilanka",
    title: "Thank you",
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <ContextHook1 />
      <PostProvider value={newPostCotextData}>
        <ContextHook2 />
      </PostProvider>
      <ContextHook3 />
      <DemoProvider value={newDemoContextData}>
        <ContextHook4 />
      </DemoProvider>
      <ContextHook5 />
    </div>
  );
};

UseContextHook.propTypes = {};

export default UseContextHook;
