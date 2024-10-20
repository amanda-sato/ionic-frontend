import React, { useState } from 'react';
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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Doramas</IonTitle>
        </IonToolbar>

        <>
        <IonSearchbar 
          searchIcon={searchCircleOutline} 
          placeholder="Pesquisa"
          value={search}
          onIonInput={handleSearchChange}
        />
      </>

      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Lista de Doramas</h1>
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
    </IonPage>
  );
};

export default DoramaList;
