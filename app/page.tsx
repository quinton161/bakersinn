import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import FactoryTour from './components/FactoryTour'
import DonationRequest from './components/DonationRequest'
import KidsCorner from './components/KidsCorner'
import BakersRecipes from './components/BakersRecipes'
import NotifyPromo from './components/NotifyPromo'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <FactoryTour />
      <DonationRequest />
      <KidsCorner />
      <BakersRecipes />
      <NotifyPromo />
    </main>
  )
}
