import { Link } from "react-router-dom";

function Admin() {
    return (
        <main style={styles.page}>
            <section style={styles.card}>
                <p style={styles.label}>Admin</p>
                <h1 style={styles.title}>Admin dashboard</h1>
                <p style={styles.text}>This is the admin area of the website.</p>
                <Link to="/" style={styles.link}>
                    Go to website
                </Link>
            </section>
        </main>
    );
}

const styles = {
    page: {
        minHeight: "60vh",
        display: "grid",
        placeItems: "center",
        padding: "32px 16px"
    },
    card: {
        width: "min(100%, 520px)",
        borderRadius: "24px",
        padding: "32px",
        background: "#ffffff",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
        textAlign: "left"
    },
    label: {
        margin: 0,
        color: "#0f8a36",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        fontSize: "0.8rem"
    },
    title: {
        margin: "12px 0 8px",
        fontSize: "2rem",
        lineHeight: 1.1
    },
    text: {
        margin: 0,
        color: "#5f6368",
        fontSize: "1rem"
    },
    link: {
        display: "inline-flex",
        marginTop: "20px",
        color: "#0f8a36",
        textDecoration: "none",
        fontWeight: 700
    }
};

export default Admin;
