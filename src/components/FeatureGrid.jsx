import {
  DollarSign,
  Heart,
  HelpCircle,
  Layers3,
  SlidersHorizontal,
} from "lucide-react";
import { SiAirfrance, SiEducative, SiIcloud } from "react-icons/si";

// TODO:; icons to find

const features = [
  {
    icon: <SiEducative className="w-6 h-6" />,
    title: "Built for developers",
    desc: "Built for engineers, developers, dreamers, thinkers and doers.",
  },
  {
    icon: <SiAirfrance className="w-6 h-6" />,
    title: "Ease of use",
    desc: "It's as easy as using an Apple, and as expensive as buying one.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Pricing like no other",
    desc: "Our prices are best in the market. No cap, no lock, no credit card required.",
  },
  {
    icon: <SiIcloud className="w-6 h-6" />,
    title: "100% Uptime guarantee",
    desc: "We just cannot be taken down by anyone.",
  },
  {
    icon: <Layers3 className="w-6 h-6" />,
    title: "Multi-tenant Architecture",
    desc: "You can simply share passwords instead of buying new seats",
  },
  {
    icon: <HelpCircle className="w-6 h-6" />,
    title: "24/7 Customer Support",
    desc: "We are available a 100% of the time. Atleast our AI Agents are.",
  },
  {
    icon: <SlidersHorizontal className="w-6 h-6" />,
    title: "Money back guarantee",
    desc: "If you do not like EveryAI, we will convince you to like us.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "And everything else",
    desc: "I just ran out of copy ideas. Accept my sincere apologies",
  },
];

const FeatureGrid = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l-2 border-gray-200/30 rounded-lg overflow-hidden">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-6 border-b-2 border-r-2  border-gray-200/30 flex flex-col gap-2 transition justify-start items-start 
             hover:bg-gradient-to-t hover:from-gray-200 hover:to-transparent"
          >
            <div className="text-black">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-black transition-transform duration-300 ease-out group-hover:translate-x-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm text-start">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
