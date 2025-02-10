import React from "react";
import Menu from "../Menu";

const MenuApp = ({ data }) => {
  return (
    <div className="App">
      {data.map((menu, index) => (
        <Menu key={index} menuName={menu.menuName} menuItems={menu.menuItems} />
      ))}
    </div>
  );
};

export default MenuApp;
