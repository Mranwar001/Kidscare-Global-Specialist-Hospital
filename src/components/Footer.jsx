export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
      {/* Decorative Kid Elements */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <span className="absolute top-10 left-20 text-6xl opacity-10 animate-float">👶</span>
          <span className="absolute bottom-10 right-20 text-7xl opacity-10 animate-float" style={{ animationDelay: '0.8s' }}>🧸</span>
          <span className="absolute top-40 right-1/4 text-5xl opacity-10 animate-float" style={{ animationDelay: '1.2s' }}>🍼</span>
          <span className="absolute bottom-40 left-1/4 text-6xl opacity-10 animate-float" style={{ animationDelay: '0.4s' }}>🦷</span>
          <span className="absolute top-60 left-1/3 text-5xl opacity-10 animate-float" style={{ animationDelay: '1.6s' }}>⭐</span>
        </div>
      </div>

      <div className="container-custom py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Hospital Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-pink-400 rounded-2xl flex items-center justify-center animate-bounce-slow shadow-xl">
                  <span className="text-3xl">🧸</span>
                </div>
                <span className="absolute -top-2 -right-2 text-2xl animate-spin-slow">✨</span>
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Kidscare Global
                </h2>
                <p className="text-blue-200 text-sm">Specialist Children's Hospital</p>
              </div>
            </div>
            
            <p className="text-blue-100 mb-6 leading-relaxed">
              🏥 Where little hearts heal and bright smiles grow. 
              Providing gentle, loving care for your precious ones since 2010.
            </p>
            
            <div className="flex space-x-3">
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-blue-500 transition-all hover:scale-110 text-2xl">
                <span>📘</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-green-500 transition-all hover:scale-110 text-2xl">
                <span>💬</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-pink-500 transition-all hover:scale-110 text-2xl">
                <span>📸</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-purple-500 transition-all hover:scale-110 text-2xl">
                <span>▶️</span>
              </a>
            </div>
            
            <div className="mt-4 flex items-center space-x-1 text-yellow-300">
              <span className="text-xl">⭐</span>
              <span className="text-xl">⭐</span>
              <span className="text-xl">⭐</span>
              <span className="text-xl">⭐</span>
              <span className="text-xl">⭐</span>
              <span className="ml-2 text-sm text-blue-200">5 stars from 2,500+ parents</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="text-2xl mr-2">🎈</span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-blue-200 hover:text-white transition-colors flex items-center group">
                  <span className="text-xl mr-3 group-hover:translate-x-2 transition-transform">🏠</span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#doctor-connect" className="text-blue-200 hover:text-white transition-colors flex items-center group">
                  <span className="text-xl mr-3 group-hover:translate-x-2 transition-transform">👩‍⚕️</span>
                  <span>Find Pediatrician</span>
                </a>
              </li>
              <li>
                <a href="#home-visit" className="text-blue-200 hover:text-white transition-colors flex items-center group">
                  <span className="text-xl mr-3 group-hover:translate-x-2 transition-transform">🏡</span>
                  <span>Kids' Home Visit</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors flex items-center group">
                  <span className="text-xl mr-3 group-hover:translate-x-2 transition-transform">🩺</span>
                  <span>Children's Services</span>
                </a>
              </li>
              <li>
                <a href="#evidence" className="text-blue-200 hover:text-white transition-colors flex items-center group">
                  <span className="text-xl mr-3 group-hover:translate-x-2 transition-transform">🏆</span>
                  <span>Our Achievements</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-blue-200 hover:text-white transition-colors flex items-center group">
                  <span className="text-xl mr-3 group-hover:translate-x-2 transition-transform">💝</span>
                  <span>Parent Stories</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Kids' Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="text-2xl mr-2">🩺</span>
              Kids' Services
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-xl mr-3">👩‍⚕️</span>
                <span className="text-blue-200">Pediatric Consultation</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">💉</span>
                <span className="text-blue-200">Vaccination Programs</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">🦷</span>
                <span className="text-blue-200">Kids' Dental Care</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">🏡</span>
                <span className="text-blue-200">Home Visit Service</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">🚑</span>
                <span className="text-blue-200">Child Emergency</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">📊</span>
                <span className="text-blue-200">Growth Monitoring</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl mr-3">🎈</span>
                <span className="text-blue-200">Play Therapy</span>
              </li>
            </ul>
            
            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="flex items-center">
                <span className="text-3xl mr-3">🎁</span>
                <span className="text-sm text-blue-200">Every visit includes a "Brave Kid" sticker pack!</span>
              </div>
            </div>
          </div>

          {/* Column 4 - Parents' Emergency Contacts */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="text-2xl mr-2">🚨</span>
              Parents' Emergency
            </h3>
            
            <div className="space-y-4">
              {/* Emergency */}
              <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl p-4 border-2 border-red-400/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3 animate-pulse">🚑</span>
                    <div>
                      <div className="text-red-300 font-semibold text-sm">Kids' Emergency</div>
                      <div className="text-2xl font-bold text-white">0802-718-3558</div>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">24/7</span>
                </div>
              </div>
              
              {/* WhatsApp */}
              <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl p-4 border-2 border-green-400/30">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">💬</span>
                  <div>
                    <div className="text-green-300 font-semibold text-sm">Parent WhatsApp</div>
                    <div className="text-xl font-bold text-white">+234 802 718 3558</div>
                  </div>
                </div>
                <div className="mt-2 flex space-x-2">
                  <span className="bg-green-500/30 text-green-200 text-xs px-2 py-1 rounded-full">📸 Send photos</span>
                  <span className="bg-green-500/30 text-green-200 text-xs px-2 py-1 rounded-full">📹 Video calls</span>
                </div>
              </div>
              
              {/* Email */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-4 border-2 border-blue-400/30">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">✉️</span>
                  <div>
                    <div className="text-blue-300 font-semibold text-sm">Email Us</div>
                    <div className="text-white font-medium">parents@kidscareglobal.com</div>
                    <div className="text-blue-200 text-sm">info@kidscareglobal.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🕒</span>
                <span className="text-sm text-purple-200">Always open for kids</span>
              </div>
              <div className="text-white font-bold">24/7 Kids' Emergency</div>
              <div className="text-purple-200 text-sm">OPD: 8AM - 8PM Daily</div>
              <div className="mt-2 flex items-center">
                <span className="text-yellow-300 mr-2">⭐</span>
                <span className="text-sm text-blue-200">Home visits available after hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center justify-center space-x-4">
            <span className="text-3xl animate-bounce-slow">🧸</span>
            <span className="text-3xl animate-bounce-slow" style={{ animationDelay: '0.2s' }}>👶</span>
            <span className="text-3xl animate-bounce-slow" style={{ animationDelay: '0.4s' }}>🍼</span>
            <span className="text-3xl animate-bounce-slow" style={{ animationDelay: '0.6s' }}>🦷</span>
            <span className="text-3xl animate-bounce-slow" style={{ animationDelay: '0.8s' }}>⭐</span>
          </div>
          <div className="border-t-2 border-white/20"></div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-center md:text-left text-sm">
            © {currentYear} Kidscare Global Specialist Children's Hospital. 
            <span className="block md:inline md:ml-2">Spreading smiles, one child at a time. 👶💕</span>
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm flex items-center">
              <span className="mr-1">🔒</span>
              Privacy
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm flex items-center">
              <span className="mr-1">📜</span>
              Terms
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm flex items-center">
              <span className="mr-1">🍪</span>
              Cookies
            </a>
          </div>
        </div>

        {/* Final Love Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-blue-300 flex items-center justify-center">
            <span className="mr-2">❤️</span>
            Made with love for little ones and their families
            <span className="ml-2">🏠</span>
          </p>
        </div>
      </div>
    </footer>
  )
}