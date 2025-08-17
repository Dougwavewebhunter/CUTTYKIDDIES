import React, { useState, useEffect } from 'react';
import { Trophy, Crown, Medal, Star, TrendingUp, Users, Vote } from 'lucide-react';

interface Contestant {
  id: string;
  name: string;
  age: number;
  votes: number;
  rank: number;
  trend: 'up' | 'down' | 'same';
  photo: string;
  city: string;
}

const Leaderboards: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('girls-4-6');
  const [isLive, setIsLive] = useState(true);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLive(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { id: 'girls-0-3', name: 'Tiny Tots Girls', ageRange: '0-3', gender: 'girls' },
    { id: 'girls-4-6', name: 'Little Angels Girls', ageRange: '4-6', gender: 'girls' },
    { id: 'girls-7-10', name: 'Young Stars Girls', ageRange: '7-10', gender: 'girls' },
    { id: 'boys-0-3', name: 'Tiny Champions Boys', ageRange: '0-3', gender: 'boys' },
    { id: 'boys-4-6', name: 'Little Heroes Boys', ageRange: '4-6', gender: 'boys' },
    { id: 'boys-7-10', name: 'Young Lions Boys', ageRange: '7-10', gender: 'boys' },
  ];

  const contestants: Record<string, Contestant[]> = {
    'girls-4-6': [
      { id: '1', name: 'Emma Johnson', age: 5, votes: 15420, rank: 1, trend: 'up', photo: 'https://images.pexels.com/photos/1619669/pexels-photo-1619669.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1', city: 'Cape Town' },
      { id: '2', name: 'Sophia Williams', age: 6, votes: 14280, rank: 2, trend: 'same', photo: 'https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1', city: 'Johannesburg' },
      { id: '3', name: 'Isabella Brown', age: 4, votes: 13950, rank: 3, trend: 'up', photo: 'https://images.pexels.com/photos/1545558/pexels-photo-1545558.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1', city: 'Durban' },
      { id: '4', name: 'Olivia Davis', age: 5, votes: 12840, rank: 4, trend: 'down', photo: 'https://images.pexels.com/photos/1319839/pexels-photo-1319839.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1', city: 'Pretoria' },
      { id: '5', name: 'Ava Martinez', age: 6, votes: 11750, rank: 5, trend: 'up', photo: 'https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1', city: 'Port Elizabeth' },
    ],
  };

  const currentContestants = contestants[selectedCategory] || contestants['girls-4-6'];
  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-500 transform rotate-180" />;
      default:
        return <div className="w-4 h-4" />;
    }
  };

  return (
    <section id="leaderboards" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            <Trophy className="w-4 h-4 mr-2" />
            Live Rankings
            {isLive && <div className="w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse" />}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Live
            <span className="gradient-secondary bg-clip-text text-transparent"> Leaderboards</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See who's leading in real-time! Rankings update live as votes come in.
          </p>
        </div>

        {/* Category Selector */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? category.gender === 'girls'
                      ? 'gradient-primary text-white shadow-lg'
                      : 'gradient-secondary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:text-purple-600 shadow-md hover:shadow-lg'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Current Category Info */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {selectedCategoryData?.name}
          </h3>
          <p className="text-gray-600">
            Age Range: {selectedCategoryData?.ageRange} years • Prize: R12,000
          </p>
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center">
                <Trophy className="w-6 h-6 mr-2" />
                <span className="font-bold">Current Standings</span>
              </div>
              <div className="flex items-center text-sm">
                <Vote className="w-4 h-4 mr-1" />
                Updated live
              </div>
            </div>
          </div>

          {/* Leaderboard List */}
          <div className="divide-y divide-gray-100">
            {currentContestants.map((contestant, index) => (
              <div
                key={contestant.id}
                className={`p-6 hover:bg-gray-50 transition-all duration-300 ${
                  contestant.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Rank */}
                    <div className="flex items-center justify-center w-12 h-12">
                      {getRankIcon(contestant.rank)}
                    </div>

                    {/* Photo */}
                    <img
                      src={contestant.photo}
                      alt={contestant.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />

                    {/* Info */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{contestant.name}</h4>
                      <p className="text-gray-600">Age {contestant.age} • {contestant.city}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    {/* Trend */}
                    <div className="flex items-center">
                      {getTrendIcon(contestant.trend)}
                    </div>

                    {/* Votes */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600">
                        {contestant.votes.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">votes</div>
                    </div>

                    {/* Vote Button */}
                    <button className="gradient-primary text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      Vote Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">380</div>
            <div className="text-gray-600">Total Contestants</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Vote className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">28,900</div>
            <div className="text-gray-600">Total Votes</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Star className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">R12,000</div>
            <div className="text-gray-600">Prize Money</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Is your child the next winner?
            </h3>
            <p className="text-gray-600 mb-6">
              Register now and join the competition!
            </p>
            <button className="gradient-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Register Your Child
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboards;