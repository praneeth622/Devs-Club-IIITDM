
import { motion, useAnimation, useAnimationFrame, useInView, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from 'framer-motion'
export default function HeroSection  (){
    return (
      <div>
        {/* Header */}
        <section className="text-center bg-sky-50 px-6 py-24 lg:py-32">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Developers Club's Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto"
          >
            Join us on a journey of innovation and coding excellence. Discover our
            projects, meet our team, and be part of our vibrant community.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            Empowering students to learn, create, and innovate
          </motion.div>
        </section>
      </div>
    );
  }