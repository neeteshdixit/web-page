import { Link, useParams } from "react-router-dom";
import { userList } from "../data/users";

function UserDetails() {
    const { userId } = useParams();
    const user = userList.find((item) => String(item.id) === userId);

    if (!user) {
        return (
            <main style={styles.page}>
                <section style={styles.card}>
                    <h1 style={styles.title}>User not found</h1>
                    <p style={styles.text}>This user id does not exist.</p>
                    <Link to="/users" style={styles.link}>
                        Back to users
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main style={styles.page}>
            <section style={styles.card}>
                <p style={styles.label}>User profile</p>
                <h1 style={styles.title}>{user.name}</h1>
                <p style={styles.text}>Selected user id: {user.id}</p>
                <Link to="/users" style={styles.link}>
                    Back to users
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
        width: "min(100%, 480px)",
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

export default UserDetails;
