import { useState } from 'react'
import { saveContactForm } from '../firebaseUtils'

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'phone',
    urgent: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Save to Firebase
      const result = await saveContactForm(formData)
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: `🎉 Thanks ${formData.parentName.split(' ')[0] || 'Parent'}! Your message is on its way! We'll respond within 24 hours.`
        })
        
        // Clear form
        setFormData({
          parentName: '',
          childName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          preferredContact: 'phone',
          urgent: false
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Sorry, something went wrong. Please try again or call us directly.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-pink-50 overflow-hidden relative">
      {/* Floating Kid Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-20 left-20 text-7xl opacity-10 animate-float">👶</span>
        <span className="absolute bottom-20 right-20 text-8xl opacity-10 animate-float" style={{ animationDelay: '0.8s' }}>📱</span>
        <span className="absolute top-40 right-1/4 text-6xl opacity-10 animate-float" style={{ animationDelay: '1.2s' }}>✉️</span>
        <span className="absolute bottom-40 left-1/4 text-7xl opacity-10 animate-float" style={{ animationDelay: '0.4s' }}>🏥</span>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border-2 border-blue-200 px-6 py-3 rounded-full mb-6 shadow-lg">
            <span className="text-3xl">📞</span>
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
              WE'RE HERE FOR YOUR FAMILY
            </span>
            <span className="text-3xl">👪</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Questions?</span>
            <span className="block bg-gradient-to-r from-blue-600 via-pink-500 to-green-600 bg-clip-text text-transparent">
              We're Just a Message Away! 💬
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 flex items-center justify-center">
            <span className="mr-2">👩‍⚕️</span>
            Chat with our kids' care team - we speak parent!
            <span className="ml-2">🍼</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information - Kid Friendly */}
          <div>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-blue-200">
              <h3 className="text-3xl font-bold mb-8 flex items-center">
                <span className="text-3xl mr-3">📞</span>
                Talk to Us
              </h3>
              
              <div className="space-y-8">
                {/* Emergency */}
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border-2 border-red-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-3xl">🚑</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl mb-2 flex items-center">
                      <span className="mr-2">🚨</span>
                      Kids' Emergency Line
                    </h4>
                    <p className="text-3xl font-bold text-red-600 mb-1">08036596328</p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <span className="text-lg mr-1">⚡</span>
                      Available 24/7 for urgent kids' care
                    </p>
                    <div className="mt-2 inline-block bg-red-100 px-3 py-1 rounded-full text-xs text-red-700 font-semibold animate-pulse">
                      CALL NOW IF URGENT
                    </div>
                  </div>
                </div>
                
                {/* WhatsApp */}
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border-2 border-green-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-3xl">💬</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 flex items-center">
                      <span className="mr-2">📱</span>
                      Parent WhatsApp Support
                    </h4>
                    <p className="text-2xl font-bold text-green-600 mb-1">+234 803 6596 328</p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <span className="text-lg mr-1">👶</span>
                      Quick answers for non-emergencies
                    </p>
                    <div className="mt-2 flex space-x-2">
                      <span className="bg-green-100 px-2 py-1 rounded-full text-xs">📸 Send photos</span>
                      <span className="bg-green-100 px-2 py-1 rounded-full text-xs">📹 Video calls</span>
                    </div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-3xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 flex items-center">
                      <span className="mr-2">📧</span>
                      Email Us
                    </h4>
                    <p className="text-lg font-medium text-blue-600 mb-1">parents@kidscareglobal.com</p>
                    <p className="text-sm text-gray-600 mb-2">info@kidscareglobal.com</p>
                    <p className="text-xs text-gray-500">We reply within 24 hours</p>
                  </div>
                </div>
                
                {/* Locations */}
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border-2 border-orange-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-3xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-3 flex items-center">
                      <span className="mr-2">📍</span>
                      Visit Us
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center mb-1">
                          <span className="text-xl mr-2">🏠</span>
                          <span className="font-semibold">Main Children's Hospital</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed ml-8">
                          No 114A Hassan Suleiman Street,<br />
                          Hausawa, Kano 700101, Kano<br />
                          🕒 Open 24/7 for kids' emergencies
                        </p>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-1">
                          <span className="text-xl mr-2">🏡</span>
                          <span className="font-semibold">Kids' Clinic & Maternity</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed ml-8">
                          Coming Soon - Opening 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media - Kid Friendly */}
              <div className="mt-12 pt-8 border-t-2 border-gray-200">
                <h4 className="font-bold text-xl mb-6 flex items-center">
                  <span className="text-2xl mr-2">🌟</span>
                  Follow Our Kids' Stories
                </h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg">
                    <span className="text-2xl">📘</span>
                  </a>
                  <a href="#" className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg">
                    <span className="text-2xl">💬</span>
                  </a>
                  <a href="#" className="w-14 h-14 bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg">
                    <span className="text-2xl">🐦</span>
                  </a>
                  <a href="#" className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg">
                    <span className="text-2xl">📸</span>
                  </a>
                  <a href="#" className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg">
                    <span className="text-2xl">▶️</span>
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-4 flex items-center">
                  <span className="text-xl mr-2">👆</span>
                  Follow for parenting tips and kids' health updates!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - Kid Friendly */}
          <div>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-pink-200">
              <h3 className="text-3xl font-bold mb-6 flex items-center">
                <span className="text-3xl mr-3">✉️</span>
                Send Us a Message
              </h3>
              
              {/* Status Message */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-xl ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800 border-2 border-green-300' 
                    : 'bg-red-100 text-red-800 border-2 border-red-300'
                }`}>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">
                      {submitStatus.type === 'success' ? '✅' : '⚠️'}
                    </span>
                    <p>{submitStatus.message}</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium flex items-center">
                      <span className="text-xl mr-2">👨‍👩‍👧</span>
                      Parent's Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full p-4 border-2 border-blue-200 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium flex items-center">
                      <span className="text-xl mr-2">👶</span>
                      Child's Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your child's name (optional)"
                      className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-green-400"
                      value={formData.childName}
                      onChange={(e) => setFormData({...formData, childName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium flex items-center">
                      <span className="text-xl mr-2">📧</span>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="parent@email.com"
                      className="w-full p-4 border-2 border-blue-200 rounded-xl focus:border-green-400"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium flex items-center">
                      <span className="text-xl mr-2">📱</span>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0803 659 6328"
                      className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-green-400"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium flex items-center">
                    <span className="text-xl mr-2">📝</span>
                    Subject *
                  </label>
                  <select
                    required
                    className="w-full p-4 border-2 border-blue-200 rounded-xl focus:border-green-400"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="">Select a topic</option>
                    <option value="appointment">👩‍⚕️ Schedule Kids' Appointment</option>
                    <option value="home-visit">🏡 Request Home Visit</option>
                    <option value="vaccination">💉 Vaccination Questions</option>
                    <option value="emergency">🚨 Urgent Child Care</option>
                    <option value="feedback">⭐ Share Your Experience</option>
                    <option value="other">❓ Other Questions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium flex items-center">
                    <span className="text-xl mr-2">💬</span>
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Tell us how we can help your little one..."
                    className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-green-400 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                {/* Contact Preferences */}
                <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-2xl">
                  <label className="block text-gray-700 mb-3 font-medium flex items-center">
                    <span className="text-xl mr-2">📞</span>
                    How should we reach you?
                  </label>
                  
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        className="w-5 h-5"
                      />
                      <span className="text-lg">📞 Phone Call</span>
                    </label>
                    
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === 'whatsapp'}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        className="w-5 h-5"
                      />
                      <span className="text-lg">💬 WhatsApp</span>
                    </label>
                    
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        className="w-5 h-5"
                      />
                      <span className="text-lg">📧 Email</span>
                    </label>
                  </div>
                </div>

                {/* Urgent Checkbox */}
                <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-xl">
                  <input
                    type="checkbox"
                    id="urgent"
                    className="w-5 h-5"
                    checked={formData.urgent}
                    onChange={(e) => setFormData({...formData, urgent: e.target.checked})}
                  />
                  <label htmlFor="urgent" className="flex items-center text-gray-700">
                    <span className="text-xl mr-2">⚡</span>
                    This is urgent - my child needs quick attention
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-400 to-green-400 text-white py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin text-2xl mr-3">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="text-2xl mr-3">✉️</span>
                      Send Message
                      <span className="text-2xl ml-3">✨</span>
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  🛡️ We respect your privacy. Your info is safe with us.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Response Promise */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-100 to-green-100 px-8 py-4 rounded-full shadow-lg">
            <span className="text-4xl animate-bounce-slow">⚡</span>
            <span className="text-lg font-medium text-gray-700">
              We respond to parents within 30 minutes for urgent matters!
            </span>
            <span className="text-4xl animate-bounce-slow" style={{ animationDelay: '0.3s' }}>👶</span>
          </div>
        </div>
      </div>
    </section>
  )
}
