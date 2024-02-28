/* eslint-disable react-hooks/exhaustive-deps */
import { Col, FloatButton, Row } from "antd";
import Table, { TBody } from "../components/table";
import { useEffect, useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { IList } from "../interface/info";

const Home = () => {
  const naviagate = useNavigate();
  const [initialList, setInitialList] = useState<IList[]>(listItem);
  const [listTable, setListTable] = useState<IList[]>([]);

  const handleClick = (item: IList) => {
    const filterList = initialList?.filter((init) => init?.name !== item?.name);
    setInitialList(filterList);
    !listTable.some((ar) => ar.name === item?.name) &&
      setListTable([...listTable, item]);
  };

  const tableHandleClick = (value: IList) => {
    setInitialList([...initialList, value]);

    const filterList = listTable?.filter((fr) => fr.name !== value?.name);
    setListTable(filterList);
  };

  const moveBackItem = () => {
    const arr = listTable;
    const objShift = arr.pop();
    setListTable(arr);
    objShift && setInitialList([...initialList, objShift]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      listTable?.length > 0 && moveBackItem();
    }, 2000);

    return () => clearInterval(interval);
  }, [listTable, initialList]);

  return (
    <Row justify={"center"}>
      <div style={{ width: "50vw" }}>
        <Row style={{ padding: "1vh" }} gutter={12}>
          <Col span={8}>
            {initialList?.map((item: IList, idx: number) => {
              return (
                <div key={idx} style={{ paddingBottom: "1vh" }}>
                  <TBody item={item} onClick={handleClick} />
                </div>
              );
            })}
          </Col>
          <Col span={8}>
            <Table
              title={"Fruit"}
              list={listTable?.filter((f) => f.type === "Fruit")}
              onClick={tableHandleClick}
            />
          </Col>
          <Col span={8}>
            <Table
              title={"Vegetable"}
              list={listTable?.filter((f) => f.type === "Vegetable")}
              onClick={tableHandleClick}
            />
          </Col>
        </Row>
        <FloatButton
          icon={
            <ArrowRightOutlined
              style={{ fontSize: "2vh", marginBottom: "1vh" }}
            />
          }
          type="primary"
          style={{ right: 94, width: "6vh", height: "7vh" }}
          description="ข้อ 2"
          shape="square"
          onClick={() => naviagate("/user-group")}
        />
      </div>
    </Row>
  );
};

export default Home;

export const listItem = [
  {
    type: "Fruit",
    name: "Apple",
  },
  {
    type: "Vegetable",
    name: "Broccoli",
  },
  {
    type: "Vegetable",
    name: "Mushroom",
  },
  {
    type: "Fruit",
    name: "Banana",
  },
  {
    type: "Vegetable",
    name: "Tomato",
  },
  {
    type: "Fruit",
    name: "Orange",
  },
  {
    type: "Fruit",
    name: "Mango",
  },
  {
    type: "Fruit",
    name: "Pineapple",
  },
  {
    type: "Vegetable",
    name: "Cucumber",
  },
  {
    type: "Fruit",
    name: "Watermelon",
  },
  {
    type: "Vegetable",
    name: "Carrot",
  },
];
