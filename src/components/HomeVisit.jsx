import { useState } from 'react'

export default function HomeVisit({ onRequestSubmitted }) {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    address: '',
    visitDate: '',
    visitTime: '',
    symptoms: '',
    specialNeeds: '',
    comfortItem: '',
    privacyLevel: 'standard'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Kids home visit requested:', formData)
    onRequestSubmitted?.()
    
    // Show kid-friendly success message
    const doctorName = ['Dr. Fatima', 'Dr. Amina', 'Dr. Ibrahim', 'Dr. Sarah'][Math.floor(Math.random() * 4)]
    alert(`🎉 Yay! Your home visit request for ${formData.childName} is confirmed!
    
👩‍⚕️ Doctor ${doctorName} will visit on ${formData.visitDate}
⏰ Around ${formData.visitTime}
📱 We'll send a reminder SMS

🧸 Fun activities and stickers will be provided during the visit!`)
    
    setShowForm(false)
    setFormData({
      parentName: '',
      childName: '',
      childAge: '',
      phone: '',
      address: '',
      visitDate: '',
      visitTime: '',
      symptoms: '',
      specialNeeds: '',
      comfortItem: '',
      privacyLevel: 'standard'
    })
  }

  const privacyLevels = [
    {
      level: 'standard',
      name: '👶 Standard Kids Visit',
      description: 'Gentle home visit with pediatric nurse',
      price: '₦12,000',
      emoji: '🏡',
      features: [
        'Pediatric nurse consultation',
        'Basic child checkup (height, weight, temperature)',
        'Prescription if needed',
        'Sticker reward for brave kids! 🎁'
      ]
    },
    {
      level: 'premium',
      name: '👩‍⚕️ Premium Pediatric Visit',
      description: 'Specialist doctor visit with child-friendly equipment',
      price: '₦22,000',
      emoji: '⭐',
      features: [
        'Specialist pediatrician',
        'Complete health assessment',
        'Development milestone check',
        'Vaccination consultation',
        'Digital growth chart provided 📊',
        'Coloring book & crayons included 🖍️'
      ]
    },
    {
      level: 'vip',
      name: '👑 VIP Kids Care',
      description: 'Complete pediatric team at your home',
      price: '₦45,000',
      emoji: '👑',
      features: [
        'Senior pediatrician + nurse',
        'Portable lab tests at home',
        'Parent counseling session',
        'Follow-up video call included',
        "Kids care kit: thermometer, band-aids, fun medicine tracker",
        'Birthday card from your doctor! 🎂'
      ]
    }
  ]

  return (
    <section id="home-visit" className="py-20 bg-gradient-to-br from-blue-100 via-pink-50 to-green-100 overflow-hidden relative">
      {/* Floating Kids Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-20 left-10 text-6xl opacity-10 animate-float">🏡</span>
        <span className="absolute bottom-20 right-10 text-7xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>👶</span>
        <span className="absolute top-40 right-1/4 text-5xl opacity-10 animate-float" style={{ animationDelay: '0.5s' }}>🧸</span>
        <span className="absolute bottom-40 left-1/3 text-6xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>🩺</span>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border-2 border-blue-200 px-6 py-3 rounded-full mb-6 shadow-lg">
            <span className="text-3xl">🏡</span>
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              KIDS' HOME VISIT SERVICE
            </span>
            <span className="text-3xl">🍼</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Gentle Care at Your</span>
            <span className="block bg-gradient-to-r from-blue-600 via-pink-500 to-green-600 bg-clip-text text-transparent">
              Doorstep 🏠
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 flex items-center justify-center">
            <span className="mr-2">👶</span>
            No clinic stress — we bring the hospital to your little one
            <span className="ml-2">🍼</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Kid Friendly Features */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-blue-200">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-3xl mr-3">✨</span>
                Why Kids Love Our Home Visits
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-2xl">
                  <div className="w-16 h-16 bg-blue-200 rounded-2xl flex items-center justify-center text-3xl">
                    🏡
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">No White Coat Fear!</h4>
                    <p className="text-gray-600">
                      Our doctors wear colorful scrubs and use kid-friendly equipment. 
                      Your child stays comfortable in their own environment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-pink-50 rounded-2xl">
                  <div className="w-16 h-16 bg-pink-200 rounded-2xl flex items-center justify-center text-3xl">
                    🎁
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Brave Kid Rewards</h4>
                    <p className="text-gray-600">
                      Every child gets a "Brave Heart" certificate, stickers, 
                      and a small toy after the visit!
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-2xl">
                  <div className="w-16 h-16 bg-green-200 rounded-2xl flex items-center justify-center text-3xl">
                    🧸
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Comfort Buddy</h4>
                    <p className="text-gray-600">
                      Bring your child's favorite toy or blanket. 
                      Our doctors are trained to make friends with stuffed animals too!
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-2xl">
                  <div className="w-16 h-16 bg-purple-200 rounded-2xl flex items-center justify-center text-3xl">
                    📱
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Parent Updates</h4>
                    <p className="text-gray-600">
                      Get real-time updates during the visit. 
                      Watch your child's checkup from another room via secure video link.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Statistics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-2xl text-center shadow-lg border-2 border-blue-200 hover:scale-105 transition-transform">
                <span className="text-4xl block mb-2">🏥</span>
                <div className="text-2xl font-bold text-blue-600">1,800+</div>
                <div className="text-gray-600 text-sm">Happy Kids</div>
              </div>
              <div className="bg-white p-4 rounded-2xl text-center shadow-lg border-2 border-pink-200 hover:scale-105 transition-transform">
                <span className="text-4xl block mb-2">⏰</span>
                <div className="text-2xl font-bold text-pink-600">30min</div>
                <div className="text-gray-600 text-sm">Avg Response</div>
              </div>
              <div className="bg-white p-4 rounded-2xl text-center shadow-lg border-2 border-green-200 hover:scale-105 transition-transform">
                <span className="text-4xl block mb-2">⭐</span>
                <div className="text-2xl font-bold text-green-600">4.9</div>
                <div className="text-gray-600 text-sm">Parent Rating</div>
              </div>
            </div>

            {/* Parent Quote */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 border-2 border-yellow-200">
              <div className="flex items-start">
                <span className="text-5xl mr-4">"</span>
                <div>
                  <p className="text-gray-700 italic mb-2">
                    My 3-year-old was so scared of clinics, but Dr. Fatima came home 
                    with her teddy bear puppet. Now my daughter asks when the 'teddy doctor' is coming back!
                  </p>
                  <p className="font-bold">— Amina, mother of 3-year-old Zara</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Pricing & Form */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-pink-200">
              {/* Pricing Options - Kid Friendly */}
              <div className="p-8 border-b bg-gradient-to-r from-pink-50 to-blue-50">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-3xl mr-2">🎁</span>
                  Choose Your Child's Care Package
                </h3>
                
                <div className="space-y-4">
                  {privacyLevels.map((level) => (
                    <div 
                      key={level.level}
                      className={`p-6 border-2 rounded-2xl cursor-pointer transition-all hover:shadow-xl hover:scale-102 ${
                        formData.privacyLevel === level.level 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setFormData({...formData, privacyLevel: level.level})}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="text-3xl mr-2">{level.emoji}</span>
                            <div className="font-bold text-xl">{level.name}</div>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{level.description}</p>
                          
                          <div className="space-y-1">
                            {level.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start text-sm">
                                <span className="text-green-500 mr-2 text-lg">✓</span>
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-right ml-4">
                          <div className="text-3xl font-bold text-blue-600">{level.price}</div>
                          <div className="text-gray-500 text-sm">per visit</div>
                          
                          {formData.privacyLevel === level.level && (
                            <div className="mt-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                              ✓ Selected
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Request Button */}
              <div className="p-8 bg-gradient-to-r from-blue-100 to-green-100">
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-gradient-to-r from-blue-400 to-green-400 text-white py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center space-x-3 shadow-lg"
                >
                  <span className="text-3xl">🏡</span>
                  <span>Request Kids' Home Visit</span>
                  <span className="text-3xl">👶</span>
                </button>
                
                <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                  <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl">
                    <span className="text-2xl block mb-1">🛡️</span>
                    <span className="text-xs font-medium">Child-Safe & Secure</span>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl">
                    <span className="text-2xl block mb-1">⚡</span>
                    <span className="text-xs font-medium">Same-Day Available</span>
                  </div>
                </div>

                {/* Fun Promise */}
                <div className="mt-4 text-center text-sm text-purple-600">
                  🎈 Every visit includes a free "Brave Kid" sticker pack! 🎈
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Request Form Modal - Kid Friendly */}
        {showForm && (
          <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto border-4 border-blue-200">
              <div className="sticky top-0 bg-gradient-to-r from-blue-400 to-pink-400 p-6 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">🏡</span>
                    <h3 className="text-2xl font-bold text-white">Kids' Home Visit</h3>
                  </div>
                  <button 
                    onClick={() => setShowForm(false)} 
                    className="text-white hover:text-gray-200 bg-white/20 p-2 rounded-full"
                  >
                    <span className="text-2xl">✕</span>
                  </button>
                </div>
                <p className="text-white/90 mt-2 flex items-center">
                  <span className="mr-2">👶</span>
                  We'll bring gentle care to your little one
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Parent Info */}
                <div className="bg-blue-50 p-4 rounded-xl">
                  <label className="block text-gray-700 font-bold mb-3 flex items-center">
                    <span className="text-2xl mr-2">👨‍👩‍👧</span>
                    Parent/Guardian
                  </label>
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    required
                    className="w-full p-3 border-2 border-blue-200 rounded-xl mb-3"
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    className="w-full p-3 border-2 border-blue-200 rounded-xl"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                {/* Child Info */}
                <div className="bg-pink-50 p-4 rounded-xl">
                  <label className="block text-gray-700 font-bold mb-3 flex items-center">
                    <span className="text-2xl mr-2">👶</span>
                    Child's Information
                  </label>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <input
                      type="text"
                      placeholder="Child's Name *"
                      required
                      className="col-span-2 p-3 border-2 border-pink-200 rounded-xl"
                      value={formData.childName}
                      onChange={(e) => setFormData({...formData, childName: e.target.value})}
                    />
                    <input
                      type="text"
                      placeholder="Age (years/months) *"
                      required
                      className="p-3 border-2 border-pink-200 rounded-xl"
                      value={formData.childAge}
                      onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                    />
                    <input
                      type="text"
                      placeholder="Comfort toy/blanket?"
                      className="p-3 border-2 border-pink-200 rounded-xl"
                      value={formData.comfortItem}
                      onChange={(e) => setFormData({...formData, comfortItem: e.target.value})}
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="bg-green-50 p-4 rounded-xl">
                  <label className="block text-gray-700 font-bold mb-3 flex items-center">
                    <span className="text-2xl mr-2">🏠</span>
                    Home Address
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Full address for home visit *"
                    required
                    className="w-full p-3 border-2 border-green-200 rounded-xl"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full p-3 border-2 border-purple-200 rounded-xl"
                      value={formData.visitDate}
                      onChange={(e) => setFormData({...formData, visitDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Preferred Time</label>
                    <input
                      type="time"
                      className="w-full p-3 border-2 border-purple-200 rounded-xl"
                      value={formData.visitTime}
                      onChange={(e) => setFormData({...formData, visitTime: e.target.value})}
                    />
                  </div>
                </div>

                {/* Symptoms & Special Needs */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium flex items-center">
                    <span className="text-xl mr-2">🤒</span>
                    What's going on with your child?
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Fever? Cough? Rash? Tell us so we can prepare..."
                    className="w-full p-3 border-2 border-yellow-200 rounded-xl"
                    value={formData.symptoms}
                    onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium flex items-center">
                    <span className="text-xl mr-2">✨</span>
                    Special needs or requests?
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Allergies? Fears? Favorite songs? We'll customize the visit!"
                    className="w-full p-3 border-2 border-purple-200 rounded-xl"
                    value={formData.specialNeeds}
                    onChange={(e) => setFormData({...formData, specialNeeds: e.target.value})}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-400 to-green-400 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center space-x-3"
                >
                  <span className="text-2xl">🏡</span>
                  <span>Confirm Home Visit</span>
                  <span className="text-2xl">👶</span>
                </button>

                {/* Promise */}
                <p className="text-center text-sm text-gray-500">
                  🎁 Every brave kid gets a surprise gift! 🎁
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}