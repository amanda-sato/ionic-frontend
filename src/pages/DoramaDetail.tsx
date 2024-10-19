import { useParams } from 'react-router-dom';
import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle, IonButton, IonPage,
  IonCard,
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle,
  IonGrid,
  IonRow
 } from '@ionic/react';
import React from 'react';

const DoramaDetail: React.FC<{ products: { id: number, name: string, description: string, image: string}[] }> = ({ products }) => {
  const { productId } = useParams<{ productId: string }>();
  
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{product.name}</IonTitle>
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

        <IonCardContent>{product.description}</IonCardContent> 


          <IonButton routerLink="/doramas" style={{ marginTop: '20px' }}>
            Voltar para Lista de Doramas
          </IonButton>

          </IonCard>

        </IonRow>
      </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default DoramaDetail;
