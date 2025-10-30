# Guide d'installation et de test - Khayrat Fes

## Prérequis

- Node.js 18+ installé sur votre ordinateur
- Un smartphone Android ou iOS
- Application Expo Go installée sur votre smartphone

## Installation

### 1. Cloner et installer le projet

```bash
# Cloner le repository
git clone <votre-repo-url>
cd khayrat-fes

# Vérifier que vous êtes sur la bonne branche
git checkout claude/mobile-syndic-app-shadcn-011CUcXjg9xPBBmAHwjHC1zy

# Installer les dépendances
npm install
```

### 2. Télécharger Expo Go sur votre smartphone

**Android**
- Aller sur Google Play Store
- Chercher "Expo Go"
- Télécharger et installer

**iOS**
- Aller sur App Store
- Chercher "Expo Go"
- Télécharger et installer

## Lancement de l'application

### Méthode 1 : Réseau local (Recommandé)

Cette méthode fonctionne si votre ordinateur et votre smartphone sont sur le même WiFi.

```bash
npm start
```

Un QR code apparaîtra dans votre terminal.

**Sur Android** : Ouvrez Expo Go et utilisez le scanner intégré
**Sur iOS** : Ouvrez l'app Appareil photo et scannez le QR code

### Méthode 2 : Mode Tunnel (Si réseaux différents)

Si votre ordinateur et smartphone sont sur des réseaux différents :

```bash
# Installer ngrok si pas déjà fait
npm install -g @expo/ngrok

# Démarrer avec tunnel
npx expo start --tunnel
```

Scannez le QR code qui apparaît.

### Méthode 3 : Test Web

Pour tester dans un navigateur web :

```bash
npm run web
```

## Fonctionnalités de l'application

### 1. Connexion
- Email : n'importe quel email valide (ex: test@test.com)
- Mot de passe : minimum 6 caractères (ex: 123456)

### 2. Tableau de bord
- Vue d'ensemble de la résidence
- Statistiques en temps réel
- Activités récentes
- Informations de la résidence

### 3. Gestion des résidents
- Liste complète des résidents
- Recherche par nom ou appartement
- Informations de contact
- Suivi des soldes

### 4. Gestion des paiements
- Vue financière globale
- Filtres par statut (payé, en attente, en retard)
- Historique des paiements
- Actions rapides (rappels, marquer payé)

### 5. Maintenance et réclamations
- Liste des réclamations
- Catégorisation par type
- Niveaux de priorité
- Suivi du statut
- Attribution aux techniciens

### 6. Paramètres
- Profil du syndic
- Notifications
- Sécurité
- Aide
- Déconnexion

## Résolution des problèmes

### Erreur "Unable to connect to Metro"

1. Vérifiez que votre ordinateur et smartphone sont sur le même WiFi
2. Désactivez les VPN ou pare-feu
3. Essayez le mode tunnel : `npx expo start --tunnel`

### Erreur "Network error"

1. Vérifiez votre connexion internet
2. Redémarrez le serveur : appuyez sur Ctrl+C puis relancez `npm start`
3. Videz le cache : `npx expo start --clear`

### L'application ne se charge pas

1. Fermez complètement Expo Go
2. Redémarrez le serveur de développement
3. Rescannez le QR code

### Erreurs de dépendances

```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules
npm install

# Vider le cache
npx expo start --clear
```

## Scripts disponibles

- `npm start` - Démarrer le serveur de développement
- `npm run android` - Ouvrir sur émulateur Android
- `npm run ios` - Ouvrir sur simulateur iOS
- `npm run web` - Ouvrir dans le navigateur

## Support

Pour toute question ou problème :
1. Vérifiez la documentation Expo : https://docs.expo.dev
2. Consultez les issues GitHub du projet
3. Contactez l'équipe de développement

## Prochaines étapes

Après avoir testé l'application, vous pouvez :
1. Personnaliser les couleurs et le branding
2. Intégrer une API backend réelle
3. Ajouter l'authentification sécurisée
4. Implémenter les notifications push
5. Ajouter plus de fonctionnalités

Bon test ! 🚀
