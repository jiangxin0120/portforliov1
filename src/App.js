import { useEffect } from 'react';
import { ReactComponent as SnakeSVG } from './static/snake-Light.svg';
import BlurIn from "./components/ui/blur-in";
import WordPullUp from "./components/ui/word-pull-up";
import BlurFade from "./components/ui/blur-fade";
import { motion } from "framer-motion";
import backgroundImage from './static/地方都市@ArseniXC.jpg';

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
            <div className="text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-gray-100/90 rounded-lg p-5 backdrop-blur-sm">
                  <h3 className="text-2xl">Programming Languages</h3>
                  <ul className="list-none p-0">
                    <li className="my-2.5 text-lg">JavaScript</li>
                    <li className="my-2.5 text-lg">Python</li>
                    <li className="my-2.5 text-lg">Java</li>
                  </ul>
                </div>
                <div className="bg-gray-100/90 rounded-lg p-5 backdrop-blur-sm">
                  <h3 className="text-2xl">Technologies</h3>
                  <ul className="list-none p-0">
                    <li className="my-2.5 text-lg">React</li>
                    <li className="my-2.5 text-lg">Node.js</li>
                    <li className="my-2.5 text-lg">Git</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </BlurFade>
      </main>
    </div>
  );
}

export default App;
