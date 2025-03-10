import React from "react";
import Button from "./Button";

const list = ["All", "Live", "Gaming"];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap">
      <Button className="" name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="Hockey" />
      <Button name="Valentines" />
      <Button name="ABP News" />
      <Button name="BGMI" />
      <Button name="Web Dev" />
      <Button name="Lucknow" />
      <Button name="Ramayan" />
      <Button name="ICC" />
      <Button name="Stocks"/>
    </div>
  );
};

export default ButtonList;