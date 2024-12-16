'use client'
import { motion } from 'framer-motion'
import { Dialog, DialogContent, DialogTrigger } from "../../../components/ui/dialog"
import { Card, CardContent } from '../../../components/ui/card'
import { Calendar, Clock, MapPin, Users, Link as LinkIcon, ArrowRight } from 'lucide-react'
import { Button } from "../../../components/ui/button"
import { Badge } from "../../../components/ui/badge"
import { formatDate } from '../../../utils/dateFormatter'

const EventsSection = ({ events }) => {
  const getEventStatus = (date) => {
    const eventDate = new Date(date);
    const today = new Date();
    const daysUntil = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntil <= 7) return { text: "Coming Soon", color: "bg-red-500" };
    if (daysUntil <= 14) return { text: "2 Weeks Left", color: "bg-yellow-500" };
    return { text: "Open", color: "bg-green-500" };
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 px-4"
    >
      <h2 className="text-2xl font-bold mb-8 h-auto text-gray-800">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => {
          const status = getEventStatus(event.date);
          return (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="h-auto cursor-pointer bg-white hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
                    <div className="absolute top-4 right-4">
                      <Badge className={`${status.color} text-white px-3 py-1`}>
                        {status.text}
                      </Badge>
                    </div>
                    <CardContent className="p-6 pt-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 pr-20 leading-tight">{event.name}</h3>
                      <div className="space-y-4 text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                          <span className="text-sm">{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                          <span className="text-sm">{event.venue}</span>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center text-sm text-blue-500 group-hover:text-blue-600 transition-colors">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px] max-h-[700px] bg-white">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-8">
                    <h2 className="text-2xl font-bold leading-tight pr-4">{event.name}</h2>
                    <Badge className={`${status.color} text-white px-3 py-1`}>
                      {status.text}
                    </Badge>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start text-gray-600">
                      <Calendar className="w-5 h-5 mr-4 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Date</p>
                        <p>{formatDate(event.date)}</p>
                      </div>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <Clock className="w-5 h-5 mr-4 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Time</p>
                        <p>{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <MapPin className="w-5 h-5 mr-4 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Venue</p>
                        <p>{event.venue}</p>
                      </div>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <Users className="w-5 h-5 mr-4 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Capacity</p>
                        <p>{event.capacity} participants</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="font-semibold mb-3">Description</p>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                    {event.registrationLink && (
                      <div className="mt-8">
                        <Button 
                          className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors py-6"
                          onClick={() => window.open(event.registrationLink, '_blank')}
                        >
                          <LinkIcon className="mr-2 h-5 w-5" />
                          Register Now
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </motion.section>
  );
};

export default EventsSection;
