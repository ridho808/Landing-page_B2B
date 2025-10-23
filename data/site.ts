import {
  TrendingUp,
  Rocket,
  Users,
  Clock,
  Target,
  Zap,
  BarChart3,
  Palette,
  PenTool,
  DollarSign,
} from "lucide-react";

export const SITE_DATA = {
  hero: {
    eyebrow: "B2B Creative Agency",
    title: "Transform Your Business with Creative Innovation",
    subtitle:
      "We help B2B companies accelerate growth through strategic design, automation, and digital innovation. Join 500+ companies already transforming their business.",
    primaryCta: {
      text: "Get Started",
      href: "#contact",
    },
    secondaryCta: {
      text: "Watch Demo",
      href: "#demo",
    },
    image: "/hero-placeholder.webp",
  },
  kpi: {
    items: [
      {
        icon: TrendingUp,
        value: "250%",
        label: "Average ROI Growth",
        description: "Across all client engagements",
      },
      {
        icon: Rocket,
        value: "500+",
        label: "Projects Delivered",
        description: "Successfully completed",
      },
      {
        icon: Users,
        value: "200+",
        label: "Happy Clients",
        description: "Across various industries",
      },
      {
        icon: Clock,
        value: "40%",
        label: "Time Saved",
        description: "Through automation solutions",
      },
    ],
  },
  why: {
    title: "Why Choose Agency?",
    description:
      "We combine cutting-edge technology with creative expertise to deliver solutions that drive real business results. Our approach is data-driven, user-centric, and focused on measurable outcomes.",
    pills: [
      "Cloud Solutions",
      "Seamless Integrations",
      "Smart Automation",
      "Advanced Analytics",
      "AI-Powered Insights",
      "Scalable Architecture",
    ],
  },
  zigzag: {
    items: [
      {
        title: "Strategic Planning & Analysis",
        copy: "We start by understanding your business goals and challenges. Our team conducts comprehensive analysis to identify opportunities for growth and optimization.",
        bullets: [
          "Business process analysis and optimization",
          "Competitive landscape review",
          "Technology stack assessment",
          "Growth opportunity identification",
          "ROI projection and modeling",
        ],
        image: "/hero-placeholder-1.jpg",
        imageSide: "left" as const,
      },
      {
        title: "Implementation & Execution",
        copy: "Our experts implement tailored solutions using cutting-edge technology and proven methodologies. We ensure seamless integration with your existing systems.",
        bullets: [
          "Custom solution development",
          "System integration and migration",
          "Team training and onboarding",
          "Performance monitoring and optimization",
          "Ongoing support and maintenance",
        ],
        image: "/hero-placeholder-2.jpg",
        imageSide: "right" as const,
      },
    ],
  },
  logos: {
    title: "Trusted by Industry Leaders",
    subtitle:
      "Join 500+ companies already transforming their business with our solutions",
    items: [
      {
        name: "TechCorp",
        src: "/logo-placeholder-1.svg",
        width: 120,
        height: 40,
      },
      {
        name: "StartupXYZ",
        src: "/logo-placeholder-2.svg",
        width: 100,
        height: 40,
      },
      {
        name: "GrowthCo",
        src: "/logo-placeholder-3.svg",
        width: 110,
        height: 40,
      },
      {
        name: "InnovationLab",
        src: "/logo-placeholder-4.svg",
        width: 130,
        height: 40,
      },
      {
        name: "DigitalFirst",
        src: "/logo-placeholder-5.svg",
        width: 115,
        height: 40,
      },
      {
        name: "FutureTech",
        src: "/logo-placeholder-6.svg",
        width: 105,
        height: 40,
      },
    ],
  },
  services: {
    items: [
      {
        icon: Target,
        title: "Strategy & Consulting",
        description:
          "Strategic roadmap development and business process optimization to accelerate growth.",
        features: [
          "Business process analysis",
          "Growth strategy development",
          "Technology consulting",
          "Performance optimization",
        ],
        badge: "Most Popular",
      },
      {
        icon: Zap,
        title: "Automation Solutions",
        description:
          "Custom automation workflows that eliminate repetitive tasks and boost productivity.",
        features: [
          "Workflow automation",
          "Process optimization",
          "Integration development",
          "Performance monitoring",
        ],
      },
      {
        icon: BarChart3,
        title: "Analytics & Insights",
        description:
          "Data-driven analytics and reporting to make informed business decisions.",
        features: [
          "Custom dashboards",
          "Data visualization",
          "Predictive analytics",
          "Performance tracking",
        ],
      },
      {
        icon: Palette,
        title: "Creative Operations",
        description:
          "Streamlined creative processes and brand management for consistent output.",
        features: [
          "Brand management",
          "Creative workflow optimization",
          "Asset management",
          "Quality assurance",
        ],
      },
      {
        icon: PenTool,
        title: "Content Engine",
        description:
          "AI-powered content creation and distribution strategies that engage your audience.",
        features: [
          "Content strategy",
          "AI-powered creation",
          "Distribution automation",
          "Performance analytics",
        ],
      },
      {
        icon: DollarSign,
        title: "Revenue Operations",
        description:
          "Integrated sales and marketing operations to drive predictable revenue growth.",
        features: [
          "Sales process optimization",
          "Marketing automation",
          "Revenue forecasting",
          "Performance analytics",
        ],
        badge: "New",
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: "Sarah Johnson",
        role: "CEO at TechCorp",
        company: "TechCorp",
        avatar: "/avatar-1.png",
        content:
          "CreativeFlow transformed our business processes. We saw a 250% ROI within the first 6 months. Their team is professional, responsive, and truly understands our needs.",
        rating: 5,
      },
      {
        name: "Michael Chen",
        role: "CTO at StartupXYZ",
        company: "StartupXYZ",
        avatar: "/avatar-2.png",
        content:
          "The automation solutions they implemented saved us 40% of operational time. Game changer! The integration was seamless and the training was comprehensive.",
        rating: 5,
      },
      {
        name: "Emily Rodriguez",
        role: "Marketing Director at GrowthCo",
        company: "GrowthCo",
        avatar: "/avatar-3.png",
        content:
          "Their creative operations approach streamlined our entire content workflow. Highly recommend! The results exceeded our expectations.",
        rating: 5,
      },
    ],
  },
  cta: {
    title: "Ready to Transform Your Business?",
    subtitle:
      "Join hundreds of companies already using our platform to accelerate growth and streamline operations. Start your free trial today - no credit card required.",
    primaryCta: {
      text: "Start Free Trial",
      href: "#signup",
    },
    secondaryCta: {
      text: "Schedule Demo",
      href: "#demo",
    },
    badge: "14-Day Free Trial",
  },
};
