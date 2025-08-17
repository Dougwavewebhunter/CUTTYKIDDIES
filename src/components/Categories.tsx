import React, { useState } from 'react';
import { Users, Crown, Star, Trophy, Heart } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  ageRange: string;
  gender: 'girls' | 'boys';
  participants: number;
  totalVotes: number;
  prizeAmount: string;
}

const Categories: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<'girls' | 'boys'>('girls');

  const categories: Category[] = [
    { id: '1', name: 'Tiny Tots', ageRange: '0-3', gender: 'girls', participants: 245, totalVotes: 12500, prizeAmount: 'R5,000' },
    { id: '2', name: 'Little Angels', ageRange: '4-6', gender: 'girls', participants: 380, totalVotes: 28900, prizeAmount: 'R8,000' },
    { id: '3', name: 'Young Stars', ageRange: '7-10', gender: 'girls', participants: 520, totalVotes: 45200, prizeAmount: 'R12,000' },
    { id: '4', name: 'Rising Queens', ageRange: '11-13', gender: 'girls', participants: 420, totalVotes: 38700, prizeAmount: 'R15,000' },
    { id: '5', name: 'Teen Royalty', ageRange: '14-18', gender: 'girls', participants: 310, totalVotes: 31200, prizeAmount: 'R20,000' },
    { id: '6', name: 'Tiny Champions', ageRange: '0-3', gender: 'boys', participants: 230, totalVotes: 11800, prizeAmount: 'R5,000' },
    { id: '7', name: 'Little Heroes', ageRange: '4-6', gender: 'boys', participants: 360, totalVotes: 27400, prizeAmount: 'R8,000' },
    { id: '8', name: 'Young Lions', ageRange: '7-10', gender: 'boys', participants: 490, totalVotes: 42100, prizeAmount: 'R12,000' },
    { id: '9', name: 'Rising Kings', ageRange: '11-13', gender: 'boys', participants: 390, totalVotes: 35600, prizeAmount: 'R15,000' },
    { id: '10', name: 'Teen Legends', ageRange: '14-18', gender: 'boys', participants: 280, totalVotes: 28900, prizeAmount: 'R20,000' },
  ];

  const filteredCategories = categories.filter(cat => cat.gender === selectedGender);

  return (
    <section id="categories" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
            <Trophy className="w-4 h-4 mr-2" />
            Competition Categories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Find Your Child's
            <span className="gradient-primary bg-clip-text text-transparent"> Perfect Category</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fair competition with age and gender-based categories. Every child gets their moment to shine!
          </p>
        </div>

        {/* Gender Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setSelectedGender('girls')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedGender === 'girls'
                  ? 'gradient-primary text-white shadow-lg'
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              <Heart className="w-5 h-5 inline mr-2" />
              Girls Categories
            </button>
            <button
              onClick={() => setSelectedGender('boys')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedGender === 'boys'
                  ? 'gradient-secondary text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Crown className="w-5 h-5 inline mr-2" />
              Boys Categories
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredCategories.map((category, index) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 border-2 border-transparent hover:border-purple-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  selectedGender === 'girls' ? 'gradient-primary' : 'gradient-secondary'
                }`}>
                  <Star className="w-8 h-8 text-white" />
                </div>

                {/* Category Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">{category.ageRange} years</div>
                
                {/* Stats */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    {category.participants} participants
                  </div>
                  <div className="text-sm text-gray-600">
                    {category.totalVotes.toLocaleString()} total votes
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    Prize: {category.prizeAmount}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button className={`w-full py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg ${
                    selectedGender === 'girls' ? 'gradient-primary' : 'gradient-secondary'
                  }`}>
                    Register Now
                  </button>
                  <button className="w-full py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors">
                    View Leaderboard
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Register your child today and start their journey to stardom!
            </p>
            <button className="gradient-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Register Your Child Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;