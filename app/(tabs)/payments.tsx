import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle,
  Calendar,
} from "lucide-react-native";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Payment {
  id: number;
  residentName: string;
  apartment: string;
  amount: number;
  type: string;
  status: "paid" | "pending" | "overdue";
  date: string;
  dueDate?: string;
}

export default function PaymentsScreen() {
  const [filter, setFilter] = useState<"all" | "paid" | "pending" | "overdue">(
    "all"
  );

  const payments: Payment[] = [
    {
      id: 1,
      residentName: "Ahmed Alami",
      apartment: "205",
      amount: 1500,
      type: "Charges mensuelles",
      status: "paid",
      date: "2025-10-28",
    },
    {
      id: 2,
      residentName: "Fatima Zahra",
      apartment: "102",
      amount: 1500,
      type: "Charges mensuelles",
      status: "pending",
      date: "2025-10-15",
      dueDate: "2025-11-01",
    },
    {
      id: 3,
      residentName: "Mohammed Bennani",
      apartment: "308",
      amount: 2000,
      type: "Charges + Eau",
      status: "paid",
      date: "2025-10-25",
    },
    {
      id: 4,
      residentName: "Khadija El Idrissi",
      apartment: "401",
      amount: 3000,
      type: "Arriéré",
      status: "overdue",
      date: "2025-09-01",
      dueDate: "2025-10-01",
    },
    {
      id: 5,
      residentName: "Youssef Tazi",
      apartment: "156",
      amount: 1500,
      type: "Charges mensuelles",
      status: "paid",
      date: "2025-10-30",
    },
  ];

  const filteredPayments =
    filter === "all"
      ? payments
      : payments.filter((p) => p.status === filter);

  const totalRevenue = payments
    .filter((p) => p.status === "paid")
    .reduce((sum, p) => sum + p.amount, 0);
  const pendingAmount = payments
    .filter((p) => p.status === "pending")
    .reduce((sum, p) => sum + p.amount, 0);
  const overdueAmount = payments
    .filter((p) => p.status === "overdue")
    .reduce((sum, p) => sum + p.amount, 0);

  const getStatusIcon = (status: Payment["status"]) => {
    switch (status) {
      case "paid":
        return <CheckCircle color="rgb(34 197 94)" size={20} />;
      case "pending":
        return <Clock color="rgb(234 179 8)" size={20} />;
      case "overdue":
        return <XCircle color="rgb(239 68 68)" size={20} />;
    }
  };

  const getStatusBadge = (status: Payment["status"]) => {
    switch (status) {
      case "paid":
        return <Badge label="Payé" variant="default" />;
      case "pending":
        return <Badge label="En attente" variant="secondary" />;
      case "overdue":
        return <Badge label="En retard" variant="destructive" />;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <View className="p-4">
          {/* Statistiques financières */}
          <View className="mb-4 space-y-3">
            <Card>
              <CardContent className="p-4">
                <View className="flex-row items-center gap-3">
                  <View className="h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <TrendingUp color="rgb(34 197 94)" size={24} />
                  </View>
                  <View className="flex-1">
                    <Text className="text-sm text-muted-foreground">
                      Revenus ce mois
                    </Text>
                    <Text className="text-2xl font-bold text-green-600">
                      {totalRevenue.toLocaleString()} DH
                    </Text>
                  </View>
                </View>
              </CardContent>
            </Card>

            <View className="flex-row gap-3">
              <Card className="flex-1">
                <CardContent className="p-4">
                  <View className="flex-row items-center gap-2 mb-1">
                    <Clock color="rgb(234 179 8)" size={18} />
                    <Text className="text-lg font-bold text-foreground">
                      {pendingAmount.toLocaleString()} DH
                    </Text>
                  </View>
                  <Text className="text-xs text-muted-foreground">
                    En attente
                  </Text>
                </CardContent>
              </Card>

              <Card className="flex-1">
                <CardContent className="p-4">
                  <View className="flex-row items-center gap-2 mb-1">
                    <TrendingDown color="rgb(239 68 68)" size={18} />
                    <Text className="text-lg font-bold text-foreground">
                      {overdueAmount.toLocaleString()} DH
                    </Text>
                  </View>
                  <Text className="text-xs text-muted-foreground">
                    En retard
                  </Text>
                </CardContent>
              </Card>
            </View>
          </View>

          {/* Filtres */}
          <View className="mb-4 flex-row gap-2">
            <Pressable
              onPress={() => setFilter("all")}
              className={`px-4 py-2 rounded-full ${
                filter === "all" ? "bg-primary" : "bg-secondary"
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  filter === "all"
                    ? "text-primary-foreground"
                    : "text-secondary-foreground"
                }`}
              >
                Tous ({payments.length})
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setFilter("paid")}
              className={`px-4 py-2 rounded-full ${
                filter === "paid" ? "bg-primary" : "bg-secondary"
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  filter === "paid"
                    ? "text-primary-foreground"
                    : "text-secondary-foreground"
                }`}
              >
                Payés ({payments.filter((p) => p.status === "paid").length})
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setFilter("pending")}
              className={`px-4 py-2 rounded-full ${
                filter === "pending" ? "bg-primary" : "bg-secondary"
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  filter === "pending"
                    ? "text-primary-foreground"
                    : "text-secondary-foreground"
                }`}
              >
                En attente
              </Text>
            </Pressable>
          </View>

          {/* Liste des paiements */}
          <View className="space-y-3">
            {filteredPayments.map((payment) => (
              <Card key={payment.id}>
                <CardHeader className="pb-3">
                  <View className="flex-row items-start justify-between">
                    <View className="flex-1">
                      <View className="flex-row items-center gap-2">
                        {getStatusIcon(payment.status)}
                        <CardTitle className="text-base">
                          {payment.residentName}
                        </CardTitle>
                      </View>
                      <Text className="text-sm text-muted-foreground mt-1">
                        Appartement {payment.apartment}
                      </Text>
                    </View>
                    {getStatusBadge(payment.status)}
                  </View>
                </CardHeader>
                <CardContent className="pt-0">
                  <View className="space-y-2">
                    <View className="flex-row items-center justify-between">
                      <Text className="text-sm text-muted-foreground">
                        {payment.type}
                      </Text>
                      <Text className="text-lg font-bold text-foreground">
                        {payment.amount.toLocaleString()} DH
                      </Text>
                    </View>

                    <View className="flex-row items-center gap-2">
                      <Calendar color="rgb(113 113 122)" size={14} />
                      <Text className="text-sm text-muted-foreground">
                        {payment.status === "paid"
                          ? `Payé le ${new Date(
                              payment.date
                            ).toLocaleDateString("fr-MA")}`
                          : `Échéance: ${
                              payment.dueDate
                                ? new Date(payment.dueDate).toLocaleDateString(
                                    "fr-MA"
                                  )
                                : "Non définie"
                            }`}
                      </Text>
                    </View>

                    {payment.status !== "paid" && (
                      <View className="mt-3 flex-row gap-2">
                        <Button
                          label="Envoyer rappel"
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onPress={() => {}}
                        />
                        <Button
                          label="Marquer payé"
                          size="sm"
                          className="flex-1"
                          onPress={() => {}}
                        />
                      </View>
                    )}
                  </View>
                </CardContent>
              </Card>
            ))}
          </View>

          {filteredPayments.length === 0 && (
            <Card className="mt-4">
              <CardContent className="p-8 items-center">
                <Text className="text-muted-foreground text-center">
                  Aucun paiement trouvé
                </Text>
              </CardContent>
            </Card>
          )}
        </View>
      </ScrollView>

      {/* Bouton d'ajout */}
      <View className="absolute bottom-4 right-4">
        <Pressable
          className="h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg active:opacity-70"
          onPress={() => {}}
        >
          <Text className="text-2xl text-white">+</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
