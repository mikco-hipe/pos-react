import React from "react";

interface TabButtonProps {
  onSelect: (category: string) => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = (props) => {
  function clickHandler() {
    props.onSelect(props.children as string);
  }

  return (
        <button className="menu-course" onClick={clickHandler}>{props.children}</button>
  );
};

export default TabButton;
