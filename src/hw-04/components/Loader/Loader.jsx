import { MagnifyingGlass } from "react-loader-spinner";

export const Loader = () => (
  <MagnifyingGlass
    visible={true}
    height="200"
    width="200"
    ariaLabel="magnifying-glass-loading"
    wrapperStyle={{}}
    wrapperClass="magnifying-glass-wrapper"
    glassColor="lightskyblue"
    color="orange"
  />
);
