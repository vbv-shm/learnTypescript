import {CustomerReviews,Hero,Footer,PopularProducts,Services,SpecialOffer,Subscribe,SuperQuality} from "./sections"
 
import Nav from "./components/Nav"


const App=()=>(
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
    POPULARPRODUCTS
    </section>
    <section className="padding">
  SUPERQUALITY
    </section>
    <section className="padding-x py-10">
    SERVRICES
    </section>
    <section className="padding">

    </section>
    <section className="bg-pale-blue padding">

    </section>
    <section className="padding-x sm:py-32 py-16 w-full">

    </section>
    <section className="bg-black padding-x padding-t pb-8">

    </section>
  </main>
)
export default App