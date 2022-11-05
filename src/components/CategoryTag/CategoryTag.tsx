import React from "react";
import { ReactComponent as TagIcon } from "../../icons/tag.svg";

interface CategoryTagProps {
  name: string;
  className?: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ name, className }) => {
  return (
    <div className={"CategoryTag flex " + className}>
      <TagIcon />
      <p className="text-sm font-medium pl-2">{name}</p>
    </div>
  );
};

export default CategoryTag;
