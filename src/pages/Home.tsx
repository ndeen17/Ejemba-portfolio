import Hero from '../sections/Hero';
import Tools from '../sections/Tools';
import Expertise from '../sections/Expertise';
import DailyWork from '../sections/DailyWork';
import EmploymentHistory from '../sections/EmploymentHistory';
import Education from '../sections/Education';
import Certifications from '../sections/Certifications';
import Clients from '../sections/Clients';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Tools />
      <Expertise />
      <DailyWork />
      <Clients />
      <EmploymentHistory />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}
