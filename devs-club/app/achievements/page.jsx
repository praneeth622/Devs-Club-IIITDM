'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useAnimationFrame, useInView, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from 'framer-motion'
import { Award, Users, TrendingUp, Trophy, Code, Zap, Globe, Cpu, Cloud, CpuIcon, GlobeIcon, Code2, BarChart2, ZapIcon } from 'lucide-react'
import Navbar from '../(components)/Navbar'
import { Footer } from '../(components)/Footer'
import HeroSection from './(components)/Herosection'

const achievements = [
  {
    title: "Google Cloud Study Jams",
    description: "Multi-session event with practical Google Cloud experience, resulting in certifications.",
    icon: <Cloud className="w-8 h-8 text-primary" />
  },
  {
    title: "Mastering Deep Learning",
    description: "Insights into deep learning models and industrial expectations, led by AMD senior.",
    icon: <CpuIcon className="w-8 h-8 text-primary" />
  },
  {
    title: "Winter Innovation Challenge",
    description: "Students proposed tech solutions to global issues, aligned with WHO goals.",
    icon: <GlobeIcon className="w-8 h-8 text-primary" />
  },
  {
    title: "Vashisht Hackathon",
    description: "Massive hackathon with 1100+ participants, focusing on innovative tech solutions.",
    icon: <Code className="w-8 h-8 text-primary" />
  },
  {
    title: "Data Analytics Series",
    description: "Two-part session on data analytics, including coding and theory.",
    icon: <BarChart2 className="w-8 h-8 text-primary" />
  },
  {
    title: "Intro to Deep Learning",
    description: "Hands-on session on deep learning model development by the core team.",
    icon: <ZapIcon className="w-8 h-8 text-primary" />
  }
]

const benefits = [
  {
    title: "Skill Development",
    description: "Practical learning with cutting-edge technologies.",
    icon: <Award className="w-12 h-12 text-primary" />
  },
  {
    title: "Networking",
    description: "Build connections with peers and industry leaders.",
    icon: <Users className="w-12 h-12 text-primary" />
  },
  {
    title: "Career Advancement",
    description: "Strengthen resume and develop leadership skills.",
    icon: <TrendingUp className="w-12 h-12 text-primary" />
  },
  {
    title: "Recognition",
    description: "Showcase talent at industry events.",
    icon: <Trophy className="w-12 h-12 text-primary" />
  }
]

const AnimatedCard = ({ children, index }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className="bg-card text-card-foreground rounded-lg shadow-lg p-6 h-full backdrop-blur-sm bg-opacity-80 border border-primary/10 hover:border-primary/30 transition-all duration-300"
    >
      {children}
    </motion.div>
  )
}

const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  )
}

const PreviousAchievements = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute text-black inset-0 bg-gradient-to-b from-background via-background/50 to-background z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 ">
        <motion.h2 
          className="text-6xl font-bold text-center bg-clip-text text-blue-600 bg-gradient-to-r mb-20 from-primary to-secondary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Previous Achievements
        </motion.h2>
        <div className='m-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {achievements.map((achievement, index) => (
            <AnimatedCard key={index} index={index}>
              <div className="flex items-center mb-4">
                {achievement.icon}
                <h3 className="text-xl font-semibold ml-4">{achievement.title}</h3>
              </div>
              <p className="text-muted-foreground">{achievement.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

const BenefitsOfJoining = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section className="py-16 mb-16 relative overflow-hidden" ref={ref}>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-6xl font-bold text-center mb-12 bg-clip-text text-blue-600 bg-gradient-to-r from-secondary to-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Benefits of Joining Developers Club
        </motion.h2>
        <div className='mt-10'>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 m-5"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate={controls}
        >
          {benefits.map((achievement, index) => (
            <AnimatedCard key={index} index={index}>
              <div className="flex items-center mb-4">
                {achievement.icon}
                <h3 className="text-xl font-semibold ml-4">{achievement.title}</h3>
              </div>
              <p className="text-muted-foreground">{achievement.description}</p>
            </AnimatedCard>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  )
}


export default function AchievementsAndBenefits() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <PreviousAchievements />
      <BenefitsOfJoining />
      <Footer />
    </div>
  )
}