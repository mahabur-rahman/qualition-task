import { Layout, Spin, Alert } from "antd";
import DiagnosticChart from "../components/DiagnosticChart";
import UserProfile from "../components/UserProfile";
import DiagnosticReport from "../components/DiagnosticReport";
import DiagnosticListWidget from "../components/DiagnosticListWidget";
import LabResult from "../components/LabResult";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const url = import.meta.env.VITE_API_URL;
  const userName = import.meta.env.VITE_API_USER_NAME;
  const password = import.meta.env.VITE_API_PASSWORD;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Basic ${btoa(`${userName}:${password}`)}`,
          },
        });
        setUserInfo(response.data);
      } catch (err) {
        setError("Failed to fetch user information.");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [password, url, userName]);

  return (
    <>
      <Layout className="min-h-screen overflow-hidden">
        <Header />
        <Layout className="min-h-screen pt-8 pb-3 md:pt-16">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <Spin size="large" />
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-full">
              <Alert
                message="Error"
                description={error}
                type="error"
                showIcon
              />
            </div>
          ) : (
            <>
              <Sidebar userInfo={userInfo} />
              <Layout
                className="flex flex-col lg:flex-row"
                style={{ padding: "0" }}
              >
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
            </>
          )}
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
