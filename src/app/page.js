import HomePage from "./Components/header";
import ClientSection from "./Components/clients";
import ExplorePage from "./Components/explore";
import AchievementsSection from "./Components/achievements";
import Calander from "./Components/calander";
import CustomerCard from "./Components/customers";
import BlogSection from "./Components/blogs";
import Footer from "./footer";

export default function Home() {
  return (
    <div> 
      <HomePage/>
      <ClientSection/>
      <ExplorePage/>
      <AchievementsSection/>
      <Calander/>
      <CustomerCard/>
      <BlogSection/>
      <Footer/>
    </div>
  );
}
