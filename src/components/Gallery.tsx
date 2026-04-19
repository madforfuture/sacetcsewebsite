import { motion } from 'motion/react';

const images = [
  'https://i.postimg.cc/R0Gxmwrc/DSC-5223.jpg',
  'https://i.postimg.cc/FKGXv0tL/DSC-5244.jpg',
  'https://i.postimg.cc/mrVW47xY/DSC-5370.jpg',
  'https://i.postimg.cc/Dz53h1VJ/DSC-5446.jpg',
];

export function Gallery() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">Our <span className="text-red-600">Gallery</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-video rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={src} 
                alt="Campus Facility" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
