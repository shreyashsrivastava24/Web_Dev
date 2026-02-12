import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {

  return (
    // return ya to ek div krenge ya to ek wrapper <></> krke uske andar baki components ko rakh denge
    <>
      <Navbar />
      <div className="cards">
        {/* title and descriptions are props */}
        <Card title="Card 1" description="This is the first card." />
        <Card title="Card 2" description="This is the second card." />
        <Card title="Card 3" description="This is the third card." />
        <Card title="Card 4" description="This is the fourth card." />
        <Card title="Card 5" description="This is the fifth card." />
      </div>
      <Footer />
    </>
  )
}

export default App
