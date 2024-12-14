import { motion } from 'framer-motion'
import { Users, Target, Activity } from 'lucide-react'

const HeroSection = () => {
    return (
        <div>
            <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                {/* Animated Gradient Orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />

                {/* Floating Elements */}
                <div className="absolute inset-0">
                    {/* Animated Code Symbols */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{
                                opacity: [0.4, 0.8, 0.4],
                                y: [-10, 10, -10],
                                x: [-10, 10, -10],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                delay: i * 0.7,
                            }}
                            className="absolute hidden md:block text-blue-400"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        >
                            {[<Users key="users" />, <Target key="target" />, <Activity key="activity" />][i % 3]}
                        </motion.div>
                    ))}

                    {/* Glowing Grid */}
                    <div className="absolute inset-0 grid grid-cols-8 md:grid-cols-12 gap-4 opacity-20">
                        {Array.from({ length: 96 }).map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0.1, 0.3, 0.1] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: i * 0.05,
                                }}
                                className="w-1 h-1 bg-blue-400 rounded-full"
                            />
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex items-center justify-center min-h-screen">
                    <div className="text-center px-6 max-w-4xl mx-auto space-y-8">
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Developers Club
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                        >
                            Join us on a journey of innovation and coding excellence. Discover our
                            projects, meet our team, and be part of our vibrant community.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <div className="flex items-center gap-2 text-gray-200 backdrop-blur-sm bg-white/5 px-6 py-3 rounded-full border border-white/10">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span>Empowering students to learn, create, and innovate</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;