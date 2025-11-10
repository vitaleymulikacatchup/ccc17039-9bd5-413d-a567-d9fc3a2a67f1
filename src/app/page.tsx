"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Bot, Cloud, Shield, BarChart3, Code, Code2, CloudUpload, Users, Workflow, Smartphone, Headphones, Star, DollarSign, Rocket, Sparkles, Building, TrendingUp, MessageSquare, Award, HelpCircle, BookOpen, Mail, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="plain"
      cardStyle="layered-gradient"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Services", id: "feature" },
            { name: "Solutions", id: "product" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="TechForward"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Transform Your Business with Cutting-Edge IT Solutions"
          description="Experience seamless digital transformation with our comprehensive technology services and innovative software solutions"
          tag="Leading Technology Partner"
          tagIcon={Zap}
          buttons={[
            { text: "Start Your Journey", href: "contact" },
            { text: "Explore Services", href: "feature" }
          ]}
          imageSrc="https://pixabay.com/get/g364ecfbdfe60cdf81e491f0e8f0d54224b6f7e492510a2c9bc29bc1e1021729cdf3df431ff7a619084e96e85f132e07a2e349225107e4581324b1accd3c1010e_1280.jpg"
          imageAlt="Modern technology dashboard interface"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We empower businesses through innovative technology solutions, delivering scalable software, robust infrastructure, and strategic IT consulting that drives growth and digital transformation."
          features={[
            {
              icon: Bot,
              title: "AI-Powered Solutions",
              description: "Harness the power of artificial intelligence to automate processes, enhance decision-making, and unlock new business opportunities with our cutting-edge AI implementations."
            },
            {
              icon: Cloud,
              title: "Cloud Infrastructure",
              description: "Migrate to secure, scalable cloud environments that reduce costs, improve performance, and ensure business continuity with our comprehensive cloud services."
            },
            {
              icon: Shield,
              title: "Cybersecurity Excellence",
              description: "Protect your digital assets with enterprise-grade security solutions, threat monitoring, and compliance frameworks designed for modern businesses."
            },
            {
              icon: BarChart3,
              title: "Data Analytics",
              description: "Transform raw data into actionable insights with advanced analytics platforms, real-time reporting, and predictive modeling solutions."
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFive
          title="Comprehensive IT Services"
          description="From custom software development to enterprise solutions, we deliver technology services that drive business success"
          tag="Our Expertise"
          tagIcon={Code}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          showIconBoxBackground={true}
          features={[
            { title: "Custom Software Development", icon: Code2 },
            { title: "Cloud Migration Services", icon: CloudUpload },
            { title: "IT Consulting & Strategy", icon: Users },
            { title: "System Integration", icon: Workflow },
            { title: "Digital Transformation", icon: Smartphone },
            { title: "Technical Support", icon: Headphones }
          ]}
          buttons={[
            { text: "View All Services", href: "product" }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Solutions"
          description="Explore our flagship technology products designed to accelerate your business growth"
          tag="Popular Products"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          products={[
            {
              id: "1",
              name: "Enterprise Software Suite",
              price: "Custom Quote",
              imageSrc: "https://pixabay.com/get/g3508105b7ae38ae606b0ec4d9d51770c3b0ac6638ddb0e96d0bae13a08224c1c2c64a34e06781d5daf4e2351669a82c538b207468311c05e200753f918c52bb0_1280.jpg",
              imageAlt: "Enterprise software development platform"
            },
            {
              id: "2",
              name: "Cloud Infrastructure Platform",
              price: "From $299/mo",
              imageSrc: "https://pixabay.com/get/ge772232b9a694c241fdbd3333c40219a674b00b1935685483874bfcfbee6c2792d1d5e5471c56a0e985290517be02a7e641e7f1e2bf03daf86f3d7da5daac1f4_1280.jpg",
              imageAlt: "Cloud hosting infrastructure dashboard"
            },
            {
              id: "3",
              name: "IT Consulting Services",
              price: "Starting $150/hr",
              imageSrc: "https://pixabay.com/get/g1273eef7fa2dad58b07b5893a4700ddb74b744bcc66768764edb699ef9c0bf697c93fc8d7a1d23f11c7e0031151f4a8143ffd627c6f86ad0ece62fae9ac6ff2e_1280.jpg",
              imageAlt: "IT consulting and strategy services"
            }
          ]}
          buttons={[
            { text: "View All Products", href: "pricing" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your IT Solution Package"
          description="Flexible pricing plans designed to meet your technology needs and budget requirements"
          tag="Transparent Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="blur-reveal"
          plans={[
            {
              id: "startup",
              badge: "Best for Startups",
              badgeIcon: Rocket,
              price: "$299/mo",
              subtitle: "Essential tools for growing businesses",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "feature" }
              ],
              features: [
                "Cloud hosting & maintenance",
                "Basic cybersecurity package",
                "Email & chat support",
                "Monthly performance reports",
                "Standard integrations"
              ]
            },
            {
              id: "enterprise",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$999/mo",
              subtitle: "Comprehensive solutions for established companies",
              buttons: [
                { text: "Start Free Trial", href: "contact" },
                { text: "Schedule Demo", href: "contact" }
              ],
              features: [
                "Advanced cloud infrastructure",
                "Enterprise-grade security",
                "24/7 priority support",
                "Custom integrations",
                "Dedicated account manager",
                "AI-powered analytics"
              ]
            },
            {
              id: "custom",
              badge: "Enterprise Scale",
              badgeIcon: Building,
              price: "Custom Quote",
              subtitle: "Tailored solutions for large organizations",
              buttons: [
                { text: "Contact Sales", href: "contact" },
                { text: "View Case Studies", href: "testimonial" }
              ],
              features: [
                "Fully customized solutions",
                "Multi-cloud architecture",
                "Advanced compliance tools",
                "White-glove onboarding",
                "Strategic consulting included",
                "Performance guarantees"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Proven Track Record"
          description="Numbers that showcase our commitment to delivering exceptional IT solutions and client success"
          tag="Our Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          metrics={[
            {
              id: "1",
              value: "500+",
              description: "Projects Completed Successfully"
            },
            {
              id: "2",
              value: "98%",
              description: "Client Satisfaction Rate"
            },
            {
              id: "3",
              value: "24/7",
              description: "Technical Support Available"
            },
            {
              id: "4",
              value: "15+",
              description: "Years of Industry Experience"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Expert Team"
          description="Experienced technology professionals dedicated to driving your business forward"
          tag="Leadership"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Michael Chen",
              role: "Chief Executive Officer",
              imageSrc: "https://pixabay.com/get/gcb2ed1ebeea96bc6e88ba26827b52321991704f9037ca0588bc8e3c6d2f52a6444f461299658de5e2e888933e112c2f08103d202f66fb1cac5f635d9399461d5_1280.jpg",
              imageAlt: "Michael Chen, CEO"
            },
            {
              id: "2",
              name: "Sarah Rodriguez",
              role: "Chief Technology Officer",
              imageSrc: "https://pixabay.com/get/gaa2dec25ac27f919cf7cd1310d252b097ddd77ede0b2f469f6b78f97433a9f75d073d70652abe7feb0b2edb18da4622da732e00542077bde98be05744b9c8c8d_1280.jpg",
              imageAlt: "Sarah Rodriguez, CTO"
            },
            {
              id: "3",
              name: "David Kumar",
              role: "Lead Software Architect",
              imageSrc: "https://pixabay.com/get/g5cd1b61b47fc34b6dd252b6e46cd6e37ac48683153ac380f728c3ac028ac52667040b26b85bb2ca61c41defc62b3d8581442b76432977ff5b3dc34994c96ad6a_1280.jpg",
              imageAlt: "David Kumar, Lead Developer"
            },
            {
              id: "4",
              name: "Emily Watson",
              role: "Project Manager",
              imageSrc: "https://pixabay.com/get/g741f3264dd90a5b5624ecb59a9ca1f0ff23c5143756d4364e5d9d56d8442c13eea40b9fc565581b9f23bbc1357fad693e35be504075fe4a1d7406b73752f81d3_1280.jpg",
              imageAlt: "Emily Watson, Project Manager"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Real feedback from companies who have transformed their business with our technology solutions"
          tag="Success Stories"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Martinez",
              role: "CEO, InnovateCorpjson",
              testimonial: "TechForward transformed our entire IT infrastructure. Their cloud migration service was seamless, and we've seen a 40% improvement in system performance.",
              imageSrc: "https://pixabay.com/get/g2783c80f7e7570336f3adce682c54c98fb084e8757e470af40895502f81c2034989a855011fef90424859e1684c8f97dc9125000ac4a0e21882b3c52bc5636ab_1280.jpg",
              imageAlt: "Jennifer Martinez testimonial"
            },
            {
              id: "2",
              name: "Robert Thompson",
              role: "CTO, DataFlow Solutions",
              testimonial: "The cybersecurity implementation exceeded our expectations. Our systems are now fully protected, and the team's expertise is unmatched in the industry.",
              imageSrc: "https://pixabay.com/get/g1d0ecba83169c395e9b9e00eb681eddfe3e5ea40d07828b14f8aacdefade7c5d3845d7d506d013e3e839ecd965c5c97b7c19822cdd9c1a4da3ac75d4d83cf851_1280.jpg",
              imageAlt: "Robert Thompson testimonial"
            },
            {
              id: "3",
              name: "Amanda Foster",
              role: "Founder, StartupTech",
              testimonial: "Working with TechForward was a game-changer for our startup. Their custom software solution helped us scale efficiently and attract major investors.",
              imageSrc: "https://pixabay.com/get/g953a3dd507f750a37baeaa61572f0763afbdc8e8d61f5d62e7452b7ff5a431069401c1ee9376a24ec60ba8347bc971ebeb4fa8192bae02e6f23599b1ff15416c_1280.jpg",
              imageAlt: "Amanda Foster testimonial"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Operations Director, GlobalCorp",
              testimonial: "The AI-powered analytics platform has revolutionized our decision-making process. We now have real-time insights that drive our strategic initiatives.",
              imageSrc: "https://pixabay.com/get/ga61810904d894462d6d628b7c8974412d0e88e59f54e83b6ae051e517b84cb36fdce3c604fd0c403c24d8090a6624fed1e1355e7f3078cb97a90d05c4a85ce68_1280.jpg",
              imageAlt: "James Wilson testimonial"
            },
            {
              id: "5",
              name: "Lisa Chang",
              role: "VP Technology, FinanceFirst",
              testimonial: "TechForward's compliance and security solutions helped us meet all regulatory requirements while maintaining high performance and user experience.",
              imageSrc: "https://pixabay.com/get/gd680a0a0655cdebcc998ff05d241e2769718f1d7d9480a0480b8e374b3866f5005fd9b0197036e8ed224d9149c6bfc4d3d6855b0dc6a33a8a3cb4a39d0fe9f0f_1280.jpg",
              imageAlt: "Lisa Chang testimonial"
            },
            {
              id: "6",
              name: "Mark Anderson",
              role: "IT Manager, HealthcarePlus",
              testimonial: "The 24/7 support and proactive monitoring have given us peace of mind. Our systems run smoothly, and any issues are resolved before they impact our operations.",
              imageSrc: "https://pixabay.com/get/g2eb6df6128ec8deecf70d15de7617d77ba781eed98f84b800040e937da13859f8f7cf80f2a2339a815b5f08dba9b176849d142296441ef8dbb2e6cacea3e2a9e_1280.jpg",
              imageAlt: "Mark Anderson testimonial"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join hundreds of companies that rely on our technology solutions to power their digital transformation"
          tag="Our Partners"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g11543faf2f636008b96ecb96ab623d6d5cf4afc4398c42923c9c8767a153b78f297b6e1ac4fe15dd52ebb7e438b3244426cd2339e3f74756fd8f84e03ec11a67_1280.jpg",
            "https://pixabay.com/get/g66851f2bbb8e28cc46db228b05dec82fd3f7889e801a6529958c0b3b2d73986a3aa61f50035d29b9a522445ecb18adda85099e1aa5a97edcf335e5a0a9ed34ae_1280.jpg",
            "https://pixabay.com/get/g65eaa72128bf46b4c805ae11d2a3159b992eaaeb882caa266517419330dc71c3438d055fae2d15f5f1b5a968fe20a54c6d353d1ee9747ac9d330645483a83913_1280.jpg",
            "https://pixabay.com/get/gd6f14cc45d2662dff0710a961f6c2935b953671cbb23e9a611aa61e71413d6c5c4da58cf7d4e7e8cf3f8c34879e382eea3d4e05c5cdbdcedca6b34a076b4e247_1280.jpg",
            "https://pixabay.com/get/g575acafd1367c4852cc384b103c3e24f6c4a639022b2aa076de712025591e9f9f2df8aa9e8833aae8442c408676943fe7c3c0fb3663a7b0d2ae13a7852b710cb_1280.jpg",
            "https://pixabay.com/get/g6795df3a15268cb714aff83e54d641e38da0c28271e33a14b230cdf16c7fa6cd0886d2bd42c34a43dd00b994b3ce66cd7f50fa97523694a6f8ab700768bbe31b_1280.jpg",
            "https://pixabay.com/get/gb68f1b0693405f632f05548cf697d54ab8aa571079139c9d0af0850867205eeb6e2fdd15d0ba996f1fa31bc9a9cf34036bfb09fe92004a3f67e0a071c81dfc67_1280.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get answers to common questions about our IT services, pricing, and implementation process"
          tag="Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What types of IT services do you offer?",
              content: "We provide comprehensive IT services including custom software development, cloud migration, cybersecurity implementation, system integration, and ongoing technical support for businesses of all sizes."
            },
            {
              id: "2",
              title: "How long does a typical implementation take?",
              content: "Implementation timelines vary based on project complexity. Simple cloud migrations typically take 2-4 weeks, while custom software development projects can range from 3-12 months depending on requirements and scope."
            },
            {
              id: "3",
              title: "Do you provide 24/7 technical support?",
              content: "Yes, we offer 24/7 technical support for all Enterprise and Custom plan clients. Startup plan clients receive business hours support with emergency escalation procedures."
            },
            {
              id: "4",
              title: "Can you work with our existing systems?",
              content: "Absolutely. We specialize in system integration and can work with your existing infrastructure to ensure seamless compatibility and minimal disruption to your current operations."
            },
            {
              id: "5",
              title: "What industries do you serve?",
              content: "We serve clients across various industries including healthcare, finance, manufacturing, retail, education, and government sectors, with specialized compliance and security expertise for regulated industries."
            },
            {
              id: "6",
              title: "How do you ensure data security?",
              content: "We implement enterprise-grade security measures including encryption, multi-factor authentication, regular security audits, compliance frameworks, and follow industry best practices for data protection."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Technology Insights"
          description="Stay updated with the latest trends, best practices, and innovations in technology and digital transformation"
          tag="Tech Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Artificial Intelligence",
              title: "The Future of AI in Business Operations",
              excerpt: "Explore how artificial intelligence is revolutionizing business processes and creating new opportunities for automation and efficiency.",
              imageSrc: "https://pixabay.com/get/g55a334227d761b1ecbb08538464be1fc0266a0d413dbab4861b3c50bcb1a1179239e25875bc80b89ffb31c95e84fb7e7a08c52f0480a0f75c4645edf8ab1c194_1280.jpg",
              imageAlt: "AI technology and business transformation",
              authorName: "Sarah Mitchell",
              authorAvatar: "https://pixabay.com/get/gea3ff66c3828f3f2c58327a9e12999291365327c7d4304d5d1c2c48972e47751e8336ce113ac63bc21c23a757718b9b1b566795363499de5022db9a37f876063_1280.jpg",
              date: "Dec 15, 2024"
            },
            {
              id: "2",
              category: "Cybersecurity",
              title: "Essential Cybersecurity Strategies for 2025",
              excerpt: "Learn about the latest cybersecurity threats and the essential strategies businesses need to implement to protect their digital assets.",
              imageSrc: "https://pixabay.com/get/g6bd4828405c52184cbf948339f9d16fd7cccbe2ca4ed0e85aeb44a5003d2f63a9388dd186f5cb0b76056cbf101f1c6f1e06cc0ee35031ead833c4dc40b1101be_1280.jpg",
              imageAlt: "Cybersecurity and digital protection",
              authorName: "Michael Rodriguez",
              authorAvatar: "https://pixabay.com/get/g8d0df137eeb058be41b868a9a60834233516b6d81979a35b27307693c55b3c0361036928906cab42bebcd2479a3bf36ba22d48ab962ee84b2205939fb8b73230_1280.jpg",
              date: "Dec 12, 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to Transform Your Business?"
          description="Contact us today to discuss your technology needs and discover how we can help accelerate your digital transformation journey."
          inputPlaceholder="Enter your business email"
          buttonText="Schedule Consultation"
          termsText="By submitting your email, you agree to receive updates about our services and solutions. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                { label: "Software Development", href: "feature" },
                { label: "Cloud Solutions", href: "product" },
                { label: "IT Consulting", href: "feature" },
                { label: "Cybersecurity", href: "feature" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Careers", href: "contact" },
                { label: "Case Studies", href: "testimonial" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Help Center", href: "faq" },
                { label: "Contact Us", href: "contact" },
                { label: "Documentation", href: "blog" },
                { label: "System Status", href: "contact" }
              ]
            }
          ]}
          logoText="TechForward"
          copyrightText="© 2024 TechForward. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}