import { motion } from "framer-motion";

const logos = [
  { name: "React", url: "/images/React.png", id: 1 },
  { name: "Angular", url: "/images/angular.png", id: 2 },
  { name: "Vue", url: "/images/vue.png", id: 3 },
  { name: "Svelte", url: "public/images/svelte.png", id: 4 },
  { name: "ButterCMS", url: "/images/butterCMS.png", id: 5 },
  { name: "Google Analytics", url: "/images/goggleAnalytics.png", id: 6 },
  { name: "React Cloudinary", url: "/images/react-cloudinary.png", id: 7 },
  { name: "Elastic Search", url: "/images/elastic-search.png", id: 8 },
  { name: "Next", url: "/images/next.jpg", id: 9 },
  { name: "Gatsby", url: "/images/gatsby.png", id: 10 },
  { name: "Headless UI", url: "/images/headless-UI.jpeg", id: 11 },
  { name: "Node", url: "/images/node.png", id: 12 },
];

const LogoDisplay = () => {
  return (
    <div className="overflow-hidden relative w-full bg-white py-4">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-60%"] }}  // Changed to -50% for smoother loop
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center mx-8 min-w-[120px] main-div" // Changed to flex-col and added minimum width
          >
            <img 
              src={logo.url} 
              alt={logo.name} 
              className="w-16 h-16 object-contain mb-2 logo-width" // Added margin bottom
            />
            <span 
              style={{ 
                fontSize: '20px',
                fontWeight: 600,
              }}
              className="text-center text-black"
            >
              {logo.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoDisplay;