import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonGrid, 
  IonRow, 
  IonCol, 
  IonCard, 
  IonCardContent, 
  IonButton, 
  IonImg, 
  IonFooter
 } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
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
          <IonButton fill="clear" className="header-button">Login</IonButton>
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
            <p>Watch the most popular drama now! </p>
            <IonButton expand="block">Watch Now</IonButton>
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


    </IonPage>
  );
};

export default Tab1;
