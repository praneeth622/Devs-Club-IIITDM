"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { fetchHackathons } from "../../services/hackathonService";
import HackathonCard from "./(components)/HackathonCard";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/button";

const platforms = ["Unstop", "Devfolio", "Devpost"];
const ITEMS_PER_PAGE = 12;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm"
  >
    <div className="text-center">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">No Hackathons Found</h3>
      <p className="text-gray-600">Check back later for new opportunities!</p>
    </div>
  </motion.div>
);

const HackathonList = () => {
  const [activePlatform, setActivePlatform] = useState(platforms[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of hackathons per page

  const { data: hackathons, isLoading, error } = useQuery({
    queryKey: ["hackathons", activePlatform],
    queryFn: () => fetchHackathons(activePlatform),
    staleTime: 300000, // Cache data for 5 minutes
    retry: 2,
  });

  
  console.log("fDevfolio hackathons:", hackathons);
  console.log("fDevfolio error:", error);

  // Calculate pagination
  const totalPages = Math.ceil((hackathons?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentHackathons = hackathons?.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post('/api/devfolio/search/hackathons', {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("fDevfolio response:", response);
    }
  },[])

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm"
      >
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Error Loading Hackathons</h3>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </motion.div>
    );
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-4 sm:py-12 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Discover Hackathons</h1>
          <p className="text-base sm:text-lg text-gray-600">Find your next coding challenge</p>
        </motion.div>

        <Tabs defaultValue={platforms[0]} value={activePlatform} onValueChange={(value) => {
          setActivePlatform(value);
          setCurrentPage(1);
        }} className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex justify-center mb-6 sm:mb-8 px-2"
          >
            <TabsList className="bg-white/50 backdrop-blur-sm overflow-x-auto flex-wrap justify-center">
              {platforms.map((platform) => (
                <TabsTrigger
                  key={platform}
                  value={platform}
                  className="px-4 sm:px-8 py-2 sm:py-3 data-[state=active]:bg-white whitespace-nowrap"
                >
                  {platform}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center items-center min-h-[400px]"
              >
                <Loader2 className="w-8 h-8 animate-spin text-gray-600" />
              </motion.div>
            ) : (
              platforms.map((platform) => (
                <TabsContent key={platform} value={platform}>
                  {!currentHackathons?.length ? (
                    <EmptyState />
                  ) : (
                    <>
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                      >
                        {currentHackathons?.map((hackathon) => (
                          <HackathonCard key={hackathon.id} hackathon={hackathon} />
                        ))}
                      </motion.div>

                      {totalPages > 1 && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex justify-center items-center gap-2 mt-8 sm:mt-12"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="flex items-center gap-1"
                          >
                            <ChevronLeft className="w-4 h-4" /> Previous
                          </Button>
                          <div className="flex items-center gap-2 px-4">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                              <Button
                                key={page}
                                variant={page === currentPage ? "default" : "outline"}
                                size="sm"
                                onClick={() => handlePageChange(page)}
                                className="w-8 h-8 p-0"
                              >
                                {page}
                              </Button>
                            ))}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="flex items-center gap-1"
                          >
                            Next <ChevronRight className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      )}
                    </>
                  )}
                </TabsContent>
              ))
            )}
          </AnimatePresence>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default HackathonList;