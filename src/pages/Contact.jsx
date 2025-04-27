// import React from 'react';

// const Contact = () => {
//     return (
//         <div>
//             <h1>Contact Us</h1>
//             <p>If you have any questions, feel free to reach out!</p>
//             <form>
//                 <div>
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" id="name" name="name" required />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email:</label>
//                     <input type="email" id="email" name="email" required />
//                 </div>
//                 <div>
//                     <label htmlFor="message">Message:</label>
//                     <textarea id="message" name="message" required></textarea>
//                 </div>
//                 <button type="submit">Send Message</button>
//             </form>
//         </div>
//     );
// };

// export default Contact;



import React from 'react';

const Contact = () => {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.heading}>Contact Us</h1>
                <p style={styles.paragraph}>
                    If you have any questions, feel free to reach out!
                </p>
                <form style={styles.form}>
                    <div style={styles.formGroup}>
                        <label htmlFor="name" style={styles.label}>Name:</label>
                        <input type="text" id="name" name="name" required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="email" style={styles.label}>Email:</label>
                        <input type="email" id="email" name="email" required style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="message" style={styles.label}>Message:</label>
                        <textarea id="message" name="message" required style={styles.textarea}></textarea>
                    </div>
                    <button type="submit" style={styles.button}>Send Message</button>
                </form>
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
        width: '100%',
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
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    label: {
        fontSize: '1rem',
        marginBottom: '5px',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        resize: 'none',
        height: '100px',
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

export default Contact;