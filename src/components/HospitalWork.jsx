import { useState } from 'react'

export default function HospitalWork() {
  const [activeTab, setActiveTab] = useState('achievements')

  const achievements = [
    { year: '2024', title: '🌟 Best Children\'s Hospital', description: 'National Pediatric Healthcare Excellence Award', icon: '🏆', emoji: '🏆' },
    { year: '2023', title: '👶 10,000+ Happy Kids', description: 'Successfully treated children and counting', icon: '📊', emoji: '🎉' },
    { year: '2023', title: '🦷 Kids\' Dental Excellence', description: 'Specialized pediatric dental care certification', icon: '🦷', emoji: '😁' },
    { year: '2022', title: '💉 Vaccination Champion', description: '100% child vaccination program success', icon: '💉', emoji: '🛡️' },
    { year: '2022', title: '🧸 Kid-Friendly Hospital', description: 'Certified child-friendly healthcare environment', icon: '🧸', emoji: '🏥' },
    { year: '2021', title: '👩‍⚕️ Top Pediatric Team', description: 'Nigeria\'s leading children\'s specialists', icon: '👩‍⚕️', emoji: '⭐' },
    { year: '2020', title: '🚑 Kids\' Emergency Response', description: 'Rapid pediatric emergency care system', icon: '🚑', emoji: '⚡' },
    { year: '2020', title: '📱 Kids\' Telemedicine', description: 'First pediatric virtual care platform', icon: '📱', emoji: '👶' },
  ]

  const successCases = [
    { 
      id: 1, 
      title: '💓 Little Heart Miracle', 
      specialty: 'Pediatric Cardiology', 
      outcome: 'Full Recovery', 
      patient: '2-year-old', 
      story: 'Successful heart surgery on toddler',
      emoji: '❤️',
      color: 'from-pink-400 to-red-400'
    },
    { 
      id: 2, 
      title: '🧠 Brave Brain Surgery', 
      specialty: 'Pediatric Neurology', 
      outcome: 'Excellent Progress', 
      patient: '5-year-old', 
      story: 'Complex brain tumor removed successfully',
      emoji: '🧠',
      color: 'from-purple-400 to-blue-400'
    },
    { 
      id: 3, 
      title: '🦷 First Smile Dental', 
      specialty: 'Pediatric Dentistry', 
      outcome: 'Happy Smile', 
      patient: '3-year-old', 
      story: 'Painless dental treatment for anxious toddler',
      emoji: '😁',
      color: 'from-yellow-400 to-orange-400'
    },
    { 
      id: 4, 
      title: '👣 Walking Again', 
      specialty: 'Pediatric Orthopedics', 
      outcome: 'Running & Playing', 
      patient: '7-year-old', 
      story: 'Corrective surgery for clubfoot',
      emoji: '👣',
      color: 'from-green-400 to-teal-400'
    },
    { 
      id: 5, 
      title: '🌟 Preemie Warrior', 
      specialty: 'Neonatal Care', 
      outcome: 'Healthy & Growing', 
      patient: 'Premature baby', 
      story: '28-week preemie now thriving',
      emoji: '👶',
      color: 'from-blue-400 to-pink-400'
    },
    { 
      id: 6, 
      title: '🦋 Asthma-Free Kids', 
      specialty: 'Pediatric Pulmonology', 
      outcome: 'Breathing Easy', 
      patient: '6-year-old', 
      story: 'Severe asthma now under control',
      emoji: '🫁',
      color: 'from-cyan-400 to-blue-400'
    },
  ]

  const stats = [
    { value: '10,000+', label: 'Happy Kids Treated', icon: '👶', emoji: '👧👦', color: 'from-blue-400 to-blue-600' },
    { value: '98%', label: 'Parent Satisfaction', icon: '⭐', emoji: '😊', color: 'from-yellow-400 to-yellow-600' },
    { value: '24/7', label: 'Kids\' Emergency', icon: '🚑', emoji: '⚡', color: 'from-red-400 to-red-600' },
    { value: '50+', label: 'Pediatric Specialists', icon: '👩‍⚕️', emoji: '👨‍⚕️', color: 'from-green-400 to-green-600' },
    { value: '5,000+', label: 'Home Visits', icon: '🏡', emoji: '🚙', color: 'from-purple-400 to-purple-600' },
    { value: '100%', label: 'Vaccination Rate', icon: '💉', emoji: '🛡️', color: 'from-pink-400 to-pink-600' },
  ]

  const kidFriendlyFeatures = [
    {
      icon: '🧸',
      title: 'Toy-Filled Rooms',
      description: 'Every room has toys to make kids feel at home'
    },
    {
      icon: '🎨',
      title: 'Art Therapy',
      description: 'Coloring and crafts during treatment'
    },
    {
      icon: '🦷',
      title: 'Gentle Dentistry',
      description: 'Pain-free dental care with flavored toothpaste'
    },
    {
      icon: '🎮',
      title: 'Game Zone',
      description: 'Video games in waiting areas'
    },
    {
      icon: '📚',
      title: 'Story Time',
      description: 'Nurses read stories to little patients'
    },
    {
      icon: '🎁',
      title: 'Brave Kid Rewards',
      description: 'Stickers and toys for brave little ones'
    }
  ]

  return (
    <section id="evidence" className="py-20 bg-gradient-to-br from-blue-50 via-pink-50 to-green-50 overflow-hidden relative">
      {/* Floating Kid Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-20 left-10 text-7xl opacity-5 animate-float">🧸</span>
        <span className="absolute bottom-20 right-10 text-8xl opacity-5 animate-float" style={{ animationDelay: '1s' }}>👶</span>
        <span className="absolute top-40 right-1/4 text-6xl opacity-5 animate-float" style={{ animationDelay: '0.5s' }}>🦷</span>
        <span className="absolute bottom-40 left-1/3 text-7xl opacity-5 animate-float" style={{ animationDelay: '1.5s' }}>🏆</span>
        <span className="absolute top-60 left-1/4 text-6xl opacity-5 animate-float" style={{ animationDelay: '0.8s' }}>⭐</span>
        <span className="absolute bottom-60 right-1/3 text-7xl opacity-5 animate-float" style={{ animationDelay: '1.2s' }}>🎈</span>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border-2 border-blue-200 px-6 py-3 rounded-full mb-6 shadow-lg">
            <span className="text-3xl">🏆</span>
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              KIDS' CARE EXCELLENCE
            </span>
            <span className="text-3xl">⭐</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Making Kids Smile,</span>
            <span className="block bg-gradient-to-r from-blue-600 via-pink-500 to-green-600 bg-clip-text text-transparent">
              One Child at a Time 🌟
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 flex items-center justify-center">
            <span className="mr-2">🏥</span>
            Proven pediatric care with lots of love and laughter
            <span className="ml-2">😊</span>
          </p>
        </div>

        {/* Stats Overview - Kid Friendly */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-white to-blue-50 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-blue-200`}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl mb-3 animate-bounce-slow">{stat.emoji}</span>
                <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs - Kid Friendly */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center space-x-2 ${
                activeTab === 'achievements'
                  ? 'bg-gradient-to-r from-blue-400 to-green-400 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              <span className="text-2xl">🏆</span>
              <span>Our Achievements</span>
            </button>
            <button
              onClick={() => setActiveTab('cases')}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center space-x-2 ${
                activeTab === 'cases'
                  ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              <span className="text-2xl">👶</span>
              <span>Little Heroes</span>
            </button>
            <button
              onClick={() => setActiveTab('technology')}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center space-x-2 ${
                activeTab === 'technology'
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              <span className="text-2xl">🧸</span>
              <span>Kid-Friendly Features</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-blue-200 rounded-3xl p-6 hover:shadow-2xl transition-all hover:-translate-y-2 hover:border-green-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-pink-100 rounded-2xl flex items-center justify-center text-3xl">
                      {achievement.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-pink-100 text-blue-700 rounded-full text-sm font-bold mb-2">
                        {achievement.year}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'cases' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {successCases.map((caseItem) => (
                <div 
                  key={caseItem.id}
                  className={`bg-gradient-to-br ${caseItem.color} bg-opacity-10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-4 border-white`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                        {caseItem.emoji}
                      </div>
                      <span className="bg-white px-3 py-1 rounded-full text-sm font-bold">
                        ⭐ {caseItem.outcome}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{caseItem.title}</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center bg-white/80 backdrop-blur-sm p-3 rounded-xl">
                        <span className="text-2xl mr-3">👶</span>
                        <div>
                          <div className="text-sm text-gray-600">Little Patient</div>
                          <div className="font-bold">{caseItem.patient}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center bg-white/80 backdrop-blur-sm p-3 rounded-xl">
                        <span className="text-2xl mr-3">📋</span>
                        <div>
                          <div className="text-sm text-gray-600">Specialty</div>
                          <div className="font-bold">{caseItem.specialty}</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/90 p-4 rounded-xl">
                        <p className="text-sm text-gray-700 italic">
                          "{caseItem.story}"
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-between text-sm text-gray-600 bg-white/80 p-2 rounded-xl">
                      <span className="flex items-center">
                        <span className="text-lg mr-1">🔒</span>
                        Privacy protected
                      </span>
                      <span className="flex items-center">
                        <span className="text-lg mr-1">✅</span>
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'technology' && (
            <div className="space-y-8">
              {/* Kid-Friendly Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kidFriendlyFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white border-2 border-purple-200 rounded-3xl p-6 hover:shadow-2xl transition-all hover:-translate-y-2 text-center"
                  >
                    <div className="text-6xl mb-4 animate-bounce-slow">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Special Kids' Facilities */}
              <div className="bg-gradient-to-br from-blue-100 to-pink-100 rounded-3xl p-8 border-4 border-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-3xl mr-3">🏰</span>
                  Our Special Kids' Zone
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 bg-white p-4 rounded-2xl">
                      <span className="text-3xl">🎮</span>
                      <div>
                        <h4 className="font-bold mb-1">Play Therapy Room</h4>
                        <p className="text-sm text-gray-600">Video games, toys, and fun activities during treatment</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 bg-white p-4 rounded-2xl">
                      <span className="text-3xl">🎨</span>
                      <div>
                        <h4 className="font-bold mb-1">Art Corner</h4>
                        <p className="text-sm text-gray-600">Coloring, painting, and craft activities</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 bg-white p-4 rounded-2xl">
                      <span className="text-3xl">📚</span>
                      <div>
                        <h4 className="font-bold mb-1">Story Time Nook</h4>
                        <p className="text-sm text-gray-600">Books and storytelling sessions</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="font-bold mb-4 flex items-center">
                      <span className="text-2xl mr-2">📊</span>
                      Kid-Friendly Stats
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Happy Kids</span>
                          <span className="font-bold">98%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-gradient-to-r from-blue-400 to-green-400 h-2.5 rounded-full" style={{ width: '98%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Pain-Free Procedures</span>
                          <span className="font-bold">95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Kids Who Smile After Visit</span>
                          <span className="font-bold">100%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <span className="text-4xl animate-bounce-slow">🧸</span>
                      <p className="text-sm text-gray-600 mt-2">Where kids feel at home!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl">🏥</span>
            <span className="font-medium">NAFDAC Certified</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl">👶</span>
            <span className="font-medium">Pediatric Association Member</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl">⭐</span>
            <span className="font-medium">5-Star Parent Rated</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl">🛡️</span>
            <span className="font-medium">Child Safety Certified</span>
          </div>
        </div>
      </div>
    </section>
  )
}