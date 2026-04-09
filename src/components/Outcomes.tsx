import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Target, Lightbulb, BarChart3, Activity } from 'lucide-react';

const peos = [
  "PEO1: Apply fundamental knowledge of mathematics, science, and engineering to solve complex problems in computer science.",
  "PEO2: Build and implement software solutions that are robust, scalable, and secure to meet industry needs.",
  "PEO3: Work effectively in multidisciplinary teams, demonstrating leadership, communication skills, and professional ethics.",
  "PEO4: Engage in lifelong learning, adapt to emerging technologies, and contribute to research and innovation."
];

const psos = [
  "PSO1: Software design using core CS principles.",
  "PSO2: AI, ML, Data Analytics solutions.",
  "PSO3: Secure and scalable systems."
];

const pos = [
  { id: "PO1", title: "Engineering Knowledge", desc: "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems." },
  { id: "PO2", title: "Problem Analysis", desc: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences." },
  { id: "PO3", title: "Design/Development of Solutions", desc: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations." },
  { id: "PO4", title: "Conduct Investigations of Complex Problems", desc: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions." },
  { id: "PO5", title: "Modern Tool Usage", desc: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations." },
  { id: "PO6", title: "The Engineer and Society", desc: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice." },
  { id: "PO7", title: "Environment and Sustainability", desc: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development." },
  { id: "PO8", title: "Ethics", desc: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice." },
  { id: "PO9", title: "Individual and Team Work", desc: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings." },
  { id: "PO10", title: "Communication", desc: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions." },
  { id: "PO11", title: "Project Management and Finance", desc: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
  { id: "PO12", title: "Life-long Learning", desc: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change." }
];

const indicators = [
  {
    title: "Competency 1: Engineering Knowledge",
    items: [
      "1.1 Demonstrate competence in mathematical modeling.",
      "1.2 Demonstrate competence in basic sciences.",
      "1.3 Demonstrate competence in engineering fundamentals.",
      "1.4 Demonstrate competence in specialized engineering knowledge to the program."
    ]
  },
  {
    title: "Competency 2: Problem Analysis",
    items: [
      "2.1 Demonstrate an ability to identify and formulate complex engineering problems.",
      "2.2 Demonstrate an ability to formulate a solution plan and methodology for an engineering problem.",
      "2.3 Demonstrate an ability to formulate and solve complex engineering problems reaching substantiated conclusions."
    ]
  },
  {
    title: "Competency 3: Design/Development of Solutions",
    items: [
      "3.1 Demonstrate an ability to define a complex, open-ended problem in engineering terms.",
      "3.2 Demonstrate an ability to generate a diverse set of alternative design solutions.",
      "3.3 Demonstrate an ability to select the optimal design scheme for further development.",
      "3.4 Demonstrate an ability to advance an engineering design to the implementation stage."
    ]
  }
];

function AccordionItem({ title, children, id }: { title: string, children: React.ReactNode, id: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-2xl bg-[#121212] overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-red-500 font-display font-bold text-sm w-10">{id}</span>
          <span className="font-bold text-gray-200">{title}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 pt-2 text-sm text-gray-400 pl-[4.5rem]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Outcomes() {
  return (
    <section id="outcomes" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* PEOs and PSOs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-[#0f0f0f] border border-white/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-display font-bold">Program Educational Objectives</h3>
            </div>
            <ul className="space-y-4">
              {peos.map((peo, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span>{peo}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-[#0f0f0f] border border-white/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-display font-bold">Program Specific Outcomes</h3>
            </div>
            <ul className="space-y-4">
              {psos.map((pso, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span>{pso}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* POs */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold">Program Outcomes (POs)</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-x-6">
            <div className="space-y-4">
              {pos.slice(0, 6).map((po) => (
                <AccordionItem key={po.id} id={po.id} title={po.title}>
                  {po.desc}
                </AccordionItem>
              ))}
            </div>
            <div className="space-y-4">
              {pos.slice(6, 12).map((po) => (
                <AccordionItem key={po.id} id={po.id} title={po.title}>
                  {po.desc}
                </AccordionItem>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Indicators */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold">Performance Indicators</h3>
          </div>
          <div className="space-y-4">
            {indicators.map((ind, i) => (
              <AccordionItem key={i} id={`C${i+1}`} title={ind.title}>
                <ul className="space-y-2">
                  {ind.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-gray-600 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
