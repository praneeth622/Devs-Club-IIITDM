'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { ScrollArea } from "../../../components/ui/scroll-area"
import { BarChart, Users, Folder, BookOpen, Settings, Plus, Edit, Trash } from 'lucide-react'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-800 mb-8"
      >
        Admin Dashboard
      </motion.h1>

      <div className="flex">
        {/* Left side: Tab List */}
        <div className="w-1/4 pr-8">
        <Tabs>
          <TabsList className="flex flex-col gap-4">
            {['dashboard', 'resources', 'projects', 'team', 'access', 'settings'].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="data-[state=active]:bg-black data-[state=active]:text-white-foreground w-full text-left px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200"
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          </Tabs>
        </div>

        {/* Right side: Tab Content */}
        <div className="w-3/4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsContent value="dashboard">
              <motion.div
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <StatsCard title="Total Resources" value="24" icon={BookOpen} />
                <StatsCard title="Active Projects" value="7" icon={Folder} />
                <StatsCard title="Team Members" value="12" icon={Users} />
                <StatsCard title="Admin Users" value="3" icon={Settings} />
              </motion.div>
            </TabsContent>

            <TabsContent value="resources">
              <motion.div variants={tabVariants} initial="hidden" animate="visible">
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Resources</CardTitle>
                    <CardDescription>Add, edit, or delete resources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResourceManager />
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="projects">
              <motion.div variants={tabVariants} initial="hidden" animate="visible">
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Projects</CardTitle>
                    <CardDescription>Add, edit, or delete projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ProjectManager />
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="team">
              <motion.div variants={tabVariants} initial="hidden" animate="visible">
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Team</CardTitle>
                    <CardDescription>Add, edit, or delete team members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TeamManager />
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="access">
              <motion.div variants={tabVariants} initial="hidden" animate="visible">
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Admin Access</CardTitle>
                    <CardDescription>Control admin permissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AdminAccessManager />
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="settings">
              <motion.div variants={tabVariants} initial="hidden" animate="visible">
                <Card>
                  <CardHeader>
                    <CardTitle>Admin Settings</CardTitle>
                    <CardDescription>Configure admin dashboard settings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SettingsManager />
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
function StatsCard({ title, value, icon: Icon }) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

function ResourceManager() {
  const [resources, setResources] = useState([
    { id: 1, name: 'Google Cloud Docs', category: 'Documentation' },
    { id: 2, name: 'Cybersecurity Course', category: 'Course' },
  ])

  return (
    <div className="space-y-4">
      <Button className="w-full"><Plus className="mr-2 h-4 w-4" /> Add Resource</Button>
      <ScrollArea className="h-[300px]">
        {resources.map((resource) => (
          <div key={resource.id} className="flex items-center justify-between p-2 hover:bg-accent">
            <div>
              <p className="font-medium">{resource.name}</p>
              <p className="text-sm text-muted-foreground">{resource.category}</p>
            </div>
            <div>
              <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Trash className="h-4 w-4" /></Button>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}

function ProjectManager() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Website Redesign', status: 'In Progress' },
    { id: 2, name: 'Mobile App Development', status: 'Planning' },
  ])

  return (
    <div className="space-y-4">
      <Button className="w-full"><Plus className="mr-2 h-4 w-4" /> Add Project</Button>
      <ScrollArea className="h-[300px]">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center justify-between p-2 hover:bg-accent">
            <div>
              <p className="font-medium">{project.name}</p>
              <p className="text-sm text-muted-foreground">{project.status}</p>
            </div>
            <div>
              <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Trash className="h-4 w-4" /></Button>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}

function TeamManager() {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Smith', role: 'Designer' },
  ])

  return (
    <div className="space-y-4">
      <Button className="w-full"><Plus className="mr-2 h-4 w-4" /> Add Team Member</Button>
      <ScrollArea className="h-[300px]">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex items-center justify-between p-2 hover:bg-accent">
            <div>
              <p className="font-medium">{member.name}</p>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
            <div>
              <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Trash className="h-4 w-4" /></Button>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}

function AdminAccessManager() {
  const [admins, setAdmins] = useState([
    { id: 1, name: 'Admin User', email: 'admin@example.com' },
    { id: 2, name: 'Super Admin', email: 'superadmin@example.com' },
  ])

  return (
    <div className="space-y-4">
      <Button className="w-full"><Plus className="mr-2 h-4 w-4" /> Add Admin</Button>
      <ScrollArea className="h-[300px]">
        {admins.map((admin) => (
          <div key={admin.id} className="flex items-center justify-between p-2 hover:bg-accent">
            <div>
              <p className="font-medium">{admin.name}</p>
              <p className="text-sm text-muted-foreground">{admin.email}</p>
            </div>
            <div>
              <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Trash className="h-4 w-4" /></Button>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}

function SettingsManager() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="site-name">Site Name</Label>
        <Input id="site-name" placeholder="Enter site name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="admin-email">Admin Email</Label>
        <Input id="admin-email" type="email" placeholder="admin@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="timezone">Timezone</Label>
        <Input id="timezone" placeholder="Select timezone" />
      </div>
      <Button className="w-full">Save Settings</Button>
    </div>
  )
}
