# 🚀 Guide de démarrage rapide

## En 3 étapes simples

### 1️⃣ Installer Expo Go sur votre smartphone

**Android** → [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
**iOS** → [App Store](https://apps.apple.com/app/expo-go/id982107779)

### 2️⃣ Lancer le projet sur votre ordinateur

```bash
# Installer les dépendances (première fois seulement)
npm install

# Démarrer le serveur de développement
npm start
```

### 3️⃣ Scanner le QR code

Un QR code apparaîtra dans votre terminal.

- **Android** : Ouvrez Expo Go → Scanner le QR code
- **iOS** : Ouvrez l'app Appareil photo → Scanner le QR code

**C'est tout !** L'application se chargera sur votre smartphone. 📱

---

## 🔧 Autres commandes utiles

```bash
# Mode tunnel (si différents réseaux WiFi)
npm run start:tunnel

# Vider le cache et redémarrer
npm run start:clear

# Tester dans le navigateur web
npm run web

# Réinitialiser complètement le projet
npm run reset
```

## 🎯 Premiers pas dans l'app

1. **Connexion** : Utilisez n'importe quel email/mot de passe valide
   - Email : `test@test.com`
   - Mot de passe : `123456`

2. **Explorez** les 5 sections :
   - 🏠 Tableau de bord
   - 👥 Résidents
   - 💰 Paiements
   - 🔧 Maintenance
   - ⚙️ Paramètres

## ❓ Problèmes ?

**Impossible de se connecter ?**
→ Vérifiez que votre smartphone et ordinateur sont sur le même WiFi
→ Essayez : `npm run start:tunnel`

**L'app ne se charge pas ?**
→ Redémarrez : `npm run start:clear`

**Autres problèmes ?**
→ Consultez [INSTALLATION.md](./INSTALLATION.md) pour le guide complet

Bon test ! 🎉
