/**
 * DÉMO KHAYRAT FES - Version Snack
 *
 * Pour tester cette démo :
 * 1. Allez sur https://snack.expo.dev
 * 2. Créez un nouveau Snack
 * 3. Copiez tout ce code dans App.js
 * 4. Scannez le QR code avec Expo Go
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Écran de connexion
  if (!isLoggedIn) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loginContainer}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>🏢</Text>
            </View>
            <Text style={styles.title}>Khayrat Fes</Text>
            <Text style={styles.subtitle}>Gestion de Syndic Résidentiel</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Connexion</Text>
            <Text style={styles.cardDescription}>
              Connectez-vous à votre espace syndic
            </Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="syndic@example.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Mot de passe</Text>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (email && password.length >= 6) {
                  setIsLoggedIn(true);
                } else {
                  alert('Email et mot de passe requis (min 6 caractères)');
                }
              }}>
              <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footer}>
            Démo - Version simplifiée pour Expo Snack
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // Tableau de bord
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.dashboard}>
        <View style={styles.header}>
          <Text style={styles.welcomeTitle}>Bienvenue</Text>
          <Text style={styles.welcomeSubtitle}>
            Voici un aperçu de votre résidence
          </Text>
        </View>

        {/* Statistiques */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>128</Text>
            <Text style={styles.statLabel}>Total Résidents</Text>
            <Text style={styles.statTrend}>+5%</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Paiements en attente</Text>
            <Text style={styles.statTrend}>-3%</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>8</Text>
            <Text style={styles.statLabel}>Réclamations ouvertes</Text>
            <Text style={styles.statTrendRed}>+2</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>45k DH</Text>
            <Text style={styles.statLabel}>Revenus ce mois</Text>
            <Text style={styles.statTrend}>+12%</Text>
          </View>
        </View>

        {/* Activités récentes */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Activités récentes</Text>

          <View style={styles.activity}>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Paiement reçu</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Payé</Text>
              </View>
            </View>
            <Text style={styles.activityDescription}>
              Ahmed Alami - Appartement 205
            </Text>
            <Text style={styles.activityAmount}>1 500 DH</Text>
          </View>

          <View style={styles.activity}>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Nouvelle réclamation</Text>
              <View style={[styles.badge, styles.badgeRed]}>
                <Text style={styles.badgeText}>En attente</Text>
              </View>
            </View>
            <Text style={styles.activityDescription}>
              Fuite d'eau - Appartement 102
            </Text>
          </View>

          <View style={styles.activity}>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Maintenance planifiée</Text>
              <View style={[styles.badge, styles.badgeGray]}>
                <Text style={styles.badgeText}>Planifié</Text>
              </View>
            </View>
            <Text style={styles.activityDescription}>
              Nettoyage des espaces communs
            </Text>
          </View>
        </View>

        {/* Informations résidence */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🏢 Résidence Al Amal</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Adresse</Text>
            <Text style={styles.infoValue}>123 Rue Fès, Maroc</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Appartements</Text>
            <Text style={styles.infoValue}>128</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Taux d'occupation</Text>
            <Text style={styles.infoValue}>95%</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.button, styles.logoutButton]}
          onPress={() => setIsLoggedIn(false)}>
          <Text style={styles.buttonText}>Se déconnecter</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Version démo simplifiée - Application complète disponible sur GitHub
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoText: {
    fontSize: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#18181b',
  },
  subtitle: {
    fontSize: 14,
    color: '#71717a',
    marginTop: 8,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#18181b',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#71717a',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#18181b',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#71717a',
    marginTop: 24,
  },
  dashboard: {
    flex: 1,
  },
  header: {
    padding: 16,
    paddingTop: 24,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#18181b',
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: '#71717a',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#18181b',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#71717a',
  },
  statTrend: {
    fontSize: 12,
    color: '#22c55e',
    marginTop: 4,
  },
  statTrendRed: {
    fontSize: 12,
    color: '#ef4444',
    marginTop: 4,
  },
  activity: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  activityContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#18181b',
  },
  activityDescription: {
    fontSize: 14,
    color: '#71717a',
    marginTop: 4,
  },
  activityAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#22c55e',
    marginTop: 4,
  },
  badge: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeRed: {
    backgroundColor: '#ef4444',
  },
  badgeGray: {
    backgroundColor: '#71717a',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  infoLabel: {
    fontSize: 14,
    color: '#71717a',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#18181b',
  },
  logoutButton: {
    margin: 16,
    backgroundColor: '#ef4444',
  },
});
