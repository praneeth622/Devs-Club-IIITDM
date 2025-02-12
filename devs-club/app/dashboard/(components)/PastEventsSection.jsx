import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Link as LinkIcon,
  ArrowRight,
  ChevronLeft, ChevronRight
} from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../../components/ui/dialog";

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

const formatTime = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

const PastEventCard = ({ event, index }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full cursor-pointer bg-white hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
            <CardContent className="p-6 pt-8 dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pr-20 leading-tight dark:text-white/80">
                {event.Event_name}
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-white/30">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                  <span className="text-sm">{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                  <span className="text-sm">{formatTime(event.date)}</span>
                </div>
                {event.Attendance && (
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                    <span className="text-sm">{event.Attendance} attendees</span>
                  </div>
                )}
              </div>
              <div className="mt-6 flex items-center text-sm text-blue-500 group-hover:text-blue-600 transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] max-h-[700px] bg-white dark:text-white/80 dark:bg-gray-800">
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-2xl font-bold leading-tight pr-4">
              {event.Event_name}
            </h2>
            <Badge className="bg-gray-500 text-white px-3 py-1 dark:bg-gray-700">
              Past Event
            </Badge>
          </div>
          <div className="space-y-6">
            <div className="flex items-start text-gray-600 dark:text-white/30">
              <Calendar className="w-5 h-5 mr-4 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Date</p>
                <p>{formatDate(event.date)}</p>
              </div>
            </div>
            <div className="flex items-start text-gray-600 dark:text-white/30">
              <Clock className="w-5 h-5 mr-4 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Time</p>
                <p>{formatTime(event.date)}</p>
              </div>
            </div>
            {event.Attendance && (
              <div className="flex items-start text-gray-600 dark:text-white/30">
                <Users className="w-5 h-5 mr-4 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Attendance</p>
                  <p>{event.Attendance} attendees</p>
                </div>
              </div>
            )}
            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-700">
              <p className="font-semibold mb-3 dark:text-white/80">Event Details</p>
              <p className="text-gray-600 dark:text-white/40 leading-relaxed">
                {event.Event_details}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const PastEventsSection = ({ pastEvents }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 relative"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white/80">
        Past Events
      </h2>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {pastEvents.map((event, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
                <PastEventCard event={event} index={index} />
              </div>
            ))}
          </div>
        </div>
        <div
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </div>
        <div
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </div>
      </div>
    </motion.section>
  )
}

export default PastEventsSection

