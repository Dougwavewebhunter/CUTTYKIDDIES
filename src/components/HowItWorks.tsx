import React from 'react';
import { UserPlus, Camera, Vote, Trophy, Smartphone, Mail, Share2, Shield } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: 1,
      icon: UserPlus,
      title: 'Register Your Child',
      description: 'Create a secure account and register your child in their age and gender category.',
      color: 'bg-purple-500'
    },
    {
      step: 2,
      icon: Camera,
      title: 'Upload Photos',
      description: 'Upload beautiful photos of your child following our safe content guidelines.',
      color: 'bg-pink-500'
    },
    {
      step: 3,
      icon: Share2,
      title: 'Share & Promote',
      description: 'Share your child\'s profile on social media to get votes from family and friends.',
      color: 'bg-blue-500'
    },
    {
      step: 4,
      icon: Trophy,
      title: 'Win Amazing Prizes',
      description: 'Top contestants in each category win cash prizes and exciting rewards!',
      color: 'bg-green-500'
    }
  ];

  const votingMethods = [
    {
      icon: Smartphone,
      title: 'SMS Voting',
      description: 'Quick and easy voting via SMS',
      details: 'Send SMS to 12345 with contestant number'
    },
    {
      icon: Mail,
      title: 'Email Voting',
      description: 'Vote directly through email',
      details: 'One vote per email address per day'
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Share and vote on Facebook, Instagram',
      details: 'Integrated social media voting system'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Simple & Secure Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Cutty Kiddies
            <span className="gradient-secondary bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started is easy! Follow these simple steps to give your child a chance to shine.
          </p>
        </div>

        {/* Main Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.step}
                className="relative text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-pink-200 transform -translate-y-1/2 z-0" />
                )}
                
                {/* Step Card */}
                <div className="relative z-10 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 border-2 border-transparent hover:border-purple-200">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-white border-4 border-purple-200 rounded-full flex items-center justify-center text-sm font-bold text-purple-600">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Voting Methods Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to <span className="gradient-primary bg-clip-text text-transparent">Vote</span>
            </h3>
            <p className="text-lg text-gray-600">
              We make it easy for everyone to support their favorite contestants
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {votingMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 text-center"
                >
                  <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h4>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <p className="text-sm text-blue-600 font-medium">{method.details}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Safety & Security Section */}
        <div className="mt-20">
          <div className="bg-green-50 rounded-3xl p-8 lg:p-12 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Your Child's Safety is Our Priority
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">GDPR</div>
                <div className="text-gray-700">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">SSL</div>
                <div className="text-gray-700">Encrypted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-700">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Safe</div>
                <div className="text-gray-700">Content Only</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;