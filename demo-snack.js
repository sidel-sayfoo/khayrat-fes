/**
 * 🏢 KHAYRAT FES - Démo Mobile Complète avec Navigation
 *
 * Pour tester cette démo :
 * 1. Allez sur https://snack.expo.dev
 * 2. Créez un nouveau Snack
 * 3. Copiez tout ce code dans App.js
 * 4. Scannez le QR code avec Expo Go
 *
 * Fonctionnalités :
 * ✅ Connexion
 * ✅ Navigation par onglets en bas
 * ✅ Graphiques visuels
 * ✅ 5 écrans : Dashboard, Résidents, Paiements, Maintenance, Paramètres
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
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

// Composant Graphique Barre
const BarChart = ({ data, maxValue }) => {
  return (
    <View style={styles.chartContainer}>
      {data.map((item, index) => {
        const height = (item.value / maxValue) * 120;
        return (
          <View key={index} style={styles.barWrapper}>
            <View style={styles.barContainer}>
              <View
                style={[
                  styles.bar,
                  { height, backgroundColor: item.color }
                ]}
              />
            </View>
            <Text style={styles.barLabel}>{item.label}</Text>
            <Text style={styles.barValue}>{item.value}</Text>
          </View>
        );
      })}
    </View>
  );
};

// Composant Graphique Circulaire (Donut)
const DonutChart = ({ percentage, color, label }) => {
  return (
    <View style={styles.donutContainer}>
      <View style={styles.donutOuter}>
        <View style={[styles.donutFill, {
          width: `${percentage}%`,
          backgroundColor: color
        }]} />
      </View>
      <View style={styles.donutInfo}>
        <Text style={styles.donutPercentage}>{percentage}%</Text>
        <Text style={styles.donutLabel}>{label}</Text>
      </View>
    </View>
  );
};

// Composant Graphique Ligne simple
const LineChart = ({ data }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  return (
    <View style={styles.lineChartContainer}>
      <View style={styles.lineChartArea}>
        {data.map((point, index) => {
          const height = (point.value / maxValue) * 100;
          const left = (index / (data.length - 1)) * 100;
          return (
            <View
              key={index}
              style={[styles.linePoint, {
                bottom: `${height}%`,
                left: `${left}%`
              }]}
            />
          );
        })}
      </View>
      <View style={styles.lineChartLabels}>
        {data.map((point, index) => (
          <Text key={index} style={styles.lineChartLabel}>
            {point.label}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentTab, setCurrentTab] = useState('dashboard');

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
            Version démo avec navigation et graphiques
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // Fonction pour rendre le contenu selon l'onglet actif
  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return <DashboardScreen />;
      case 'residents':
        return <ResidentsScreen />;
      case 'payments':
        return <PaymentsScreen />;
      case 'maintenance':
        return <MaintenanceScreen />;
      case 'settings':
        return <SettingsScreen onLogout={() => setIsLoggedIn(false)} />;
      default:
        return <DashboardScreen />;
    }
  };

  // Application principale avec navigation
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        {/* Contenu */}
        <View style={styles.content}>
          {renderContent()}
        </View>

        {/* Navigation en bas */}
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => setCurrentTab('dashboard')}>
            <Text style={currentTab === 'dashboard' ? styles.tabIconActive : styles.tabIcon}>
              📊
            </Text>
            <Text style={currentTab === 'dashboard' ? styles.tabLabelActive : styles.tabLabel}>
              Tableau de bord
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => setCurrentTab('residents')}>
            <Text style={currentTab === 'residents' ? styles.tabIconActive : styles.tabIcon}>
              👥
            </Text>
            <Text style={currentTab === 'residents' ? styles.tabLabelActive : styles.tabLabel}>
              Résidents
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => setCurrentTab('payments')}>
            <Text style={currentTab === 'payments' ? styles.tabIconActive : styles.tabIcon}>
              💰
            </Text>
            <Text style={currentTab === 'payments' ? styles.tabLabelActive : styles.tabLabel}>
              Paiements
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => setCurrentTab('maintenance')}>
            <Text style={currentTab === 'maintenance' ? styles.tabIconActive : styles.tabIcon}>
              🔧
            </Text>
            <Text style={currentTab === 'maintenance' ? styles.tabLabelActive : styles.tabLabel}>
              Maintenance
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => setCurrentTab('settings')}>
            <Text style={currentTab === 'settings' ? styles.tabIconActive : styles.tabIcon}>
              ⚙️
            </Text>
            <Text style={currentTab === 'settings' ? styles.tabLabelActive : styles.tabLabel}>
              Paramètres
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Écran Tableau de bord
const DashboardScreen = () => {
  const revenueData = [
    { label: 'Jan', value: 35, color: '#3b82f6' },
    { label: 'Fév', value: 42, color: '#3b82f6' },
    { label: 'Mar', value: 38, color: '#3b82f6' },
    { label: 'Avr', value: 45, color: '#22c55e' },
  ];

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Tableau de bord</Text>
        <Text style={styles.screenSubtitle}>Résidence Al Amal</Text>
      </View>

      {/* Statistiques */}
      <View style={styles.statsGrid}>
        <View style={[styles.statCard, { backgroundColor: '#dbeafe' }]}>
          <Text style={styles.statValue}>128</Text>
          <Text style={styles.statLabel}>Résidents</Text>
          <Text style={[styles.statTrend, { color: '#22c55e' }]}>+5%</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: '#dcfce7' }]}>
          <Text style={styles.statValue}>45k DH</Text>
          <Text style={styles.statLabel}>Revenus</Text>
          <Text style={[styles.statTrend, { color: '#22c55e' }]}>+12%</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: '#fef3c7' }]}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>En attente</Text>
          <Text style={[styles.statTrend, { color: '#f59e0b' }]}>-3%</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: '#fee2e2' }]}>
          <Text style={styles.statValue}>8</Text>
          <Text style={styles.statLabel}>Réclamations</Text>
          <Text style={[styles.statTrend, { color: '#ef4444' }]}>+2</Text>
        </View>
      </View>

      {/* Graphique des revenus */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📈 Revenus mensuels (k DH)</Text>
        <BarChart data={revenueData} maxValue={50} />
      </View>

      {/* Taux d'occupation */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🏢 Taux d'occupation</Text>
        <DonutChart percentage={95} color="#22c55e" label="Appartements occupés" />
      </View>

      {/* Activités récentes */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📋 Activités récentes</Text>
        {[
          { title: 'Paiement reçu', desc: 'Ahmed Alami - App 205', badge: 'Payé', color: '#22c55e' },
          { title: 'Nouvelle réclamation', desc: 'Fuite d\'eau - App 102', badge: 'Urgent', color: '#ef4444' },
          { title: 'Maintenance', desc: 'Nettoyage espaces communs', badge: 'Planifié', color: '#71717a' },
        ].map((activity, i) => (
          <View key={i} style={styles.activityItem}>
            <View>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text style={styles.activityDesc}>{activity.desc}</Text>
            </View>
            <View style={[styles.activityBadge, { backgroundColor: activity.color }]}>
              <Text style={styles.activityBadgeText}>{activity.badge}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

// Écran Résidents
const ResidentsScreen = () => {
  const residents = [
    { name: 'Ahmed Alami', apt: '205', phone: '+212 612 34 56 78', status: 'Actif', balance: 0 },
    { name: 'Fatima Zahra', apt: '102', phone: '+212 623 45 67 89', status: 'Actif', balance: -1500 },
    { name: 'Mohammed Bennani', apt: '308', phone: '+212 634 56 78 90', status: 'Actif', balance: 500 },
    { name: 'Khadija El Idrissi', apt: '401', phone: '+212 645 67 89 01', status: 'Inactif', balance: -3000 },
  ];

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Résidents</Text>
        <Text style={styles.screenSubtitle}>{residents.length} résidents au total</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={[styles.miniStat, { backgroundColor: '#dcfce7' }]}>
          <Text style={styles.miniStatValue}>3</Text>
          <Text style={styles.miniStatLabel}>Actifs</Text>
        </View>
        <View style={[styles.miniStat, { backgroundColor: '#fee2e2' }]}>
          <Text style={styles.miniStatValue}>1</Text>
          <Text style={styles.miniStatLabel}>Inactif</Text>
        </View>
      </View>

      {residents.map((resident, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.residentHeader}>
            <View>
              <Text style={styles.residentName}>{resident.name}</Text>
              <Text style={styles.residentApt}>Appartement {resident.apt}</Text>
            </View>
            <View style={[
              styles.residentStatus,
              { backgroundColor: resident.status === 'Actif' ? '#dcfce7' : '#fee2e2' }
            ]}>
              <Text style={styles.residentStatusText}>{resident.status}</Text>
            </View>
          </View>
          <Text style={styles.residentPhone}>📞 {resident.phone}</Text>
          <View style={styles.residentBalance}>
            <Text style={styles.balanceLabel}>Solde:</Text>
            <Text style={[
              styles.balanceValue,
              { color: resident.balance < 0 ? '#ef4444' : resident.balance > 0 ? '#22c55e' : '#71717a' }
            ]}>
              {resident.balance} DH
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

// Écran Paiements
const PaymentsScreen = () => {
  const monthlyData = [
    { label: 'Jan', value: 35000 },
    { label: 'Fév', value: 42000 },
    { label: 'Mar', value: 38000 },
    { label: 'Avr', value: 45000 },
  ];

  const payments = [
    { name: 'Ahmed Alami', apt: '205', amount: 1500, status: 'Payé', date: '28 Oct' },
    { name: 'Fatima Zahra', apt: '102', amount: 1500, status: 'En attente', date: '1 Nov' },
    { name: 'Mohammed Bennani', apt: '308', amount: 2000, status: 'Payé', date: '25 Oct' },
  ];

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Paiements</Text>
        <Text style={styles.screenSubtitle}>Gestion des charges</Text>
      </View>

      {/* Stats financières */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>💰 Revenus ce mois</Text>
        <Text style={styles.bigAmount}>45 000 DH</Text>
        <Text style={styles.trendText}>↗️ +12% vs mois dernier</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={[styles.miniStat, { backgroundColor: '#fef3c7' }]}>
          <Text style={styles.miniStatValue}>1 500 DH</Text>
          <Text style={styles.miniStatLabel}>En attente</Text>
        </View>
        <View style={[styles.miniStat, { backgroundColor: '#fee2e2' }]}>
          <Text style={styles.miniStatValue}>3 000 DH</Text>
          <Text style={styles.miniStatLabel}>En retard</Text>
        </View>
      </View>

      {/* Évolution mensuelle */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📊 Évolution mensuelle</Text>
        <LineChart data={monthlyData} />
      </View>

      {/* Liste des paiements */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📋 Derniers paiements</Text>
        {payments.map((payment, i) => (
          <View key={i} style={styles.paymentItem}>
            <View style={styles.paymentInfo}>
              <Text style={styles.paymentName}>{payment.name}</Text>
              <Text style={styles.paymentApt}>App {payment.apt} • {payment.date}</Text>
            </View>
            <View style={styles.paymentRight}>
              <Text style={styles.paymentAmount}>{payment.amount} DH</Text>
              <View style={[
                styles.paymentStatus,
                { backgroundColor: payment.status === 'Payé' ? '#dcfce7' : '#fef3c7' }
              ]}>
                <Text style={styles.paymentStatusText}>{payment.status}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

// Écran Maintenance
const MaintenanceScreen = () => {
  const requests = [
    { title: 'Fuite d\'eau cuisine', resident: 'Fatima Zahra', apt: '102', priority: 'Urgent', status: 'Ouvert' },
    { title: 'Panne électricité', resident: 'Ahmed Alami', apt: '205', priority: 'Haute', status: 'En cours' },
    { title: 'Climatisation défectueuse', resident: 'Mohammed Bennani', apt: '308', priority: 'Moyenne', status: 'Ouvert' },
  ];

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Maintenance</Text>
        <Text style={styles.screenSubtitle}>Gestion des réclamations</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={[styles.miniStat, { backgroundColor: '#fee2e2' }]}>
          <Text style={styles.miniStatValue}>2</Text>
          <Text style={styles.miniStatLabel}>Ouvertes</Text>
        </View>
        <View style={[styles.miniStat, { backgroundColor: '#fef3c7' }]}>
          <Text style={styles.miniStatValue}>1</Text>
          <Text style={styles.miniStatLabel}>En cours</Text>
        </View>
        <View style={[styles.miniStat, { backgroundColor: '#dcfce7' }]}>
          <Text style={styles.miniStatValue}>5</Text>
          <Text style={styles.miniStatLabel}>Résolues</Text>
        </View>
      </View>

      {requests.map((request, i) => (
        <View key={i} style={styles.card}>
          <View style={styles.maintenanceHeader}>
            <Text style={styles.maintenanceTitle}>{request.title}</Text>
            <View style={[
              styles.priorityBadge,
              { backgroundColor:
                request.priority === 'Urgent' ? '#ef4444' :
                request.priority === 'Haute' ? '#f59e0b' : '#71717a'
              }
            ]}>
              <Text style={styles.priorityText}>{request.priority}</Text>
            </View>
          </View>
          <Text style={styles.maintenanceInfo}>
            👤 {request.resident} • App {request.apt}
          </Text>
          <View style={[
            styles.maintenanceStatus,
            { backgroundColor: request.status === 'En cours' ? '#fef3c7' : '#fee2e2' }
          ]}>
            <Text style={styles.maintenanceStatusText}>
              {request.status === 'En cours' ? '⏳' : '🔴'} {request.status}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

// Écran Paramètres
const SettingsScreen = ({ onLogout }) => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Paramètres</Text>
        <Text style={styles.screenSubtitle}>Configuration de l'application</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.profileSection}>
          <View style={styles.profileAvatar}>
            <Text style={styles.profileAvatarText}>🏢</Text>
          </View>
          <View>
            <Text style={styles.profileName}>Résidence Al Amal</Text>
            <Text style={styles.profileEmail}>syndic@alamal.ma</Text>
          </View>
        </View>
      </View>

      {[
        { icon: '👤', title: 'Profil', desc: 'Gérer les informations' },
        { icon: '🔔', title: 'Notifications', desc: 'Alertes et rappels' },
        { icon: '🔒', title: 'Sécurité', desc: 'Mot de passe' },
        { icon: '❓', title: 'Aide', desc: 'Centre d\'aide et FAQ' },
      ].map((item, i) => (
        <TouchableOpacity key={i} style={styles.settingsItem}>
          <View style={styles.settingsItemLeft}>
            <Text style={styles.settingsIcon}>{item.icon}</Text>
            <View>
              <Text style={styles.settingsTitle}>{item.title}</Text>
              <Text style={styles.settingsDesc}>{item.desc}</Text>
            </View>
          </View>
          <Text style={styles.settingsArrow}>›</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutText}>🚪 Se déconnecter</Text>
      </TouchableOpacity>

      <Text style={styles.versionText}>Version 1.0.0 - Démo Khayrat Fes</Text>
    </ScrollView>
  );
};

// Styles
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
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#18181b',
    marginBottom: 12,
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
  mainContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  header: {
    padding: 16,
    paddingTop: 12,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#18181b',
  },
  screenSubtitle: {
    fontSize: 14,
    color: '#71717a',
    marginTop: 4,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  statCard: {
    width: (width - 48) / 2,
    margin: 8,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
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
    marginBottom: 4,
  },
  statTrend: {
    fontSize: 12,
    fontWeight: '600',
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 160,
    paddingVertical: 16,
  },
  barWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  barContainer: {
    height: 120,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bar: {
    width: 40,
    borderRadius: 6,
  },
  barLabel: {
    fontSize: 12,
    color: '#71717a',
    marginTop: 8,
  },
  barValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#18181b',
  },
  donutContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  donutOuter: {
    width: 120,
    height: 20,
    backgroundColor: '#e5e7eb',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 12,
  },
  donutFill: {
    height: '100%',
    borderRadius: 10,
  },
  donutInfo: {
    alignItems: 'center',
  },
  donutPercentage: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#18181b',
  },
  donutLabel: {
    fontSize: 14,
    color: '#71717a',
  },
  lineChartContainer: {
    height: 120,
    marginVertical: 16,
  },
  lineChartArea: {
    height: 100,
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    position: 'relative',
  },
  linePoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3b82f6',
    position: 'absolute',
  },
  lineChartLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  lineChartLabel: {
    fontSize: 12,
    color: '#71717a',
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#18181b',
  },
  activityDesc: {
    fontSize: 12,
    color: '#71717a',
    marginTop: 2,
  },
  activityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  activityBadgeText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 12,
  },
  miniStat: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  miniStatValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#18181b',
  },
  miniStatLabel: {
    fontSize: 11,
    color: '#71717a',
    marginTop: 2,
  },
  residentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  residentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#18181b',
  },
  residentApt: {
    fontSize: 13,
    color: '#71717a',
    marginTop: 2,
  },
  residentStatus: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  residentStatusText: {
    fontSize: 11,
    fontWeight: '600',
  },
  residentPhone: {
    fontSize: 13,
    color: '#71717a',
    marginBottom: 8,
  },
  residentBalance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
  },
  balanceLabel: {
    fontSize: 13,
    color: '#71717a',
  },
  balanceValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  bigAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#18181b',
    marginVertical: 8,
  },
  trendText: {
    fontSize: 14,
    color: '#22c55e',
  },
  paymentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
  },
  paymentInfo: {
    flex: 1,
  },
  paymentName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#18181b',
  },
  paymentApt: {
    fontSize: 12,
    color: '#71717a',
    marginTop: 2,
  },
  paymentRight: {
    alignItems: 'flex-end',
  },
  paymentAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#18181b',
    marginBottom: 4,
  },
  paymentStatus: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  paymentStatusText: {
    fontSize: 11,
    fontWeight: '600',
  },
  maintenanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  maintenanceTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#18181b',
    flex: 1,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  priorityText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '600',
  },
  maintenanceInfo: {
    fontSize: 13,
    color: '#71717a',
    marginBottom: 8,
  },
  maintenanceStatus: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  maintenanceStatusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatarText: {
    fontSize: 30,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#18181b',
  },
  profileEmail: {
    fontSize: 13,
    color: '#71717a',
    marginTop: 2,
  },
  settingsItem: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  settingsIcon: {
    fontSize: 24,
  },
  settingsTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#18181b',
  },
  settingsDesc: {
    fontSize: 12,
    color: '#71717a',
    marginTop: 2,
  },
  settingsArrow: {
    fontSize: 24,
    color: '#71717a',
  },
  logoutButton: {
    backgroundColor: '#fee2e2',
    marginHorizontal: 16,
    marginVertical: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ef4444',
  },
  versionText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#71717a',
    marginBottom: 24,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingBottom: 8,
    paddingTop: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  tabIcon: {
    fontSize: 22,
    marginBottom: 4,
    opacity: 0.5,
  },
  tabIconActive: {
    fontSize: 22,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 10,
    color: '#71717a',
  },
  tabLabelActive: {
    fontSize: 10,
    color: '#3b82f6',
    fontWeight: '600',
  },
});
