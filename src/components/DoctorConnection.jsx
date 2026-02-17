import { useState, useEffect } from 'react'

export default function DoctorConnection({ isOpen, onClose, onPaymentSuccess }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    email: '',
    childAge: '',
    childGender: '',
    childWeight: '',
    symptoms: '',
    duration: '',
    severity: 'mild',
    history: '',
    allergies: '',
    preferences: {
      language: 'english',
      timePreference: 'any',
      doctorGender: 'any',
      videoCall: true,
      homeVisit: false
    }
  })

  const [matchedPediatricians, setMatchedPediatricians] = useState([])
  const [selectedPediatrician, setSelectedPediatrician] = useState(null)
  const [aiRecommendation, setAiRecommendation] = useState('')
  const [funTips, setFunTips] = useState('')

  const pediatricSpecialists = [
    { 
      id: 'general-peds', 
      name: 'General Pediatrician', 
      icon: '👩‍⚕️', 
      emoji: '🩺',
      wait: '5-10 mins',
      specialties: ['Fever', 'Cough', 'Cold', 'Check-ups', 'Vaccinations'],
      rating: 4.9,
      experience: '10+ years',
      kidFriendly: 'Toys in clinic, stickers after visit'
    },
    { 
      id: 'child-neuro', 
      name: 'Child Neurologist', 
      icon: '🧠', 
      emoji: '🧠',
      wait: '15-20 mins',
      specialties: ['Headaches', 'Seizures', 'Development', 'Milestones'],
      rating: 4.8,
      experience: '15+ years',
      kidFriendly: 'Sensory-friendly environment'
    },
    { 
      id: 'pediatric-cardio', 
      name: 'Pediatric Cardiologist', 
      icon: '❤️', 
      emoji: '❤️',
      wait: '15-20 mins',
      specialties: ['Heart murmurs', 'Chest pain', 'Congenital issues'],
      rating: 4.9,
      experience: '18+ years',
      kidFriendly: 'Heart models, coloring books'
    },
    { 
      id: 'child-dental', 
      name: 'Pediatric Dentist', 
      icon: '🦷', 
      emoji: '🦷',
      wait: '10-15 mins',
      specialties: ['Tooth pain', 'Cavities', 'Dental check-ups'],
      rating: 4.7,
      experience: '8+ years',
      kidFriendly: 'Tooth fairy certificates, fun toothbrushes'
    }
  ]

  const availablePediatricians = [
    {
      id: 1,
      name: 'Dr. Fatima Bello',
      specialty: 'Pediatrician',
      emoji: '👩‍⚕️',
      experience: '12 years',
      rating: 4.9,
      price: 12000,
      languages: ['English', 'Hausa', 'French'],
      availability: 'Now',
      nextSlot: '15 mins',
      matchScore: 98,
      aiReason: '🌸 Expert in childhood fevers and vaccinations',
      kidFriendly: 'Uses puppets during check-ups, gives stickers',
      funFact: 'Loves reading storybooks to patients'
    },
    {
      id: 2,
      name: 'Dr. Amina Usman',
      specialty: 'Child Neurologist',
      emoji: '🧠',
      experience: '15 years',
      rating: 4.8,
      price: 15000,
      languages: ['English', 'Hausa', 'Arabic'],
      availability: '30 mins',
      nextSlot: '45 mins',
      matchScore: 92,
      aiReason: '🧸 Specializes in childhood development milestones',
      kidFriendly: 'Sensory toys in consultation room',
      funFact: 'Has a therapy dog named Buddy'
    },
    {
      id: 3,
      name: 'Dr. Ibrahim Sani',
      specialty: 'Pediatric Dentist',
      emoji: '🦷',
      experience: '8 years',
      rating: 4.7,
      price: 10000,
      languages: ['English', 'Hausa'],
      availability: 'Now',
      nextSlot: '20 mins',
      matchScore: 95,
      aiReason: '🦷 Gentle dental care for anxious little ones',
      kidFriendly: 'Tooth fairy certificates, flavored toothpaste',
      funFact: 'Wears colorful scrubs with cartoon characters'
    },
    {
      id: 4,
      name: 'Dr. Sarah Okonkwo',
      specialty: 'Pediatric Cardiologist',
      emoji: '❤️',
      experience: '18 years',
      rating: 4.9,
      price: 18000,
      languages: ['English', 'Igbo'],
      availability: '1 hour',
      nextSlot: '60 mins',
      matchScore: 88,
      aiReason: '❤️ Expert in children\'s heart health',
      kidFriendly: 'Heart-shaped toys, calming music',
      funFact: 'Gives kids "brave heart" badges'
    }
  ]

  // Kid-friendly tips based on symptoms
  const kidFriendlyTips = {
    fever: '🌡️ Give plenty of fluids and rest. A cool cloth on the forehead helps!',
    cough: '🍯 Honey (if over 1 year) with warm water can soothe the throat.',
    cold: '🧦 Keep feet warm and use a humidifier in the room.',
    stomach: '🍌 Bananas and rice are gentle on little tummies.',
    headache: '💆‍♀️ A quiet, dark room and gentle forehead massage helps.',
    teething: '🧊 Cold teething rings or clean wet washcloth to chew on.',
    vaccination: '💉 Distract with songs or bubbles during the shot. Lots of cuddles after!'
  }

  useEffect(() => {
    if (formData.symptoms && step === 2) {
      analyzeSymptoms()
      matchPediatricians()
      generateKidTip()
    }
  }, [formData.symptoms, step])

  const analyzeSymptoms = () => {
    const symptoms = formData.symptoms.toLowerCase()
    let recommendation = ''
    
    if (symptoms.includes('fever') || symptoms.includes('hot')) {
      recommendation = '🌡️ Your child may have a fever. Pediatricians recommend monitoring temperature and keeping them comfortable.'
    } else if (symptoms.includes('cough') || symptoms.includes('cold')) {
      recommendation = '🤧 Common childhood cold. Our pediatricians can recommend safe remedies for little ones.'
    } else if (symptoms.includes('tooth') || symptoms.includes('teeth')) {
      recommendation = '🦷 Dental discomfort? Our kid-friendly dentists make visits fun!'
    } else if (symptoms.includes('tummy') || symptoms.includes('stomach') || symptoms.includes('vomit')) {
      recommendation = '🍼 Stomach issues are common in children. Keep hydrated and consult our pediatricians.'
    } else if (symptoms.includes('rash') || symptoms.includes('skin')) {
      recommendation = '🦋 Skin rashes can worry parents. Our dermatologists specialize in children\'s sensitive skin.'
    } else if (symptoms.includes('ear')) {
      recommendation = '👂 Ear pain? This is common in young children. Quick consultation can provide relief.'
    } else {
      recommendation = '👶 Don\'t worry! Our pediatric specialists are here to help your little one feel better.'
    }
    
    setAiRecommendation(recommendation)
  }

  const generateKidTip = () => {
    const symptoms = formData.symptoms.toLowerCase()
    let tip = ''
    
    if (symptoms.includes('fever')) tip = kidFriendlyTips.fever
    else if (symptoms.includes('cough')) tip = kidFriendlyTips.cough
    else if (symptoms.includes('cold')) tip = kidFriendlyTips.cold
    else if (symptoms.includes('stomach') || symptoms.includes('tummy')) tip = kidFriendlyTips.stomach
    else if (symptoms.includes('head')) tip = kidFriendlyTips.headache
    else if (symptoms.includes('tooth')) tip = kidFriendlyTips.teething
    else tip = '🧸 Lots of love, cuddles, and patience help little ones heal faster!'
    
    setFunTips(tip)
  }

  const matchPediatricians = () => {
    const matched = availablePediatricians.map(doctor => {
      let score = 75 // Base score
      
      const symptoms = formData.symptoms.toLowerCase()
      
      // Symptom matching
      if (doctor.specialty.toLowerCase().includes('dental') && 
          (symptoms.includes('tooth') || symptoms.includes('teeth'))) {
        score += 20
      }
      
      if (doctor.specialty.toLowerCase().includes('neuro') && 
          (symptoms.includes('head') || symptoms.includes('develop'))) {
        score += 20
      }
      
      if (doctor.specialty.toLowerCase().includes('cardio') && 
          (symptoms.includes('heart') || symptoms.includes('chest'))) {
        score += 20
      }
      
      // Language preference
      if (doctor.languages.includes(formData.preferences.language)) {
        score += 10
      }
      
      // Availability score
      if (doctor.availability === 'Now') {
        score += 15
      }
      
      // Rating bonus
      score += (doctor.rating - 4) * 15
      
      return { ...doctor, matchScore: Math.min(score, 100) }
    }).sort((a, b) => b.matchScore - a.matchScore)
    
    setMatchedPediatricians(matched)
    if (matched.length > 0) {
      setSelectedPediatrician(matched[0].id)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 4) {
      setStep(step + 1)
    } else {
      // Complete connection
      const doctor = availablePediatricians.find(d => d.id === selectedPediatrician)
      console.log('Pediatrician connection completed:', {
        parent: formData.parentName,
        child: formData.childName,
        doctor,
        timestamp: new Date().toISOString(),
        consultationId: 'KID-' + Date.now()
      })
      
      onPaymentSuccess?.()
      
      // Show kid-friendly success message
      alert(`🎉 Yay! You're connected with ${doctor?.name}! 
      
A video link has been sent to your phone. 
Your little one is in good hands! 👶💕`)
      
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-4 border-blue-200">
        {/* Header - Kid Friendly */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-400 via-pink-400 to-green-400 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-4xl">👶</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Kids' Doctor Connect</h2>
              </div>
              <p className="text-white/90 flex items-center">
                <span className="mr-2">🏥</span>
                Gentle care for your little one
                <span className="ml-2">🍼</span>
              </p>
            </div>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 bg-white/20 p-2 rounded-full transition-colors"
            >
              <span className="text-2xl">✕</span>
            </button>
          </div>

          {/* Progress Steps - With Emojis */}
          <div className="flex justify-between relative">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex flex-col items-center relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                  step >= s 
                    ? 'bg-white text-blue-600' 
                    : 'bg-white/30 text-white'
                }`}>
                  {s === 1 && '📝'}
                  {s === 2 && '🤒'}
                  {s === 3 && '👩‍⚕️'}
                  {s === 4 && '✅'}
                </div>
                <span className="text-xs mt-2 text-white font-medium">
                  {s === 1 ? 'Your Info' : 
                   s === 2 ? 'Symptoms' : 
                   s === 3 ? 'Find Doctor' : 
                   'Confirm'}
                </span>
              </div>
            ))}
            <div className="absolute top-6 left-1/4 right-1/4 h-1 bg-white/30">
              <div 
                className="h-full bg-white transition-all duration-300"
                style={{ 
                  width: step === 1 ? '0%' : 
                         step === 2 ? '33%' : 
                         step === 3 ? '66%' : '100%' 
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {step === 1 && (
            <div className="space-y-6 animate-slide-up">
              {/* Parent Info */}
              <div className="bg-blue-50 rounded-xl p-4">
                <label className="block text-gray-700 font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">👨‍👩‍👧</span>
                  Parent/Guardian Information
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    required
                    className="w-full p-3 border-2 border-blue-200 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    className="w-full p-3 border-2 border-blue-200 rounded-xl focus:border-green-400"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              {/* Child Info */}
              <div className="bg-pink-50 rounded-xl p-4">
                <label className="block text-gray-700 font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">👶</span>
                  Child's Information
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Child's Full Name *"
                    required
                    className="w-full p-3 border-2 border-pink-200 rounded-xl focus:border-green-400"
                    value={formData.childName}
                    onChange={(e) => setFormData({...formData, childName: e.target.value})}
                  />
                  <input
                    type="number"
                    placeholder="Child's Age (years/months) *"
                    required
                    className="w-full p-3 border-2 border-pink-200 rounded-xl focus:border-green-400"
                    value={formData.childAge}
                    onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                  />
                  <select
                    className="w-full p-3 border-2 border-pink-200 rounded-xl focus:border-green-400"
                    value={formData.childGender}
                    onChange={(e) => setFormData({...formData, childGender: e.target.value})}
                  >
                    <option value="">Child's Gender</option>
                    <option value="boy">👦 Boy</option>
                    <option value="girl">👧 Girl</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Weight (optional)"
                    className="w-full p-3 border-2 border-pink-200 rounded-xl focus:border-green-400"
                    value={formData.childWeight}
                    onChange={(e) => setFormData({...formData, childWeight: e.target.value})}
                  />
                </div>
              </div>

              {/* Preferences */}
              <div className="bg-green-50 rounded-xl p-4">
                <label className="block text-gray-700 font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">⚙️</span>
                  Your Preferences
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <select
                    className="w-full p-3 border-2 border-green-200 rounded-xl"
                    value={formData.preferences.language}
                    onChange={(e) => setFormData({
                      ...formData, 
                      preferences: {...formData.preferences, language: e.target.value}
                    })}
                  >
                    <option value="english">English 🇬🇧</option>
                    <option value="hausa">Hausa 🇳🇬</option>
                    <option value="yoruba">Yoruba 🇳🇬</option>
                    <option value="igbo">Igbo 🇳🇬</option>
                  </select>
                  <select
                    className="w-full p-3 border-2 border-green-200 rounded-xl"
                    value={formData.preferences.doctorGender}
                    onChange={(e) => setFormData({
                      ...formData, 
                      preferences: {...formData.preferences, doctorGender: e.target.value}
                    })}
                  >
                    <option value="any">👩‍⚕️ Any Doctor</option>
                    <option value="female">👩 Female Pediatrician</option>
                    <option value="male">👨 Male Pediatrician</option>
                  </select>
                </div>
              </div>

              {/* How Urgent? - Kid Friendly */}
              <div>
                <label className="block text-gray-700 font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">⚡</span>
                  How is your child feeling?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: 'mild', label: 'A bit off', emoji: '😐', color: 'bg-blue-100 border-blue-300' },
                    { value: 'moderate', label: 'Uncomfortable', emoji: '😟', color: 'bg-yellow-100 border-yellow-300' },
                    { value: 'severe', label: 'Very uncomfortable', emoji: '😢', color: 'bg-orange-100 border-orange-300' },
                    { value: 'emergency', label: 'Emergency!', emoji: '🚨', color: 'bg-red-100 border-red-300 animate-pulse' }
                  ].map((level) => (
                    <button
                      type="button"
                      key={level.value}
                      className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center ${
                        formData.severity === level.value 
                          ? 'border-green-500 ' + level.color 
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                      onClick={() => setFormData({...formData, severity: level.value})}
                    >
                      <span className="text-3xl mb-2">{level.emoji}</span>
                      <span className="font-medium text-sm">{level.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-slide-up">
              {/* Symptoms - Kid Friendly */}
              <div>
                <label className="block text-gray-700 font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">🤒</span>
                  What's bothering your child?
                </label>
                <textarea
                  rows="4"
                  placeholder="Example: My 3-year-old has had fever for 2 days, coughing, not eating well..."
                  className="w-full p-4 border-2 border-pink-200 rounded-2xl focus:border-green-400 resize-none"
                  value={formData.symptoms}
                  onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">How long?</label>
                  <select
                    className="w-full p-3 border-2 border-blue-200 rounded-xl"
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  >
                    <option value="">Select duration</option>
                    <option value="hours">Just started (few hours)</option>
                    <option value="days">A few days</option>
                    <option value="weeks">About a week</option>
                    <option value="weeks+">More than a week</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Any allergies?</label>
                  <input
                    type="text"
                    placeholder="e.g., Peanuts, Penicillin"
                    className="w-full p-3 border-2 border-blue-200 rounded-xl"
                    value={formData.allergies}
                    onChange={(e) => setFormData({...formData, allergies: e.target.value})}
                  />
                </div>
              </div>

              {/* Quick Symptom Buttons - Kid Friendly */}
              <div className="bg-purple-50 rounded-2xl p-4">
                <h4 className="font-bold mb-3 flex items-center">
                  <span className="text-xl mr-2">🖱️</span>
                  Tap common symptoms:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Fever', emoji: '🌡️' },
                    { name: 'Cough', emoji: '🤧' },
                    { name: 'Cold', emoji: '🤒' },
                    { name: 'Stomach ache', emoji: '🤢' },
                    { name: 'Vomiting', emoji: '🤮' },
                    { name: 'Diarrhea', emoji: '💩' },
                    { name: 'Rash', emoji: '🦋' },
                    { name: 'Ear pain', emoji: '👂' },
                    { name: 'Teething', emoji: '🦷' },
                    { name: 'Not eating', emoji: '🍼' }
                  ].map(item => (
                    <button
                      key={item.name}
                      type="button"
                      className="px-4 py-2 bg-white border-2 border-purple-200 rounded-full hover:bg-purple-100 hover:border-purple-400 transition-colors flex items-center space-x-2"
                      onClick={() => setFormData({
                        ...formData, 
                        symptoms: formData.symptoms ? `${formData.symptoms}, ${item.name}` : item.name
                      })}
                    >
                      <span>{item.emoji}</span>
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Analysis - Kid Friendly */}
              {aiRecommendation && (
                <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-4">
                  <div className="flex items-start">
                    <span className="text-3xl mr-3">🤖</span>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">Our Smart Assistant Says:</h4>
                      <p className="text-gray-700">{aiRecommendation}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Kid-Friendly Tip */}
              {funTips && (
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4">
                  <div className="flex items-start">
                    <span className="text-3xl mr-3">💡</span>
                    <div>
                      <h4 className="font-bold text-yellow-800 mb-2">Parent Tip:</h4>
                      <p className="text-yellow-700">{funTips}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-slide-up">
              <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">👩‍⚕️</span>
                  <div>
                    <h3 className="text-2xl font-bold">Perfect Match for Your Child!</h3>
                    <p className="text-gray-600">AI-matched pediatric specialists</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {matchedPediatricians.map((doctor) => (
                    <div 
                      key={doctor.id}
                      className={`bg-white rounded-2xl p-4 border-2 transition-all cursor-pointer hover:shadow-lg ${
                        selectedPediatrician === doctor.id 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setSelectedPediatrician(doctor.id)}
                    >
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl flex items-center justify-center text-4xl mr-4">
                          {doctor.emoji}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-bold text-lg">{doctor.name}</h4>
                            <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                              <span className="text-yellow-500 mr-1">⭐</span>
                              <span className="font-bold">{doctor.rating}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                              {doctor.specialty}
                            </span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                              {doctor.experience}
                            </span>
                          </div>

                          <div className="space-y-1 text-sm">
                            <div className="flex items-center">
                              <span className="text-2xl mr-2">⏰</span>
                              <span>Available: <strong>{doctor.availability}</strong> ({doctor.nextSlot})</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-2xl mr-2">🗣️</span>
                              <span>{doctor.languages.join(' • ')}</span>
                            </div>
                            <div className="flex items-center text-purple-600 font-medium">
                              <span className="text-2xl mr-2">🧸</span>
                              <span>{doctor.kidFriendly}</span>
                            </div>
                            <div className="flex items-center text-green-600 font-medium mt-2 bg-green-50 p-2 rounded-xl">
                              <span className="text-2xl mr-2">🎯</span>
                              <span>AI Match: {doctor.matchScore}% - {doctor.aiReason}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600 mb-2">
                            ₦{doctor.price.toLocaleString()}
                          </div>
                          {selectedPediatrician === doctor.id && (
                            <div className="text-green-600 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">
                              ✓ Selected
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Warning - Kid Friendly */}
              {formData.severity === 'emergency' && (
                <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-4 animate-pulse">
                  <div className="flex items-center">
                    <span className="text-4xl mr-3">🚨</span>
                    <div>
                      <h4 className="font-bold text-red-800 text-lg">Emergency! Need help now?</h4>
                      <p className="text-red-700">
                        Call our Kids' Emergency Line: <strong className="text-2xl">0802-718-3558</strong>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 animate-slide-up">
              {/* Confirmation - Kid Friendly */}
              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-4">🎉</span>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800">Almost there!</h3>
                    <p className="text-gray-600">Review your child's consultation details</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-xl">
                    <h4 className="font-bold mb-3 flex items-center">
                      <span className="text-2xl mr-2">👶</span>
                      Your Child
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-semibold">{formData.childName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Age:</span>
                        <span className="font-semibold">{formData.childAge} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Parent:</span>
                        <span className="font-semibold">{formData.parentName}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl">
                    <h4 className="font-bold mb-3 flex items-center">
                      <span className="text-2xl mr-2">👩‍⚕️</span>
                      Their Doctor
                    </h4>
                    {(() => {
                      const doctor = availablePediatricians.find(d => d.id === selectedPediatrician)
                      return doctor ? (
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Name:</span>
                            <span className="font-semibold">{doctor.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Specialty:</span>
                            <span className="font-semibold">{doctor.specialty}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Experience:</span>
                            <span className="font-semibold">{doctor.experience}</span>
                          </div>
                        </div>
                      ) : null
                    })()}
                  </div>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                <h3 className="font-bold text-purple-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">💰</span>
                  Payment Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Video Consultation (Kid-friendly)</span>
                    <span className="font-semibold">₦3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pediatric Specialist Fee</span>
                    <span className="font-semibold">
                      {(() => {
                        const doctor = availablePediatricians.find(d => d.id === selectedPediatrician)
                        return doctor ? `₦${doctor.price.toLocaleString()}` : '₦10,000'
                      })()}
                    </span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>🎈 Kid's Comfort Package (sticker, digital coloring book)</span>
                    <span className="font-semibold">FREE</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total:</span>
                      <span className="text-blue-600">
                        {(() => {
                          const doctor = availablePediatricians.find(d => d.id === selectedPediatrician)
                          return `₦${(3000 + (doctor?.price || 10000)).toLocaleString()}`
                        })()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What happens next - Kid Friendly */}
              <div className="bg-yellow-50 rounded-2xl p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-3xl">🔜</span>
                  <div>
                    <h4 className="font-bold mb-2">What happens next?</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="text-xl mr-2">📱</span>
                        Video link sent to your phone (SMS & WhatsApp)
                      </li>
                      <li className="flex items-center">
                        <span className="text-xl mr-2">⏰</span>
                        Doctor joins in 5-10 minutes
                      </li>
                      <li className="flex items-center">
                        <span className="text-xl mr-2">🖍️</span>
                        Free kids' coloring book while you wait!
                      </li>
                      <li className="flex items-center">
                        <span className="text-xl mr-2">📋</span>
                        E-prescription sent after visit
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="sticky bottom-0 bg-white pt-6 border-t">
            <div className="flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors flex items-center"
                >
                  <span className="text-xl mr-2">←</span>
                  Back
                </button>
              )}
              
              <button
                type="submit"
                className={`ml-auto bg-gradient-to-r from-blue-400 to-green-400 text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 flex items-center ${
                  step === 1 ? 'w-full justify-center' : ''
                }`}
              >
                {step === 4 ? (
                  <>
                    <span className="text-2xl mr-2">👶</span>
                    Connect with Pediatrician
                  </>
                ) : (
                  <>
                    Continue
                    <span className="text-xl ml-2">→</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}