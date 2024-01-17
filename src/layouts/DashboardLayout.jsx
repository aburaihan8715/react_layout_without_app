import { Outlet, useNavigation } from "react-router-dom";

const DashboardLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <p>loading.....</p>;
  return (
    <>
      <span>dashboard</span>
      <Outlet></Outlet>
    </>
  );
};

export default DashboardLayout;
