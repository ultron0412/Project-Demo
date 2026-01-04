import Navbar from "../../components/common/Navbar";
import Hero from "../../components/sections/Hero";
import Products from "../../components/sections/Products";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero
        title="A Selection Of Spices"
        breadcrumb="Home"
        buttonText="SEE NEW ARRIVAL"
      />

      <Products />
    </>
  );
}
