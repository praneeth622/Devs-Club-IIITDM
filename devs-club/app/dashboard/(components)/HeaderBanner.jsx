import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeaderBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/placeholder.svg?height=320&width=1024"
          alt="GDSC Banner"
          layout="fill"
          objectFit="cover"
          className="parallax-bg"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/70 to-green-500/70 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="GDSC Logo"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
            </motion.div>
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-white mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Welcome back, User!
            </motion.h1>
            <motion.p
              className="text-xl text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Ready to innovate?
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
