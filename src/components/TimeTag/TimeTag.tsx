import React from "react";

interface TimeTagProps {
  time: string;
  className?: string;
}

const TimeTag: React.FC<TimeTagProps> = ({ time, className }) => {
  return (
    <div className={"TimeTag " + className}>
      <p className="text-xs ">{time}</p>
    </div>
  );
};

export default TimeTag;
