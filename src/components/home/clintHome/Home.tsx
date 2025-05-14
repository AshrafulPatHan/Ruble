import AnonymousLogon from "@/components/home/clintHome/AnonymousLogin";
import Baner from "@/components/home/clintHome/baner";
import EasyLogin from "@/components/home/clintHome/easy";
import Services from "@/components/home/clintHome/ServicesCard";
import ClintNav from "@/components/navigation/clintNavbar";
import Footer from "@/components/navigation/Footer";


export default function ClintHome() {
   return(
      <div>
         <ClintNav/>
         <Baner/>
         <Services/>
         <EasyLogin/>
         <AnonymousLogon/>
         <Footer/>
      </div>
   )
}