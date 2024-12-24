import { useEffect, useState } from 'react';
import { ReactComponent as SnakeSVG } from './static/snake-Light.svg';
import { ReactComponent as DarkSnakeSVG } from './static/snake-Dark.svg';
import { ReactComponent as GithubIcon } from './static/github.svg';
import { ReactComponent as LinkedInIcon } from './static/linkedin.svg';
import ThemeLightIcon from './static/theme-light.svg';
import ThemeDarkIcon from './static/theme-dark.svg';
import BlurIn from "./components/ui/blur-in";
import WordPullUp from "./components/ui/word-pull-up";
import BlurFade from "./components/ui/blur-fade";
import { motion } from "framer-motion";
import dayBackground from './static/地方都市@ArseniXC.jpg';
import eveningBackground from './static/地方都市_日没@ArseniXC.jpg';
import nightBackground from './static/地方都市_夜@ArseniXC.jpg';
import IconCloud from "./components/ui/icon-cloud";
import { ReactComponent as ArrowIcon } from './static/arrow-right.svg';

function App() {
  const [backgroundImage, setBackgroundImage] = useState(dayBackground);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Theme toggle handler
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const updateBackground = () => {
      const hour = new Date().getHours();
      
      if (hour >= 6 && hour < 17) {
        // Day time (6 AM - 5 PM)
        setBackgroundImage(dayBackground);
      } else if (hour >= 17 && hour < 20) {
        // Evening (5 PM - 8 PM)
        setBackgroundImage(eveningBackground);
      } else {
        // Night time (8 PM - 6 AM)
        setBackgroundImage(nightBackground);
      }
    };

    // Initial update
    updateBackground();

    // Update every hour
    const interval = setInterval(updateBackground, 3600000); // 1 hour in milliseconds

    return () => clearInterval(interval);
  }, []);

  const SectionTitle = ({ children }) => (
    <motion.h2 
      className={`text-4xl mb-7.5 ${isDarkTheme ? 'text-gray-100' : 'text-gray-800'}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.h2>
  );

  const ProjectCard = ({ title, description, onClick, showGithub = false }) => (
    <motion.div 
      className={`${isDarkTheme ? 'bg-gray-700/90' : 'bg-gray-100/90'} rounded-lg p-5 shadow-md backdrop-blur-sm cursor-pointer`}
      whileHover={{ 
        x: 5,
        scale: 1.01,
        transition: { duration: 0.2 }
      }}
      onClick={onClick}
    >
      <motion.h3 
        className={`text-2xl transition-all duration-200 ${isDarkTheme ? 'text-gray-100' : 'text-gray-800'}`}
        variants={{
          hover: { 
            fontStyle: "italic",
            textDecoration: "underline",
            fontSize: "2.75rem"
          }
        }}
        inherit={true}
      >
        {title}
      </motion.h3>
      <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
        {description}
      </p>
      {showGithub && (
        <div className="flex items-center mt-2 space-x-2">
          <GithubIcon className={`w-5 h-5 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`} />
          <ArrowIcon className={`w-4 h-4 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`} />
        </div>
      )}
    </motion.div>
  );

  const SocialLink = ({ href, icon: Icon, name }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group inline-block mx-2"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <Icon className={`w-8 h-8 fill-current ${isDarkTheme ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-800'}`} />
      <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 
        opacity-0 group-hover:opacity-100 transition-opacity duration-200
        text-sm ${isDarkTheme ? 'text-gray-300 bg-gray-800/90' : 'text-gray-600 bg-white/90'} px-2 py-1 rounded`}>
        {name}
      </span>
    </motion.a>
  );

  const ThemeToggle = () => (
    <motion.button
      onClick={toggleTheme}
      className="relative group inline-block mx-2"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <img 
        src={isDarkTheme ? ThemeLightIcon : ThemeDarkIcon}
        alt={isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
        className={`w-8 h-8 ${isDarkTheme ? 'brightness-0 invert' : ''}`}
      />
      <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 
        opacity-0 group-hover:opacity-100 transition-opacity duration-200
        text-sm ${isDarkTheme ? 'text-gray-300 bg-gray-800/90' : 'text-gray-600 bg-white/90'} px-2 py-1 rounded`}>
        {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
      </span>
    </motion.button>
  );

  return (
    <div className={`relative z-10 max-w-6xl mx-auto p-5 text-center ${isDarkTheme ? 'dark' : ''}`}>
      {/* Background */}
      <div 
        className="fixed inset-0 -z-10 transition-all duration-1000"
        style={{
          ...(isDarkTheme ? {
            backgroundColor: '#000000',
          } : {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)',
            opacity: '0.4'
          })
        }}
      />

      <header className={`py-15 px-0 ${isDarkTheme ? 'bg-gray-800/90' : 'bg-white/90'} rounded-xl backdrop-blur-sm`}>
        <BlurIn
          word="Xin Jiang"
          className={`text-5xl font-bold ${isDarkTheme ? 'text-gray-100' : 'text-gray-800'}`}
        />
        <WordPullUp
          words="Software Development Engineer"
          className={`text-2xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} mt-2.5`}
        />
        <div className="mt-4 flex justify-center items-center">
          <SocialLink 
            href="https://github.com/jiangxin0120"
            icon={GithubIcon}
            name="GitHub"
          />
          <SocialLink 
            href="https://www.linkedin.com/in/xin-jiang-6b0774286/"
            icon={LinkedInIcon}
            name="LinkedIn"
          />
          <ThemeToggle />
        </div>
      </header>

      <main>
        <BlurFade delay={0.2}>
          <section className={`my-15 p-5 ${isDarkTheme ? 'bg-gray-800/90' : 'bg-white/90'} rounded-xl backdrop-blur-sm`}>
            <SectionTitle className={isDarkTheme ? 'text-gray-100' : 'text-gray-800'}>
              About Me
            </SectionTitle>
            <div className="text-left px-4">
              <p className={`
                ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}
                font-['Poppins']
                leading-relaxed
                text-lg
                tracking-wide
              `}>
                Hello! I'm <span className="font-['Roboto_Slab'] font-medium text-xl text-blue-500">Xin Jiang</span>, 
                <span className="block mt-2">
                  Motivated Software Engineering student with <span className="font-medium">3+ years</span> of experience 
                  in programming and cloud technologies. Proficient in <span className="font-medium">Java</span>, <span className="font-medium">Python</span>, 
                  and software testing, with strong skills in <span className="font-medium">API design</span>, 
                  <span className="font-medium">systems integration</span>, and <span className="font-medium">agile methodologies</span>.
                </span>
                <span className="block mt-2">
                  Aspiring to contribute to innovative projects while building scalable and secure software solutions.
                </span>
              </p>
            </div>
          </section>
        </BlurFade>

        <div className="w-[85%] mx-auto my-10">
          {isDarkTheme ? (
            <DarkSnakeSVG className="w-full h-full object-cover" />
          ) : (
            <SnakeSVG className="w-full h-full object-cover" />
          )}
        </div>

        <BlurFade delay={0.4}>
          <section className={`my-15 p-5 ${isDarkTheme ? 'bg-gray-800/90' : 'bg-white/90'} rounded-xl backdrop-blur-sm`}>
            <SectionTitle className={isDarkTheme ? 'text-gray-100' : 'text-gray-800'}>
              Projects
            </SectionTitle>
            <div className="text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                <ProjectCard 
                  onClick={() => window.open('https://github.com/jiangxin0120/Inventory-Management-System', '_blank')}
                  title="Inventory-Management-System"
                  description="inventory managing system using ASP.NET web API"
                  showGithub={true}
                />
                <ProjectCard 
                  onClick={() => window.open('https://github.com/kittybean/COMP-308-Group-Project', '_blank')}
                  title="Health tracking system"
                  description="health tracking system using React and Node.js"
                  showGithub={true}
                />
                <ProjectCard 
                  title="OneDrug Web Platform Development"
                  description="Collaborating on the development of a secure and user-friendly web platform for OneDrug Inc., a medical technology startup specializing in smart point-of-care technologies and genetic profiling."
                  
                />
              </div>
            </div>
          </section>
        </BlurFade>

        <BlurFade delay={0.6}>
          <section className={`my-15 p-5 ${isDarkTheme ? 'bg-gray-800/90' : 'bg-white/90'} rounded-xl backdrop-blur-sm`}>
            <SectionTitle className={isDarkTheme ? 'text-gray-100' : 'text-gray-800'}>
              Skills
            </SectionTitle>
            <div className="relative flex size-full max-w-lg mx-auto items-center justify-center h-[400px] py-10">
              <IconCloud />
            </div>
          </section>
        </BlurFade>
      </main>
    </div>
  );
}

export default App;
