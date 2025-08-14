import AboutMain from "./components/about/AboutMain";
import AccessMain from "./components/access/AccessMain";
import InfomationMain from "./components/infomation/InfomationMain";
import MenuMain from "./components/menu/MenuMain";
import NavbarMain from "./components/navbar/NavbarMain";
import TopMain from "./components/top/TopMain";
import TopSub from "./components/top/TopSub";

function App() {
  return (
    <main className="font--garamond">
      <NavbarMain />
      <TopMain />
      {/* <TopSub /> */}
      <AboutMain />
      <MenuMain />
      <AccessMain />
      <InfomationMain />
    </main>
  );
}

export default App;
