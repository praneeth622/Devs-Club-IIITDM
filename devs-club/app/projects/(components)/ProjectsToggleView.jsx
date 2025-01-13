"use client"
import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import ProjectsList from './ProjectsList'  // import ProjectsList

export default function ProjectsToggleView({ projects }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const activeProjects = projects.filter(project => project.status === 'active')
  const completedProjects = projects.filter(project => 
    project.status === 'completed' || project.status === 'on-hold' || !project.status || project.status === ''
  )

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {['Active Projects', 'Completed Projects'].map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
                ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2
                ${
                  selected
                    ? 'bg-white shadow'
                    : 'text-black-100 hover:bg-black/[0.12] hover:text-white'
                }`
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className="rounded-xl p-3">
            <ProjectsList projects={activeProjects} />
          </Tab.Panel>
          <Tab.Panel className="rounded-xl p-3">
            <ProjectsList projects={completedProjects} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
