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
    <>
      <Layout className="min-h-screen">
        <Header />
        <Layout style={{ paddingTop: 64 }} className="min-h-screen">
          <Sidebar />
          <Layout
            style={{ marginLeft: 300, padding: "25px 24px 24px" }}
            className="grid grid-cols-10 gap-4"
          >
            <div className="col-span-7 rounded-lg">
              <div className="p-5 bg-white shadow-sm rounded-xl">
                <DiagnosticChart />
                <DiagnosticReport />
              </div>
              <DiagnosticListWidget />
            </div>

            <div className="col-span-3 bg-[#F6F7F8] rounded-lg">
              <UserProfile />
              <LabResult />
            </div>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
