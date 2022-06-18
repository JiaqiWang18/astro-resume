const SkillItem = ({ data }) => {
  const badge = (text) => (
    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mb-1">
      {text}
    </span>
  );

  const renderedSkillList = data.skill.map((s: string) => badge(s));

  return (
    <div className="my-2">
      <div className="text-xl">
        <span className="font-medium">{data.title}</span>
      </div>
      <div className="flex flex-wrap">{renderedSkillList}</div>
    </div>
  );
};

export default SkillItem;
