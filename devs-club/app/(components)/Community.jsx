

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import image1 from '../../public/assets/image.png'

export const JoinCommunity = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Image src={image1} alt="Join our community" width={600} height={400} className="mx-auto" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 mb-6"
        >
          Join Our Developer Community
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          Whether you are a beginner or an experienced developer, we welcome you to be part of our growing club. Let’s build, learn, and innovate together!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link href="/dashboard" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-full transition-transform transform hover:scale-105">
            Join Us Today
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
