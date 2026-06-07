import { Link } from "react-router-dom";

const choices = [
    {
        title: "Admin",
        to: "/admin",
        description: "Open the admin dashboard."
    },
    {
        title: "Freelancer",
        to: "/freelancer",
        description: "Open the freelancer area."
    },
    {
        title: "Go to Website",
        to: "/",
        description: "Return to the main website."
    }
];

function Login(){
    return (
        <main style={styles.page}>
            <section style={styles.card}>
                <p style={styles.label}>Login</p>
                <h1 style={styles.title}>Choose where to go</h1>
                <p style={styles.text}>Select one of the routes below after login.</p>
                <div style={styles.grid}>
                    {choices.map((choice) => (
                        <Link key={choice.to} to={choice.to} style={styles.linkCard}>
                            <span style={styles.linkTitle}>{choice.title}</span>
                            <span style={styles.linkText}>{choice.description}</span>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}

const styles = {
    page: {
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        padding: "32px 16px"
    },
    card: {
        width: "min(100%, 620px)",
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
        fontSize: "2.25rem",
        lineHeight: 1.1
    },
    text: {
        margin: 0,
        color: "#5f6368",
        fontSize: "1rem"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "16px",
        marginTop: "28px"
    },
    linkCard: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "18px",
        borderRadius: "18px",
        border: "1px solid #d7e3d9",
        textDecoration: "none",
        background: "#f8fbf8",
        color: "#14532d"
    },
    linkTitle: {
        fontSize: "1.05rem",
        fontWeight: 700
    },
    linkText: {
        fontSize: "0.95rem",
        color: "#4b5563"
    }
};

export default Login;
