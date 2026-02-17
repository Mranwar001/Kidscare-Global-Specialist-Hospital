export default function Hero({ onConnectDoctor, onRequestVisit, onEmergency, onKidActivities }) {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background Gradient - Kid Friendly Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-50 to-green-100"></div>
      
      {/* Animated Background Elements - Fun Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Floating Kid Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-20 left-1/4 text-4xl animate-float">🧸</span>
        <span className="absolute bottom-40 right-20 text-5xl animate-float" style={{ animationDelay: '0.5s' }}>🍼</span>
        <span className="absolute top-40 right-1/3 text-4xl animate-float" style={{ animationDelay: '1.2s' }}>🦷</span>
        <span className="absolute bottom-20 left-20 text-5xl animate-float" style={{ animationDelay: '0.8s' }}>👶</span>
        <span className="absolute top-60 left-1/3 text-4xl animate-float" style={{ animationDelay: '1.8s' }}>⭐</span>
      </div>

      <div className="container-custom py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* Kid-Friendly Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm border-2 border-yellow-300 px-4 py-2 rounded-full mb-6 shadow-lg">
              <span className="text-2xl">🏆</span>
              <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Best Children's Hospital 2024 • NAFDAC Certified
              </span>
            </div>

            {/* Main Heading - Kid Friendly */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-800">Specialized Care</span>
              <span className="block bg-gradient-to-r from-blue-600 via-pink-500 to-green-600 bg-clip-text text-transparent">
                For Happy, Healthy Kids
              </span>
            </h1>

            {/* Subheading - Warm & Reassuring */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              🏥 From tiny toes to bright smiles — we're here for every step of your child's journey. 
              Connect with top pediatricians, schedule gentle home visits, and access fun, kid-friendly healthcare services.
            </p>

            {/* CTA Buttons - Kid Friendly */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={onConnectDoctor}
                className="group bg-gradient-to-r from-blue-400 to-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">👩‍⚕️</span>
                  <span>Find a Pediatrician</span>
                  <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                </span>
              </button>
              
              <button 
                onClick={onRequestVisit}
                className="group border-2 border-pink-400 text-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-400 hover:text-white transition-all"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">🏡</span>
                  <span>Request Home Visit</span>
                </span>
              </button>
            </div>

            {/* Fun Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-blue-200">
                <div className="text-3xl font-bold text-blue-500">100+</div>
                <div className="text-gray-600 text-sm">Kids Treated Daily</div>
                <span className="text-2xl mt-1 block">👧👦</span>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-green-200">
                <div className="text-3xl font-bold text-green-500">24/7</div>
                <div className="text-gray-600 text-sm">Kids' Helpline</div>
                <span className="text-2xl mt-1 block">📞</span>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-pink-200">
                <div className="text-3xl font-bold text-pink-500">98%</div>
                <div className="text-gray-600 text-sm">Happy Parents</div>
                <span className="text-2xl mt-1 block">😊</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🛡️</span>
                <span className="text-sm text-gray-600">Kid-Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">👪</span>
                <span className="text-sm text-gray-600">Parent Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⭐</span>
                <span className="text-sm text-gray-600">5-Star Care</span>
              </div>
            </div>
          </div>

          {/* Right Content - Fun Medical Illustration */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-blue-400 via-pink-400 to-green-400 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex flex-col items-center justify-center text-center">
                    {/* Animated Kid Friendly Icon */}
                    <div className="relative mb-6">
                      <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl animate-bounce-slow">
                        <span className="text-5xl">🩺</span>
                      </div>
                      <span className="absolute -top-2 -right-2 text-4xl animate-spin-slow">✨</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">Kids' Virtual Care</h3>
                    <p className="text-white/90 mb-6">Gentle consultations for your little ones</p>
                    
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-white font-bold text-xl">₦3,500</div>
                        <div className="text-white/80 text-sm">Video Visit</div>
                        <span className="text-2xl mt-1 block">📱</span>
                      </div>
                      <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-white font-bold text-xl">5-10min</div>
                        <div className="text-white/80 text-sm">Quick Connect</div>
                        <span className="text-2xl mt-1 block">⚡</span>
                      </div>
                    </div>

                    {/* Fun Features */}
                    <div className="mt-6 flex justify-center space-x-4">
                      <span className="text-3xl" title="Tooth Friendly">🦷</span>
                      <span className="text-3xl" title="Vaccination Safe">💉</span>
                      <span className="text-3xl" title="Growth Tracking">📈</span>
                      <span className="text-3xl" title="Play Therapy">🎨</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements - Kid Friendly */}
              <div className="absolute -top-8 -left-8 bg-white p-4 rounded-2xl shadow-2xl animate-float border-4 border-yellow-300">
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🦷</span>
                  </div>
                  <div>
                    <div className="font-bold text-pink-500">Tooth Fairy</div>
                    <div className="text-sm text-gray-600">Dental Check</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-2xl animate-float border-4 border-green-300" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">💉</span>
                  </div>
                  <div>
                    <div className="font-bold text-green-500">Vaccination</div>
                    <div className="text-sm text-gray-600">Pain-Free</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-xl animate-bounce-slow border-2 border-blue-300">
                <span className="text-2xl">👶</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                  className="fill-white opacity-20"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}