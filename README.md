# 🏢 Khayrat Fes - Application Mobile de Gestion de Syndic

Application mobile professionnelle pour la gestion de syndic résidentiel au Maroc.

![React Native](https://img.shields.io/badge/React%20Native-0.74-blue)
![Expo](https://img.shields.io/badge/Expo-51-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue)

## 🚀 Démarrage rapide

📖 **Nouveau ?** Consultez le [Guide de démarrage rapide](./QUICKSTART.md) (3 étapes seulement !)

📚 **Guide complet** → [INSTALLATION.md](./INSTALLATION.md)

```bash
# Installation
npm install

# Démarrage
npm start
```

Scannez le QR code avec Expo Go sur votre smartphone !

## ✨ Fonctionnalités

- 📱 **Tableau de bord** - Vue d'ensemble avec statistiques en temps réel
- 👥 **Gestion des résidents** - Liste complète avec recherche et filtres
- 💰 **Gestion des paiements** - Suivi des charges et arriérés
- 🔧 **Maintenance** - Gestion des réclamations par priorité
- 📊 **Rapports** - Statistiques et activités récentes
- 🔔 **Notifications** - Alertes et rappels (à venir)
- 🎨 **UI moderne** - Interface élégante inspirée de shadcn/ui

## 🛠️ Technologies

- **React Native** 0.74 - Framework mobile multiplateforme
- **Expo** 51 - Outils de développement et build
- **TypeScript** - Typage statique pour plus de robustesse
- **NativeWind** - Tailwind CSS pour React Native
- **Expo Router** - Navigation fichier-based
- **Lucide Icons** - Icônes modernes et cohérentes

## 📱 Captures d'écran

_À venir - après personnalisation des assets_

## 🎯 Commandes disponibles

```bash
npm start              # Démarrer le serveur de développement
npm run start:tunnel   # Mode tunnel (pour réseaux différents)
npm run start:clear    # Vider le cache et redémarrer
npm run android        # Ouvrir sur émulateur Android
npm run ios            # Ouvrir sur simulateur iOS
npm run web            # Tester dans le navigateur
npm run reset          # Réinitialiser complètement
```

## 📂 Structure du projet

```
khayrat-fes/
├── app/                    # Écrans et navigation
│   ├── (auth)/            # Authentification
│   │   └── login.tsx
│   ├── (tabs)/            # Navigation principale
│   │   ├── dashboard.tsx
│   │   ├── residents.tsx
│   │   ├── payments.tsx
│   │   ├── maintenance.tsx
│   │   └── settings.tsx
│   ├── _layout.tsx
│   └── index.tsx
├── components/ui/         # Composants réutilisables
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── badge.tsx
├── lib/                   # Utilitaires
├── types/                 # Types TypeScript
├── constants/             # Constantes (couleurs, etc.)
└── assets/               # Images et icônes
```

## 🔐 Authentification (Test)

Pour tester l'application, utilisez n'importe quelles identifiants valides :
- **Email** : test@test.com
- **Mot de passe** : 123456 (min 6 caractères)

_Note : L'authentification réelle sera ajoutée lors de l'intégration backend_

## 🚧 Prochaines étapes

- [ ] Intégration API backend
- [ ] Authentification sécurisée (JWT/OAuth)
- [ ] Notifications push
- [ ] Upload de photos pour réclamations
- [ ] Export de rapports (PDF, Excel)
- [ ] Mode hors ligne
- [ ] Chat en temps réel
- [ ] Gestion de documents
- [ ] Multi-résidences

## 📄 Documentation

- [Guide de démarrage rapide](./QUICKSTART.md) - Pour commencer en 3 étapes
- [Guide d'installation complet](./INSTALLATION.md) - Documentation détaillée
- [Documentation Expo](https://docs.expo.dev) - Référence technique

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📝 Licence

Propriétaire - Tous droits réservés

---

Développé avec ❤️ pour la communauté marocaine
