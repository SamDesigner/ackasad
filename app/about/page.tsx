import AboutShowcase from "@/component/about/AboutShowcase"
import AboutUs from '@/component/about/AboutUs'
// import ServiceText from "@/component/ServiceText"
import AboutSection from "@/component/about/AboutSection"
import Footer from '@/component/Footer'
const page = () => {
  return (
    <div>
      <AboutShowcase />
      <AboutUs />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default page