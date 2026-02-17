import { useState } from 'react'

export default function Header({ onBookAppointment, onMakePayment, onEmergency, onKidDashboard }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home', icon: 'fas fa-home', emoji: '🏠' },
    { name: 'Find Pediatrician', href: '#doctor-connect', icon: 'fas fa-video', emoji: '👩‍⚕️' },
    { name: 'Kids Home Visit', href: '#home-visit', icon: 'fas fa-home-heart', emoji: '🏡' },
    { name: 'Children Services', href: '#services', icon: 'fas fa-stethoscope', emoji: '🩺' },
    { name: 'Success Stories', href: '#evidence', icon: 'fas fa-chart-line', emoji: '📊' },
    { name: 'Parent Reviews', href: '#testimonials', icon: 'fas fa-comment-medical', emoji: '💬' },
    { name: 'Contact Us', href: '#contact', icon: 'fas fa-phone', emoji: '📞' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b-4 border-blue-200">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3">
          {/* Logo - Kid Friendly */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl flex items-center justify-center animate-bounce-slow shadow-xl">
                <span className="text-3xl">🧸</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                +
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Kidscare Global
                </span>
              </h1>
              <p className="text-sm text-gray-600 flex items-center">
                <span className="mr-2">👶</span>
                Specialist Children's Hospital
                <span className="ml-2">🍼</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors group relative"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">
                  {item.emoji}
                </span>
                <span className="font-medium text-sm">{item.name}</span>
                {item.name === 'Kids Home Visit' && (
                  <span className="absolute -top-2 -right-4 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                )}
              </a>
            ))}
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3 ml-4">
              <button 
                onClick={onKidDashboard}
                className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all shadow-lg flex items-center"
              >
                <span className="text-xl mr-2">🧸</span>
                Kid's Corner
              </button>
              
              <button 
                onClick={onBookAppointment}
                className="bg-gradient-to-r from-blue-400 to-green-400 text-white px-4 py-2 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all shadow-lg flex items-center"
              >
                <span className="text-xl mr-2">👩‍⚕️</span>
                Find Pediatrician
              </button>
              
              <button 
                onClick={onEmergency}
                className="bg-gradient-to-r from-red-400 to-pink-400 text-white px-4 py-2 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all shadow-lg flex items-center animate-pulse"
              >
                <span className="text-xl mr-2">🚨</span>
                Kids' Emergency
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 absolute top-4 right-4 bg-gray-100 p-3 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-2xl">{isMenuOpen ? '✕' : '☕'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t animate-slide-up bg-gradient-to-b from-white to-blue-50 rounded-b-3xl">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-4 text-gray-700 py-3 px-4 hover:bg-blue-50 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="font-medium">{item.name}</span>
                  {item.name === 'Kids Home Visit' && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </a>
              ))}
              
              <div className="pt-4 space-y-3 px-4">
                <button 
                  onClick={() => { onKidDashboard(); setIsMenuOpen(false); }}
                  className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white py-4 rounded-xl font-semibold flex items-center justify-center text-lg"
                >
                  <span className="text-2xl mr-3">🧸</span>
                  Kid's Corner
                </button>
                
                <button 
                  onClick={() => { onBookAppointment(); setIsMenuOpen(false); }}
                  className="w-full bg-gradient-to-r from-blue-400 to-green-400 text-white py-4 rounded-xl font-semibold flex items-center justify-center text-lg"
                >
                  <span className="text-2xl mr-3">👩‍⚕️</span>
                  Find Pediatrician
                </button>
                
                <button 
                  onClick={() => { onMakePayment(); setIsMenuOpen(false); }}
                  className="w-full border-2 border-green-500 text-green-600 py-4 rounded-xl font-semibold flex items-center justify-center text-lg hover:bg-green-500 hover:text-white"
                >
                  <span className="text-2xl mr-3">💰</span>
                  Make Payment
                </button>
                
                <button 
                  onClick={() => { onEmergency(); setIsMenuOpen(false); }}
                  className="w-full bg-gradient-to-r from-red-400 to-pink-400 text-white py-4 rounded-xl font-semibold flex items-center justify-center text-lg animate-pulse"
                >
                  <span className="text-2xl mr-3">🚨</span>
                  Kids' Emergency
                </button>
              </div>
            </div>
            
            {/* Fun element for kids */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                🎈 Making healthcare fun for little ones! 🎈
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}