"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99] 
    } 
  },
}

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const AnimatedSection = ({ children }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
  >
    {children}
  </motion.div>
)

const CoreTeamMember = ({ name, role, bio, image, linkedin, github }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative w-64 h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="rest"
      whileHover="hover"
      animate={isHovered ? "hover" : "rest"}
    >
      {/* Base card with shadow and scale */}
      <motion.div
        className="absolute inset-0 bg-white rounded-xl shadow-lg"
        variants={{
          rest: { 
            scale: 1,
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }
          },
          hover: { 
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }
          }
        }}
      />

      {/* Front face */}
      <AnimatePresence mode="wait">
        {!isHovered && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-primary/90 to-primary overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Background pattern for visual interest */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent" />
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { 
                  duration: 0.4,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
              className="relative z-10"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/30 shadow-xl">
                <Image
                  src={image}
                  alt={name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              className="relative z-10 text-center mt-4 px-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { 
                  delay: 0.1, 
                  duration: 0.4,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
            >
              <h3 className="text-black text-xl font-bold tracking-wide mb-2 drop-shadow-md">
                {name}
              </h3>
              <div className="relative">
                <p className="text-black/90 text-sm font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm inline-block">
                  {role}
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.2,
                    duration: 0.4,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }
                }}
                className="mt-3 flex justify-center space-x-3"
              >
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform transition-all hover:scale-110 hover:-translate-y-1"
                >
                  <Linkedin className="w-5 h-5 text-white/80 hover:text-white" />
                </a>
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform transition-all hover:scale-110 hover:-translate-y-1"
                >
                  <Github className="w-5 h-5 text-white/80 hover:text-white" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back face */}
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            className="absolute inset-0 p-6 rounded-xl bg-white"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ 
              clipPath: "circle(100% at 50% 50%)",
              transition: { 
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }}
            exit={{ 
              clipPath: "circle(0% at 50% 50%)",
              transition: { 
                duration: 0.4,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }}
          >
            <motion.div
              className="h-full flex flex-col justify-between"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }
                  }
                }}
              >
                <h3 className="text-gray-900 text-xl font-bold mb-2">{name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
              </motion.div>
              
              <motion.div 
                className="flex justify-center space-x-4 pt-4"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }
                  }
                }}
              >
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform transition-transform hover:-translate-y-1"
                >
                  <Linkedin className="w-6 h-6 text-[#0077b5]" />
                </a>
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform transition-transform hover:-translate-y-1"
                >
                  <Github className="w-6 h-6 text-gray-700" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TeamSection = ({ title, members }) => (
  <AnimatedSection>
    <motion.section variants={fadeInUp} className="mb-16">
      <h2 className="text-4xl font-bold mb-12 text-center">{title}</h2>
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        variants={staggerChildren}
      >
        {members.map((member, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <CoreTeamMember {...member} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  </AnimatedSection>
)

export default function Team() {
  const headCore = {
    name: "T Lakshmi Srinivas",
    role: "CS21B2045",
    bio: "Passionate about leading and inspiring the Developers Club community.",
    image: "/assets/Head_core.png",
    linkedin: "https://www.linkedin.com/in/srinivastls/",
    github: "https://github.com/srinivastls"
  }

  const cores = [
    { name: "Vishnu Teja", role: "CS21B2017", bio: "Interested in coding, collaboration, and driving innovation through community-driven development initiatives.", image: '/assets/cs21b2027.jpg', linkedin: "https://www.linkedin.com/in/vishnu-surla-70384524a/", github: "https://github.com/Vishnuteja-Surla" },
    { name: "Harsha Vardhan G", role: "CS21B1052", bio: "Passionate AI enthusiast with research experience and strong technical skills.", image: "/assets/cs21b1052.jpg", linkedin: "https://www.linkedin.com/in/govindharshavardhan", github: "https://github.com/harshavardhan784" },
    { name: "K M V R Madhava Krishna", role: "CS22B1005", bio: "Data science student excelling in ML, Python, cloud integration, problem-solving, and impactful solutions.", image: "/assets/cs22b1005.jpg", linkedin: "https://www.linkedin.com/in/k-m-v-r-madhava-krishna-a71533262/", github: "https://github.com/Madhava0412" },
    { name: "Praneeth Devarasetty", role: "CS22B1014", bio: "Full Stack Developer skilled in React, Node.js, databases, APIs, responsive design, and performance optimization", image: "/assets/cs22b1014.jpg", linkedin: "https://www.linkedin.com/in/praneeth-devarasetty/", github: "https://github.com/praneeth622" },
    { name: "G Chaithanya Reddy", role: "CS22B1052", bio: "Networking expert, dedicated to expanding GDSC's partnerships and collaborations.", image: "/assets/cs22b1052.jpg", linkedin: "https://www.linkedin.com/in/chaitanya-reddy-gavinolla-22166b258/", github: "https://github.com/chaitanya-reddy-13" },
  ]

  const coordinators = [
    { name: " A Varshini ", role: "CS23B1015", bio: "Frontend specialist with a knack for creating responsive and accessible websites.", image: '/assets/cs23b1015.jpg', linkedin: "https://www.linkedin.com/in/varshini-avula", github: "https://github.com/varshini-1396" },

    { name: "R K Larika", role: "CS23B1028", bio: "Passionate learner exploring development and AI/ML.", image: "/assets/cs23b1028.jpg", linkedin: "https://www.linkedin.com/in/larika-rajasekaran-02b43a2a7/", github: "https://github.com/Larika85" },
    { name: " Sudarshan S", role: "CS23B2007", bio: "Intrigued by the fields of data analytics, iOS development, and graphic design, I have diligently sought to acquire a comprehensive understanding of these disciplines and their applications.", image: "/assets/cs23b2007.jpeg", linkedin: "https://www.linkedin.com/in/sudarshan-sudhakar-43a262274", github: "https://github.com/sxdxde" },
    { name: "Y Sainatha Reddy", role: "CS23I1010", bio: "Passionate about web development and cybersecurity, eager to make a difference in the digital world.", image: "/assets/cs23i1010.jpg", linkedin: "https://www.linkedin.com/in/sainatha-reddy/", github: "https://github.com/sainatha-reddy" },
    { name: "Y Harith", role: "CS23I1027", bio: "Interested in exploring all the fields of Computer Science specifically in Machine Learning and Web Development.", image: "/assets/cs23i1027.jpg", linkedin: "https://www.linkedin.com/in/harith-yerragolam-617486288/", github: "https://github.com/Harith-Y" },
    { name: "Deetya A M ", role: "CS23I1032", bio: "Driven by a deep interest in machine learning and web development, I continuously strive to expand my expertise in these fields and their practical applications.", image: "/assets/cs23i1032.jpg", linkedin: "https://www.linkedin.com/in/deetya-mehta-046582282", github: "https://github.com/deerobo1" },
    { name: "Vijay S K", role: "EC23B1012", bio: "Interested in artificial intelligence and machine learning, web development. I am willing to expand my knowledge in these fields.", image: "/assets/EC23B1012.png", linkedin: "https://www.linkedin.com/in/vijay-shanmugham-karthikheyen-313ab32ba/", github: "https://github.com/vijaysk06" },
    { name: "Hamsini Deshmukh", role: "ME23B2016", bio: "Exploring the intersection of hardware and software in the Internet of Things.", image: "/assets/me23b2016.jpg", linkedin: "https://www.linkedin.com/in/hamsini-deshmukh-59a5302a5/", github: "https: //github.com/Hamsinideshmukh" },
  ]

  const mentors = [
    { name: "Jashwanth Peddisetty", role: "Developer@Randomwalk.Ai", bio: "Developer at Randomwalk.Ai | Ex-Intern at Congruent Solutions | Web3 enthusiast | ETHForAll winner 🏆 | GDSC core member", image: "/assets/jashwanth.jpg", linkedin: "https://www.linkedin.com/in/jashwanth-peddisetty/", github: "https://github.com/jashwanth0712" },
    { name: "Vishnu Ram A V", role: "CS21B1043", bio: "Working on LLM and fine tuning", image: "/assets/cs21b1043.jpg", linkedin: "https://www.linkedin.com/in/vishnuram-av-6306b029a", github: "https://github.com/drrobertwhite" },
    { name: "K Noineesh Reddy", role: "CS21B2023", bio: "Exploring the intersection of hardware and software in the Internet of Things.", image: "/assets/cs21b2023.jpg", linkedin: "https://linkedin.com/in/profemmagreen", github: "https://github.com/profemmagreen" },
  ]
  const pics = [
    { name: "Dr. Preeth R", role: "Assistant Professor", bio: "Assistant Professor specializing in IoT, Machine Learning, Computer Vision, and Data Science research.", image: "/assets/Preeth.jpg", linkedin: "https://www.linkedin.com/in/preethr/"},
    ];

    const developers = [
        { name: "Praneeth Devarasetty", role: "Lead Developer", bio: "Leads the development team with expertise in Nextjs and cloud technologies.", image: "/assets/cs22b1014.jpg", linkedin: "https://www.linkedin.com/in/praneeth-devarasetty/", github: "https://github.com/praneeth622" },
        { name: "Surya Srirama Murthy", role: "UI/UX Designer", bio: "Sriram is responsible for creating the user interface and experience, focusing on user-centered design principles", image: '/assets/sriram.jpg', linkedin: "https://www.linkedin.com/in/vishnu-surla-70384524a/", github: "https://github.com/sriram0620" },
        { name: "Darshan Karthikeya", role: "UI/UX Designer", bio: "Darshan specializes in creating responsive and accessible web interfaces using modern frontend technologies.", image: "/assets/cs22b1022.jpg", linkedin: "https://www.linkedin.com/in/darshan-karthikeya/", github: "https://github.com/karthikeya1220" },
        { name: "G Chaithanya Reddy", role: "Frontend Developer", bio: "Chaithanya is a Front-end Developer focused on building responsive, intuitive user interfaces with clean code and modern tech.", image: "/assets/cs22b1052.jpg", linkedin: "https://www.linkedin.com/in/chaitanya-reddy-gavinolla-22166b258/", github: "https://github.com/chaitanya-reddy-13" },
        { name: "Y Sainatha Reddy", role: "Backend Developer", bio: "Sainatha is a Back-end Developer focused on building reliable system, managing data, and ensuring smooth connections between servers and users.", image: "/assets/cs23i1010.jpg", linkedin: "https://www.linkedin.com/in/sainatha-reddy/", github: "https://github.com/sainatha-reddy" },

      ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-16 text-center">Our Team</h1>
      
      {/* PIC Section */}
      <TeamSection title="PIC" members={pics} />
      <TeamSection title="Head Core" members={[headCore]} />
      <TeamSection title="Core Team" members={cores} />
      <TeamSection title="Coordinators" members={coordinators} />
      <TeamSection title="Mentors" members={mentors} />
      <TeamSection title="Developers" members={developers} />
    </div>
  )
}