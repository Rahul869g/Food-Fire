import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-5 text-center">
      <h3 className="font-bold text-lg text-purple-700">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="bg-slate-500 p-1 m-1 border rounded-xl text-slate-300 cursor-pointer "
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="bg-slate-500 p-1 m-1 border rounded-xl text-slate-300 cursor-pointer "
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div className="h-[76vh]">
      <h1 className="m-2 text-center text-xl font-semibold p-3 ">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={"This is about the section of Instamart"}
        isVisible={visibleSection === "about"}
        setIsVisible={(isVisible) =>
          isVisible ? setVisibleSection("about") : setVisibleSection("")
        }
      />

      <Section
        title={"Team Instamart"}
        description={
          "This is the team section of instamart. This team has 50 members"
        }
        isVisible={visibleSection === "team"}
        setIsVisible={(isVisible) =>
          isVisible ? setVisibleSection("team") : setVisibleSection("")
        }
      />

      <Section
        title={"Career"}
        description={
          "This is the career section of instamart. This team has 50 members"
        }
        isVisible={visibleSection === "career"}
        setIsVisible={(isVisible) =>
          isVisible ? setVisibleSection("career") : setVisibleSection("")
        }
      />
    </div>
  );
};

export default Instamart;
