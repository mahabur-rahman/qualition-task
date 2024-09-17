import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { DataType } from "../interfaces/dashboard.interface";
import { data } from "../data/data";
import WidgetTitle from "./WidgetTitle";

const columns: TableColumnsType<DataType> = [
  {
    title: <div>Problem/Diagnosis</div>,
    dataIndex: "name",
    width: 155,
  },
  {
    title: <div>Description</div>,
    dataIndex: "description",
    width: 245,
  },
  {
    title: <div>Status</div>,
    dataIndex: "address",
    width: 95,
  },
];

const DiagnosticListWidget = () => (
  <div className="px-5 py-8 shadow-lg rounded-xl">
    <WidgetTitle label={"Diagnostic List"} />
    <div className="overflow-y-auto scrollbar-custom" style={{ maxHeight: "240px" }}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="w-full table-auto"
      />
    </div>
  </div>
);

export default DiagnosticListWidget;
