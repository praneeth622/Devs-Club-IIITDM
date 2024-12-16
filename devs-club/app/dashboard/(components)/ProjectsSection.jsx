'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../../../components/ui/dialog"
import { Github, FileText, Calendar, Users } from 'lucide-react'
import { Card, CardContent } from '../../../components/ui/card'

export default function ProjectsSection({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null)

  const statusColors = {
    active: "bg-green-500",
    completed: "bg-blue-500",
    "on-hold": "bg-yellow-500"
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto">
        {projects.map((project, index) => (
          <Dialog key={project.title}>
            <DialogTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="h-full cursor-pointer bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div >
                      <div className={`${statusColors[project.status]} text-white mb-3 inline-flex`}>
                      <Badge >
                        {project.status}
                      </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{project.description.substring(0, 100)}...</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{project.startDate}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] bg-white">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <div className={`${statusColors[project.status]} text-white mb-3 inline-flex`}>
                  <Badge className={`${statusColors[project.status]} text-white`}>
                    {project.status}
                  </Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Team Leader</h3>
                    <p>{project.teamLeader}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Start Date</h3>
                    <p>{project.startDate}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Team Members</h3>
                  <div className="flex flex-wrap gap-2 ">
                    {project.members.map((member, index) => (
                      <Badge key={index} className="bg-gray-400 rounded hover:bg-gray-300" variant="secondary">{member}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <Button variant="outline" onClick={() => window.open(project.githubLink, '_blank')}>
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Repo
                    </Button>
                  )}
                  {project.driveLink && (
                    <Button variant="outline" onClick={() => window.open(project.driveLink, '_blank')}>
                      <FileText className="mr-2 h-4 w-4" />
                      Drive Link
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </motion.section>
  )
}

