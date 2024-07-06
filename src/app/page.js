import HomePage from "./Components/header";
import ClientSection from "./Components/clients";
import ExplorePage from "./Components/explore";
import AchievementsSection from "./Components/Achievement";
import FooterDesign from "./Components/Footer";
import CustomerCard from "./Components/Customers";

export default function Home() {
  return (
    <div> 
      <HomePage/>
      <ClientSection/>
      <ExplorePage/>
      <AchievementsSection/>
      <FooterDesign/>
      <CustomerCard/>
    </div>
  );
}
