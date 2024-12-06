import React from 'react';
import { Cloud, renderSimpleIcon } from 'react-icon-cloud';
import { 
  siOpenjdk,
  siPython,
  siJavascript,
  siMysql,
  siReact,
  siNodedotjs,
  siAmazon,
  siGit,
  siJenkins,
  siDocker,
  siApachekafka,
  siSpring,
  siDotnet,
  siDjango,
  siPostgresql,
  siJira,
  siConfluence,
  siAngular,
  siTypescript,
  siMongodb,
  siRedis,
  siNginx,
  siKubernetes,
  siTailwindcss,
  siBootstrap,
  siJquery,
  siPostman,
  siLinux,
  siUbuntu,
  siIntellijidea,
  siEclipseide,
  siGithub,
  siGitlab,
  siBitbucket,
  siGradle
} from 'simple-icons';

const icons = [
  // Programming Languages & Core Tech
  siOpenjdk,
  siPython,
  siJavascript,
  siTypescript,
  siMysql,
  siReact,
  siNodedotjs,
  siPostgresql,
  siAngular,
  siMongodb,
  siRedis,
  
  // Cloud & DevOps
  siAmazon,
  siGit,
  siJenkins,
  siDocker,
  siKubernetes,
  siApachekafka,
  siNginx,
  
  // Frameworks & Libraries
  siSpring,
  siDotnet,
  siDjango,
  siTailwindcss,
  siBootstrap,
  siJquery,
  
  // Development Tools
  siPostman,
  siLinux,
  siUbuntu,
  siIntellijidea,
  siEclipseide,
  
  // Version Control & Project Management
  siGithub,
  siGitlab,
  siBitbucket,
  siJira,
  siConfluence,
  
  // Build Tools
  siGradle
].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 42,
    aProps: {
      onClick: (e: any) => e.preventDefault()
    }
  });
});

const IconCloud = () => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      <Cloud>
        {icons}
        <a>Skills</a>
      </Cloud>
    </div>
  );
};

export default IconCloud; 