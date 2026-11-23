import Audience from '../components/Audience'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Mentor from '../components/Mentor'
import Pillars from '../components/Pillars'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Audience />
      <Pillars />
      <Benefits />
      <Mentor />
      <Testimonials />
      <Footer />
    </main>
  )
}
