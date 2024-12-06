import { useEffect } from 'react';
import { ReactComponent as SnakeSVG } from './static/snake-Light.svg';
import { ReactComponent as GithubIcon } from './static/github.svg';
import { ReactComponent as LinkedInIcon } from './static/linkedin.svg';
import BlurIn from "./components/ui/blur-in";
import WordPullUp from "./components/ui/word-pull-up";
import BlurFade from "./components/ui/blur-fade";
import { motion } from "framer-motion";
import backgroundImage from './static/地方都市@ArseniXC.jpg';
import IconCloud from "./components/ui/icon-cloud";

function App() {
  const SectionTitle = ({ children }) => (
    <motion.h2 
      className="text-4xl text-gray-800 mb-7.5"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.h2>
  );

  const ProjectCard = ({ title, description }) => (
    <motion.div 
      className="bg-gray-100/90 rounded-lg p-5 shadow-md backdrop-blur-sm"
      whileHover={{ 
        x: 5,
        scale: 1.01,
        transition: { duration: 0.2 }
      }}
    >
      <motion.h3 
        className="text-2xl transition-all duration-200"
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
      <p>{description}</p>
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
      <Icon className="w-8 h-8 fill-current text-gray-600 hover:text-gray-800" />
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
        opacity-0 group-hover:opacity-100 transition-opacity duration-200
        text-sm text-gray-600 whitespace-nowrap bg-white/90 px-2 py-1 rounded">
        {name}
      </span>
    </motion.a>
  );


  return (
    <div className="relative z-10 max-w-6xl mx-auto p-5 text-center">
      {/* Background */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          opacity: '0.4'
        }}
      />

      <header className="py-15 px-0 bg-white/90 rounded-xl backdrop-blur-sm">
        <BlurIn
          word="Xin Jiang"
          className="text-5xl font-bold text-gray-800"
        />
        <WordPullUp
          words="Software Development Engineer"
          className="text-2xl text-gray-600 mt-2.5"
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
        </div>
      </header>

      <main>
        <BlurFade delay={0.2}>
          <section className="my-15 p-5 bg-white/90 rounded-xl backdrop-blur-sm">
            <SectionTitle>About Me</SectionTitle>
            <div className="text-left">
              <p>
                Hello! I'm Xin Jiang, a Software Development Engineer passionate about
                creating efficient and innovative solutions. 
              </p>
            </div>
          </section>
        </BlurFade>

        <div className="w-[85%] mx-auto my-10">
          <SnakeSVG className="w-full h-full object-cover" />
        </div>

        <BlurFade delay={0.4}>
          <section className="my-15 p-5 bg-white/90 rounded-xl backdrop-blur-sm">
            <SectionTitle>Projects</SectionTitle>
            <div className="text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                <ProjectCard 
                  title="Project 1"
                  description="Project description goes here"
                />
                <ProjectCard 
                  title="Project 2"
                  description="Project description goes here"
                />
                <ProjectCard 
                  title="Project 3"
                  description="Project description goes here"
                />
              </div>
            </div>
          </section>
        </BlurFade>

        <BlurFade delay={0.6}>
          <section className="my-15 p-5 bg-white/90 rounded-xl backdrop-blur-sm">
            <SectionTitle>Skills</SectionTitle>
            <div className="relative flex size-full max-w-lg mx-auto items-center justify-center">
              <IconCloud />
            </div>
          </section>
        </BlurFade>
      </main>
    </div>
  );
}

export default App;
