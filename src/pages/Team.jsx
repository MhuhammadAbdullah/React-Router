// import React from 'react';

// const Team = () => {
//     return (
//         <div>
//             <h1>Meet Our Team</h1>
//             <p>We are a group of dedicated professionals committed to delivering the best service.</p>
//             <ul>
//                 <li>John Doe - CEO</li>
//                 <li>Jane Smith - CTO</li>
//                 <li>Emily Johnson - Lead Developer</li>
//                 <li>Michael Brown - Designer</li>
//                 <li>Sarah Davis - Marketing Manager</li>
//             </ul>
//         </div>
//     );
// };

// export default Team;




import React from 'react';

const Team = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Meet Our Team</h1>
            <p style={styles.paragraph}>
                We are a group of dedicated professionals committed to delivering the best service.
            </p>
            <div style={styles.cardsContainer}>
                <div style={styles.card}>
                    <h2 style={styles.name}>John Doe</h2>
                    <p style={styles.role}>CEO</p>
                </div>
                <div style={styles.card}>
                    <h2 style={styles.name}>Jane Smith</h2>
                    <p style={styles.role}>CTO</p>
                </div>
                <div style={styles.card}>
                    <h2 style={styles.name}>Emily Johnson</h2>
                    <p style={styles.role}>Lead Developer</p>
                </div>
                <div style={styles.card}>
                    <h2 style={styles.name}>Michael Brown</h2>
                    <p style={styles.role}>Designer</p>
                </div>
                <div style={styles.card}>
                    <h2 style={styles.name}>Sarah Davis</h2>
                    <p style={styles.role}>Marketing Manager</p>
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
        maxWidth: '200px',
        textAlign: 'center',
    },
    name: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#333',
    },
    role: {
        fontSize: '1rem',
        color: '#555',
    },
};

export default Team;