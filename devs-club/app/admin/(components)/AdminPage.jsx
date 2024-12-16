'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger }from  "../../../components/ui/dialog"
import { Label } from "../../../components/ui/label"
import { Checkbox } from "../../../components/ui/checkbox"
import { ScrollArea } from "../../../components/ui/scroll-area"
import { BarChart, Users, Folder, BookOpen, Settings, Plus, Edit, Trash, Menu, X } from  'lucide-react'
import { Textarea } from "../../../components/ui/textarea"
import { useUser } from '@clerk/nextjs'
import axios from 'axios'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-4 md:p-8 flex items-center justify-between"
      >
        <motion.h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Admin Dashboard
        </motion.h1>
        
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </motion.div>

      <div className="flex flex-col md:flex-row">
        <div className={`
          ${isMobileMenuOpen ? 'block' : 'hidden'} 
          md:block 
          w-full md:w-64 lg:w-72 
          fixed md:relative 
          top-0 left-0 
          h-screen md:h-auto 
          z-50 md:z-0
          bg-white md:bg-transparent
          pt-16 md:pt-0
        `}>
          <div className="p-4 md:p-6 h-full relative">
            <button 
              className="md:hidden absolute top-[-48px] right-4 p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>

            <Tabs orientation="vertical" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="flex flex-col w-full space-y-2 rounded-lg p-2 items-start">
                {['dashboard', 'resources', 'projects', 'team', 'access', 'settings'].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      w-full text-left px-4 py-3 
                      rounded-md transition-all duration-200 
                      flex items-center justify-start
                      ${activeTab === tab 
                        ? 'bg-primary text-primary-foreground border-5 border-black bg-gray-500 shadow-sm' 
                        : 'hover:bg-gray-300 text-gray-600 hover:text-gray-900'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <span className="flex-shrink-0">{getTabIcon(tab)}</span>
                      <span className="capitalize truncate text-left">{tab}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="flex-1 md:pl-6 p-4 bg-transparent">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            {/* Dashboard Tab */}
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

            {/* Resources Tab */}
            <TabsContent value="resources">
              <Card >
                <CardHeader>
                  <CardTitle>Manage Resources</CardTitle>
                  <CardDescription>Add, edit, or delete resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResourceManager />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Projects Tab */}
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

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden pt-16"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
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
  const [resources, setResources] = useState([]) // Start with an empty list
  const [isAddingResource, setIsAddingResource] = useState(false)
  const [newResource, setNewResource] = useState({
    name: '',
    description: '',
    logo: '',
    documents: { checked: false, url: '' },
    course: { checked: false, url: '' },
    community: { checked: false, url: '' },
  })

  const handleAddResource = () => {
    setResources([...resources, { id: Date.now(), ...newResource }])
    setIsAddingResource(false)
    resetNewResourceForm()
  }

  const resetNewResourceForm = () => {
    setNewResource({
      name: '',
      description: '',
      logo: '',
      documents: { checked: false, url: '' },
      course: { checked: false, url: '' },
      community: { checked: false, url: '' },
    })
  }

  return (
    <div className="space-y-4">
      <Dialog open={isAddingResource} onOpenChange={setIsAddingResource}>
        <DialogTrigger asChild>
          <Button className="w-full"><Plus className="mr-2 h-4 w-4" /> Add Resource</Button>
        </DialogTrigger>
        <DialogContent className='bg-white'>
          <DialogHeader>
            <DialogTitle>Add New Resource</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 ">
            <div>
              <Label htmlFor="resource-name">Name</Label>
              <Input id="resource-name" value={newResource.name} onChange={(e) => setNewResource({ ...newResource, name: e.target.value })} />
            </div>
            <div className='border-black'>
              <Label htmlFor="resource-description">Description</Label>
              <Textarea id="resource-description border-black" value={newResource.description} onChange={(e) => setNewResource({ ...newResource, description: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="resource-logo">Logo</Label>
              <Input id="resource-logo" value={newResource.logo} onChange={(e) => setNewResource({ ...newResource, logo: e.target.value })} />
            </div>
            {['documents', 'course', 'community'].map((field) => (
              <div key={field} className="flex items-center space-x-2">
                <Checkbox
                  id={`resource-${field}`}
                  checked={newResource[field].checked}
                  onCheckedChange={(checked) => setNewResource({ ...newResource, [field]: { ...newResource[field], checked } })}
                />
                <Label htmlFor={`resource-${field}`}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                {newResource[field].checked && (
                  <Input
                    value={newResource[field].url}
                    onChange={(e) => setNewResource({ ...newResource, [field]: { ...newResource[field], url: e.target.value } })}
                    placeholder={`Enter ${field} URL`}
                  />
                )}
              </div>
            ))}
            <Button onClick={handleAddResource}>Submit</Button>
          </div>
        </DialogContent>
      </Dialog>
      <ScrollArea className="h-[300px]">
        {resources.map((resource) => (
          <div key={resource.id} className="flex items-center justify-between p-2 hover:bg-accent">
            <div>
              <p className="font-medium">{resource.name}</p>
              <p className="text-sm text-muted-foreground">{resource.description}</p>
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

  const [isAddingProject, setIsAddingProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    teamLead: { name: '', linkedin: '', github: '' },
    teamMembers: [{ name: '', linkedin: '', github: '' }], 
    fullDescription: '',
  });

  const handleAddProject = async () => {
    try {
      console.log("New Project Data: ", newProject);  // Log the project data
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      });
  
      const result = await response.json();
  
      if (result.success) {
        setProjects([...projects, result.data]);
        setIsAddingProject(false);
        setNewProject({
          name: '',
          description: '',
          teamLead: { name: '', photo: '', linkedin: '', github: '' },
          teamMembers: [{ name: '', linkedin: '', github: '' }],
          fullDescription: '',
        });
      } else {
        setError('Failed to add project');
      }
    } catch (err) {
      setError('Error adding project');
      console.error(err);  // Log any error
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const result = await response.json();
        if (result.success) {
          setProjects(result.data);
        } else {
          setError('Failed to fetch projects');
        }
        setLoading(false);
      } catch (err) {
        setError('Error fetching projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Handle team member changes
  const handleTeamMemberChange = (index, field, value) => {
    const updatedTeamMembers = [...newProject.teamMembers];
    updatedTeamMembers[index][field] = value;
    setNewProject({ ...newProject, teamMembers: updatedTeamMembers });
  };

  // Add new team member
  const handleAddTeamMember = () => {
    setNewProject({
      ...newProject,
      teamMembers: [...newProject.teamMembers, { name: '', linkedin: '', github: '' }],
    });
  };

  // Delete project
  const handleDeleteProject = async (projectId) => {
    try {
      const response = await fetch('/api/projects', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: projectId }),
      });

      const result = await response.json();

      if (result.success) {
        // Remove the deleted project from the state
        setProjects(projects.filter(project => project.id !== projectId));
      } else {
        setError('Failed to delete project');
      }
    } catch (err) {
      setError('Error deleting project');
      console.error("unable to delete project",err);
    }
  };


  return (
    <div className="container mx-auto p-4 space-y-4">
    <Dialog open={isAddingProject} onOpenChange={setIsAddingProject}>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto"><Plus className="mr-2 h-4 w-4" /> Add Project</Button>
      </DialogTrigger>
      <DialogContent className="bg-white max-w-4xl w-full">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="project-name">Name</Label>
              <Input id="project-name" value={newProject.name} onChange={(e) => setNewProject({...newProject, name: e.target.value})} />
            </div>
            <div>
              <Label htmlFor="project-description">Description</Label>
              <Input id="project-description" value={newProject.description} onChange={(e) => setNewProject({...newProject, description: e.target.value})} />
            </div>
          </div>
          <div>
            <Label htmlFor="project-full-description">Full Description</Label>
            <Textarea id="project-full-description" value={newProject.fullDescription} onChange={(e) => setNewProject({...newProject, fullDescription: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label>Team Lead</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Name" value={newProject.teamLead.name} onChange={(e) => setNewProject({...newProject, teamLead: {...newProject.teamLead, name: e.target.value}})} />
              <Input placeholder="Photo URL" value={newProject.teamLead.photo} onChange={(e) => setNewProject({...newProject, teamLead: {...newProject.teamLead, photo: e.target.value}})} />
              <Input placeholder="LinkedIn" value={newProject.teamLead.linkedin} onChange={(e) => setNewProject({...newProject, teamLead: {...newProject.teamLead, linkedin: e.target.value}})} />
              <Input placeholder="GitHub" value={newProject.teamLead.github} onChange={(e) => setNewProject({...newProject, teamLead: {...newProject.teamLead, github: e.target.value}})} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Team Members</Label>
            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
              {newProject.teamMembers.map((member, index) => (
                <Card key={index} className="p-4 mb-4">
                  <CardContent className="p-0 space-y-2">
                    <Input
                      placeholder="Member Name"
                      value={member.name}
                      onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                    />
                    <Input
                      placeholder="LinkedIn"
                      value={member.linkedin}
                      onChange={(e) => handleTeamMemberChange(index, 'linkedin', e.target.value)}
                    />
                    <Input
                      placeholder="GitHub"
                      value={member.github}
                      onChange={(e) => handleTeamMemberChange(index, 'github', e.target.value)}
                    />
                  </CardContent>
                </Card>
              ))}
            </ScrollArea>
            <Button variant="outline" onClick={handleAddTeamMember} className="w-full">Add Team Member</Button>
          </div>
        </div>
        <Button onClick={handleAddProject} className="w-full mt-4">Submit</Button>
      </DialogContent>
    </Dialog>
    <ScrollArea className="h-[calc(100vh-200px)] w-full rounded-md border">
      {projects.map((project) => (
        <div key={project.id} className="flex items-center justify-between p-4 hover:bg-accent">
          <div>
            <p className="font-medium">{project.name}</p>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </div>
          <div>
          <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => handleDeleteProject(project.id)}  // Handle project delete
              >
                <Trash className="h-4 w-4" />
              </Button>
            {/* <Button variant="ghost" size="icon"><Trash className="h-4 w-4" /></Button> */}
          </div>
        </div>
      ))}
    </ScrollArea>
  </div>
  )
}

function TeamManager() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Vishnu Teja",
      role: "Technical Lead",
      position: "Core",
      bio: "Full-stack developer with a keen interest in cloud technologies and DevOps.",
      image: '/assets/cs21b2027.jpg',
      linkedin: "https://linkedin.com/in/vishnuteja",
      github: "https://github.com/vishnuteja"
    },
  ]);

  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    position: '',
    bio: '',
    image: '',
    linkedin: '',
    github: '',
  });

  const handleAddMember = () => {
    setTeamMembers([...teamMembers, { id: Date.now(), ...newMember }]);
    setIsAddingMember(false);
    setNewMember({
      name: '',
      role: '',
      position: '',
      bio: '',
      image: '',
      linkedin: '',
      github: '',
    });
  };

  return (
    <div className="space-y-4">
      <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>
        <DialogTrigger asChild>
          <Button className="w-full">
            <Plus className="mr-2 h-4 w-4" /> Add Team Member
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Add New Team Member</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4"> {/* Grid layout with 2 columns */}
            <div>
              <Label htmlFor="member-name">Name</Label>
              <Input
                id="member-name"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="member-role">Role</Label>
              <Input
                id="member-role"
                value={newMember.role}
                onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="member-position">Position</Label>
              <select
                id="member-position"
                value={newMember.position}
                onChange={(e) => setNewMember({ ...newMember, position: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Position</option>
                <option value="Head core">Head core</option>
                <option value="Core">Core</option>
                <option value="Coordinator">Coordinator</option>
              </select>
            </div>
            <div>
              <Label htmlFor="member-bio">Bio</Label>
              <Textarea
                id="member-bio"
                value={newMember.bio}
                onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="member-image">Image URL</Label>
              <Input
                id="member-image"
                value={newMember.image}
                onChange={(e) => setNewMember({ ...newMember, image: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="member-linkedin">LinkedIn</Label>
              <Input
                id="member-linkedin"
                value={newMember.linkedin}
                onChange={(e) => setNewMember({ ...newMember, linkedin: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="member-github">GitHub</Label>
              <Input
                id="member-github"
                value={newMember.github}
                onChange={(e) => setNewMember({ ...newMember, github: e.target.value })}
              />
            </div>
            <div className="col-span-2"> {/* Full width button */}
              <Button onClick={handleAddMember} className="w-full">
                Submit
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ScrollArea className="h-[300px]">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex items-center justify-between p-2 hover:bg-accent">
            <div>
              <p className="font-medium">{member.name}</p>
              <p className="text-sm text-muted-foreground">
                {member.role} - {member.position}
              </p>
            </div>
            <div>
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}

function AdminAccessManager() {

  const { user, isSignedIn, isLoaded } = useUser();
  const [admins, setAdmins] = useState([]); // Changed from `isAdmin` to `admins`
  const [isAddingAdmin, setIsAddingAdmin] = useState(false);
  const [newAdmin, setNewAdmin] = useState({ name: '', role: '', email: '' });
  

  // Fetch admins from the backend
  useEffect(() => {
    async function fetchAdmins() {
      try {
        const response = await axios.get('/api/admin');
        setAdmins(response.data.data); // Store the admin data in the state
      } catch (error) {
        console.error("Error fetching admins:", error);
      }
    }
    fetchAdmins();
  }, []);

  // Add a new admin
  const handleAddAdmin = async () => {
    try {
      const response = await axios.post('/api/admin', newAdmin);
      setAdmins([...admins, response.data.data]);
      setIsAddingAdmin(false);
      setNewAdmin({ name: '', role: '', email: '' });
    } catch (error) {
      console.error("Error adding admin:", error);
    }
  };

  // Delete an admin
  const handleDeleteAdmin = async (id) => {
    try {
      await axios.delete('/api/admin', { data: { id } }); // Send the `id` as the body
      setAdmins(admins.filter((admin) => admin._id !== id)); // Use `_id` here too
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };

  return (
    <div className="space-y-4">
      <Dialog open={isAddingAdmin} onOpenChange={setIsAddingAdmin}>
        <DialogTrigger asChild>
          <Button className="w-full">
            <Plus className="mr-2 h-4 w-4" /> Add Admin
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Add New Admin</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="admin-name">Name</Label>
              <Input
                id="admin-name"
                value={newAdmin.name}
                onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="admin-email">Email</Label>
              <Input
                id="admin-email"
                type="email"
                value={newAdmin.email}
                onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="admin-role">Role</Label>
              <select
                id="admin-role"
                value={newAdmin.role}
                onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Role</option>
                <option value="Head-core">Head core</option>
                <option value="Core">Core</option>
                <option value="Coordinator">Coordinator</option>
                <option value="Admin">Admin</option>
                <option value="PIC">PIC</option>
                <option value="Incharge">Incharge</option>
                <option value="Misc">Misc</option>
              </select>
            </div>
            <div className="col-span-2">
              <Button onClick={handleAddAdmin} className="w-full">
                Submit
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ScrollArea className="h-[300px]">
        {admins.map((admin) => (
          <div key={admin.id} className="flex items-center justify-between p-2 hover:bg-accent">
            <div>
              <p className="font-medium">{admin.name}</p>
              <p className="text-sm text-muted-foreground">
                {admin.role} - {admin.email}
              </p>
            </div>
            <div>
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDeleteAdmin(admin._id)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
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

function getTabIcon(tab) {
  const iconProps = { 
    className: "h-5 w-5 flex-shrink-0",
    strokeWidth: 2 
  }
  
  switch (tab) {
    case 'dashboard':
      return <BarChart {...iconProps} />
    case 'resources':
      return <BookOpen {...iconProps} />
    case 'projects':
      return <Folder {...iconProps} />
    case 'team':
      return <Users {...iconProps} />
    case 'access':
      return <Settings {...iconProps} />
    case 'settings':
      return <Settings {...iconProps} />
    default:
      return null
  }
}