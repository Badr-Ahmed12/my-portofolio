import { Helmet } from 'react-helmet';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative bg-grid">
       <Helmet>
         <title>بدر أحمد سليمان - مطور واجهات أمامية | Frontend Developer</title>
         <meta name="description" content="بدر أحمد سليمان، مطور واجهات أمامية متخصص في React.js, Next.js, و Tailwind CSS. بناء مواقع سريعة ومتجاوبة بأفضل التقنيات الحديثة." />
         <meta name="keywords" content="Frontend Developer, React, Next.js, Tailwind CSS, تطوير الويب, مطور واجهات أمامية, JavaScript, TypeScript" />
         <meta name="author" content="بدر أحمد سليمان" />
         <html lang="ar" />
         <meta property="og:title" content="بدر أحمد سليمان - مطور واجهات أمامية" />
         <meta property="og:description" content="مطور واجهات أمامية متخصص في بناء مواقع وتطبيقات ويب حديثة باستخدام React.js و Next.js." />
         <meta property="og:type" content="website" />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content="بدر أحمد سليمان - مطور واجهات أمامية" />
         <meta name="twitter:description" content="مطور واجهات أمامية متخصص في بناء مواقع وتطبيقات ويب حديثة باستخدام React.js و Next.js." />
         <link rel="icon" href="/favicon.ico" />
       </Helmet>
       <Navbar />
       <Hero />
       <About />
       <Projects />
       <Clients />
       <WorkExperience />
       <Contact />
       <Footer />
    </main>
  );
};

export default App;
