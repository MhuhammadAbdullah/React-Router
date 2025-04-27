// import React from 'react';

// const Career = () => {
//     return (
//         <div>
//             <h1>Career Opportunities</h1>
//             <p>Welcome to the Career page! Here you can find information about job openings and career-related content.</p>
//             <h2>Current Openings</h2>
//             <ul>
//                 <li>Software Engineer</li>
//                 <li>Product Manager</li>
//                 <li>UX/UI Designer</li>
//                 <li>Data Scientist</li>
//             </ul>
//             <p>If you are interested in any of the positions, please reach out to us!</p>
//         </div>
//     );
// };

// export default Career;





import React from 'react';

const Career = () => {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.heading}>Career Opportunities</h1>
                <p style={styles.paragraph}>
                    Welcome to the Career page! Here you can find information about job openings and career-related content.
                </p>
                <h2 style={styles.subheading}>Current Openings</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Software Engineer</li>
                    <li style={styles.listItem}>Product Manager</li>
                    <li style={styles.listItem}>UX/UI Designer</li>
                    <li style={styles.listItem}>Data Scientist</li>
                </ul>
                <p style={styles.paragraph}>
                    If you are interested in any of the positions, please reach out to us!
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
    subheading: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#444',
    },
    paragraph: {
        fontSize: '1rem',
        lineHeight: '1.5',
        color: '#555',
        marginBottom: '10px',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        marginBottom: '15px',
    },
    listItem: {
        fontSize: '1rem',
        color: '#555',
        marginBottom: '5px',
    },
};

export default Career;