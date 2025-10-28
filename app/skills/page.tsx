"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Navigation from "@/components/navigation"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Skills = () => {
  const skillCategories = [
    {
      title: "HR Expertise",
      skills: [
        { name: "HRIS Management", level: 95, endorsements: 47 },
        { name: "Talent Management", level: 92, endorsements: 38 },
        { name: "Training & Development", level: 90, endorsements: 42 },
        { name: "HR Transformation", level: 88, endorsements: 23 },
        { name: "Employee Relations", level: 93, endorsements: 51 },
      ],
    },
    {
      title: "Leadership & Management",
      skills: [
        { name: "Strategic Leadership", level: 89, endorsements: 34 },
        { name: "Team Building", level: 94, endorsements: 45 },
        { name: "Change Management", level: 87, endorsements: 28 },
        { name: "Performance Management", level: 91, endorsements: 39 },
        { name: "Conflict Resolution", level: 88, endorsements: 31 },
      ],
    },
    {
      title: "Communication & Soft Skills",
      skills: [
        { name: "Public Speaking", level: 96, endorsements: 52 },
        { name: "Business Communication", level: 93, endorsements: 41 },
        { name: "Cross-Cultural Communication", level: 90, endorsements: 29 },
        { name: "Emotional Intelligence", level: 92, endorsements: 36 },
        { name: "Storytelling", level: 89, endorsements: 24 },
      ],
    },
    {
      title: "Technical & Analytical",
      skills: [
        { name: "HR Analytics", level: 85, endorsements: 22 },
        { name: "Process Improvement", level: 87, endorsements: 33 },
        { name: "Policy Development", level: 89, endorsements: 27 },
        { name: "Compliance Management", level: 84, endorsements: 19 },
        { name: "Digital HR Tools", level: 82, endorsements: 15 },
      ],
    },
  ]

  const AnimatedSkillCard = ({ category, index }: { category: any; index: number }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 gradient-text-purple">{category.title}</h3>
            <div className="space-y-6">
              {category.skills.map((skill: any, skillIndex: number) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.endorsements} endorsements</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                  <div className="text-right text-sm text-primary font-medium mt-1">{skill.level}%</div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text-purple">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my professional skills, built through years of hands-on experience and
              continuous learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <AnimatedSkillCard key={index} category={category} index={index} />
            ))}
          </div>

          {/* Certifications & Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-r from-primary to-accent text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Achievements</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold mb-2">10+</div>
                    <p className="text-lg opacity-90">Years Experience</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">200+</div>
                    <p className="text-lg opacity-90">Total Endorsements</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">50+</div>
                    <p className="text-lg opacity-90">Successful Projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Skills
