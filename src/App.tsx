import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import HowItWorks from './components/HowItWorks';
import Leaderboards from './components/Leaderboards';
import VotingMethods from './components/VotingMethods';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  // Admin access (in production, this would be properly authenticated)
  const toggleAdmin = () => {
    if (!showAdmin) {
      const password = prompt('Enter admin password:');
      if (password === 'admin123') {
        setShowAdmin(true);
      } else {
        alert('Incorrect password');
      }
    } else {
      setShowAdmin(false);
    }
  };

  // Admin view
  if (showAdmin) {
    return (
      <>
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleAdmin}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium"
          >
            Exit Admin
          </button>
        </div>
        <AdminDashboard />
      </>
    );
  }

  // Public website view
  return (
    <div className="min-h-screen">
      {/* Hidden admin access button */}
      <button
        onClick={toggleAdmin}
        className="fixed bottom-4 left-4 w-4 h-4 bg-transparent border-none cursor-pointer opacity-0 hover:opacity-100 z-50"
        title="Admin Access"
      />
      
      <Header />
      <Hero />
      <Categories />
      <HowItWorks />
      <Leaderboards />
      <VotingMethods />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;