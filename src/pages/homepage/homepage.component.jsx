import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

{
  /* Functional component since don't need lifeccle methods  or store any state yet */
}
const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
