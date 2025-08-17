import React, { useState } from 'react';
import { 
  Users, 
  Vote, 
  DollarSign, 
  Trophy, 
  Eye, 
  Edit, 
  Trash2, 
  Plus, 
  Filter,
  Search,
  Download,
  BarChart3,
  Settings,
  Bell,
  Shield
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const stats = [
    { title: 'Total Contestants', value: '2,847', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { title: 'Total Votes', value: '892,456', change: '+8%', icon: Vote, color: 'bg-green-500' },
    { title: 'Revenue', value: 'R487,920', change: '+15%', icon: DollarSign, color: 'bg-purple-500' },
    { title: 'Active Competitions', value: '10', change: '0%', icon: Trophy, color: 'bg-orange-500' }
  ];

  const recentContestants = [
    { id: 1, name: 'Emma Johnson', category: 'Girls 4-6', votes: 1420, status: 'Active', registered: '2 hours ago' },
    { id: 2, name: 'Liam Smith', category: 'Boys 7-10', votes: 892, status: 'Pending', registered: '4 hours ago' },
    { id: 3, name: 'Sophia Williams', category: 'Girls 11-13', votes: 2150, status: 'Active', registered: '6 hours ago' },
    { id: 4, name: 'Noah Davis', category: 'Boys 4-6', votes: 756, status: 'Active', registered: '8 hours ago' },
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'contestants', name: 'Contestants', icon: Users },
    { id: 'votes', name: 'Vote Management', icon: Vote },
    { id: 'payments', name: 'Payments', icon: DollarSign },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
                  alt="Admin"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">Admin User</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 mr-2" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-green-600">{stat.change} from last month</p>
                      </div>
                      <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Contestants */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Recent Registrations</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentContestants.map((contestant) => (
                      <div key={contestant.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                        <div>
                          <p className="font-medium text-gray-900">{contestant.name}</p>
                          <p className="text-sm text-gray-500">{contestant.category} • {contestant.votes} votes</p>
                          <p className="text-xs text-gray-400">{contestant.registered}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            contestant.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {contestant.status}
                          </span>
                          <div className="flex space-x-1">
                            <button className="p-1 text-gray-400 hover:text-blue-600">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-green-600">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
                </div>
                <div className="p-6 space-y-4">
                  <button className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white gradient-primary hover:shadow-lg transition-all">
                    <Plus className="w-5 h-5 mr-2" />
                    Add New Contestant
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <Download className="w-5 h-5 mr-2" />
                    Export Report
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <Shield className="w-5 h-5 mr-2" />
                    Security Audit
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <Bell className="w-5 h-5 mr-2" />
                    Send Notifications
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contestants Management Tab */}
        {activeTab === 'contestants' && (
          <div className="space-y-6">
            {/* Filters and Search */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search contestants..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="all">All Categories</option>
                    <option value="girls-0-3">Girls 0-3</option>
                    <option value="girls-4-6">Girls 4-6</option>
                    <option value="boys-0-3">Boys 0-3</option>
                    <option value="boys-4-6">Boys 4-6</option>
                  </select>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </button>
                  <button className="flex items-center px-4 py-2 gradient-primary text-white rounded-md text-sm font-medium hover:shadow-lg">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Contestant
                  </button>
                </div>
              </div>
            </div>

            {/* Contestants Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contestant
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Votes
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Registered
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentContestants.map((contestant) => (
                      <tr key={contestant.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img 
                              className="w-10 h-10 rounded-full" 
                              src={`https://images.pexels.com/photos/${1000000 + contestant.id}/pexels-photo-${1000000 + contestant.id}.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1`}
                              alt={contestant.name}
                            />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{contestant.name}</div>
                              <div className="text-sm text-gray-500">ID: #{contestant.id.toString().padStart(4, '0')}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {contestant.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {contestant.votes.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            contestant.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {contestant.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {contestant.registered}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-900">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs would be implemented similarly... */}
        {activeTab !== 'overview' && activeTab !== 'contestants' && (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {tabs.find(tab => tab.id === activeTab)?.name} Management
            </h3>
            <p className="text-gray-600">
              This section would contain the full {activeTab} management interface with detailed functionality.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;