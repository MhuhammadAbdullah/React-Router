// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//     const [email, setEmail] = useState('');
//     const location = useLocation();
//     const navigate = useNavigate();

//     // Simulate fetching user email from a login or signup process
//     React.useEffect(() => {
//         const userEmail = location.state?.email || 'user@example.com'; // Default email for demonstration
//         setEmail(userEmail);
//     }, [location.state]);

//     const handleLogout = () => {
//         // Logic for logging out the user
//         navigate('/login'); // Redirect to login page after logout
//     };

//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <p>Welcome, {email}!</p>
//             <button onClick={handleLogout}>Logout</button>
//         </div>
//     );
// };

// export default Dashboard;



import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [email, setEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    // Simulate fetching user email from a login or signup process
    React.useEffect(() => {
        const userEmail = location.state?.email || 'user@example.com'; // Default email for demonstration
        setEmail(userEmail);
    }, [location.state]);

    const handleLogout = () => {
        // Logic for logging out the user
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.heading}>Dashboard</h1>
                <p style={styles.paragraph}>Welcome, {email}!</p>
                <button onClick={handleLogout} style={styles.button}>Logout</button>
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
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#fff',
        background: '#1890ff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
    },
};

export default Dashboard;