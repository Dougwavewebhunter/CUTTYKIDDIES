import React, { useState } from 'react';
import { Smartphone, Mail, Facebook, Instagram, MessageCircle, CreditCard, Banknote, Shield } from 'lucide-react';

const VotingMethods: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState('sms');

  const votingMethods = [
    {
      id: 'sms',
      title: 'SMS Voting',
      icon: Smartphone,
      description: 'Quick and easy voting via SMS',
      instructions: [
        'Send SMS to 12345',
        'Type: VOTE [Contestant Number]',
        'Example: VOTE 1234',
        'R1.50 per SMS'
      ],
      color: 'bg-green-500'
    },
    {
      id: 'email',
      title: 'Email Voting',
      icon: Mail,
      description: 'Vote directly through email',
      instructions: [
        'Send email to vote@cuttykiddies.co.za',
        'Subject: VOTE [Contestant Number]',
        'One vote per email per day',
        'Free voting method'
      ],
      color: 'bg-blue-500'
    },
    {
      id: 'social',
      title: 'Social Media',
      icon: Facebook,
      description: 'Share and vote on social platforms',
      instructions: [
        'Share contestant profile on Facebook',
        'Tag friends in Instagram posts',
        'Use hashtag #CuttyKiddies',
        'Each share counts as a vote'
      ],
      color: 'bg-purple-500'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      icon: MessageCircle,
      description: 'Vote via WhatsApp message',
      instructions: [
        'Send WhatsApp to 078 123 4567',
        'Type: VOTE [Contestant Number]',
        'Share voting link with contacts',
        'R1.00 per vote'
      ],
      color: 'bg-green-600'
    }
  ];

  const paymentMethods = [
    {
      title: 'Credit/Debit Cards',
      icon: CreditCard,
      description: 'Visa, Mastercard, American Express',
      features: ['Instant processing', 'Secure SSL encryption', '3D Secure authentication']
    },
    {
      title: 'PayPal',
      icon: CreditCard,
      description: 'Safe and secure PayPal payments',
      features: ['Buyer protection', 'No card details shared', 'Instant confirmation']
    },
    {
      title: 'EFT Transfer',
      icon: Banknote,
      description: 'Direct bank transfers',
      features: ['All major SA banks', 'Reference number provided', '24-48 hour processing']
    }
  ];

  const selectedMethodData = votingMethods.find(method => method.id === selectedMethod);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Secure Voting & Payments
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Multiple Ways to
            <span className="gradient-accent bg-clip-text text-transparent"> Vote & Pay</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from various secure voting methods and payment options to support your favorite contestants.
          </p>
        </div>

        {/* Voting Methods */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Voting Methods</h3>
          
          {/* Method Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {votingMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedMethod === method.id
                      ? `${method.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {method.title}
                </button>
              );
            })}
          </div>

          {/* Selected Method Details */}
          {selectedMethodData && (
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`w-16 h-16 ${selectedMethodData.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <selectedMethodData.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-4">{selectedMethodData.title}</h4>
                  <p className="text-lg text-gray-600 mb-8">{selectedMethodData.description}</p>
                  
                  <div className="space-y-4">
                    <h5 className="text-xl font-bold text-gray-900">How to vote:</h5>
                    {selectedMethodData.instructions.map((instruction, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm mr-4">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{instruction}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mock Interface */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-center mb-6">
                    <h5 className="text-xl font-bold text-gray-900 mb-2">Vote for Emma Johnson</h5>
                    <p className="text-gray-600">Contestant #1234 • Girls 4-6 years</p>
                  </div>
                  
                  {selectedMethod === 'sms' && (
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <p className="font-mono text-lg">SMS to: <strong>12345</strong></p>
                        <p className="font-mono text-lg">Message: <strong>VOTE 1234</strong></p>
                      </div>
                      <button className="w-full gradient-secondary text-white py-3 rounded-full font-semibold">
                        Send SMS Vote
                      </button>
                    </div>
                  )}
                  
                  {selectedMethod === 'email' && (
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p><strong>To:</strong> vote@cuttykiddies.co.za</p>
                        <p><strong>Subject:</strong> VOTE 1234</p>
                      </div>
                      <button className="w-full gradient-secondary text-white py-3 rounded-full font-semibold">
                        Send Email Vote
                      </button>
                    </div>
                  )}
                  
                  {(selectedMethod === 'social' || selectedMethod === 'whatsapp') && (
                    <div className="space-y-4">
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-blue-600 text-white py-3 rounded-full font-semibold flex items-center justify-center">
                          <Facebook className="w-5 h-5 mr-2" />
                          Share
                        </button>
                        <button className="flex-1 bg-purple-600 text-white py-3 rounded-full font-semibold flex items-center justify-center">
                          <Instagram className="w-5 h-5 mr-2" />
                          Share
                        </button>
                      </div>
                      {selectedMethod === 'whatsapp' && (
                        <button className="w-full bg-green-600 text-white py-3 rounded-full font-semibold flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Vote via WhatsApp
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Secure Payment Options</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-transparent hover:border-blue-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h4>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {method.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Shield className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center">
          <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Secure & Safe</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            All payments are processed through secure, PCI DSS compliant gateways. Your personal and financial 
            information is protected with bank-level encryption and security measures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VotingMethods;