import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const StatsCard = ({ title, value, change, icon: Icon, gradient }) => {
  return (
    <motion.div whileHover={{ y: -5 }} className="glass-card p-6 rounded-2xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-white/60">{title}</p>
          <h2 className="text-2xl font-bold text-white">{value}</h2>
          <p className="flex items-center gap-1 text-sm text-emerald-400">
            <ArrowUpRight size={16} /> {change}%
          </p>
        </div>
        <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;
