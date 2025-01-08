import Image from "next/image";
import LogoSlider from './components/LogoSlider';
import { images } from './config/images';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center px-4 py-20 sm:py-0">
        {/* Background Pattern (optional) */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="flex flex-col gap-2 sm:gap-3 font-times">
            {/* Mobile optimization with smaller text and line height */}
            <span className="text-[2rem] leading-[1.1] 
                           sm:text-[2.5rem] md:text-7xl lg:text-8xl sm:leading-tight">
              <span className="text-gray-800">Create the <span className="italic">growth</span></span>
            </span>
            <span className="text-[1.75rem] leading-[1.1] text-gray-600
                           sm:text-[2.25rem] md:text-7xl lg:text-8xl sm:leading-tight">
              your company is
            </span>
            <span className="text-[2rem] leading-[1.1] 
                           sm:text-[2.5rem] md:text-7xl lg:text-8xl sm:leading-tight">
              <span className="text-gray-800">
                <span className="italic relative inline-block group">
                  capable of.
                  <svg 
                    className="absolute -bottom-2 sm:-bottom-3 left-0 w-full"
                    viewBox="0 0 300 15" 
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M0 12.5C50 12.5 50 2.5 100 2.5C150 2.5 150 12.5 200 12.5C250 12.5 250 2.5 300 2.5" 
                      stroke="#7c3aed" 
                      strokeWidth="3"
                      className="opacity-80"
                    />
                  </svg>
                </span>
              </span>
            </span>
          </h1>
          
          

          <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row gap-3 sm:gap-6 
                         justify-center items-center px-4 sm:px-0">
            <a
              href="#contact"
              className="bg-violet-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full 
                       font-medium transition-all duration-300 text-base sm:text-lg
                       hover:bg-violet-700 hover:scale-105 hover:shadow-lg
                       active:scale-95 w-full sm:w-auto"
            >
              Start Your Journey
            </a>
            <a
              href="#services"
              className="px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-gray-200
                       hover:border-gray-300 transition-all duration-300
                       text-gray-600 hover:text-gray-900 
                       text-base sm:text-lg md:text-xl
                       w-full sm:w-auto"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on smaller screens */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-gray-400"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Logo Slider */}
      <div className="relative py-16">
        <LogoSlider />
      </div>

      {/* Services Section */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-gray-50" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-times mb-3 sm:mb-4">
              Our <span className="italic">Services</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-xl max-w-2xl mx-auto px-4 sm:px-0">
              Transforming businesses through innovative solutions and creative excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* AI Avatars */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:shadow-xl">
              <div className="h-14 w-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="h-7 w-7 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-times mb-4">AI Avatars</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Create stunning, personalized AI-generated avatars that capture your brand's essence
                and connect with your audience on a deeper level.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-violet-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customized AI Models
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-violet-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Brand Integration
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-violet-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-Platform Support
                </li>
              </ul>
            </div>

            {/* Package Design */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:shadow-xl">
              <div className="h-14 w-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="h-7 w-7 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-times mb-4">Package Design</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Stand out on the shelves with eye-catching package designs that tell your product's
                story and drive customer engagement.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-violet-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom Illustrations
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-violet-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sustainable Materials
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-violet-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Market Research
                </li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:shadow-xl">
              <div className="h-14 w-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="h-7 w-7 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-times mb-4">Web Development</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Build powerful, responsive websites that deliver exceptional user experiences
                and drive business growth.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-violet-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Modern Technologies
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-violet-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Responsive Design
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-violet-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SEO Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            {/* Left side - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-[2rem] overflow-hidden">
                <Image
                  src={images.whyChooseUs.url}
                  alt={images.whyChooseUs.alt}
                  width={images.whyChooseUs.width}
                  height={images.whyChooseUs.height}
                  className="object-cover rounded-[2rem]"
                  placeholder="blur"
                  blurDataURL={images.whyChooseUs.blurDataURL}
                  priority={false}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative elements - hide on mobile */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 bg-violet-100 rounded-full -z-10" />
              <div className="hidden sm:block absolute -top-6 -right-6 w-32 h-32 border-2 border-violet-200 rounded-full -z-10" />
            </div>

            {/* Right side - Content */}
            <div className="lg:pl-10 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-times mb-6">
                Why <span className="italic">Choose Us</span>
              </h2>
              
              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-times mb-2">Innovative Solutions</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We leverage cutting-edge technologies and creative thinking to deliver 
                      solutions that set your business apart.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-times mb-2">Dedicated Support</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our team provides personalized attention and continuous support 
                      throughout your project journey.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-times mb-2">Proven Track Record</h3>
                    <p className="text-gray-600 leading-relaxed">
                      With years of experience and successful projects, we have the 
                      expertise to deliver exceptional results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center text-violet-600 font-medium hover:text-violet-700 
                           transition-colors group"
                >
                  Learn more about our approach
                  <svg 
                    className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-times mb-3 sm:mb-4">
              Client <span className="italic">Success Stories</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-xl max-w-2xl mx-auto px-4 sm:px-0">
              Hear from businesses we've helped transform and grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm">
              <div className="mb-6">
                <h3 className="font-times text-xl">Priya Sharma</h3>
                <p className="text-gray-600">CEO, InnovateIndia</p>
              </div>
              <svg className="w-10 h-10 text-violet-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c.34 0 .672-.028 1-.08v4.080h6v-12h-7zm14 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.34 0 .672-.028 1-.08v4.080h6v-12h-7z" />
              </svg>
              <p className="text-gray-600 leading-relaxed mb-4">
                "Working with Arno Consultancy transformed our digital presence. 
                Their AI solutions and web development expertise helped us achieve 
                remarkable growth in just months."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm">
              <div className="mb-6">
                <h3 className="font-times text-xl">Rajesh Patel</h3>
                <p className="text-gray-600">Founder, EcoKraft</p>
              </div>
              <svg className="w-10 h-10 text-violet-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c.34 0 .672-.028 1-.08v4.080h6v-12h-7zm14 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.34 0 .672-.028 1-.08v4.080h6v-12h-7z" />
              </svg>
              <p className="text-gray-600 leading-relaxed mb-4">
                "Their package design expertise helped us stand out in a crowded market. 
                The sustainable approach and attention to detail exceeded our expectations."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm">
              <div className="mb-6">
                <h3 className="font-times text-xl">Aisha Mehta</h3>
                <p className="text-gray-600">Marketing Director, TechVision India</p>
              </div>
              <svg className="w-10 h-10 text-violet-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c.34 0 .672-.028 1-.08v4.080h6v-12h-7zm14 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.34 0 .672-.028 1-.08v4.080h6v-12h-7z" />
              </svg>
              <p className="text-gray-600 leading-relaxed mb-4">
                "The AI avatars created for our brand have revolutionized our social media 
                presence. The engagement rates have skyrocketed since implementation."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-times mb-3 sm:mb-4">
              Latest <span className="italic">Insights</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-xl max-w-2xl mx-auto px-4 sm:px-0">
              Explore our latest thoughts on technology, design, and business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Blog Post 1 */}
            <article className="bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-sm">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={images.blog.ai.url}
                  alt={images.blog.ai.alt}
                  width={images.blog.ai.width}
                  height={images.blog.ai.height}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={images.blog.ai.blurDataURL}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-violet-600 bg-violet-50 px-3 py-1 rounded-full">
                    AI & Technology
                  </span>
                  <span className="text-sm text-gray-500">5 min read</span>
                </div>
                <h3 className="font-times text-xl sm:text-2xl mb-3">
                  The Future of AI in Business
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Explore how artificial intelligence is reshaping business landscapes and creating 
                  new opportunities for growth and innovation.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-violet-600 hover:text-violet-700 
                           transition-colors group"
                >
                  Read More
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
            </article>

            {/* Blog Post 2 */}
            <article className="bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-sm">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={images.blog.packageDesign.url}
                  alt={images.blog.packageDesign.alt}
                  width={images.blog.packageDesign.width}
                  height={images.blog.packageDesign.height}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={images.blog.packageDesign.blurDataURL}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-violet-600 bg-violet-50 px-3 py-1 rounded-full">
                    Design
                  </span>
                  <span className="text-sm text-gray-500">4 min read</span>
                </div>
                <h3 className="font-times text-xl sm:text-2xl mb-3">
                  Sustainable Package Design Trends
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Discover the latest trends in eco-friendly packaging design and how brands are 
                  making a positive impact on the environment.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-violet-600 hover:text-violet-700 
                           transition-colors group"
                >
                  Read More
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
            </article>

            {/* Blog Post 3 */}
            <article className="bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-sm">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={images.blog.webDev.url}
                  alt={images.blog.webDev.alt}
                  width={images.blog.webDev.width}
                  height={images.blog.webDev.height}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={images.blog.webDev.blurDataURL}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-violet-600 bg-violet-50 px-3 py-1 rounded-full">
                    Development
                  </span>
                  <span className="text-sm text-gray-500">6 min read</span>
                </div>
                <h3 className="font-times text-xl sm:text-2xl mb-3">
                  Modern Web Development
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Learn about the latest technologies and best practices in modern web development 
                  that drive exceptional user experiences.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-violet-600 hover:text-violet-700 
                           transition-colors group"
                >
                  Read More
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
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section - Moved to the end */}
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-times mb-3 sm:mb-4">
              Let's <span className="italic">Connect</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-xl max-w-2xl mx-auto px-4 sm:px-0">
              Transform your ideas into reality. Get in touch with us today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-times mb-2">Email Us</h3>
                  <a href="mailto:contact@arnoconsultancy.com" 
                     className="text-violet-600 hover:text-violet-700 transition-colors">
                    contact@arnoconsultancy.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-times mb-2">Location</h3>
                  <p className="text-gray-600">Jaipur, Rajasthan</p>
                  <p className="text-gray-600">India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-times mb-2">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-100 
                             focus:border-violet-300 transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-100 
                             focus:border-violet-300 transition-all outline-none"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-100 
                             focus:border-violet-300 transition-all outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-violet-600 text-white px-8 py-4 rounded-xl
                           font-medium transition-all duration-300
                           hover:bg-violet-700 hover:shadow-lg
                           active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 sm:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Company Info - full width on mobile */}
            <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-4">
              <h3 className="font-times text-xl">Arno Consultancy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transforming businesses through innovative solutions and creative excellence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-violet-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-violet-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-violet-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-times text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-600 hover:text-violet-600 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-600 hover:text-violet-600 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-violet-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-times text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors">
                    AI Avatars
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors">
                    Package Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors">
                    Web Development
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-times text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">Jaipur, Rajasthan</li>
                <li>
                  <a href="mailto:contact@arnoconsultancy.com" 
                     className="text-gray-600 hover:text-violet-600 transition-colors">
                    contact@arnoconsultancy.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="pt-6 sm:pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Arno Consultancy. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors">
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
