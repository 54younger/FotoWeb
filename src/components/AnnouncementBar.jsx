
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Megaphone } from 'lucide-react';

    const AnnouncementBar = ({ message }) => {
      return (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="avocado-gradient-bg text-white text-center p-2 text-sm font-semibold overflow-hidden"
        >
          <div className="flex items-center justify-center space-x-2">
            <Megaphone size={16} />
            <span>{message}</span>
          </div>
        </motion.div>
      );
    };

    export default AnnouncementBar;
  