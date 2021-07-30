import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LIST_VIEW_ICONS = ["list", "border-all"];
const DATE_FILTERING_ICONS = ["sort-numeric-down", "sort-numeric-up"];

const FilteringMenu = ({ onChange, filter }) => {
  return (
    <div className="flex container mx-auto justify-between px-8 pt-12 pb-8">
      <ul>
        <li
          className={`cursor-pointer inline-block mr-5 border-2 border-transparent hover:border-white p-2 ${
            filter?.view.list ? null : "border-white"
          }`}
        >
          <FontAwesomeIcon
            icon="border-all"
            size="lg"
            className="text-white"
            onClick={() => onChange("view", { list: +!filter.view.list })}
          />
        </li>
        <li
          className={`cursor-pointer inline-block mr-5 border-2 border-transparent hover:border-white p-2 ${
            filter?.view.list ? "border-white" : null
          }`}
        >
          <FontAwesomeIcon
            icon="list"
            size="lg"
            className="text-white"
            onClick={() => onChange("view", { list: +!filter.view.list })}
          />
        </li>
      </ul>
      <div className="cursor-pointer inline-block border-2 border-white p-2 hover:bg-yellow-500">
        <FontAwesomeIcon
          icon={DATE_FILTERING_ICONS[filter?.date.asc]}
          size="lg"
          className="text-white"
          onClick={() => onChange("date", { asc: +!filter.date.asc })}
        />
      </div>
    </div>
  );
};

export default FilteringMenu;
