import { motion } from 'framer-motion';


const AnimatedButton = ({conts}) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='btn btn-primary btn-lg d-flex align-items-center'
        style={{ margin: '10px' }}
      >
        {conts}
      </motion.div>
    );
  };


  export default AnimatedButton;