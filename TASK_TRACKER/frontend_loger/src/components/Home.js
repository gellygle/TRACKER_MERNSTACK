import React from "react";
import ShowLogger from "./ShowLogger";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderUser from "./HeaderUser";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  return (
    <div>
      {/* this is for homepage for successful login */}

      <HeaderUser />

      <ShowLogger />
    </div>
  );
}

export default Home;
