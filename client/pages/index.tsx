import React, { useEffect } from "react";
import Layout from "../components/app/Layout";

const HomePage: React.FunctionComponent = ({ cookie }) => {
  return (
    <Layout title="Resource | Home">
      <h1>This is the home page!</h1>
    </Layout>
  );
};

export default HomePage;
