import React from "react";
import {
  International_Advisory_Committee,
  Hospitality_Committee,
  Registration_Committee,
  Finance_Committee,
  Publicity_Committee,
  Creative_Committee,
  Organizing_Committee,
  Technical_Program_Committee,
  National_Advisory_Committee,
  Technical_Committee,
} from "../components/Committee";
import "./index.css";
function Committee() {
  return (
    <div className="p-4 text-gray-700 text-lg h-full">
      <h1 className="text-5xl text-center pb-12 text-gray-800">
        Advisory Committee
      </h1>
      <International_Advisory_Committee />
      <National_Advisory_Committee />
      <Technical_Program_Committee />
      <br />
      <Organizing_Committee />
      <Creative_Committee />
      <Technical_Committee />
      <Publicity_Committee />
      <Finance_Committee />
      <Hospitality_Committee />
      <Registration_Committee />
    </div>
  );
}

export default Committee;
