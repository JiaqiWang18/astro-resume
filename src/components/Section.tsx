import Item from "./Item";
import SkillItem from "./SkillItem";

const Section = ({ sectionObj }) => {
  const renderedItems = sectionObj.item.map((item) =>
    item.fields.skill ? (
      <SkillItem data={item.fields} />
    ) : (
      <Item data={item.fields} />
    )
  );

  return (
    <div className="">
      <div className="flex">
        <object
          data={sectionObj.icon.fields.file.url}
          type="image/svg+xml"
          className="w-6 mr-2 self-start mt-3"
        ></object>
        <div className="w-full">
          <div className="text-2xl text-slate-600 my-2">{sectionObj.name}</div>
          <hr />
          {renderedItems}
        </div>
      </div>
    </div>
  );
};

export default Section;
