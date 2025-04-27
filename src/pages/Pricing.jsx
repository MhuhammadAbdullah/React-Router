// import React from 'react';

// const Pricing = () => {
//     return (
//         <div>
//             <h1>Pricing Plans</h1>
//             <p>Choose a pricing plan that suits your needs.</p>
//             <ul>
//                 <li>
//                     <h2>Basic Plan</h2>
//                     <p>Price: $10/month</p>
//                     <p>Features: Basic features included.</p>
//                 </li>
//                 <li>
//                     <h2>Standard Plan</h2>
//                     <p>Price: $20/month</p>
//                     <p>Features: Standard features included.</p>
//                 </li>
//                 <li>
//                     <h2>Premium Plan</h2>
//                     <p>Price: $30/month</p>
//                     <p>Features: All features included.</p>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default Pricing;





import React from 'react';

const Pricing = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Pricing Plans</h1>
            <p style={styles.paragraph}>Choose a pricing plan that suits your needs.</p>
            <div style={styles.cardsContainer}>
                <div style={styles.card}>
                    <h2 style={styles.planTitle}>Basic Plan</h2>
                    <p style={styles.price}>Price: $10/month</p>
                    <p style={styles.features}>Features: Basic features included.</p>
                </div>
                <div style={styles.card}>
                    <h2 style={styles.planTitle}>Standard Plan</h2>
                    <p style={styles.price}>Price: $20/month</p>
                    <p style={styles.features}>Features: Standard features included.</p>
                </div>
                <div style={styles.card}>
                    <h2 style={styles.planTitle}>Premium Plan</h2>
                    <p style={styles.price}>Price: $30/month</p>
                    <p style={styles.features}>Features: All features included.</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)',
        minHeight: '100vh',
        boxSizing: 'border-box',
    },
    heading: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#333',
    },
    paragraph: {
        fontSize: '1.2rem',
        marginBottom: '30px',
        color: '#555',
        textAlign: 'center',
    },
    cardsContainer: {
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        maxWidth: '300px',
        textAlign: 'center',
    },
    planTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#333',
    },
    price: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#1890ff',
    },
    features: {
        fontSize: '1rem',
        color: '#555',
    },
};

export default Pricing;