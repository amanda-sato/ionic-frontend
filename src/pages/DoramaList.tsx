import React, { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
  IonSearchbar,
  IonPage,
  IonFooter,
  IonItem, 
  IonList, 
  IonRadio, 
  IonRadioGroup,
  IonCol,
  IonRow,
  IonLabel
} from '@ionic/react';
import { searchCircleOutline } from 'ionicons/icons';

const DoramaList: React.FC<{ products: { id: number, name: string, description: string, image: string}[] }> = ({ products }) => {
  const [search, setSearch] = useState('');

  function handleSearchChange(ev: Event) {
    let search = '';
    
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) search = target.value!.toLowerCase();
    
    setSearch(search);
  }

  function matchesSearch(product: any) {
    return product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  }



  return (
    <IonPage style={{ backgroundImage: `url('/sakura.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle className="header-title">Doramas</IonTitle>
        </IonToolbar>

        <>
        <IonSearchbar 
          searchIcon={searchCircleOutline} 
          placeholder="Search"
          value={search}
          onIonInput={handleSearchChange}
        />
      </>

      <IonList>
        <IonRadioGroup value="center">
          <IonRow>
            <IonCol size="auto">
              <IonItem lines="none" className="custom-radio">
                <IonRadio value="romance" className="custom-radio-input" />
                <IonLabel>Romance</IonLabel>
              </IonItem>
            </IonCol>
            <IonCol size="auto">
              <IonItem lines="none" className="custom-radio">
                <IonRadio value="comedy" className="custom-radio-input" />
                <IonLabel>Comedy</IonLabel>
              </IonItem>
            </IonCol>
            <IonCol size="auto">
              <IonItem lines="none" className="custom-radio">
                <IonRadio value="action" className="custom-radio-input" />
                <IonLabel>Action</IonLabel>
              </IonItem>
            </IonCol>
            <IonCol size="auto">
              <IonItem lines="none" className="custom-radio">
                <IonRadio value="fantasy" className="custom-radio-input" />
                <IonLabel>Fantasy</IonLabel>
              </IonItem>
            </IonCol>
            <IonCol size="auto">
              <IonItem lines="none" className="custom-radio">
                <IonRadio value="drama" className="custom-radio-input" />
                <IonLabel>Dorama</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonRadioGroup>
      </IonList>




      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Doramas List</h1>
        {products
          .filter(matchesSearch)
          .map(product => (
            <IonButton 
              key={product.id} 
              expand="full" 
              style={{ margin: '10px 0' }}
              routerLink={`/doramas/detail/${product.id}`}
            >
              {product.name}
            </IonButton>
          ))}
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

export default DoramaList;
