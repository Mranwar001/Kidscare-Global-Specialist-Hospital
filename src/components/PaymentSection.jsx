import { useState, useEffect } from 'react'

export default function PaymentSection({ isOpen, onClose, onPaymentComplete }) {
  const [paymentMethod, setPaymentMethod] = useState('remita')
  const [paymentStep, setPaymentStep] = useState(1)
  const [receiptMethod, setReceiptMethod] = useState(['email', 'sms'])
  const [paymentStatus, setPaymentStatus] = useState('pending')
  const [transactionId, setTransactionId] = useState('')
  const [remitaData, setRemitaData] = useState({
    rrr: '',
    amount: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    serviceTypeId: '',
    description: ''
  })

  const kidsServices = [
    { id: 1, name: '👩‍⚕️ Video Pediatric Visit', price: 3500, serviceTypeId: '4430731', emoji: '📱', ageGroup: 'All ages' },
    { id: 2, name: '🏡 Kids Home Visit (Standard)', price: 12000, serviceTypeId: '4430732', emoji: '🏠', ageGroup: '0-12 years' },
    { id: 3, name: '🦷 Little Teeth Dental Check', price: 8000, serviceTypeId: '4430733', emoji: '🦷', ageGroup: '2-12 years' },
    { id: 4, name: '💉 Vaccination Package', price: 15000, serviceTypeId: '4430734', emoji: '💉', ageGroup: '0-5 years' },
    { id: 5, name: '📊 Growth & Development Check', price: 10000, serviceTypeId: '4430735', emoji: '📈', ageGroup: '0-10 years' },
    { id: 6, name: '🎈 Fun Health Checkup', price: 5000, serviceTypeId: '4430736', emoji: '🎈', ageGroup: 'All ages' }
  ]

  const [selectedServices, setSelectedServices] = useState([1])

  // Generate kid-friendly transaction ID on component mount
  useEffect(() => {
    if (isOpen) {
      const txId = 'KID-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6).toUpperCase()
      setTransactionId(txId)
    }
  }, [isOpen])

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(serviceId => serviceId !== id))
    } else {
      setSelectedServices([...selectedServices, id])
    }
  }

  const calculateTotal = () => {
    const subtotal = selectedServices.reduce((total, id) => {
      const service = kidsServices.find(s => s.id === id)
      return total + (service?.price || 0)
    }, 0)
    
    const vat = subtotal * 0.075 // 7.5% VAT
    const platformFee = 500
    const kidDiscount = selectedServices.length >= 2 ? 1000 : 0 // Discount for multiple services
    
    return {
      subtotal,
      vat: Math.round(vat),
      platformFee,
      kidDiscount,
      total: subtotal + Math.round(vat) + platformFee - kidDiscount
    }
  }

  const toggleReceiptMethod = (method) => {
    if (receiptMethod.includes(method)) {
      setReceiptMethod(receiptMethod.filter(m => m !== method))
    } else {
      setReceiptMethod([...receiptMethod, method])
    }
  }

  const simulateRemitaPayment = async () => {
    setPaymentStatus('processing')
    
    // Generate RRR (Remita Retrieval Reference)
    const rrr = 'RRR' + Date.now() + Math.random().toString(36).substr(2, 6).toUpperCase()
    
    const amounts = calculateTotal()
    
    // Simulate API call to Remita
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setRemitaData({
      rrr,
      amount: amounts.total,
      customerName: 'Parent/Guardian',
      customerEmail: 'parent@example.com',
      customerPhone: '08027183558',
      serviceTypeId: kidsServices.find(s => s.id === selectedServices[0])?.serviceTypeId || '4430731',
      description: selectedServices.map(id => kidsServices.find(s => s.id === id)?.name).join(', ')
    })
    
    setPaymentStatus('success')
    setPaymentStep(2)
    onPaymentComplete?.(amounts.total, 'Remita')
  }

  const sendReceipts = async () => {
    // Simulate sending receipts through multiple channels
    const receiptsSent = {
      email: receiptMethod.includes('email'),
      sms: receiptMethod.includes('sms'),
      whatsapp: receiptMethod.includes('whatsapp'),
      popup: receiptMethod.includes('popup')
    }

    console.log('Sending receipts via:', receiptsSent)
    
    // Simulate API calls
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    alert('🎉 Yay! Your receipts are on their way! Check your phone and email.')
    setPaymentStep(3)
  }

  const downloadReceipt = () => {
    const receiptContent = `
      🏥 KIDSCARE GLOBAL SPECIALIST HOSPITAL
      =======================================
               🌟 KIDS' PAYMENT RECEIPT 🌟
      
      Transaction ID: ${transactionId}
      RRR: ${remitaData.rrr}
      Date: ${new Date().toLocaleString()}
      
      🎈 SERVICES FOR YOUR LITTLE ONE:
      ${selectedServices.map(id => {
        const service = kidsServices.find(s => s.id === id)
        return `  ${service?.emoji} ${service?.name}: ₦${service?.price.toLocaleString()}`
      }).join('\n')}
      
      📊 BILLING SUMMARY:
      Subtotal: ₦${calculateTotal().subtotal.toLocaleString()}
      VAT (7.5%): ₦${calculateTotal().vat.toLocaleString()}
      Platform Fee: ₦${calculateTotal().platformFee.toLocaleString()}
      Kid's Discount: -₦${calculateTotal().kidDiscount.toLocaleString()} 🎁
      TOTAL PAID: ₦${calculateTotal().total.toLocaleString()}
      
      💝 PAYMENT METHOD: Remita
      STATUS: ✅ PAID
      
      Receipt ID: RC-${Date.now()}
      Valid until: ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
      
      🧸 Thank you for choosing Kidscare Global!
      Your little one's health is our happiness.
      
      For questions: 0802-718-3558
      📧 kids@kidscareglobal.com
    `
    
    const blob = new Blob([receiptContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `kidscare-receipt-${transactionId}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (!isOpen) return null

  const amounts = calculateTotal()

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-4 border-blue-200">
        {/* Header - Kid Friendly */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-400 via-pink-400 to-green-400 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-4xl">💰</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Kids' Payment Portal</h2>
              </div>
              <p className="text-white/90 flex items-center">
                <span className="mr-2">🔒</span>
                Safe & Secure for Parent Payments
                <span className="ml-2">🛡️</span>
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
          <div className="flex justify-between items-center mb-2">
            <div className={`flex items-center ${paymentStep >= 1 ? 'text-white' : 'text-white/50'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                paymentStep >= 1 ? 'bg-white text-blue-600' : 'bg-white/30 text-white'
              }`}>
                {paymentStep > 1 ? '✓' : '1'}
              </div>
              <span className="text-sm font-medium">Select 🎈</span>
            </div>
            <div className="flex-1 h-1 mx-4 bg-white/30">
              <div className={`h-full bg-white transition-all ${paymentStep >= 2 ? 'w-full' : 'w-0'}`}></div>
            </div>
            <div className={`flex items-center ${paymentStep >= 2 ? 'text-white' : 'text-white/50'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                paymentStep >= 2 ? 'bg-white text-blue-600' : 'bg-white/30 text-white'
              }`}>
                {paymentStep > 2 ? '✓' : '2'}
              </div>
              <span className="text-sm font-medium">Pay 💳</span>
            </div>
            <div className="flex-1 h-1 mx-4 bg-white/30">
              <div className={`h-full bg-white transition-all ${paymentStep >= 3 ? 'w-full' : 'w-0'}`}></div>
            </div>
            <div className={`flex items-center ${paymentStep >= 3 ? 'text-white' : 'text-white/50'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                paymentStep >= 3 ? 'bg-white text-blue-600' : 'bg-white/30 text-white'
              }`}>
                3
              </div>
              <span className="text-sm font-medium">Receipt 🧾</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          {paymentStep === 1 && (
            <div className="space-y-8">
              {/* Services Selection - Kid Friendly */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-2">🎈</span>
                  What does your child need?
                </h3>
                <div className="space-y-3 mb-8">
                  {kidsServices.map(service => (
                    <div 
                      key={service.id}
                      className={`p-4 border-2 rounded-2xl cursor-pointer transition-all hover:shadow-lg ${
                        selectedServices.includes(service.id)
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => toggleService(service.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center flex-1">
                          <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 ${
                            selectedServices.includes(service.id)
                              ? 'border-green-500 bg-green-500'
                              : 'border-gray-300'
                          }`}>
                            {selectedServices.includes(service.id) && (
                              <span className="text-white text-lg">✓</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center">
                              <span className="text-3xl mr-3">{service.emoji}</span>
                              <div>
                                <div className="font-bold text-lg">{service.name}</div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm text-gray-500">👶 {service.ageGroup}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">₦{service.price.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Multi-service discount message */}
                {selectedServices.length >= 2 && (
                  <div className="bg-purple-100 border-2 border-purple-300 rounded-2xl p-4 mb-6">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">🎁</span>
                      <div>
                        <h4 className="font-bold text-purple-800">Multi-Service Discount Applied!</h4>
                        <p className="text-purple-600">You saved ₦1,000 on your child's care package! 🎉</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Receipt Delivery Options */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-2">📬</span>
                  Where should we send the receipt?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    { id: 'email', icon: '📧', label: 'Email', color: 'bg-blue-100' },
                    { id: 'sms', icon: '📱', label: 'SMS', color: 'bg-green-100' },
                    { id: 'whatsapp', icon: '💬', label: 'WhatsApp', color: 'bg-green-50' },
                    { id: 'popup', icon: '🖥️', label: 'Popup', color: 'bg-purple-100' }
                  ].map(method => (
                    <button
                      key={method.id}
                      type="button"
                      className={`p-4 border-2 rounded-2xl text-center transition-all hover:scale-105 ${
                        receiptMethod.includes(method.id)
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => toggleReceiptMethod(method.id)}
                    >
                      <span className="text-3xl mb-2 block">{method.icon}</span>
                      <div className="text-sm font-medium">{method.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl p-6 border-2 border-blue-200">
                <h4 className="font-bold mb-4 text-xl flex items-center">
                  <span className="text-2xl mr-2">📋</span>
                  Your Order Summary
                </h4>
                <div className="space-y-3">
                  {selectedServices.map(id => {
                    const service = kidsServices.find(s => s.id === id)
                    return (
                      <div key={id} className="flex justify-between items-center">
                        <span className="flex items-center">
                          <span className="text-xl mr-2">{service?.emoji}</span>
                          <span className="text-gray-700">{service?.name}</span>
                        </span>
                        <span className="font-medium">₦{service?.price.toLocaleString()}</span>
                      </div>
                    )
                  })}
                  <div className="border-t border-gray-300 my-3 pt-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal:</span>
                      <span>₦{amounts.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>VAT (7.5%):</span>
                      <span>₦{amounts.vat.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Platform Fee:</span>
                      <span>₦{amounts.platformFee.toLocaleString()}</span>
                    </div>
                    {amounts.kidDiscount > 0 && (
                      <div className="flex justify-between text-green-600 font-medium">
                        <span>🎁 Kid's Discount:</span>
                        <span>-₦{amounts.kidDiscount.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold text-xl">
                      <span>Total Amount:</span>
                      <span className="text-blue-600">₦{amounts.total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setPaymentStep(2)}
                className="w-full bg-gradient-to-r from-blue-400 to-green-400 text-white py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center"
              >
                <span className="text-2xl mr-2">💰</span>
                Proceed to Payment
                <span className="text-2xl ml-2">→</span>
              </button>
            </div>
          )}

          {paymentStep === 2 && (
            <div className="space-y-8">
              {/* Remita Payment Interface - Kid Friendly */}
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-6 border-4 border-blue-300">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-4xl">🏦</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Remita Secure Payment</h3>
                    <p className="text-gray-600 flex items-center">
                      <span className="text-xl mr-1">🔒</span>
                      Protected for parent payments
                    </p>
                  </div>
                </div>

                {paymentStatus === 'pending' && (
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-inner">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Total Amount:</span>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-blue-600">₦{amounts.total.toLocaleString()}</div>
                          <div className="text-sm text-gray-500">For your little one's care</div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-xl flex items-center">
                        <span className="text-2xl mr-3">🛡️</span>
                        <span className="text-sm text-blue-700">Payment secured by Remita • 256-bit encrypted</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Parent's Full Name</label>
                        <input
                          type="text"
                          className="w-full p-3 border-2 border-blue-200 rounded-xl focus:border-green-400"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Email</label>
                        <input
                          type="email"
                          className="w-full p-3 border-2 border-blue-200 rounded-xl focus:border-green-400"
                          placeholder="parent@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full p-3 border-2 border-blue-200 rounded-xl focus:border-green-400"
                        placeholder="0802 718 3558"
                      />
                    </div>

                    {/* Payment Options - Kid Friendly */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <button className="p-4 border-2 border-blue-200 rounded-2xl text-center hover:bg-blue-50 transition-all hover:scale-105">
                        <span className="text-3xl mb-2 block">💳</span>
                        <div className="text-sm font-medium">Card</div>
                      </button>
                      <button className="p-4 border-2 border-blue-200 rounded-2xl text-center hover:bg-blue-50 transition-all hover:scale-105">
                        <span className="text-3xl mb-2 block">🏦</span>
                        <div className="text-sm font-medium">Bank</div>
                      </button>
                      <button className="p-4 border-2 border-blue-200 rounded-2xl text-center hover:bg-blue-50 transition-all hover:scale-105">
                        <span className="text-3xl mb-2 block">📱</span>
                        <div className="text-sm font-medium">USSD</div>
                      </button>
                      <button className="p-4 border-2 border-blue-200 rounded-2xl text-center hover:bg-blue-50 transition-all hover:scale-105">
                        <span className="text-3xl mb-2 block">👛</span>
                        <div className="text-sm font-medium">Wallet</div>
                      </button>
                    </div>

                    <button
                      onClick={simulateRemitaPayment}
                      className="w-full bg-gradient-to-r from-green-400 to-teal-400 text-white py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center"
                    >
                      {paymentStatus === 'processing' ? (
                        <>
                          <span className="animate-spin text-2xl mr-3">⏳</span>
                          Processing...
                        </>
                      ) : (
                        <>
                          <span className="text-2xl mr-2">🔒</span>
                          Pay ₦{amounts.total.toLocaleString()} Securely
                        </>
                      )}
                    </button>

                    <div className="text-center text-sm text-gray-500">
                      <span className="text-xl mr-1">👍</span>
                      Your payment information is safe with us
                    </div>
                  </div>
                )}

                {paymentStatus === 'success' && (
                  <div className="text-center py-8">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto animate-bounce-slow">
                        <span className="text-5xl">🎉</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for investing in your child's health! 🌟
                    </p>
                    <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-green-200">
                      <div className="text-sm text-gray-500 mb-2">Remita Reference:</div>
                      <div className="text-lg font-mono font-bold bg-blue-50 p-3 rounded-xl">
                        {remitaData.rrr}
                      </div>
                    </div>
                    <button
                      onClick={sendReceipts}
                      className="w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all hover:scale-105"
                    >
                      <span className="text-2xl mr-2">📬</span>
                      Send Receipts
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {paymentStep === 3 && (
            <div className="space-y-8">
              <div className="text-center py-8">
                <div className="relative mb-6">
                  <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-5xl">🧾</span>
                  </div>
                  <span className="absolute -top-2 -right-2 text-4xl animate-spin-slow">✨</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Receipts Sent! 🎉</h3>
                <p className="text-gray-600 mb-6">
                  Your receipts are on their way to your selected devices
                </p>

                {/* Receipt Preview - Kid Friendly */}
                <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-6 mb-8 text-left border-4 border-blue-200">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">🏥</span>
                      <div>
                        <h4 className="font-bold text-lg">Kidscare Global Receipt</h4>
                        <p className="text-gray-600 text-sm">Transaction: {transactionId}</p>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold flex items-center">
                      <span className="text-lg mr-1">✅</span>
                      PAID
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {selectedServices.map(id => {
                      const service = kidsServices.find(s => s.id === id)
                      return (
                        <div key={id} className="flex justify-between items-center bg-white p-2 rounded-xl">
                          <span className="flex items-center">
                            <span className="text-2xl mr-2">{service?.emoji}</span>
                            <span className="text-gray-700">{service?.name}</span>
                          </span>
                          <span className="font-bold">₦{service?.price.toLocaleString()}</span>
                        </div>
                      )
                    })}
                    
                    <div className="border-t-2 border-blue-200 pt-3 mt-3">
                      <div className="flex justify-between font-bold text-xl">
                        <span>Total Paid:</span>
                        <span className="text-green-600">₦{amounts.total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Receipt Delivery Status */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {receiptMethod.map(method => (
                    <div key={method} className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 text-center">
                      <span className="text-3xl mb-2 block">
                        {method === 'email' && '📧'}
                        {method === 'sms' && '📱'}
                        {method === 'whatsapp' && '💬'}
                        {method === 'popup' && '🖥️'}
                      </span>
                      <div className="text-sm font-medium capitalize">{method}</div>
                      <div className="text-xs text-green-600">✓ Sent</div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={downloadReceipt}
                    className="flex-1 border-2 border-blue-400 text-blue-600 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all hover:scale-105 flex items-center justify-center"
                  >
                    <span className="text-2xl mr-2">📥</span>
                    Download
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 bg-gradient-to-r from-blue-400 to-green-400 text-white py-4 rounded-2xl font-bold hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center"
                  >
                    <span className="text-2xl mr-2">✓</span>
                    Done
                  </button>
                </div>

                {/* Fun Thank You Message */}
                <div className="mt-6 text-purple-600 font-medium">
                  🧸 Thank you for trusting us with your child's health! 🌟
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}