// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import AppRoutes from './routes/AppRoutes';

// const App = () => {
//   return (
//     <Router>
//       <AppRoutes />
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar'; // Import the Navbar component

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar component here */}
      <AppRoutes />
    </Router>
  );
};

export default App;