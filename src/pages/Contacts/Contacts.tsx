import React, { useEffect } from "react";

import PageTitle from "../../components/PageTitle";

const Contacts: React.FC = () => {
  useEffect(() => {
    document.title = "Газетяр: Контакти";
  }, []);

  return (
    <div className="Contacts">
      <PageTitle title="Контакти" />
    </div>
  );
};

export default Contacts;
