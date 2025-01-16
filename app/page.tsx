import Image from "next/image";
import LogoSlider from './components/LogoSlider';
import { images } from './config/images';
import PeekingCardSlider from './components/PeekingCardSlider';
import TypewriterText from './components/TypewriterText';
import ScrollPills from './components/ScrollPills';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center px-4 py-20 sm:py-32 bg-offwhite overflow-hidden">
        <div className="max-w-6xl mx-auto text-center w-full">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            {/* Emoji Badge */}
            <div className="bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm inline-flex items-center gap-1.5 sm:gap-2">
              <span className="text-lg sm:text-xl">👋</span>
              <span className="text-secondary text-sm sm:text-base">Say goodbye to old marketing</span>
            </div>

            <h1 className="flex flex-col gap-1 sm:gap-2">
              <span className="text-[1.75rem] xs:text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.1] font-times">
                Transform your brand with
              </span>
              <span className="text-[1.75rem] xs:text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.1] font-times">
                <TypewriterText 
                  words={[
                    "modern solutions",
                    "creative designs",
                    "powerful growth",
                    "digital success"
                  ]} 
                  className="text-primary italic"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delayBetweenWords={2000}
                />
              </span>
            </h1>

            <p className="text-accent text-sm xs:text-base sm:text-lg md:text-xl max-w-[280px] xs:max-w-xl sm:max-w-2xl mx-auto">
              We help businesses grow through innovative AI solutions, stunning designs, 
              and cutting-edge web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-[280px] xs:max-w-none sm:w-auto mt-6 sm:mt-8">
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full 
                         font-medium transition-all duration-300 text-center whitespace-nowrap
                         hover:bg-primary/90 hover:scale-105 hover:shadow-lg
                         active:scale-95"
              >
                Request a demo
          </a>
          <a
                href="#services"
                className="bg-white px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-gray-200
                         hover:border-primary/20 transition-all duration-300 text-center whitespace-nowrap
                         text-secondary hover:text-primary"
              >
                View our work
              </a>
            </div>

            {/* Hide PeekingCardSlider on mobile, show on tablet and up */}
            <div className="hidden sm:block w-full">
              <PeekingCardSlider />
            </div>

            {/* Featured Brands */}
            <div className="mt-12 sm:mt-20 w-full overflow-hidden">
              <p className="text-accent uppercase text-xs sm:text-sm tracking-wider mb-6 sm:mb-8">
                Trusted by leading companies
              </p>
              <LogoSlider />
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(#5C45FD15_1px,transparent_1px)] [background-size:16px_16px] sm:[background-size:20px_20px]" />
        </div>
      </section>

      {/* We Help You With Section */}
      <ScrollPills />

      {/* Services Section */}
      <section className="px-4 py-12 sm:py-16 md:py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="services">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            {/* Badge */}
            <div className="bg-primary/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm inline-flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              <span className="text-lg sm:text-xl">⚡</span>
              <span className="text-primary font-medium text-sm sm:text-base">What we offer</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-times mb-4 sm:mb-6">
              Our <span className="italic">Services</span>
            </h2>
            <p className="text-accent text-sm sm:text-base md:text-lg lg:text-xl max-w-[280px] xs:max-w-xl sm:max-w-2xl mx-auto">
              Transforming businesses through innovative solutions and creative excellence
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {/* Service Card - AI Avatars */}
            <div className="group bg-white p-6 sm:p-8 rounded-3xl transition-all duration-500 hover:shadow-xl">
              <div className="mb-6 sm:mb-8">
                <div className="h-12 w-12 sm:h-16 sm:w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6
                              group-hover:scale-110 transition-transform duration-500">
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-times mb-3 sm:mb-4">AI Avatars</h3>
                <p className="text-accent text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  Create stunning, personalized AI-generated avatars that capture your brand's essence
                  and connect with your audience on a deeper level.
                </p>
              </div>
              
              {/* Features List */}
              <ul className="space-y-2 sm:space-y-3">
                {['Custom AI Models', 'Brand Integration', 'Multiple Styles'].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Package Design */}
            <div className="group bg-white p-6 sm:p-8 rounded-3xl transition-all duration-500 hover:shadow-xl">
              <div className="mb-6 sm:mb-8">
                <div className="h-12 w-12 sm:h-16 sm:w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6
                              group-hover:scale-110 transition-transform duration-500">
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-times mb-3 sm:mb-4">Package Design</h3>
                <p className="text-accent text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  Stand out on shelves with eye-catching designs that communicate your brand's 
                  value and capture customer attention.
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-2 sm:space-y-3">
                {['3D Mockups', 'Print Ready', 'Sustainable Options'].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#" 
                className="inline-flex items-center text-primary hover:text-primary/80 
                         transition-colors group mt-8"
              >
                Learn More
                <svg 
                  className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Web Development */}
            <div className="group bg-white p-6 sm:p-8 rounded-3xl transition-all duration-500 hover:shadow-xl">
              <div className="mb-6 sm:mb-8">
                <div className="h-12 w-12 sm:h-16 sm:w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6
                              group-hover:scale-110 transition-transform duration-500">
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-times mb-3 sm:mb-4">Web Development</h3>
                <p className="text-accent text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  Build powerful, responsive websites that deliver exceptional user experiences
                  and drive business growth.
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-2 sm:space-y-3">
                {['Modern Stack', 'SEO Optimized', 'Mobile First'].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#" 
                className="inline-flex items-center text-primary hover:text-primary/80 
                         transition-colors group mt-8"
              >
                Learn More
                <svg 
                  className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="px-4 py-12 sm:py-16 md:py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            {/* Badge */}
            <div className="bg-primary/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm inline-flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              <span className="text-lg sm:text-xl">🚀</span>
              <span className="text-primary font-medium text-sm sm:text-base">Coming Soon</span>
            </div>
          </div>

          {/* Platform Card */}
          <div className="relative group">
            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl z-10" />
            
            {/* Coming Soon Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg sm:text-xl font-medium 
                            shadow-lg transform transition-transform duration-500 whitespace-nowrap
                            group-hover:scale-110">
                Coming Soon
              </div>
            </div>

            {/* Card Content */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-times mb-4 sm:mb-6">
                  Smart <span className="italic">Management Platforms</span>
                </h2>
                <p className="text-accent text-sm sm:text-base md:text-lg max-w-[280px] xs:max-w-xl sm:max-w-2xl mx-auto">
                  Revolutionizing business operations with industry-specific solutions
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl sm:text-4xl">🍽️</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-times mb-2">Restaurant Suite</h3>
                  <p className="text-accent text-sm sm:text-base">Complete restaurant management system</p>
                </div>

                <div className="text-center">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl sm:text-4xl">💎</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-times mb-2">Jewelry Manager</h3>
                  <p className="text-accent text-sm sm:text-base">Specialized jewelry showroom platform</p>
                </div>

                <div className="text-center">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl sm:text-4xl">🏪</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-times mb-2">Retail OS</h3>
                  <p className="text-accent text-sm sm:text-base">All-in-one retail management solution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24">
            {/* Badge */}
            <div className="bg-primary/5 px-4 py-2 rounded-full shadow-sm inline-flex items-center gap-2 mb-6">
              <span className="text-xl">🏆</span>
              <span className="text-primary font-medium">Why clients choose us</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-times mb-6">
              The <span className="italic">Difference</span> We Bring
            </h2>
            <p className="text-accent text-lg sm:text-xl max-w-2xl mx-auto">
              We combine innovation with expertise to deliver exceptional results
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {/* Feature 1: Innovation */}
            <div className="group bg-white p-8 rounded-3xl transition-all duration-500 hover:shadow-xl">
              <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6
                            group-hover:scale-110 transition-transform duration-500">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-times mb-4">Innovation First</h3>
              <p className="text-accent">
                We stay ahead of the curve, implementing cutting-edge technologies and creative solutions 
                that give your business a competitive edge.
              </p>
            </div>

            {/* Feature 2: Expertise */}
            <div className="group bg-white p-8 rounded-3xl transition-all duration-500 hover:shadow-xl">
              <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6
                            group-hover:scale-110 transition-transform duration-500">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-times mb-4">Deep Expertise</h3>
              <p className="text-accent">
                Our team brings years of specialized experience across AI, design, and development, 
                ensuring top-tier execution for every project.
              </p>
            </div>

            {/* Feature 3: Results */}
            <div className="group bg-white p-8 rounded-3xl transition-all duration-500 hover:shadow-xl">
              <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6
                            group-hover:scale-110 transition-transform duration-500">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-times mb-4">Proven Results</h3>
              <p className="text-accent">
                We measure our success by your growth, consistently delivering solutions that drive 
                real business impact and ROI.
              </p>
            </div>

            {/* Feature 4: Support */}
            <div className="group bg-white p-8 rounded-3xl transition-all duration-500 hover:shadow-xl">
              <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6
                            group-hover:scale-110 transition-transform duration-500">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-times mb-4">24/7 Support</h3>
              <p className="text-accent">
                Our dedicated support team is always available to help, ensuring your business 
                operations run smoothly around the clock.
              </p>
            </div>

            {/* Feature 5: Customization */}
            <div className="group bg-white p-8 rounded-3xl transition-all duration-500 hover:shadow-xl">
              <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6
                            group-hover:scale-110 transition-transform duration-500">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-times mb-4">Tailored Solutions</h3>
              <p className="text-accent">
                We create custom solutions that perfectly align with your unique business needs 
                and objectives.
              </p>
            </div>

            {/* Feature 6: Security */}
            <div className="group bg-white p-8 rounded-3xl transition-all duration-500 hover:shadow-xl">
              <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6
                            group-hover:scale-110 transition-transform duration-500">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-times mb-4">Enterprise Security</h3>
              <p className="text-accent">
                Your data security is our priority, with enterprise-grade protection and 
                compliance measures built into every solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24">
            {/* Badge */}
            <div className="bg-primary/5 px-4 py-2 rounded-full shadow-sm inline-flex items-center gap-2 mb-6">
              <span className="text-xl">💫</span>
              <span className="text-primary font-medium">Success stories</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-times mb-6">
              What Our <span className="italic">Clients Say</span>
            </h2>
            <p className="text-accent text-lg sm:text-xl max-w-2xl mx-auto">
              Real stories from businesses we've helped transform and grow
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Testimonial 1 */}
            <div className="group bg-white p-8 rounded-3xl transition-all duration-500 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  👨‍💼
                </div>
                <div>
                  <h3 className="text-xl font-times">Rajesh Sharma</h3>
                  <p className="text-accent">CEO, TechVision India</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-accent italic">
                  "The AI avatars have completely transformed our brand presence. Our engagement 
                  rates have increased by 300% since implementation."
                </blockquote>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group bg-white p-8 rounded-3xl transition-all duration-500 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  👩‍💼
                </div>
                <div>
                  <h3 className="text-xl font-times">Priya Patel</h3>
                  <p className="text-accent">Marketing Director, GrowthCo India</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-accent italic">
                  "Their package design expertise helped us stand out on shelves. Sales increased 
                  by 150% within the first quarter."
                </blockquote>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group bg-white p-8 rounded-3xl transition-all duration-500 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  👨‍💻
                </div>
                <div>
                  <h3 className="text-xl font-times">Amit Verma</h3>
                  <p className="text-accent">CTO, InnovateTech Solutions</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-accent italic">
                  "The web development team delivered beyond expectations. Our new site has 
                  doubled our conversion rate."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24">
            {/* Badge */}
            <div className="bg-primary/5 px-4 py-2 rounded-full shadow-sm inline-flex items-center gap-2 mb-6">
              <span className="text-xl">✍️</span>
              <span className="text-primary font-medium">Latest updates</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-times mb-6">
              Latest <span className="italic">Insights</span>
            </h2>
            <p className="text-accent text-lg sm:text-xl max-w-2xl mx-auto">
              Explore our latest thoughts on technology, design, and business growth
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Blog Post 1 */}
            <article className="group bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={images.blog.ai.url}
                  alt={images.blog.ai.alt}
                  width={images.blog.ai.width}
                  height={images.blog.ai.height}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL={images.blog.ai.blurDataURL}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm bg-primary/5 text-primary px-3 py-1 rounded-full">
                    AI & Technology
                  </span>
                  <span className="text-sm text-accent">5 min read</span>
                </div>
                <h3 className="font-times text-2xl mb-4 group-hover:text-primary transition-colors">
                  The Future of AI in Business
                </h3>
                <p className="text-accent line-clamp-2">
                  Explore how artificial intelligence is reshaping business landscapes and creating 
                  new opportunities for growth and innovation.
                </p>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="group bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={images.blog.packageDesign.url}
                  alt={images.blog.packageDesign.alt}
                  width={images.blog.packageDesign.width}
                  height={images.blog.packageDesign.height}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL={images.blog.packageDesign.blurDataURL}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm bg-primary/5 text-primary px-3 py-1 rounded-full">
                    Design
                  </span>
                  <span className="text-sm text-accent">4 min read</span>
                </div>
                <h3 className="font-times text-2xl mb-4 group-hover:text-primary transition-colors">
                  Sustainable Package Design Trends
                </h3>
                <p className="text-accent line-clamp-2">
                  Discover the latest trends in eco-friendly packaging design and how brands are 
                  making a positive impact on the environment.
                </p>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="group bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
          <Image
                  src={images.blog.webDev.url}
                  alt={images.blog.webDev.alt}
                  width={images.blog.webDev.width}
                  height={images.blog.webDev.height}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL={images.blog.webDev.blurDataURL}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm bg-primary/5 text-primary px-3 py-1 rounded-full">
                    Development
                  </span>
                  <span className="text-sm text-accent">6 min read</span>
                </div>
                <h3 className="font-times text-2xl mb-4 group-hover:text-primary transition-colors">
                  Modern Web Development
                </h3>
                <p className="text-accent line-clamp-2">
                  Learn about the latest technologies and best practices in modern web development 
                  that drive exceptional user experiences.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="contact">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24">
            {/* Badge */}
            <div className="bg-primary/5 px-4 py-2 rounded-full shadow-sm inline-flex items-center gap-2 mb-6">
              <span className="text-xl">📬</span>
              <span className="text-primary font-medium">Get in touch</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-times mb-6">
              Let's Start Your <span className="italic">Journey</span>
            </h2>
            <p className="text-accent text-lg sm:text-xl max-w-2xl mx-auto">
              Ready to transform your business? We're here to help you grow.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 
                               focus:border-primary outline-none transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 
                               focus:border-primary outline-none transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 
                             focus:border-primary outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 
                             focus:border-primary outline-none transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="ai">AI Avatars</option>
                    <option value="package">Package Design</option>
                    <option value="web">Web Development</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 
                             focus:border-primary outline-none transition-all duration-300"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-xl font-medium 
                           transition-all duration-300 hover:bg-primary/90 hover:shadow-lg
                           active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-10">
              <div className="space-y-8">
                {/* Contact Cards */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-times text-lg mb-1">Phone</h3>
                      <p className="text-accent">+91 98765 43210</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-times text-lg mb-1">Email</h3>
                      <p className="text-accent">contact@arnoconsultancy.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-times text-lg mb-1">Location</h3>
                      <p className="text-accent">Jaipur, Rajasthan, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <h3 className="font-times text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center
                                 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <span className="sr-only">{social}</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 sm:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Company Info */}
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <h3 className="font-times text-xl mb-4">Arno Consultancy</h3>
              <p className="text-accent text-sm leading-relaxed mb-6">
                Transforming businesses through innovative solutions and creative excellence.
              </p>
              <div className="flex gap-4">
                {['twitter', 'linkedin', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="h-10 w-10 bg-primary/5 rounded-full flex items-center justify-center
                             text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-times text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                {['AI Avatars', 'Package Design', 'Web Development'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-accent hover:text-primary transition-colors">
                      {link}
                  </a>
                </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-times text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Blog', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-accent hover:text-primary transition-colors">
                      {link}
                  </a>
                </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-times text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-accent">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Jaipur, Rajasthan
                </li>
                <li className="flex items-center gap-2 text-accent">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                    contact@arnoconsultancy.com
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-accent">
                © {new Date().getFullYear()} Arno Consultancy. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-accent hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-accent hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
