import { useParams } from 'react-router-dom';
import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle, IonButton, IonPage,
  IonCard,
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle,
  IonGrid,
  IonRow,
  IonFooter
 } from '@ionic/react';
import React from 'react';

const DoramaDetail: React.FC<{ products: { id: number, name: string, description: string, pontuation: string, image: string}[]}> = ({ products }) => {
  const { productId } = useParams<{ productId: string }>();
  
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle className="header-title">{product.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ textAlign: 'center', maxHeight: '80vh', overflowY: 'auto' }}>

      <IonGrid> 
        <IonRow>

          <IonCard style={{ width: '70%', margin: "auto"}}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ 
              maxWidth: '70%', 
              height: 'auto', 
              display: 'block', 
              margin: '0 auto',
              objectFit: 'cover' 
            }} 
          />
        <IonCardHeader>
          <IonCardTitle>{product.name}</IonCardTitle>
        </IonCardHeader>

        <IonCardSubtitle>{product.pontuation}</IonCardSubtitle>


        <IonCardContent>{product.description}</IonCardContent> 


          <IonButton routerLink="/doramas" style={{ marginTop: '20px' }}>
              Return to List of Dramas
          </IonButton>

          </IonCard>

        </IonRow>
      </IonGrid>

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

export default DoramaDetail;
