import Apropos from './Composant/Apropos'
import Resume from './Composant/Resume'
import Header from './Composant/Header'
import Realisation from './Composant/Realisation'
import Contact from './Composant/Contact'
import Footer from './Composant/Footer'
import Donne from './Donne'

function App() {
  return (
    <div>
      <Header Donne={Donne} />
      <Apropos Donne={Donne} />
      <Resume Donne={Donne} />
      <Realisation Donne={Donne} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
