import React, { useEffect } from "react";

import PageTitle from "../../components/PageTitle";

const About: React.FC = () => {
  useEffect(() => {
    document.title = "Газетяр: Володимир Каран";
  }, []);

  return (
    <div className="About">
      <PageTitle title="Про мене" />
    </div>
  );
};

export default About;
