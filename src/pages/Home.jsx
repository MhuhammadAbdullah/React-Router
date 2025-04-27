// import React from 'react';

// const Home = () => {
//     return (
//         <div>
//             <h1>Welcome to Our Website</h1>
//             <p>This is the landing page where you can find an overview of what we offer.</p>
//             <p>Explore our features, pricing, and team to learn more about us!</p>
//         </div>
//     );
// };

// export default Home;




// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const Home = () => {
//     const headingRef = useRef(null);
//     const paragraphRef = useRef(null);
//     const buttonRef = useRef(null);

//     useEffect(() => {
//         const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

//         // Animations
//         tl.from(headingRef.current, { y: -50, opacity: 0 })
//           .from(paragraphRef.current, { y: 50, opacity: 0 }, '-=0.5')
//           .from(buttonRef.current, { scale: 0.8, opacity: 0 }, '-=0.5');
//     }, []);

//     return (
//         <div style={styles.container}>
//             <h1 ref={headingRef} style={styles.heading}>Welcome to Nova</h1>
//             <p ref={paragraphRef} style={styles.paragraph}>
//                 Discover the power of innovation and creativity. Explore our features, pricing, and team to learn more about us!
//             </p>
//             <button ref={buttonRef} style={styles.button}>
//                 Get Started
//             </button>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//         background: 'linear-gradient(135deg, #141414, #1f1f1f)',
//         color: '#fff',
//         textAlign: 'center',
//         padding: '20px',
//         boxSizing: 'border-box',
//         fontFamily: 'Arial, sans-serif',
//         fontSize: '16px',
//         lineHeight: '1.5',
//         margin: '0 auto',
//         maxWidth: '1200px',
//         width: '100%',
//         overflow: 'hidden',
//         position: 'relative',
//         zIndex: 1,

//         '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'rgba(0, 0, 0, 0.5)',
//             zIndex: -1,
//         },
//         '&::after': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'url("/path/to/your/image.jpg") no-repeat center center/cover',
//             opacity: 0.1,
//             zIndex: -2,
//         },
//         '@media (max-width: 768px)': {
//             padding: '10px',
//         },
//         '@media (max-width: 480px)': {
//             fontSize: '14px',
//             padding: '5px',
//         },
//         '@media (max-width: 320px)': {
//             fontSize: '12px',
//             padding: '2px',
//         },
//         '@media (max-width: 1200px)': {
//             maxWidth: '100%',
//         },
//     },
//     heading: {
//         fontSize: '3rem',
//         fontWeight: 'bold',
//         marginBottom: '20px',
//     },
//     paragraph: {
//         fontSize: '1.2rem',
//         lineHeight: '1.6',
//         maxWidth: '600px',
//         marginBottom: '30px',
//     },
//     button: {
//         padding: '10px 20px',
//         fontSize: '1rem',
//         fontWeight: 'bold',
//         color: '#fff',
//         background: '#1890ff',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         transition: 'transform 0.3s ease',
//     },
// };

// export default Home;





import React from 'react';

const Home = () => {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.heading}>Welcome to Our Website</h1>
                <p style={styles.paragraph}>
                    This is the landing page where you can find an overview of what we offer.
                </p>
                <p style={styles.paragraph}>
                    Explore our features, pricing, and team to learn more about us!
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)',
        padding: '20px',
        boxSizing: 'border-box',
    },
    card: {
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        maxWidth: '600px',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#333',
    },
    paragraph: {
        fontSize: '1rem',
        lineHeight: '1.5',
        color: '#555',
        marginBottom: '10px',
    },
};

export default Home;