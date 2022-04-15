import CategoriesContainer from "../../components/categories-container/categories-container.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Outlet />
      <CategoriesContainer />
    </div>
  );
};
export default Home;
