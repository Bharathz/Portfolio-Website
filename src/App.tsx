import { Suspense } from 'react'
import { Navigation } from './components/Navigation'
import { ScrollProgress } from './components/ScrollProgress'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-space-dark via-space-darker to-space-dark text-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content with Suspense for 3D components */}
      <Suspense fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <div className="text-2xl text-gray-400">Loading...</div>
        </div>
      }>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Experience Section */}
        <Experience />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Contact Section */}
        <Contact />
      </Suspense>
    </div>
  )
}

export default App
