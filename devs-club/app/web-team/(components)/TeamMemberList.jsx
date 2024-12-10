import { motion } from 'framer-motion'
import TeamMember from './TeamMember'

export default function TeamMemberList({ members }) {
  return (
    <div className="container mx-auto px-4">
      <motion.ul 
        className="space-y-16 mx-auto"
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
          <motion.li
            key={member.name}
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 50 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <TeamMember member={member} isEven={index % 2 === 0} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

