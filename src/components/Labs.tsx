import { motion } from 'motion/react';
import { BrainCircuit, Database, Shield, MonitorPlay, Network, Code } from 'lucide-react';

const labs = [
  { icon: BrainCircuit, title: 'AI & Robotics Lab', desc: 'Equipped with high-end GPUs for deep learning and robotics simulation.' },
  { icon: Database, title: 'Data Science Lab', desc: 'Big data clusters and analytics tools for processing massive datasets.' },
  { icon: Shield, title: 'Cybersecurity Lab', desc: 'Isolated networks for ethical hacking, cryptography, and security research.' },
  { icon: MonitorPlay, title: 'AR/VR Studio', desc: 'Latest headsets and rendering rigs for immersive computing.' },
  { icon: Network, title: 'IoT & Edge Computing', desc: 'Sensors, microcontrollers, and edge devices for smart systems.' },
  { icon: Code, title: 'Software Engineering', desc: 'Collaborative workspaces for agile development and system design.' },
];

export function Labs() {
  return (
    <section id="labs" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">State-of-the-Art <span className="text-red-600">Labs</span></h2>
            <p className="text-gray-400 max-w-xl">Experience hands-on learning with industry-standard equipment and software.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 hover:bg-[#151515] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center mb-6">
                <lab.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{lab.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{lab.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
