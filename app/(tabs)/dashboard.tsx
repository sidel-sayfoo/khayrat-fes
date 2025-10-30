import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Users,
  DollarSign,
  AlertCircle,
  TrendingUp,
  Building2,
} from "lucide-react-native";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardScreen() {
  const stats = [
    {
      title: "Total Résidents",
      value: "128",
      icon: Users,
      trend: "+5%",
      color: "rgb(59 130 246)",
    },
    {
      title: "Paiements en attente",
      value: "12",
      icon: DollarSign,
      trend: "-3%",
      color: "rgb(34 197 94)",
    },
    {
      title: "Réclamations ouvertes",
      value: "8",
      icon: AlertCircle,
      trend: "+2",
      color: "rgb(239 68 68)",
    },
    {
      title: "Revenus ce mois",
      value: "45 000 DH",
      icon: TrendingUp,
      trend: "+12%",
      color: "rgb(168 85 247)",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "payment",
      title: "Paiement reçu",
      description: "Ahmed Alami - Appartement 205",
      amount: "1 500 DH",
      time: "Il y a 2h",
      status: "success",
    },
    {
      id: 2,
      type: "complaint",
      title: "Nouvelle réclamation",
      description: "Fuite d'eau - Appartement 102",
      time: "Il y a 4h",
      status: "pending",
    },
    {
      id: 3,
      type: "maintenance",
      title: "Maintenance planifiée",
      description: "Nettoyage des espaces communs",
      time: "Demain 9h00",
      status: "scheduled",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <View className="p-4">
          {/* En-tête */}
          <View className="mb-6">
            <Text className="text-2xl font-bold text-foreground">
              Bienvenue
            </Text>
            <Text className="text-muted-foreground">
              Voici un aperçu de votre résidence
            </Text>
          </View>

          {/* Statistiques */}
          <View className="mb-6 flex-row flex-wrap gap-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="flex-1 min-w-[160px]">
                  <CardContent className="p-4">
                    <View className="flex-row items-center justify-between mb-2">
                      <View
                        className="h-10 w-10 items-center justify-center rounded-full"
                        style={{ backgroundColor: stat.color + "20" }}
                      >
                        <Icon color={stat.color} size={20} />
                      </View>
                      <Badge
                        label={stat.trend}
                        variant="secondary"
                        className="h-6"
                      />
                    </View>
                    <Text className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </Text>
                    <Text className="text-xs text-muted-foreground">
                      {stat.title}
                    </Text>
                  </CardContent>
                </Card>
              );
            })}
          </View>

          {/* Activités récentes */}
          <Card>
            <CardHeader>
              <CardTitle>Activités récentes</CardTitle>
              <CardDescription>
                Les dernières activités de votre résidence
              </CardDescription>
            </CardHeader>
            <CardContent>
              {recentActivities.map((activity, index) => (
                <View
                  key={activity.id}
                  className={`py-3 ${
                    index !== recentActivities.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  <View className="flex-row items-start justify-between">
                    <View className="flex-1">
                      <View className="flex-row items-center gap-2">
                        <Text className="font-semibold text-foreground">
                          {activity.title}
                        </Text>
                        {activity.status === "success" && (
                          <Badge label="Payé" variant="default" />
                        )}
                        {activity.status === "pending" && (
                          <Badge label="En attente" variant="destructive" />
                        )}
                        {activity.status === "scheduled" && (
                          <Badge label="Planifié" variant="secondary" />
                        )}
                      </View>
                      <Text className="text-sm text-muted-foreground mt-1">
                        {activity.description}
                      </Text>
                      <Text className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </Text>
                    </View>
                    {activity.amount && (
                      <Text className="font-bold text-green-600">
                        {activity.amount}
                      </Text>
                    )}
                  </View>
                </View>
              ))}
            </CardContent>
          </Card>

          {/* Informations de la résidence */}
          <Card className="mt-4">
            <CardHeader>
              <View className="flex-row items-center gap-2">
                <Building2 color="rgb(59 130 246)" size={24} />
                <CardTitle>Résidence Al Amal</CardTitle>
              </View>
            </CardHeader>
            <CardContent>
              <View className="space-y-2">
                <View className="flex-row justify-between py-2">
                  <Text className="text-muted-foreground">Adresse</Text>
                  <Text className="font-medium">123 Rue Fès, Maroc</Text>
                </View>
                <View className="flex-row justify-between py-2 border-t border-border">
                  <Text className="text-muted-foreground">
                    Nombre d'appartements
                  </Text>
                  <Text className="font-medium">128</Text>
                </View>
                <View className="flex-row justify-between py-2 border-t border-border">
                  <Text className="text-muted-foreground">Taux d'occupation</Text>
                  <Text className="font-medium">95%</Text>
                </View>
              </View>
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
