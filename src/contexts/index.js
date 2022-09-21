import { default as HomeProvider } from "./home.context";

const providers = [HomeProvider];

const combineProviders = (...components) => {
  return components.reduce((Parents, Current) => ({ children }) => {
    return (
      <Parents>
        <Current>{children}</Current>
      </Parents>
    );
  });
};

const AppProviders = combineProviders(...providers);
export default AppProviders;
