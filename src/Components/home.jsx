import React from 'react';
import { Container, Image, Jumbotron } from 'react-bootstrap';
import bankImage from './path_to_your_image/bootstrap-docs.png'; // Correct the path as needed
import styles from './Home.module.css'; // CSS Module

function Home() {
    return (
        <Jumbotron className={styles.jumbotron}>
            <Container className="text-center">
                <h1 className="display-4 fw-bold text-body-emphasis">Stephan Bank</h1>
                <h3 className="display-2">Welcome to Stephan Bank - Your Future, Secured and Amplified</h3>
                <Container className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Unlock a world of opportunities with our global banking network. Whether it's international trading, global investments, or overseas education, our expansive presence ensures that your banking needs are met, no matter where life takes you.</p>
                </Container>
                <Image 
                    src={bankImage} 
                    className={`img-fluid border rounded-3 shadow-lg mb-4 ${styles.image}`}
                    alt="Example image"
                    width="700"
                    height="500"
                    loading="lazy"
                />
            </Container>
        </Jumbotron>
    );
}

export default Home;