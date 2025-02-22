import React from 'react';
import {
  Sparkles,
  Clock,
  ShoppingBag,
  RefreshCw,
  Heart,
  CheckCircle,
  ArrowRight,
  Instagram,
  Twitter,
  Facebook
} from 'lucide-react';

function App() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left md:pr-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Personalized Fashion Shopping Tailored to <span className="text-purple-600">YOU</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover styles that match your personality, preferences, and values—effortlessly. 
              Say goodbye to endless scrolling!
            </p>
            <button 
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold 
                hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 mx-auto md:mx-0"
            >
              Join the Early Access List
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 mt-12 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80" 
              alt="Fashion Shopping Experience"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white" id="problem">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Is Shopping So Frustrating?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, text: "Wasting hours scrolling through endless options" },
              { icon: ShoppingBag, text: "Buying clothes that don't suit your style" },
              { icon: RefreshCw, text: "Returning items that don't fit right" },
              { icon: Heart, text: "Missing out on sustainable options" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50">
                <item.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Spuntra: Your AI Fashion Stylist
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spuntra combines AI-powered personalization with psychographic insights to recommend 
              fashion that resonates with your unique personality and preferences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Driven Recommendations",
                description: "Get personalized suggestions based on your style, values, and mood"
              },
              {
                title: "Virtual Try-On",
                description: "Experience 3D outfits before making a purchase"
              },
              {
                title: "Discover New Brands",
                description: "Connect with emerging designers and sustainable fashion"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <Sparkles className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why You'll Love Spuntra
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Save hours with effortless AI-driven suggestions",
              "Feel confident knowing your clothes match your personality",
              "Support small creators and sustainable brands",
              "Shop smarter, with fewer returns and more joy"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-20 bg-purple-600" id="signup">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Be the First to Experience Spuntra
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Sign up today for exclusive early access and updates. 
              Be part of the future of fashion!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg"
                required
              />
              <select className="w-full px-4 py-3 rounded-lg">
                <option value="">Select Your Style Preference</option>
                <option value="casual">Casual</option>
                <option value="professional">Professional</option>
                <option value="trendy">Trendy</option>
                <option value="minimalist">Minimalist</option>
              </select>
              <button
                type="submit"
                className="w-full bg-white text-purple-600 px-8 py-4 rounded-lg text-lg 
                  font-semibold hover:bg-purple-50 transition-colors"
              >
                Join the Waitlist
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Spuntra</h3>
              <p className="text-gray-400">The future of personalized fashion shopping</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
            <p className="text-gray-400">© 2024 Spuntra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;