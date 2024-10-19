import { useParams } from 'react-router-dom';
import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle, IonButton, IonPage } from '@ionic/react';
import React from 'react';

const DoramaDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const products = [
    { 
      id: 1, 
      name: "Dorama Goblin", 
      description: "Kim Shin é um ser imortal responsável por proteger as almas humanas. Contudo, ele sofre de uma maldição que só pode ser quebrada caso o rapaz consiga se casar.",
      image: "./public/goblin.jpg" 
    },
    { 
      id: 2, 
      name: "Descendentes do Sol", 
      description: "O oficial da tropa de elite sul-coreana Yoo Si Jin (Song Joong Ki) se apaixona pela cirurgiã Kang Mo Yeon (Song Hye Kyo), mas suas diferenças ideológicas os forçam a seguir caminhos separados.",
      image: "./public/descendentes.jpg"
    },
    { 
      id: 3, 
      name: "Somente por amor", 
      description: "Determinada a conseguir uma matéria digna de primeira página, a jornalista Zheng Shu Yi (Bai Lu) faz de tudo para conseguir uma entrevista com o CEO mais famoso do país, Shi Yan (Dylan Wang).",
      image: "./public/somente-por-amor.jpg"
    },
    { 
      id: 4, 
      name: "Amor entre Fada e Demônio", 
      description: "Descrição do Produto 4",
      image: "./public/fada-demonio.jpg"
    },
    { 
      id: 5, 
      name: "Pousando no amor", 
      description: "Descrição do Produto 5",
      image: "./public/pousando-no-amor.jpg"
    },
  ];
  
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
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ 
            maxWidth: '100%', 
            height: 'auto', 
            display: 'block', 
            margin: '0 auto',
            objectFit: 'cover' 
          }} 
        />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <IonButton expand="full" routerLink="/doramas" style={{ marginTop: '20px' }}>
          Voltar para Lista de Doramas
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default DoramaDetail;
