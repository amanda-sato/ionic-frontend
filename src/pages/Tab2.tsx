import React from 'react';
import {
  IonModal,
  IonInput,
  IonBackButton,
  IonButtons,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
  IonSearchbar,
  IonItem,
  IonPage
} from '@ionic/react';
import { searchCircleOutline } from 'ionicons/icons';

const Tab2: React.FC = () => {
  const products = [
    { id: 1, name: "Goblin" },
    { id: 2, name: "Descendentes do Sol" },
    { id: 3, name: "Somente por amor" },
    { id: 4, name: "Amor entre Fada e Demônio" },
    { id: 5, name: "Pousando no amor" },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Doramas</IonTitle>
        </IonToolbar>

        <>
        <IonSearchbar searchIcon={searchCircleOutline} placeholder="Custom Search Icon"></IonSearchbar>
      </>

      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Lista de Doramas</h1>
        {products.map(product => (
          <IonButton 
            key={product.id} 
            expand="full" 
            style={{ margin: '10px 0' }}
            routerLink={`/tab2/tab3/${product.id}`}
          >
            {product.name}
          </IonButton>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
