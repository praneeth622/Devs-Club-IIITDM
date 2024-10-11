<motion.header
        className="py-12 bg-primary text-primary-foreground"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto bg-sky-50 text-center">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Google Developer Student Club
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Empowering students to learn, create, and innovate
          </motion.p>
          <motion.section className="text-center" variants={fadeInUp}>
            <div className="bg-sky-50 mt-20">
              <h2 className="text-3xl font-bold mb-6">Introduction to GDSC</h2>
              <p className="max-w-2xl mx-auto text-lg">
                Google Developer Student Clubs (GDSC) is a program for
                university students to learn mobile and web development skills,
                design thinking skills, and leadership skills.
              </p>
            </div>
          </motion.section>
        </div>
      </motion.header>