import React from 'react';

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-white">{skill}</span>
        <span className="text-sm font-medium text-white">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillSection = ({ skills }) => {
  return (
    <div className="font-grotesk   p-4 rounded-2xl bg-black text-white shadow-lg mx-4 transition-all duration-300 border-2 border-gray-700 hover:bg-radial-card">
      {/* <h2 className="text-xl font-semibold mb-4">Skills</h2> */}
      <div>
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill.name} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
