import React, { useState } from "react";
import { Context } from "../../../context/ContextProvider";


const initialSuggestions = [
  "JavaScript",
  "Figma",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "PHP",
  "Swift",
  "Go",
  "Rust",
  "TypeScript",
  "Kotlin",
  "Scala",
  "Solidity",
  "React",
  "Angular",
  "Vue.js",
  "Node.js",
  "Django",
  "Flask",
  "Spring Boot",
  "Express.js",
  "Ruby on Rails",
  "ASP.NET",
  "Ethereum",
  "Hyperledger",
  "Corda",
  "Polkadot",
  "Cardano",
];

const categorizeSkill = (skill) => {
  const frontendSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Vue.js",
  ];
  const backendSkills = [
    "Python",
    "Java",
    "C++",
    "Ruby",
    "PHP",
    "Go",
    "Rust",
    "Kotlin",
    "Scala",
    "Node.js",
    "Django",
    "Flask",
    "Spring Boot",
    "Express.js",
    "Ruby on Rails",
    "ASP.NET",
  ];
  const blockchainSkills = [
    "Solidity",
    "Ethereum",
    "Hyperledger",
    "Corda",
    "Polkadot",
    "Cardano",
  ];

  if (frontendSkills.includes(skill)) return "frontend";
  if (backendSkills.includes(skill)) return "backend";
  if (blockchainSkills.includes(skill)) return "blockchain";
  return "other";
};

function SkillSelector() {
  const { registerData, setRegisterData } = React.useContext(Context);

  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState(initialSuggestions);
  const [selectedSkills, setSelectedSkills] = useState({
    frontend: [],
    backend: [],
    blockchain: [],
    other: [],
  });

  React.useEffect(() => {
    setRegisterData({
      ...registerData,
      skills: selectedSkills,
    });
  
    
  }, [selectedSkills])
  

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSkillSelect = (skill) => {
    const category = categorizeSkill(skill);
    setSelectedSkills((prev) => ({
      ...prev,
      [category]: [...prev[category], skill],
    }));
    setSuggestions((prev) => prev.filter((s) => s !== skill));
    setInput("");
  };

  const filteredSuggestions = suggestions.filter((skill) =>
    skill.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="flex flex-col px-0 max-w-lg">
      <div className="w-full text-lg font-semibold text-black max-md:max-w-full">
        your skills
      </div>
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="px-5 py-4 mt-5 w-full text-base font-medium bg-white rounded border border-solid border-orange-500 border-opacity-50 text-stone-700 max-md:pr-5 max-md:max-w-full"
          placeholder="add your skills"
        />
        {input && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {filteredSuggestions.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSkillSelect(skill)}
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-4">
        {Object.entries(selectedSkills).map(
          ([category, skills]) =>
            skills.length > 0 && (
              <div key={category} className="mb-2">
                <h3 className="font-semibold capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-sm bg-gray-200 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default SkillSelector;
