import Hero from '../sections/Hero';
import Expertise from '../sections/Expertise';
import DailyWork from '../sections/DailyWork';
import EmploymentHistory from '../sections/EmploymentHistory';
import Education from '../sections/Education';
import Certifications from '../sections/Certifications';
import Clients from '../sections/Clients';
import Tools from '../sections/Tools';
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
      <Clients />
      <Tools />
      <Contact />
    </>
  );
}
