import React from 'react';
import { Star, Shield, Zap, Heart, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 opacity-20">
        <Star className="w-8 h-8 text-white float-animation" />
      </div>
      <div className="absolute top-40 right-20 opacity-20">
        <Heart className="w-12 h-12 text-white float-animation" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <Award className="w-10 h-10 text-white float-animation" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                <Shield className="w-4 h-4 mr-2" />
                Safe & Secure Platform
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Where Every
              <span className="block gradient-accent bg-clip-text text-transparent">
                Kid Shines!
              </span>
            </h1>
            
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Join South Africa's premier children's voting platform. Safe, fun, and fair 
              competitions where kids can showcase their talents and win amazing prizes!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Register Your Child
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-700 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-white/80 text-sm">Happy Kids</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1M+</div>
                <div className="text-white/80 text-sm">Total Votes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">R100K+</div>
                <div className="text-white/80 text-sm">Prizes Won</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-white bounce-in" style={{ animationDelay: '0.2s' }}>
              <Users className="w-8 h-8 mb-4 text-yellow-300" />
              <h3 className="font-bold mb-2">Age Categories</h3>
              <p className="text-sm text-white/80">Fair competition across different age groups</p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-white bounce-in" style={{ animationDelay: '0.4s' }}>
              <Zap className="w-8 h-8 mb-4 text-blue-300" />
              <h3 className="font-bold mb-2">Real-time Voting</h3>
              <p className="text-sm text-white/80">SMS, email, and social media voting</p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-white bounce-in" style={{ animationDelay: '0.6s' }}>
              <Shield className="w-8 h-8 mb-4 text-green-300" />
              <h3 className="font-bold mb-2">Child Safe</h3>
              <p className="text-sm text-white/80">GDPR compliant with parental controls</p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-white bounce-in" style={{ animationDelay: '0.8s' }}>
              <Award className="w-8 h-8 mb-4 text-pink-300" />
              <h3 className="font-bold mb-2">Amazing Prizes</h3>
              <p className="text-sm text-white/80">Cash prizes and exciting rewards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;