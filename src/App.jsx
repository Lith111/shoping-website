import Catalogue from "./components/Catalogue/Catalogue";
import Favourite from "./components/Favourite/Favourite";
import Header from "./Components/Header/Header";
import Loading from "./components/Loading/Loading";
import PayDay from "./components/PayDay/PayDay";
import MobileApp from "./components/MobileApp/MobileApp";
import Footer from "./components/Footer/Footer";

export const App = () => {
  return (
    <div>
      <Header />
      <Loading />
      <Catalogue />
      <PayDay />
      <Favourite />
      <MobileApp />
      <Footer />
    </div>
  );
};
