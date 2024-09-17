import { Layout } from "antd";
import DiagnosticChart from "../components/DiagnosticChart";
import UserProfile from "../components/UserProfile";
import DiagnosticReport from "../components/DiagnosticReport";
import DiagnosticListWidget from "../components/DiagnosticListWidget";
import LabResult from "../components/LabResult";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

const Dashboard = () => {
  return (
    <Layout className="min-h-screen overflow-hidden">
      <Header />
      <Layout className="min-h-screen pt-16">
        <Sidebar />
        <Layout className="flex flex-col lg:flex-row" style={{ padding: "0" }}>
          <div className="flex-1 p-4 lg:pl-80 lg:pr-4">
            <div className="p-5 mb-4 bg-white shadow-sm rounded-xl">
              <DiagnosticChart />
              <DiagnosticReport />
            </div>
            <DiagnosticListWidget />
          </div>

          <div className="lg:block lg:w-80 lg:bg-[#F6F7F8] lg:rounded-lg lg:p-4">
            <UserProfile />
            <LabResult />
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
