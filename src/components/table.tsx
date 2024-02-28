import { IList, ITable } from "../interface/info";

const Table = ({ title, list, onClick }: ITable) => {
  return (
    <div className="table-layout">
      <div className="table-head">{title}</div>
      <div className="table-body">
        {list?.map((item: IList, idx: number) => {
          return (
            <div style={{ marginBottom: "0.5vh" }}>
              <TBody
                id={item?.name}
                item={item}
                key={idx}
                onClick={(value) => {
                  onClick && onClick(value);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;

export const TBody = ({
  id,
  item,
  onClick,
}: {
  id?: string;
  item: IList;
  onClick?: (value: IList) => void;
}) => {
  return (
    <div
      id={id || ""}
      className="t-body"
      onClick={() => {
        onClick && onClick(item);
      }}
    >
      {item?.name || ""}
    </div>
  );
};
