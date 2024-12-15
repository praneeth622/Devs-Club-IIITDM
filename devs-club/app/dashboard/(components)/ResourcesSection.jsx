'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Cloud, Code, Book, Settings, X, Link, Linkedin, Github, FileText } from 'lucide-react'
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import { SiAmazonwebservices, SiFlutter,SiCyberdefenders, SiKotlin, SiReact, SiGooglecloud, SiNodedotjs, SiPython } from 'react-icons/si';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "../../../components/ui/dialog"

const resources = [
  {
    name: 'Google Cloud',
    icon: SiGooglecloud,
    color: 'text-blue-500',
    bg: 'bg-blue-100',
    documents: [
      { name: 'Google Documentation', link: 'https://cloud.google.com/docs', icon: FileText },
      { name: 'W3Schools Cloud Guide', link: 'https://www.w3schools.com/whatis/whatis_cloud.asp', icon: Link },
    ],
    courses: [
      { name: 'Google Cloud Fundamentals', link: 'https://www.coursera.org/learn/gcp-fundamentals', icon: Linkedin },
      { name: 'Ultimate Google Cloud Certification', link: 'https://www.udemy.com/course/google-cloud-certification-associate-cloud-engineer/', icon: Link },
    ],
    community: [
      { name: 'Join Our Session', description: 'Date: June 15, 2023 | Time: 2 PM EST | Venue: Online', link: 'https://meet.google.com/abc-defg-hij', icon: Code },
      { name: 'Join Our Telegram Channel', link: 'https://t.me/googlecloudcommunity', icon: Link },
    ],
  },
  {
    name: 'Cyber Security',
    icon: SiCyberdefenders,
    color: 'text-green-500',
    bg: 'bg-green-100',
    documents: [
      { name: 'Google Documentation', link: 'https://cloud.google.com/docs', icon: FileText },
      { name: 'W3Schools Cloud Guide', link: 'https://www.w3schools.com/whatis/whatis_cloud.asp', icon: Link },
    ],
    courses: [
      { name: 'Google Cloud Fundamentals', link: 'https://www.coursera.org/learn/gcp-fundamentals', icon: Linkedin },
      { name: 'Ultimate Google Cloud Certification', link: 'https://www.udemy.com/course/google-cloud-certification-associate-cloud-engineer/', icon: Link },
    ],
    community: [
      { name: 'Join Our Session', description: 'Date: June 15, 2023 | Time: 2 PM EST | Venue: Online', link: 'https://meet.google.com/abc-defg-hij', icon: Code },
      { name: 'Join Our Telegram Channel', link: 'https://t.me/googlecloudcommunity', icon: Link },
    ],
  },
  {
    name: 'Data Science',
    icon: Book,
    color: 'text-purple-500',
    bg: 'bg-purple-100',
    documents: [
      { name: 'Google Documentation', link: 'https://cloud.google.com/docs', icon: FileText },
      { name: 'W3Schools Cloud Guide', link: 'https://www.w3schools.com/whatis/whatis_cloud.asp', icon: Link },
    ],
    courses: [
      { name: 'Google Cloud Fundamentals', link: 'https://www.coursera.org/learn/gcp-fundamentals', icon: Linkedin },
      { name: 'Ultimate Google Cloud Certification', link: 'https://www.udemy.com/course/google-cloud-certification-associate-cloud-engineer/', icon: Link },
    ],
  },
  {
    name: 'AI ML',
    icon: Settings,
    color: 'text-red-500',
    bg: 'bg-red-100',
    documents: [
      { name: 'Google Documentation', link: 'https://cloud.google.com/docs', icon: FileText },
      { name: 'W3Schools Cloud Guide', link: 'https://www.w3schools.com/whatis/whatis_cloud.asp', icon: Link },
    ],
    courses: [
      { name: 'Google Cloud Fundamentals', link: 'https://www.coursera.org/learn/gcp-fundamentals', icon: Linkedin },
      { name: 'Ultimate Google Cloud Certification', link: 'https://www.udemy.com/course/google-cloud-certification-associate-cloud-engineer/', icon: Link },
    ],
    community: [
      { name: 'Join Our Session', description: 'Date: June 15, 2023 | Time: 2 PM EST | Venue: Online', link: 'https://meet.google.com/abc-defg-hij', icon: Code },
      { name: 'Join Our Telegram Channel', link: 'https://t.me/googlecloudcommunity', icon: Link },
    ],
  },
  {
    name: 'App Dev (Kotlin)',
    icon: SiKotlin,
    color: 'text-orange-500',
    bg: 'bg-orange-100',
    documents: [
      { name: 'Kotlin Documentation', link: 'https://kotlinlang.org/docs/home.html', icon: FileText },
      { name: 'Android Developer Guide', link: 'https://developer.android.com/docs', icon: Link },
    ],
    courses: [
      { name: 'Kotlin for Beginners', link: 'https://www.udemy.com/course/kotlin-for-beginners/', icon: Linkedin },
      { name: 'Android Development with Kotlin', link: 'https://www.coursera.org/specializations/android-kotlin-development', icon: Link },
    ],
  },
  {
    name: 'App Dev (React Native)',
    icon: SiReact,
    color: 'text-yellow-500',
    bg: 'bg-yellow-100',
    documents: [
      { name: 'React Native Docs', link: 'https://reactnative.dev/docs/getting-started', icon: FileText },
      { name: 'React Native CLI Guide', link: 'https://reactnative.dev/docs/cli', icon: Link },
    ],
    courses: [
      { name: 'React Native Crash Course', link: 'https://www.udemy.com/course/react-native-the-practical-guide/', icon: Linkedin },
      { name: 'Build Apps with React Native', link: 'https://www.coursera.org/learn/react-native', icon: Link },
    ],
  },
  {
    name: 'App Dev (Flutter)',
    icon: SiFlutter,
    color: 'text-teal-500',
    bg: 'bg-teal-100',
    documents: [
      { name: 'Flutter Documentation', link: 'https://flutter.dev/docs', icon: FileText },
      { name: 'Flutter Widget Catalog', link: 'https://flutter.dev/docs/development/ui/widgets', icon: Link },
    ],
    courses: [
      { name: 'Flutter for Beginners', link: 'https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/', icon: Linkedin },
      { name: 'Dart and Flutter Development Bootcamp', link: 'https://www.udemy.com/course/flutter-bootcamp-with-dart/', icon: Link },
    ],
  },
  {
    name: 'Web Dev (MERN)',
    icon: SiNodedotjs,
    color: 'text-indigo-500',
    bg: 'bg-indigo-100',
    documents: [
      { name: 'MERN Stack Guide', link: 'https://www.mongodb.com/mern-stack', icon: FileText },
      { name: 'React Official Docs', link: 'https://reactjs.org/docs/getting-started.html', icon: Link },
    ],
    courses: [
      { name: 'MERN Stack Development', link: 'https://www.udemy.com/course/mern-stack-front-to-back/', icon: Linkedin },
      { name: 'Full-Stack React Projects', link: 'https://www.coursera.org/learn/full-stack-react', icon: Link },
    ],
  },
  {
    name: 'Web Dev (Python)',
    icon: SiPython,
    color: 'text-cyan-500',
    bg: 'bg-cyan-100',
    documents: [
      { name: 'Python Web Frameworks', link: 'https://wiki.python.org/moin/WebFrameworks', icon: FileText },
      { name: 'Django Official Docs', link: 'https://docs.djangoproject.com/en/stable/', icon: Link },
    ],
    courses: [
      { name: 'Python for Web Development', link: 'https://www.udemy.com/course/python-django-tutorial/', icon: Linkedin },
      { name: 'Flask and Django Web Dev', link: 'https://www.coursera.org/learn/python-django', icon: Link },
    ],
  },
  {
    name: 'Amazon Cloud (AWS)',
    icon: SiAmazonwebservices,
    color: 'text-pink-500',
    bg: 'bg-pink-100',
    documents: [
      { name: 'AWS Documentation', link: 'https://docs.aws.amazon.com/', icon: FileText },
      { name: 'AWS Whitepapers', link: 'https://aws.amazon.com/whitepapers/', icon: Link },
    ],
    courses: [
      { name: 'AWS Cloud Practitioner Essentials', link: 'https://www.coursera.org/learn/aws-cloud-practitioner-essentials', icon: Linkedin },
      { name: 'AWS Solutions Architect Certification', link: 'https://www.udemy.com/course/aws-certified-solutions-architect-associate/', icon: Link },
    ],
  },
]

