import { useEffect, useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import UserHelper from "../utils/info";
import { getDummyData } from "../services/api-helper";
import { IUserGroupObjectInterface } from "../interface/info";
import { FloatButton, Row, Table, TableProps } from "antd";
import { useNavigate } from "react-router-dom";

const UserGroup = () => {
  const naviagate = useNavigate();
  const [dataInfo, setDataInfo] = useState<IUserGroupObjectInterface[]>([]);

  useEffect(() => {
    handleGetDummyData();
  }, []);

  const handleGetDummyData = async () => {
    try {
      const res = await getDummyData();
      if (res.status === 200) {
        const group = UserHelper?.mapUserToUserGroup(res?.data?.users);
        console.log(group);
        let reList: IUserGroupObjectInterface[] = [];
        group &&
          Object.keys(group).forEach((key) => {
            let list = { ...group[key], department: key };
            reList.push(list);
          });
        console.log(reList, "reList");
        setDataInfo(reList);
      }
    } catch (err) {
      console.log("err getDummyData ==>", err);
    }
  };

  const columns: TableProps<IUserGroupObjectInterface>["columns"] = [
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Age Range",
      dataIndex: "ageRange",
      key: "ageRange",
    },
    {
      title: "Male",
      dataIndex: "male",
      key: "male",
    },
    {
      title: "Female",
      dataIndex: "female",
      key: "female",
    },
    {
      title: "Hair",
      dataIndex: "hair",
      key: "hair",
      render: (info) => (
        <div>
          <Row>{`Black : ${info?.Black} , Blond : ${info?.Blond} ,`}</Row>
          <Row> {`Brown : ${info?.Brown} , Chestnut : ${info?.Chestnut}`}</Row>
        </div>
      ),
    },
    {
      title: "Age Range",
      dataIndex: "ageRange",
      key: "ageRange",
    },
    {
      title: "Address User",
      dataIndex: "addressUser",
      key: "addressUser",
      render: (info) => (
        <div>
          {info?.name} : {info?.postalCode}
        </div>
      ),
    },
  ];

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <FloatButton
        icon={
          <ArrowLeftOutlined style={{ fontSize: "2vh", marginBottom: "1vh" }} />
        }
        type="primary"
        style={{ right: 94, width: "6vh", height: "7vh" }}
        description="ข้อ 1"
        shape="square"
        onClick={() => naviagate("/")}
      />
      <Table
        style={{ width: "50vw" }}
        columns={columns}
        dataSource={dataInfo}
      />
    </Row>
  );
};

export default UserGroup;
