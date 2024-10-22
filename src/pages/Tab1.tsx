import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonButton,
  IonImg,
  IonFooter,
  IonModal,
  IonInput,
  IonItem,
  IonList,
} from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); 
  const [isVideoOpen, setIsVideoOpen] = useState(false); 

  const toggleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen); 
  };

  const toggleVideoModal = () => {
    setIsVideoOpen(!isVideoOpen); 
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="header-title">Dorama Platform</IonTitle>
          <div className="header-menu">
            <IonButton fill="clear" className="header-button">Home</IonButton>
            <IonButton routerLink="/doramas" fill="clear" className="header-button">Doramas</IonButton>
            <IonButton fill="clear" className="header-button">News</IonButton>
            <IonButton fill="clear" className="header-button">Community</IonButton>
            <IonButton fill="clear" className="header-button" onClick={toggleLoginModal}>Login</IonButton>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard className="main-banner">
          <IonImg 
            src="./public/true-beauty.jpg" 
            style={{ 
              width: '50%',   
              height: 'auto', 
              margin: '0 auto' 
            }} 
          />
          <IonCardContent>
            <h2>Featured Drama ⭐⭐⭐⭐⭐</h2>
            <p>Watch the most popular drama now!</p>
            <IonButton expand="block" onClick={toggleVideoModal}>Watch Now</IonButton>
          </IonCardContent>
        </IonCard>

        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonCard className="drama-card">
                <IonImg 
                  src="./public/marry-my-husband3.jpg" 
                  alt="Drama 1" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'cover' 
                  }} 
                />
                <IonCardContent>
                  <h3>Drama Title 1</h3>
                  <p>⭐⭐⭐⭐⭐</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard className="drama-card">
                <IonImg 
                  src="./public/casamento-perfeito.jpg" 
                  alt="Drama 2" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'cover' 
                  }} 
                />
                <IonCardContent>
                  <h3>Drama Title 2</h3>
                  <p>⭐⭐⭐⭐☆</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonCard className="news-section">
          <IonCardContent>
            <h2>🌟Latest News🌟</h2>
            <p>Stay updated with the latest drama news! 💛🧡🩷❤️💜🩵💙💚🤍</p>
          </IonCardContent>
        </IonCard>
      </IonContent>

      <IonFooter>
        <IonToolbar style={{ padding: '5px 16px' }}>
          <p className="footer-text" style={{ margin: '0' }}> 
            © 2024 Dorama Platform - All Rights Reserved
          </p>
          <div className="footer-links">
            <IonButton fill="clear">Privacy Policy</IonButton>
            <IonButton fill="clear">Terms of Use</IonButton>
            <IonButton fill="clear">Contact</IonButton>
          </div>
        </IonToolbar>
      </IonFooter>

     
      <IonModal isOpen={isLoginOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle style={{ textAlign: 'center', fontSize: '1.5em', fontWeight: 'bold' }}>Login</IonTitle>
            <IonButton slot="end" onClick={toggleLoginModal}>Fechar</IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonCard>
            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonInput placeholder="Email" type="email" required />
                </IonItem>
                <IonItem>
                  <IonInput placeholder="Senha" type="password" required />
                </IonItem>
              </IonList>
              <IonButton expand="full" color="primary" onClick={toggleLoginModal}>Entrar</IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonModal>

      <IonModal isOpen={isVideoOpen} >
        <IonHeader>
          <IonToolbar>
            <IonTitle style={{ textAlign: 'center' }}>Vídeo</IonTitle>
            <IonButton slot="end" onClick={toggleVideoModal}>Fechar</IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              title="YouTube Video"
              src="https://www.youtube.com/embed/XpsUyyU6LW4"
              allowFullScreen
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                border: 'none', 
              }}
            ></iframe>
          </div>
        </IonContent>
      </IonModal>

    </IonPage>
  );
};

export default Tab1;
