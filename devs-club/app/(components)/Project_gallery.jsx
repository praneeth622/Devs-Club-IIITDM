import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { title: 'Annual Hackathon', image: '/assets/img4.png' },
  { title: 'Coding Workshop', image: '/assets/img5.png' },
  { title: 'Project Session', image: '/assets/img6.png' },
  { title: 'Team Collaboration', image: '/assets/img7.png' },
]

export const ProjectsGallery = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 mb-4 dark:text-white/80 font-bold"
        >
          Our Projects Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-white/30 mb-12"
        >
          Take a look at some of our past projects and events, showcasing our creativity and technical skills.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800"
            >
              <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white/80">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
    