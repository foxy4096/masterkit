import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ToolCard = ({ tool: { title, icon, description, url } }) => {
  return (
    <div>
      <li className="border h-36">
        <div className="flex items-start justify-between p-4">
          <div className="space-y-2">
            {icon}
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm">{description}</p>
          </div>
          {url && (
            <Link to={url}>
            <button className="text-sm border px-3 py-2 duration-150 hover:bg-indigo-500">
              View
            </button>
            </Link>
          )}
        </div>
      </li>
    </div>
  );
};

export default ToolCard;
