import { motion } from 'framer-motion'
import TeamMemberCard from './TeamMemberCard'

export default function TeamMemberGrid({ members }) {
  return (
    <div className="container mx-auto px-4">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <TeamMemberCard member={member} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

