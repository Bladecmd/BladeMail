import * as React from "react";
import { Html, Head, Body, Container, Heading, Text, Link, Section } from "@react-email/components";
import ReactPlayer from "react-player";

const AudioEmail = () => {
  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>Listen to Our Latest Audio Story!</Heading>
          <Text style={styles.text}>Click the play button below to listen to the latest addition to our collection of audio stories.</Text>
          
          <Section style={styles.audioContainer}>
            <ReactPlayer url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" controls width="100%" height="50px" />
          </Section>
          
          <Text style={styles.text}>Enjoy! If you didn't request this email, you can safely ignore it.</Text>
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
  audioContainer: { marginTop: "20px", marginBottom: "20px" },
};

export default AudioEmail;
