import * as React from "react";
import { Html, Head, Preview, Body, Container, Heading, Text, Link } from "@react-email/components";

export default function OrderConfirmationEmail() {
  return (
    <Html>
      <Head />
      <Preview>Your order has been confirmed!</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>Order Confirmation</Heading>
          <Text style={styles.text}>Thank you for your purchase! Your order has been confirmed.</Text>
          <Text style={styles.text}>Order Number: <strong>#123456</strong></Text>
          <Link href="#" style={styles.button}>View Order</Link>
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
  text: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: "5px",
    marginTop: "20px",
  },
};
