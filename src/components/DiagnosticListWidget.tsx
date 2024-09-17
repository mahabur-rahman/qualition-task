import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { Diagnostic, UserProfileData } from "../interfaces/dashboard.interface";
import WidgetTitle from "./WidgetTitle";

interface DiagnosticListWidgetProps {
  userInfo: UserProfileData[];
}

const columns: TableColumnsType<Diagnostic> = [
  {
    title: <div>Problem/Diagnosis</div>,
    dataIndex: "name",
    key: "name",
    width: 155,
  },
  {
    title: <div>Description</div>,
    dataIndex: "description",
    key: "description",
    width: 245,
  },
  {
    title: <div>Status</div>,
    dataIndex: "status",
    key: "status",
    width: 95,
  },
];

const DiagnosticListWidget = ({ userInfo }: DiagnosticListWidgetProps) => {
  const diagnostics = userInfo[3]?.diagnostic_list || [];

  return (
    <div className="px-5 py-8 mt-5 bg-white rounded-xl">
      <WidgetTitle label={"Diagnostic List"} />
      <div
        className="overflow-y-auto scrollbar-custom"
        style={{ maxHeight: "240px" }}
      >
        <Table
          columns={columns}
          dataSource={diagnostics}
          pagination={false}
          rowKey="name"
          className="w-full table-auto"
        />
      </div>
    </div>
  );
};

export default DiagnosticListWidget;
