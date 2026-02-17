import { useState } from 'react'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      parentName: "Aisha Bello",
      childName: "Zara (3 years old)",
      role: "Happy Mother",
      text: "My 3-year-old was so scared of hospitals until we found Kidscare! Dr. Fatima used puppets during the checkup and now Zara asks when we're visiting her 'teddy doctor' again. The home visit option is a lifesaver!",
      rating: 5,
      treatment: "Pediatric Home Visit",
      parentImage: "AB",
      emoji: "👩‍👧",
      childEmoji: "👶"
    },
    {
      id: 2,
      parentName: "Ahmed Ibrahim",
      childName: "Musa (5 years old)",
      role: "Grateful Father",
      text: "Our son Musa had chronic ear infections. The pediatric specialist at Kidscare not only treated him but taught us how to prevent future issues. They even sent Musa a 'Brave Kid' certificate with stickers! 🏅",
      rating: 5,
      treatment: "Pediatric ENT Care",
      parentImage: "AI",
      emoji: "👨‍👦",
      childEmoji: "👦"
    },
    {
      id: 3,
      parentName: "Fatima Yusuf",
      childName: "Amina & Ahmed (twins, 2 years)",
      role: "Mother of Twins",
      text: "Getting twins vaccinated at a regular clinic was always stressful. Kidscare's home visit service sent two nurses who made it fun! They sang songs, gave stickers, and now my twins actually smile when they see the medical kit. Pure magic! ✨",
      rating: 5,
      treatment: "Twin Vaccination Home Visit",
      parentImage: "FY",
      emoji: "👩‍👧‍👦",
      childEmoji: "👶👶"
    },
    {
      id: 4,
      parentName: "Dr. Ngozi Okonkwo",
      childName: "Chidi (7 years old)",
      role: "Pediatrician & Parent",
      text: "As a pediatrician myself, I'm very picky about my son's doctors. Kidscare exceeded my expectations! The video consultation was thorough, the doctor was patient, and the digital prescription was at our pharmacy before the call ended. Brilliant!",
      rating: 5,
      treatment: "Pediatric Video Consultation",
      parentImage: "NO",
      emoji: "👩‍⚕️",
      childEmoji: "👦"
    },
    {
      id: 5,
      parentName: "Suleiman Adamu",
      childName: "Aisha (8 years old)",
      role: "Proud Father",
      text: "My daughter broke her arm during sports. The emergency response was incredible - they stabilized her at our home, explained everything in kid-friendly terms, and even gave her a teddy bear with a tiny cast to match hers! 🧸",
      rating: 5,
      treatment: "Pediatric Emergency",
      parentImage: "SA",
      emoji: "👨‍👧",
      childEmoji: "👧"
    },
    {
      id: 6,
      parentName: "Rashida Mohammed",
      childName: "Ibrahim (4 years old)",
      role: "Thankful Parent",
      text: "Ibrahim has autism and regular clinic visits were traumatic. Kidscare prepared a sensory-friendly home visit - dim lights, quiet approach, and they let him hold the stethoscope first. Now he actually cooperates! We're forever grateful.",
      rating: 5,
      treatment: "Sensory-Friendly Home Visit",
      parentImage: "RM",
      emoji: "💙",
      childEmoji: "🤗"
    }
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-pink-50 via-blue-50 to-green-50 overflow-hidden relative">
      {/* Floating Kid Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-10 left-20 text-6xl opacity-10 animate-float">👶</span>
        <span className="absolute bottom-20 right-20 text-7xl opacity-10 animate-float" style={{ animationDelay: '0.8s' }}>🧸</span>
        <span className="absolute top-40 right-1/4 text-5xl opacity-10 animate-float" style={{ animationDelay: '1.2s' }}>⭐</span>
        <span className="absolute bottom-40 left-1/4 text-6xl opacity-10 animate-float" style={{ animationDelay: '0.4s' }}>🎈</span>
        <span className="absolute top-60 left-1/3 text-5xl opacity-10 animate-float" style={{ animationDelay: '1.6s' }}>🍼</span>
        <span className="absolute bottom-60 right-1/3 text-6xl opacity-10 animate-float" style={{ animationDelay: '0.2s' }}>🦷</span>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border-2 border-pink-200 px-6 py-3 rounded-full mb-6 shadow-lg">
            <span className="text-3xl">❤️</span>
            <span className="text-sm font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              HAPPY PARENTS, HEALTHY KIDS
            </span>
            <span className="text-3xl">😊</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Trusted by</span>
            <span className="block bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
              Loving Parents Everywhere 💕
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 flex items-center justify-center">
            <span className="mr-2">👪</span>
            Real stories from families who trust us with their little ones
            <span className="ml-2">🏠</span>
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-pink-200">
                    <div className="md:flex">
                      {/* Left Side - Parent/Child Info */}
                      <div className="md:w-1/3 bg-gradient-to-br from-pink-400 via-blue-400 to-green-400 p-8 text-white">
                        <div className="flex flex-col items-center h-full justify-center">
                          {/* Animated Parent-Child Icon */}
                          <div className="relative mb-6">
                            <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center">
                              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-transparent bg-gradient-to-br from-pink-500 to-blue-500 bg-clip-text">
                                <span className="text-5xl">{testimonial.emoji}</span>
                              </div>
                            </div>
                            <span className="absolute -bottom-2 -right-2 text-4xl animate-bounce-slow">
                              {testimonial.childEmoji}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-2">{testimonial.parentName}</h3>
                          <p className="text-white/80 mb-2 flex items-center">
                            <span className="text-xl mr-2">{testimonial.emoji}</span>
                            {testimonial.role}
                          </p>
                          <p className="text-white/90 font-medium mb-4 flex items-center">
                            <span className="text-xl mr-2">👶</span>
                            {testimonial.childName}
                          </p>
                          
                          <div className="flex mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i} className="text-2xl text-yellow-300">⭐</span>
                            ))}
                          </div>
                          
                          <div className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm flex items-center">
                            <span className="text-lg mr-2">🏥</span>
                            {testimonial.treatment}
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Testimonial Text */}
                      <div className="md:w-2/3 p-8">
                        <div className="flex items-start h-full">
                          <span className="text-6xl text-pink-200 mr-6 mt-2">"</span>
                          <div>
                            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                              {testimonial.text}
                            </p>
                            <div className="flex flex-wrap items-center gap-4">
                              <div className="flex items-center bg-pink-50 px-4 py-2 rounded-full">
                                <span className="text-xl mr-2">✅</span>
                                <span className="text-gray-600">Treatment Completed</span>
                              </div>
                              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                                <span className="text-xl mr-2">💝</span>
                                <span className="text-gray-600">100% Happy</span>
                              </div>
                              <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
                                <span className="text-xl mr-2">🏆</span>
                                <span className="text-gray-600">Brave Kid Approved</span>
                              </div>
                            </div>
                            
                            {/* Kid's Reaction Emojis */}
                            <div className="mt-6 flex items-center space-x-2">
                              <span className="text-sm text-gray-500">Little one's reaction:</span>
                              <span className="text-2xl animate-bounce-slow">😊</span>
                              <span className="text-2xl">🎉</span>
                              <span className="text-2xl">⭐</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Kid Friendly */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <button 
              onClick={prevTestimonial}
              className="w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 flex items-center justify-center border-2 border-pink-300 hover:border-blue-300"
            >
              <span className="text-3xl">←</span>
            </button>
            
            {/* Dots Indicator - With Emojis */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all ${
                    index === activeIndex 
                      ? 'scale-150' 
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <span className="text-2xl">
                    {index === activeIndex ? '🧸' : '⚪'}
                  </span>
                </button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 flex items-center justify-center border-2 border-blue-300 hover:border-pink-300"
            >
              <span className="text-3xl">→</span>
            </button>
          </div>
        </div>

        {/* Trust Badges - Kid Friendly */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-6 text-center shadow-xl border-2 border-pink-200 hover:scale-105 transition-transform">
            <span className="text-5xl block mb-3 animate-bounce-slow">⭐</span>
            <div className="text-3xl font-bold text-pink-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Parent Rating</div>
            <div className="text-sm text-gray-500 mt-2">from 2,500+ reviews</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center shadow-xl border-2 border-blue-200 hover:scale-105 transition-transform">
            <span className="text-5xl block mb-3">👍</span>
            <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
            <div className="text-gray-600">Would Recommend</div>
            <div className="text-sm text-gray-500 mt-2">to other parents</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center shadow-xl border-2 border-green-200 hover:scale-105 transition-transform">
            <span className="text-5xl block mb-3">👶</span>
            <div className="text-3xl font-bold text-green-600 mb-2">5,000+</div>
            <div className="text-gray-600">Happy Kids</div>
            <div className="text-sm text-gray-500 mt-2">treated with love</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center shadow-xl border-2 border-purple-200 hover:scale-105 transition-transform">
            <span className="text-5xl block mb-3">🚑</span>
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Kids' Emergency</div>
            <div className="text-sm text-gray-500 mt-2">always available</div>
          </div>
        </div>

        {/* Fun Parent Promise */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-100 to-pink-100 px-8 py-4 rounded-full shadow-lg">
            <span className="text-4xl animate-bounce-slow">💝</span>
            <span className="text-lg font-medium text-gray-700">
              We treat every child like our own - with love, patience, and a smile!
            </span>
            <span className="text-4xl animate-bounce-slow" style={{ animationDelay: '0.3s' }}>😊</span>
          </div>
        </div>
      </div>
    </section>
  )
}