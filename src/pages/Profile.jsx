// import React, { useState, useEffect } from 'react';

// const Profile = () => {
//     const [userName, setUserName] = useState('');

//     useEffect(() => {
//         // Simulate fetching user data
//         const fetchUserData = () => {
//             // In a real application, you would fetch this data from an API
//             const user = { name: 'John Doe' }; // Example user data
//             setUserName(user.name);
//         };

//         fetchUserData();
//     }, []);

//     return (
//         <div>
//             <h1>User Profile</h1>
//             <p>Name: {userName}</p>
//         </div>
//     );
// };

// export default Profile;





import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Simulate fetching user data
        const fetchUserData = () => {
            // In a real application, you would fetch this data from an API
            const user = { name: 'John Doe' }; // Example user data
            setUserName(user.name);
        };

        fetchUserData();
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.heading}>User Profile</h1>
                <p style={styles.paragraph}>Name: {userName}</p>
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
        maxWidth: '400px',
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
    },
};

export default Profile;