import React, { useState } from 'react';
import {
  BookOpen,
  Brain,
  Crown,
  Globe2,
  Layout,
  MessageCircle,
  PersonStanding,
  Rocket,
  Trophy,
  Users,
  GraduationCap,
  Heart,
  ChevronDown,
  ChevronUp,
  Star,
  Check,
  Zap,
  Target,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Sample data for the progress chart
const progressData = [
  { name: 'Week 1', progress: 30 },
  { name: 'Week 2', progress: 45 },
  { name: 'Week 3', progress: 65 },
  { name: 'Week 4', progress: 80 },
  { name: 'Week 5', progress: 95 },
];

// Components
function FeatureCard({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, role, quote, image }: {
  name: string;
  role: string;
  quote: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
      <div className="flex text-yellow-400 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
    </div>
  );
}

function UserTypeSection({ icon: Icon, title, benefits }: {
  icon: React.ElementType;
  title: string;
  benefits: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-indigo-100 rounded-full mr-4">
          <Icon className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 w-5 h-5 mt-1">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            </div>
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">{answer}</div>
      )}
    </div>
  );
}

function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  isPopular 
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg relative ${isPopular ? 'border-2 border-indigo-600' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-semibold">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <Check className="w-5 h-5 text-indigo-600 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 rounded-full font-semibold transition-colors ${
          isPopular
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </button>
    </div>
  );
}

function InsightCard({ icon: Icon, title, description, metric }: {
  icon: React.ElementType;
  title: string;
  description: string;
  metric: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Icon className="w-6 h-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold ml-3 text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-purple-600">{metric}</div>
    </motion.div>
  );
}

function InteractiveLearningModule({ title, description, children }: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="bg-gray-50 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
}

function ProgressChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={progressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="progress"
            stroke="#6366f1"
            fill="#818cf8"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn, Play, Grow Together
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            An adaptive learning platform that grows with your child, making education fun and engaging
            through personalized experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
              Start Learning
            </button>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Empowering Every Learning Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Brain}
            title="Personalized Learning"
            description="Adaptive learning paths that adjust to your child's progress and learning style."
          />
          <FeatureCard
            icon={Trophy}
            title="Gamified Experience"
            description="Earn rewards, collect badges, and track progress through fun achievements."
          />
          <FeatureCard
            icon={Globe2}
            title="Learn Anywhere"
            description="Access content offline and sync progress across all your devices."
          />
          <FeatureCard
            icon={Layout}
            title="Multiple Formats"
            description="Interactive videos, games, and quizzes to support different learning styles."
          />
          <FeatureCard
            icon={MessageCircle}
            title="AI-Powered Support"
            description="Get instant help and guidance from our intelligent tutoring system."
          />
          <FeatureCard
            icon={PersonStanding}
            title="Inclusive Learning"
            description="Accessible design with support for various learning needs and abilities."
          />
        </div>
      </section>

      {/* User Types Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Tailored for Everyone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UserTypeSection
            icon={GraduationCap}
            title="For Students"
            benefits={[
              "Personalized learning paths",
              "Interactive games and quizzes",
              "Progress tracking and rewards",
              "AI-powered homework help"
            ]}
          />
          <UserTypeSection
            icon={Heart}
            title="For Parents"
            benefits={[
              "Real-time progress monitoring",
              "Detailed performance reports",
              "Screen time management",
              "Regular progress updates"
            ]}
          />
          <UserTypeSection
            icon={Users}
            title="For Teachers"
            benefits={[
              "Classroom management tools",
              "Assignment creation and grading",
              "Student analytics dashboard",
              "Curriculum customization"
            ]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose the perfect plan for your child's learning journey. All plans include access to our core features and personalized learning paths.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Basic"
            price="9.99"
            description="Perfect for getting started with personalized learning"
            features={[
              "Access to core subjects",
              "Basic progress tracking",
              "Limited practice exercises",
              "Email support"
            ]}
          />
          <PricingCard
            title="Premium"
            price="19.99"
            description="Our most popular plan for serious learners"
            features={[
              "All Basic features",
              "Advanced analytics",
              "Unlimited practice exercises",
              "Priority support",
              "Parent dashboard"
            ]}
            isPopular
          />
          <PricingCard
            title="Family"
            price="29.99"
            description="Best value for families with multiple children"
            features={[
              "All Premium features",
              "Up to 4 child accounts",
              "Family progress dashboard",
              "24/7 priority support",
              "Personalized tutoring"
            ]}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sarah Johnson"
            role="Parent of two"
            quote="The personalized learning approach has made such a difference for both my children. They're excited to learn every day!"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
          />
          <TestimonialCard
            name="Michael Chen"
            role="4th Grade Teacher"
            quote="As a teacher, the analytics and progress tracking tools have revolutionized how I support my students."
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
          />
          <TestimonialCard
            name="Emily Rodriguez"
            role="Student"
            quote="I love earning badges and competing with my friends. Learning has never been this fun!"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <FAQItem
            question="How does the personalized learning work?"
            answer="Our AI-powered system adapts to your child's learning style and pace, creating a unique learning path that evolves as they progress. It considers their strengths, challenges, and interests to provide the most effective learning experience."
          />
          <FAQItem
            question="Can I track my child's progress?"
            answer="Yes! Parents have access to a comprehensive dashboard showing real-time progress, achievements, and areas that might need additional attention. You'll receive regular reports and can set learning goals together."
          />
          <FAQItem
            question="Is the platform accessible offline?"
            answer="Yes, you can download lessons and activities for offline use. Progress will sync automatically when you reconnect to the internet."
          />
          <FAQItem
            question="What age groups is this suitable for?"
            answer="Our platform is designed for learners aged 4-15, with content and difficulty levels adjusting automatically to match each student's capabilities and grade level."
          />
        </div>
      </section>

      {/* New AI Insights Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          AI-Powered Learning Insights
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our advanced AI system analyzes your learning patterns to provide personalized insights and recommendations for optimal progress.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InsightCard
            icon={Zap}
            title="Learning Velocity"
            description="Your current learning speed and efficiency"
            metric="+25% this week"
          />
          <InsightCard
            icon={Target}
            title="Focus Areas"
            description="Subjects requiring additional attention"
            metric="Mathematics"
          />
          <InsightCard
            icon={BarChart3}
            title="Progress Tracking"
            description="Overall completion rate across subjects"
            metric="78% Complete"
          />
        </div>
      </section>

      {/* Interactive Learning Modules Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          Interactive Learning Modules
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Engage with our interactive learning tools designed to make complex concepts simple and fun to learn.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InteractiveLearningModule
            title="Progress Overview"
            description="Track your learning journey with detailed analytics"
          >
            <ProgressChart />
          </InteractiveLearningModule>
          
          <InteractiveLearningModule
            title="Skill Assessment"
            description="Real-time evaluation of your current skill level"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Problem Solving</span>
                <div className="w-64 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="text-gray-700 font-semibold">85%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Critical Thinking</span>
                <div className="w-64 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <span className="text-gray-700 font-semibold">75%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Creative Expression</span>
                <div className="w-64 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <span className="text-gray-700 font-semibold">90%</span>
              </div>
            </div>
          </InteractiveLearningModule>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-600 text-white py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-indigo-200">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-indigo-200">Interactive Lessons</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-indigo-200">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Learning Adventure Today
          </h2>
          <p className="text-lg mb-8 text-indigo-100">
            Join millions of students worldwide and discover the joy of learning.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-indigo-600" />
              <span className="font-semibold text-gray-900">EduTech</span>
            </div>
            <div className="text-gray-600">© 2025 EduTech. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;