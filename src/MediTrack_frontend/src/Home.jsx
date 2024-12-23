import { motion } from 'framer-motion';
import './Home.css';
import emailIcon from '/home/meenamrutha/MediDocs/MEDITRACK/src/MediTrack_frontend/public/email-icon.svg';
import phoneIcon from '/home/meenamrutha/MediDocs/MEDITRACK/src/MediTrack_frontend/public/phoneicon.svg';
import {  FaUserMd, FaUser, FaPills } from 'react-icons/fa';
import { Link } from 'react-router-dom';



function Home() {

  
  return (
    <div className="home">
      <motion.div 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <motion.h1 
            className="neon-text"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to HealthConnect
          </motion.h1>
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Connecting Doctors, Patients, and Pharmacies for Better Healthcare
          </motion.p>
        </div>
      </motion.div>

      <div className="features container" >
      <Link to="/doctor" id="featurescontainer"> 
      <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* <img src="/doctor.jpg" alt="Doctor" /> */}
          <h2><FaUserMd/><br/> For Doctors</h2>
          <p>Manage patient records and prescriptions efficiently</p>
        </motion.div>
        </Link>

        <Link to="/patient" id="featurescontainer">
        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {/* <img src="patient.jpg" alt="Patient" /> */}
          <h2><FaUser /><br/>For Patients</h2>
          <p>Access your medical history and prescriptions anytime</p>
        </motion.div>
        </Link>

        <Link to="/pharmacy" id="featurescontainer">
        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {/* <img src="/pharmacy.jpg" alt="Pharmacy" /> */}
          <h2><FaPills /><br/>For Pharmacies</h2>
          <p>View verified prescriptions and serve patients better</p>
        </motion.div>
        </Link>
      </div>

      <div id="contact">
        <header>
          <h2>Contact</h2>
          <p>Ready to get started on your project? </p>
          <p>Contact me now for a Free consultation.</p>
        </header>
        <div className="contacts">
          <div>
          <a href="mailto:srujan9063@gmail.com"><img src={emailIcon} alt="Email" /></a> 
            <a href="mailto:srujan9063@gmail.com">srujan9063@gmail.com</a>
          </div>
          <div>
          <a href="tel:+918466829063"><img src={phoneIcon} alt="Phone No" /></a>
            <a href="tel:+918466829063">(+91 8466829063)</a>
          </div>  
        </div>
        
      </div>
      
      
    
    </div>



    
  );
} 

export default Home;