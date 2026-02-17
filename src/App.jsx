import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import DoctorConnection from './components/DoctorConnection'
import HomeVisit from './components/HomeVisit'
import PaymentSection from './components/PaymentSection'
import HospitalWork from './components/HospitalWork'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [showPayment, setShowPayment] = useState(false)
  const [showDoctorConnect, setShowDoctorConnect] = useState(false)
  const [showEmergency, setShowEmergency] = useState(false)
  const [showKidDashboard, setShowKidDashboard] = useState(false)
  const [notification, setNotification] = useState(null)

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      <Header 
        onBookAppointment={() => setShowDoctorConnect(true)}
        onMakePayment={() => setShowPayment(true)}
        onEmergency={() => setShowEmergency(true)}
        onKidDashboard={() => setShowKidDashboard(true)}
      />
      
      <Hero 
        onConnectDoctor={() => setShowDoctorConnect(true)}
        onRequestVisit={() => {
          showNotification('🌈 Home visit for your little one! Opening form...', 'success')
          // Open home visit form
        }}
        onEmergency={() => setShowEmergency(true)}
        onKidActivities={() => showNotification('Fun activities for kids coming soon!', 'info')}
      />
      
      <DoctorConnection 
        isOpen={showDoctorConnect}
        onClose={() => setShowDoctorConnect(false)}
        onPaymentSuccess={() => {
          showNotification('🎈 Payment successful! Connecting you with a pediatric specialist...', 'success')
          setShowPayment(true)
        }}
      />
      
      <HomeVisit 
        onRequestSubmitted={() => {
          showNotification('🏠 Home visit for your child confirmed! Doctor arriving soon.', 'success')
        }}
      />
      
      <PaymentSection 
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        onPaymentComplete={(amount, method) => {
          showNotification(`✨ Payment of ₦${amount} via ${method} completed! Check your email for receipt.`, 'success')
        }}
      />
      
      <HospitalWork />
      <Testimonials />
      
      <Contact 
        onMessageSent={() => {
          showNotification('📧 Message sent! Our kids\' care team will respond within 1 hour.', 'success')
        }}
      />
      
      <Footer />

      {/* Kid's Dashboard Modal */}
      {showKidDashboard && (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white p-6 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="text-5xl">🧸</span>
                  <div>
                    <h2 className="text-3xl font-bold">Kid's Corner</h2>
                    <p className="text-blue-100">Fun & healthcare for little ones</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowKidDashboard(false)}
                  className="text-white hover:text-gray-200 bg-white/20 p-2 rounded-full"
                >
                  <i className="fas fa-times text-2xl"></i>
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-pink-50 p-4 rounded-xl border border-pink-200">
                  <span className="text-3xl mb-2 block">🦷</span>
                  <h3 className="font-bold text-pink-800">Dental Care</h3>
                  <p className="text-sm text-pink-600">For tiny teeth</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <span className="text-3xl mb-2 block">👁️</span>
                  <h3 className="font-bold text-blue-800">Eye Check</h3>
                  <p className="text-sm text-blue-600">For bright eyes</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <span className="text-3xl mb-2 block">💉</span>
                  <h3 className="font-bold text-green-800">Vaccinations</h3>
                  <p className="text-sm text-green-600">Stay protected</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                  <span className="text-3xl mb-2 block">📚</span>
                  <h3 className="font-bold text-purple-800">Growth Chart</h3>
                  <p className="text-sm text-purple-600">Track milestones</p>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl">
                <h4 className="font-bold text-yellow-800 mb-2">🎯 Today's Health Tip</h4>
                <p className="text-yellow-900">Give your child plenty of water and fruits for a healthy day!</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notification System - Kid Friendly */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-2xl shadow-2xl animate-slide-up border-2 ${
          notification.type === 'success' ? 'bg-green-100 text-green-800 border-green-300' :
          notification.type === 'error' ? 'bg-red-100 text-red-800 border-red-300' :
          'bg-blue-100 text-blue-800 border-blue-300'
        }`}>
          <div className="flex items-start">
            <span className="text-2xl mr-3">
              {notification.type === 'success' ? '🎉' :
               notification.type === 'error' ? '😟' : 'ℹ️'}
            </span>
            <div className="flex-1">
              <p className="font-medium">{notification.message}</p>
              <button 
                onClick={() => setNotification(null)}
                className="text-sm mt-2 opacity-75 hover:opacity-100 bg-white/50 px-3 py-1 rounded-full"
              >
                Got it! 👍
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Modal - Kid Friendly Emergency */}
      {showEmergency && (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">🚑</span>
                  <div>
                    <h2 className="text-2xl font-bold">KIDS' EMERGENCY</h2>
                    <p className="text-red-100">24/7 Pediatric Emergency</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowEmergency(false)}
                  className="text-white hover:text-gray-200 bg-white/20 p-2 rounded-full"
                >
                  <i className="fas fa-times text-2xl"></i>
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="bg-red-50 rounded-xl p-4 mb-4 border-2 border-red-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-red-800">👶 Child Emergency Hotline</div>
                    <div className="text-red-600">Available 24/7 for kids</div>
                  </div>
                  <a 
                    href="tel:08027183558"
                    className="bg-red-500 text-white px-6 py-3 rounded-full font-bold hover:bg-red-600 flex items-center"
                  >
                    <span className="text-xl mr-2">📞</span>
                    CALL NOW
                  </a>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-3xl font-bold text-gray-800">0802-718-3558</div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-green-800">📱 Kids' WhatsApp</div>
                    <div className="text-green-600">Quick messages for parents</div>
                  </div>
                  <a 
                    href="https://wa.me/2348027183558"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 flex items-center"
                  >
                    <span className="text-xl mr-2">💬</span>
                    MESSAGE
                  </a>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-gray-800">+234 802 718 3558</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons - Kid Friendly */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        <button 
          onClick={() => setShowKidDashboard(true)}
          className="bg-gradient-to-r from-purple-400 to-pink-400 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 group relative"
        >
          <span className="text-2xl">🧸</span>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Kid's Corner
          </div>
        </button>
        
        <button 
          onClick={() => setShowDoctorConnect(true)}
          className="bg-gradient-to-r from-blue-400 to-green-400 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 group relative"
        >
          <span className="text-2xl">👩‍⚕️</span>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Find Pediatrician
          </div>
        </button>
        
        <button 
          onClick={() => setShowPayment(true)}
          className="bg-gradient-to-r from-green-400 to-teal-400 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 group relative"
        >
          <span className="text-2xl">💰</span>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Make Payment
          </div>
        </button>
        
        <a 
          href="tel:08027183558"
          className="bg-gradient-to-r from-red-400 to-pink-400 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 group relative"
        >
          <span className="text-2xl">🚨</span>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Kids' Emergency
          </div>
        </a>
      </div>
    </div>
  )
}

export default App