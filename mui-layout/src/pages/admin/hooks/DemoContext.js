import { createContext } from "react";

const demoContextData = {
  framework: "React jS",
  results: ["One", "Two", "Three"],
};
const DemoContext = createContext(demoContextData);

const postContextData = {
  id: 1,
  location: "India",
  title: "Welcome",
};
const PostContext = createContext(postContextData);

const userContextData = {
  id: 1,
  name: "Pankaj",
  email: "pk@gmail.com",
  status: "Sleeping",
};
const UserContext = createContext(userContextData);

const DemoProvider = DemoContext.Provider;
const DemoConsumer = DemoContext.Consumer;

const PostProvider = PostContext.Provider;
const PostConsumer = PostContext.Consumer;

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {
  DemoContext,
  DemoProvider,
  DemoConsumer,
  PostContext,
  PostProvider,
  PostConsumer,
  UserContext,
  UserProvider,
  UserConsumer,
};
