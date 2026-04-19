import { motion } from 'motion/react';
import { Award, Calendar, Layers } from 'lucide-react';

const facultyData = [
  { name: "Dr P HARINI", designation: "Professor", qual: "Ph.D", level: "UG", doj: "12-07-2004" },
  { name: "Dr YEZARLA CHITTIBABU", designation: "Professor", qual: "Ph.D", level: "UG", doj: "28-06-2004" },
  { name: "Dr RATNA RAJU MUKIRI", designation: "Professor", qual: "Ph.D", level: "UG", doj: "01-12-2016" },
  { name: "Dr M. RAMESH", designation: "Professor", qual: "Ph.D", level: "UG", doj: "05-06-2023" },
  { name: "Dr AMARTHALURI THIRUPATHAIAH", designation: "Associate Professor", qual: "Ph.D", level: "UG", doj: "01-03-2005" },
  { name: "Dr PRASUNA GRANDHI", designation: "Associate Professor", qual: "Ph.D", level: "UG", doj: "14-07-2016" },
  { name: "Dr P V SUBBARAMASARMA", designation: "Associate Professor", qual: "Ph.D", level: "UG", doj: "01-07-2005" },
  { name: "Dr NAGESH BABU DASARI", designation: "Associate Professor", qual: "Ph.D", level: "UG", doj: "02-06-2008" },
  { name: "Dr SUBBARAO KATTEDA", designation: "Associate Professor", qual: "Ph.D", level: "UG", doj: "01-06-2006" },
  { name: "Dr E. SANDEEP KRUPAKAR", designation: "Associate Professor", qual: "Ph.D", level: "UG", doj: "04-07-2022" },
  { name: "Mr S AMARNATH BABU", designation: "Associate Professor", qual: "M.Tech", level: "UG", doj: "11-05-2006" },
  { name: "Mr N LAKSHMI NARAYANA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "16-07-2005" },
  { name: "Mrs MADHURI DRAKSHARAM", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "06-06-2009" },
  { name: "Mr TULASI SESHASAI", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "02-07-2012" },
  { name: "Mrs MAMIDALA ANUSHA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-07-2019" },
  { name: "Mrs V L N S SWAPNIKA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "22-11-2019" },
  { name: "Mrs N SULAKSHNA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "02-12-2019" },
  { name: "Mrs SINDHURA PASUPULETI", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-10-2021" },
  { name: "Mr SURYA KIRAN KUMAR K", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "07-10-2021" },
  { name: "Mr KUNCHALA RAMESH", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-02-2022" },
  { name: "Mrs Y. SMILE", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "05-06-2023" },
  { name: "Mr KARRI RAMESH BABU", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "17-01-2024" },
  { name: "Mr SHAIK JILANI", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "15-05-2024" },
  { name: "Mr K SAI KRISHNA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "02-07-2018" },
  { name: "Mr D SHYAM BABU", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "10-10-2011" },
  { name: "Mr GUNTI RAJESH", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-10-2021" },
  { name: "Mr BALA KRISHNA YAKKALA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-07-2015" },
  { name: "Mrs M. PRAVEENA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-03-2014" },
  { name: "Mr C.V.C. UDAY BHASKAR", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "05-06-2023" },
  { name: "Mrs M. NAGA PADMAJA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "05-06-2023" },
  { name: "Mrs SYED ARIFA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "15-07-2024" },
  { name: "Mrs DEVARAKONDA SOWMYA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-08-2024" },
  { name: "Ms PASUPULETI MADHURI", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-08-2024" },
  { name: "Mrs M. SUVARNA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-08-2025" },
  { name: "Ms B SIVA PAVANI", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "14-08-2025" },
  { name: "Mrs K LAVANYA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "14-08-2025" },
  { name: "Ms A LAKSHMI PRIYANKA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "14-08-2025" },
  { name: "Dr G SANKAR", designation: "Associate Professor", qual: "Ph.D", level: "PG", doj: "04-07-2022" },
  { name: "Ms B CHARANI", designation: "Assistant Professor", qual: "M.Tech", level: "PG", doj: "04-07-2022" },
  { name: "Mrs A KAVYA", designation: "Assistant Professor", qual: "M.Tech", level: "PG", doj: "01-12-2020" },
  { name: "Mr P SANKARA RAO", designation: "Assistant Professor", qual: "M.Tech", level: "PG", doj: "04-07-2022" }
];

function getInitials(name: string) {
  const parts = name.replace(/^(Dr|Mr|Mrs|Ms|Prof)\.?\s+/i, '').split(' ');
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return parts[0].substring(0, 2).toUpperCase();
}

export function Faculty() {
  return (
    <section id="faculty" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our <span className="text-red-600">Faculty</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Learn from industry experts and renowned researchers dedicated to your success.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facultyData.map((faculty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
              className="group relative p-6 rounded-3xl bg-[#121212] border border-white/5 hover:border-red-500/30 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-transparent transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-red-600/10 group-hover:text-red-500 group-hover:border-red-500/20 transition-all duration-300">
                  <span className="font-display font-bold text-lg tracking-wider">{getInitials(faculty.name)}</span>
                </div>
                
                <h3 className="text-lg font-display font-bold mb-1 group-hover:text-red-400 transition-colors line-clamp-1" title={faculty.name}>{faculty.name}</h3>
                <p className="text-xs text-red-600 font-medium mb-5">{faculty.designation}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <Award className="w-3.5 h-3.5 text-white/30 shrink-0" />
                    <span>{faculty.qual}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <Layers className="w-3.5 h-3.5 text-white/30 shrink-0" />
                    <span>{faculty.level} Program</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5 text-white/30 shrink-0" />
                    <span>Joined: {faculty.doj}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
