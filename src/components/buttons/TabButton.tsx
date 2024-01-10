import React from "react";

interface TabButtonProps {
  onSelect: (category: string) => void;
  children: React.ReactNode;
  active?: boolean;
}

const TabButton: React.FC<TabButtonProps> = (props) => {
  function clickHandler() {
    props.onSelect(props.children as string);
  }

  return (
    <button className={`menu_course ${props.active ? 'active' : ''}`} onClick={clickHandler}>
      {props.children}
    </button>
  );
};

export default TabButton;
