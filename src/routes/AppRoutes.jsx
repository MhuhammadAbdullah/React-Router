// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import Team from '../pages/Team';
// import Career from '../pages/Career';
// import Pricing from '../pages/Pricing';
// import Login from '../pages/Login';
// import Signup from '../pages/Signup';
// import Dashboard from '../pages/Dashboard';
// import Profile from '../pages/Profile';
// import NotFound from '../components/NotFound';

// const AppRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/career" element={<Career />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;





import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Team from '../pages/Team';
import Career from '../pages/Career';
import Pricing from '../pages/Pricing';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import NotFound from '../components/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/career" element={<Career />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;