// import React from 'react';

// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <p>Welcome to our website! We are dedicated to providing the best services to our customers.</p>
//             <p>Our mission is to deliver high-quality products and exceptional customer service.</p>
//             <p>Thank you for visiting our site!</p>
//         </div>
//     );
// };

// export default About;






import React from 'react';

const About = () => {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.heading}>About Us</h1>
                <p style={styles.paragraph}>
                    Welcome to our website! We are dedicated to providing the best services to our customers.
                </p>
                <p style={styles.paragraph}>
                    Our mission is to deliver high-quality products and exceptional customer service.
                </p>
                <p style={styles.paragraph}>
                    Thank you for visiting our site!
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

export default About;