export default function ResourcesSection() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [selectedResource, setSelectedResource] = useState(null)

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-8"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Resources & Tools</h2>
      <Card className="overflow-hidden shadow-lg">
        <CardContent className="p-0">
          <motion.div
            initial={false}
            animate={{ height: isResourcesOpen ? 'auto' : '56px' }}
            className="overflow-hidden"
          >
            <Button
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className="w-full text-[20px] justify-between rounded-none h-14 font-semibold bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
            >
              <span>{isResourcesOpen ? 'Hide Resources' : 'Explore Resources'}</span>
              <motion.div
                animate={{ rotate: isResourcesOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="h-6 w-6" />
              </motion.div>
            </Button>
            <AnimatePresence>
              {isResourcesOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                  {resources.map((resource, index) => (
                    <motion.button
                      key={resource.name}
                      onClick={() => setSelectedResource(resource)}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex flex-col items-center p-6 ${resource.bg} rounded-xl shadow-md hover:shadow-lg transition-all duration-200`}
                    >
                      <resource.icon className={`w-12 h-12 ${resource.color} mb-3`} />
                      <span className="text-lg font-semibold text-gray-800">{resource.name}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedResource} onOpenChange={() => setSelectedResource(null)}>
        <DialogContent className="sm:max-w-[555px] bg-white rounded-md p-6 shadow-xl">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2 text-xl font-bold">
              {selectedResource && (
                <>
                  <selectedResource.icon className={`w-6 h-6 ${selectedResource.color}`} />
                  <span>{selectedResource?.name}</span>
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-600">
              Explore documents, courses, and community resources.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {selectedResource && (
              <>
                {selectedResource.documents && selectedResource.documents.length > 0 && (
                  <ResourceSection title="Documents" items={selectedResource?.documents} />
                )}
                {selectedResource.courses && selectedResource.courses.length > 0 && (
                  <ResourceSection title="Courses" items={selectedResource?.courses} />
                )}
                {selectedResource.community && selectedResource.community.length > 0 && (
                  <ResourceSection title="Community" items={selectedResource?.community} />
                )}
              </>
            )}
          </div>
          <DialogClose asChild>
            <Button className="w-full mt-4 bg-gray-800 text-black hover:bg-gray-700 transition-colors border-b border-gray-600">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </motion.section>
  )
}

function ResourceSection({ title, items }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <item.icon className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-700">{item.name}</span>
              {item.description && (
                <span className="text-xs text-gray-500">{item.description}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}