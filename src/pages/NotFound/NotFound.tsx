import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="NotFound text-center py-32">
      <h1 className="text-2xl text-purple-main">Помилка 404</h1>
      <h2 className="text-xl pt-3">
        Схоже, що адреса введена хибно або сторінка була видалена
      </h2>
    </div>
  );
};

export default NotFound;
