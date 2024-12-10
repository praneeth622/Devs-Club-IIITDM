import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function TeamMember({ member, isEven }) {
  return (
    <motion.div 
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full md:w-1/3">
        <div className="relative h-64 w-64 mx-auto">
          <Image
            src={member.photo}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
        <h3 className="text-lg font-semibold text-blue-500 mb-3">{member.role}</h3>
        <p className="text-gray-600 mb-4">{member.description}</p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a 
            href={member.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-700 transition-colors duration-300"
          >
            <FaGithub size={24} />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

