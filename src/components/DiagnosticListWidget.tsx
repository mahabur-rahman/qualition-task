import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import Title from "./Title";

interface DataType {
  key: React.Key;
  name: string;
  description: string;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: <div>Problem/Diagnosis</div>,
    dataIndex: "name",
    width: 155,
    // className: 'text-center', // Center content in the table cells
  },
  {
    title: <div>Description</div>,
    dataIndex: "description",
    width: 245,
    // className: 'text-center', // Center content in the table cells
  },
  {
    title: <div>Status</div>,
    dataIndex: "address",
    width: 95,
    // className: 'text-center', // Center content in the table cells
  },
];

const data: DataType[] = [
  {
    key: 1,
    name: "Hypertension",
    description: "Chronic high blood pressure",
    address: "Under Treatment",
  },
  {
    key: 2,
    name: "Type 2 Diabetes",
    description: "Insulin resistance and elevated blood sugar",
    address: "Stable",
  },
  {
    key: 3,
    name: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    address: "Controlled",
  },
  {
    key: 4,
    name: "Migraine",
    description: "Severe headache with sensitivity to light and sound",
    address: "Frequent",
  },
  {
    key: 5,
    name: "Arthritis",
    description: "Inflammation of joints causing pain and stiffness",
    address: "Chronic",
  },
  {
    key: 6,
    name: "Anemia",
    description: "Lack of healthy red blood cells",
    address: "Moderate",
  },
  {
    key: 7,
    name: "Heart Disease",
    description: "Narrowing or blockage of coronary arteries",
    address: "Critical",
  },
  {
    key: 8,
    name: "Obesity",
    description: "Excessive body fat accumulation",
    address: "Severe",
  },
  {
    key: 9,
    name: "Chronic Bronchitis",
    description: "Long-term inflammation of the bronchial tubes",
    address: "Persistent",
  },
  {
    key: 10,
    name: "Allergy",
    description: "Hypersensitive immune response to allergens",
    address: "Seasonal",
  },
  {
    key: 11,
    name: "Depression",
    description: "Persistent feelings of sadness and loss of interest",
    address: "Ongoing",
  },
  {
    key: 12,
    name: "Insomnia",
    description: "Difficulty falling or staying asleep",
    address: "Recurring",
  },
];

const DiagnosticListWidget = () => (
  <div className="px-5 py-8 shadow-lg rounded-xl">
    <Title label={"Diagnostic List"} />
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ y: 240 }}
      className="w-full table-auto"
    />
  </div>
);

export default DiagnosticListWidget;
