import * as React from "react";
import { Html, Head, Body, Container, Heading, Text, Link } from "@react-email/components";

const WelcomeEmail = ({ userName }) => {
  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>Welcome, {userName}!</Heading>
          <Text style={styles.text}>We're excited to have you join our community. Get started by exploring the features below.</Text>
          <Link href="#" style={styles.button}>Explore Features</Link>
          <Text style={styles.footerText}>If you didn't request this, please ignore this email.</Text>
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  body: { fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", padding: "20px" },
  container: { backgroundColor: "#ffffff", padding: "20px", borderRadius: "10px", textAlign: "center" },
  heading: { color: "#333" },
  text: { fontSize: "16px", color: "#555", lineHeight: "1.6" },
  button: { backgroundColor: "#007bff", color: "#fff", padding: "10px 20px", textDecoration: "none", borderRadius: "5px", marginTop: "20px" },
  footerText: { fontSize: "12px", color: "#888", marginTop: "20px" },
};

export default WelcomeEmail;
