import Section from "./Section";

const Resume = ({ data }) => {
  const renderedSections = data.map((obj) => (
    <Section sectionObj={obj.fields} />
  ));

  return (
    <div className="bg-white rounded border-slate-200 border">
      <div className="mx-5 my-5">
        <div className="text-2xl font-medium text-slate-700 mb-3">RESUME</div>
        <hr />
        {renderedSections}
      </div>
    </div>
  );
};

export default Resume;
