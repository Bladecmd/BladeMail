import * as React from "react";
import { Html, Head, Preview, Body, Container, Heading, Text, Link, Section, Row, Column } from "@react-email/components";

export default function AdvancedEmail() {
  return (
    <Html>
      <Head />
      <Preview>All-in-One Notification: Welcome, Order, Event & Verification</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>Welcome to Our Service!</Heading>
          <Text style={styles.text}>We're thrilled to have you on board. Please verify your email to get started.</Text>
          <Link href="#" style={styles.button}>Verify Email</Link>
          
          <Section>
            <Row>
              <Column>
                <Heading style={styles.subheading}>Your Order is Confirmed!</Heading>
                <Text style={styles.text}>Thank you for shopping with us. Your order #123456 is being processed.</Text>
                <Link href="#" style={styles.button}>View Order</Link>
              </Column>
              <Column>
                <Heading style={styles.subheading}>Upcoming Event</Heading>
                <Text style={styles.text}>Join us for our exclusive event. Don't miss out on amazing opportunities!</Text>
                <Link href="#" style={styles.button}>Register Now</Link>
              </Column>
            </Row>
          </Section>
          
          <Text style={styles.footerText}>If you didn't request this email, you can safely ignore it.</Text>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    padding: "20px",
  },
  container: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
  heading: {
    color: "#333",
  },
  subheading: {
    color: "#444",
    fontSize: "18px",
    marginTop: "20px",
  },
  text: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: "5px",
    marginTop: "20px",
  },
  footerText: {
    fontSize: "12px",
    color: "#888",
    marginTop: "20px",
  },
};
