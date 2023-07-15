import HeaderMain from "../HeaderMain/HeaderMain"
import { MainContent } from "../MainContent/MainContent"

const Main = () => {
  
  return (
    <div style={{borderRight: "1px solid var(--color-secondary)"}}>
    <HeaderMain/>
    <MainContent/>
    </div>
  );
};

export default Main;
