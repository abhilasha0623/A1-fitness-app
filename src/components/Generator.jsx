import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS,SCHEMES } from "../utils/swoldier";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}
export default function Generator() {
  const [showModal, setShowModal] = useState(false);

  const ToggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <SectionWrapper
      header={"generate yor workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your Poison"}
        description={"Select the workout you wish to endure."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((workout, index) => {
          return (
            <button
              className={
                "bg-slate-950 border  duration-200 px-6 hover:border-blue-600 py-6 rounded-lg "
              }
              key={index}
            >
              <p className="capitalize">{workout.replace("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock on Targets"}
        description={"Select the muscles judged for annihilation."}
      />
      <div className="bg-slate-950  border border-solid border-rose-400 rounded-lg flex flex-col">
        <button
          onClick={() => ToggleModal()}
          className="relative  p-3 flex items-center justify-center"
        >
          <p>Select muscles group</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && <div>Modal</div>}
      </div>
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              className={
                "bg-slate-950 border  duration-200 hover:border-blue-600 py-3 rounded-lg px-4 "
              }
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
