# Journal de bord HearthBuild

## 19-04-2018

### Groupe

- Rédaction du document de projet
- Rédaction du cahier des charges
- Rédaction des spécifications fonctionnelles et techniques

## 20-04-2018

### Groupe

- Rédaction des user stories
- Création des wireframes

## 23-04-2018

### Pair-programming

- Intégration HTML/CSS (home + page d'un deck)

## 24-04-2018

### Pair-programming

- Suite intégration HTML/CSS (finalisation page d'un deck + deck builder)

## 25-04-2018

### Pair-programming

- Finalisation intégration HTML/CSS (pages login/register + pre deck builder)
- Mise en place DB, création data dictionary
- tests routes, requêtes vers api et validation de données côté serveur
- Implémentation de l'enregistrement d'un user en BDD

## 26-04-2018

### Pair programming

- Implementation du login en back end
- Génération d'un token de connexion
- Commencement des routes pour les decks

## 27-04-2018

### Pair Programming

- Finition des routes pour les decks
- Implémentation en back end du système de likes et de commentaires
- Commencement des composants React

## 30-04-2018

### Pair programming

- Migration de brunch à webpack
- Initialisation de redux
- Finition du login et register
- Continuité des composants react ( deckbuilder)
- Test requête API

## 01-05-2018 (censé être férié)

### Jonathan

- Gestion des metas

### Cécile

- Test requête vers backend

### Max

- Création d'un component de route privée
- Création de components pour les différents inputs

## 02-05-2018

### Max

- Création du prebuilder
- Passage de contenu du prebuilder au deck builder
- Création d'une fonction de tri d'un array d'objets
- Récupération des cartes depuis l'API
- Tri des cartes par classe et par format
- Affichage des cartes disponibles
- Ajout d'un spinner au chargement des cartes

## 03-05-2018

### Cécile

- finition de la requête vers l'api
- pair programming pour le passage à redux

### Max

- Rework de la requête vers l'API :
  - Une seule requête au chargement de l'app
  - Tri des cartes directement depuis le component

- Nouvelles fonctionnalités du builder :
  - Ajout de cartes depuis le pool vers le deck
  - Suppression de cartes du deck
  - Mise à jour dynamique du coût du deck
  - Mise à jour dynamique du nombre de cartes dans le deck
  - Limite du deck à 30 cartes
  - Limite de 2 mêmes cartes par deck (1 si legendaire)

## 04-05-2018

### Jonathan

- Récupération du deck depuis le state local
- Affichage des infos du user dans les commentaires

### Cécile

- Début du formulaire de filtre et du sort du tableau

### Max

- Fix de la récupération des decks depuis la Home page
- Diverses réparations

## 05-05-2018

### Jonathan

- Récupération des likes d'un deck

## 06-05-2018

### Jonathan

- Affichage des likes en fonction de l'authentification

- Affichage du bouton de login dans les commentaires en fonction de l'authentification

- Ajout d'un message si pas de commentaires

## 07-05-2018

### Jonathan

- Gestion du like/dislike d'un deck
- Affiche d'un bouton de dislike si le user a déjà like ce deck

### Cecile

- Début de la gestion des filtres en home page

### Max

- Envoi du deck sur la base de données
- Validation des inputs du deck builder en front + back

## 08-05-2018

### Jonathan

- Ajout d'une route en backend pour récupérer les commentaires

- Ajout du formulaire de commentaire et affichage de ce dernier seulement si l'utilisateur est connecté

- Récupération d'un deck par son id depuis la home page

- Gestion de nombre de cartes et de leur rareté dans l'affichage de la liste du deck

### Cecile

- Création d'une route en front pour aller sur la page d'un deck via son id

- Pagination des decks

### Max

- Suppression d'un deck
- Fix des views dans le model de Deck

## 09-05-2018

### Jonathan

- Fix des emojis et des warnings en console :sunglasses:
- Fix de la pagination

### Cecile

- Tri du tableau de decks
- Filtres pour les decks de la home page
- Reset des filtres

### Max

- Fix de la navbar
- Fix du chargement des decks et rework du tri du tableau de decks
- Ajout de la recherche par nom dans le pool de cartes du builder

## 10-05-2018

### Jonathan

- Mana curve dans la page d'un deck
- Suppression des doubles de cartes et ajout d'un compteur pour chaque carte

### Max

- Mana curve dynamique dans le deck builder
- Suppression des doubles de cartes et ajout d'un compteur pour chaque carte

### Cecile

- Petit fix du CSS


## 11-05-2018

### Jonathan

- Fix des warnings + modifs css

### Max

- Guide du débutant

### Pair-programming

- Création d'une page de profil
- Suppression d'un deck depuis le profil


## 12-05-2018

### Pair-programming

- Ajout d'un modal de confirmation pour les suppressions
- Fix des banners + modifs css


## 14-05-2018

### Jonathan

- Fix du responsive des tableaux
- Troncage des textes en responsive

### Pair-programming

- Gros nettoyage du code
- Ajouts de commentaires
- Finition du responsive
- Activation de la compression GZ
- Supression d'utilisateur depuis son profil


## 15-05-2018

### Pair-programming

- Ajout d'un emoji picker pour les commentaires
- Création d'une fonction de remplacement de mots dans une string
- Reconnaissance des noms de cartes dans la description d'un deck
- I.E Preview des images des cartes présentes dans la description
- Création de regex pour les retours à la ligne et check de toutes les cartes dans la description


# THE END