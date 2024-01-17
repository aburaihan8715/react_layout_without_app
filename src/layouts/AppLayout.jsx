import { Outlet, useNavigation } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const AppLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <p>loading.....</p>;
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default AppLayout;
