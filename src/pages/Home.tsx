import Hero from '../sections/Hero';
import Expertise from '../sections/Expertise';
import DailyWork from '../sections/DailyWork';
import Certifications from '../sections/Certifications';
import Education from '../sections/Education';
import EmploymentHistory from '../sections/EmploymentHistory';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <DailyWork />
      <EmploymentHistory />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}
