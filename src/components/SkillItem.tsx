const SkillItem = ({ data }) => {
  return (
    <div className="my-2">
      <div className="text-xl">
        <span className="font-medium">{data.title}</span>
      </div>
      <div></div>
    </div>
  );
};

export default SkillItem;
