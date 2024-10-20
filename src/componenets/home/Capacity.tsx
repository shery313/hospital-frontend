import { FaBed, FaClinicMedical, FaUserNurse, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Custom hook for animating numbers from 0 to the target value
const useCountUp = (target: number, duration: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 10); // Divide the change over time

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target); // Ensure it ends at the target value
        clearInterval(timer);
      } else {
        setCount(Math.floor(start)); // Animate value
      }
    }, 10);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};

function Capacity() {
  // Using the useCountUp hook to animate the numbers
  const bedCount = useCountUp(1800, 2000); // Count to 1800 over 2 seconds
  const employeeCount = useCountUp(6000, 2000); // Count to 6000 over 2 seconds
  const serviceYears = useCountUp(122, 2000); // Count to 122 over 2 seconds
  const clinicCount = useCountUp(50, 2000); // Count to 50 clinics over 2 seconds

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="text-center p-8"
    >
      {/* Bed Capacity */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FaBed className="inline w-20 h-20 text-blue-500" />
        <h1 className="text-blue-500 text-7xl font-extrabold">{bedCount}</h1>
        <p className="text-3xl">Beds</p>
      </motion.div>

      {/* Employee Count */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <FaUserNurse className="inline w-20 h-20 text-green-500" />
        <h1 className="text-green-500 text-7xl font-extrabold">{employeeCount}</h1>
        <p className="text-3xl">Employees</p>
      </motion.div>

      {/* Years of Service */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        <FaCalendarAlt className="inline w-20 h-20 text-purple-500" />
        <h1 className="text-purple-500 text-7xl font-extrabold">{serviceYears}</h1>
        <p className="text-3xl">Years of Service</p>
      </motion.div>

      {/* Specialized Clinics */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
      >
        <FaClinicMedical className="inline w-20 h-20 text-red-500" />
        <h1 className="text-red-500 text-7xl font-extrabold">{clinicCount}</h1>
        <p className="text-3xl">Specialized Clinics</p>
      </motion.div>
    </motion.div>
  );
}

export default Capacity;
