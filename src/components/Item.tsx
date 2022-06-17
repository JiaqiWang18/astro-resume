import { constructMonthDate } from "../utils";

const Item = ({ data }) => {
  console.log(data);

  const getDates = (startDate: string, endDate: string) => {
    if (!startDate) {
      return "";
    }
    startDate = constructMonthDate(startDate);
    endDate = endDate ? constructMonthDate(endDate) : "Present";
    return `${startDate} - ${endDate}`;
  };

  const workPeriod = getDates(data.startDate, data.endDate);

  const renderedDes = data.descriptions.map((des: string) => (
    <li className="my-1">{des}</li>
  ));

  return (
    <div className="my-3">
      <div className="text-xl">
        <span className="font-medium">{data.title},</span>{" "}
        <i className="font-light">{data.company}</i>
      </div>
      <div>
        <i className="text-gray-500">{workPeriod}</i>
      </div>
      <div className="ml-4">
        <ul className="list-disc">{renderedDes}</ul>
      </div>
    </div>
  );
};

export default Item;
