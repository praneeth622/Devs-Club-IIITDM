import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../components/ui/card";
import { Eye, Heart, Calendar, Users, Trophy } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button"; // Changed from default import
import Image from "next/image";

const HackathonCard = ({ hackathon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group"
    >
      <a href={hackathon.url} target="_blank" rel="noopener noreferrer">
        <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <div className="relative w-full h-48">
              <Image
                src={hackathon.thumbnail || '/images/default-hackathon.jpg'}
                alt={hackathon.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            {hackathon.eventDetails?.festivalName && (
              <Badge className="absolute top-2 right-2">
                {hackathon.eventDetails.festivalName}
              </Badge>
            )}
          </div>
          
          <CardContent className="p-4">
            <h3 className="font-semibold text-xl mb-2 line-clamp-2">{hackathon.title}</h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-1">{hackathon.organizer}</p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Deadline: {hackathon.registrationDeadline}</span>
              </div>
              
              {hackathon.teamSize && (
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>
                    Team: {hackathon.teamSize.min}-{hackathon.teamSize.max} members
                  </span>
                </div>
              )}
        
              {hackathon.prizes?.[0]?.amount !== 'Not specified' && (
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  <span>Prize: {hackathon.prizes[0].amount}</span>
                </div>
              )}
            </div>
        
            <div className="mt-4 flex flex-wrap gap-2">
              {hackathon.categories?.map(category => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
        
            <Button 
              className="w-full mt-4"
              variant={hackathon.applicationStatus?.isOpen ? "default" : "secondary"}
            >
              {hackathon.applicationStatus?.isOpen ? 
                hackathon.remainingTime : 
                'Registration Closed'}
            </Button>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
};

export default HackathonCard;