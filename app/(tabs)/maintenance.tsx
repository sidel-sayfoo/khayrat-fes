import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Wrench,
  AlertCircle,
  CheckCircle2,
  Clock,
  Droplet,
  Zap,
  Wind,
  Home,
  User,
} from "lucide-react-native";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface MaintenanceRequest {
  id: number;
  title: string;
  description: string;
  residentName: string;
  apartment: string;
  category: "plumbing" | "electrical" | "hvac" | "other";
  priority: "low" | "medium" | "high" | "urgent";
  status: "open" | "in_progress" | "resolved";
  createdAt: string;
  assignedTo?: string;
}

export default function MaintenanceScreen() {
  const [filter, setFilter] = useState<
    "all" | "open" | "in_progress" | "resolved"
  >("all");

  const requests: MaintenanceRequest[] = [
    {
      id: 1,
      title: "Fuite d'eau dans la cuisine",
      description: "Fuite importante sous l'évier",
      residentName: "Fatima Zahra",
      apartment: "102",
      category: "plumbing",
      priority: "urgent",
      status: "open",
      createdAt: "2025-10-30T08:30:00",
    },
    {
      id: 2,
      title: "Panne d'électricité",
      description: "Disjoncteur qui saute régulièrement",
      residentName: "Ahmed Alami",
      apartment: "205",
      category: "electrical",
      priority: "high",
      status: "in_progress",
      createdAt: "2025-10-29T14:20:00",
      assignedTo: "Hassan (Électricien)",
    },
    {
      id: 3,
      title: "Climatisation défectueuse",
      description: "La climatisation ne refroidit plus",
      residentName: "Mohammed Bennani",
      apartment: "308",
      category: "hvac",
      priority: "medium",
      status: "open",
      createdAt: "2025-10-28T10:15:00",
    },
    {
      id: 4,
      title: "Problème d'ascenseur",
      description: "Bruit étrange dans l'ascenseur",
      residentName: "Résidence",
      apartment: "Commun",
      category: "other",
      priority: "medium",
      status: "in_progress",
      createdAt: "2025-10-27T16:45:00",
      assignedTo: "Karim (Technicien)",
    },
    {
      id: 5,
      title: "Réparation fenêtre",
      description: "Vitre cassée",
      residentName: "Youssef Tazi",
      apartment: "156",
      category: "other",
      priority: "low",
      status: "resolved",
      createdAt: "2025-10-25T09:00:00",
      assignedTo: "Omar (Menuisier)",
    },
  ];

  const filteredRequests =
    filter === "all" ? requests : requests.filter((r) => r.status === filter);

  const getCategoryIcon = (category: MaintenanceRequest["category"]) => {
    switch (category) {
      case "plumbing":
        return <Droplet color="rgb(59 130 246)" size={20} />;
      case "electrical":
        return <Zap color="rgb(234 179 8)" size={20} />;
      case "hvac":
        return <Wind color="rgb(34 197 94)" size={20} />;
      case "other":
        return <Home color="rgb(113 113 122)" size={20} />;
    }
  };

  const getPriorityBadge = (priority: MaintenanceRequest["priority"]) => {
    switch (priority) {
      case "urgent":
        return <Badge label="Urgent" variant="destructive" />;
      case "high":
        return <Badge label="Haute" variant="destructive" />;
      case "medium":
        return <Badge label="Moyenne" variant="secondary" />;
      case "low":
        return <Badge label="Basse" variant="outline" />;
    }
  };

  const getStatusBadge = (status: MaintenanceRequest["status"]) => {
    switch (status) {
      case "open":
        return (
          <View className="flex-row items-center gap-1">
            <AlertCircle color="rgb(239 68 68)" size={16} />
            <Text className="text-sm text-destructive">Ouverte</Text>
          </View>
        );
      case "in_progress":
        return (
          <View className="flex-row items-center gap-1">
            <Clock color="rgb(234 179 8)" size={16} />
            <Text className="text-sm text-yellow-600">En cours</Text>
          </View>
        );
      case "resolved":
        return (
          <View className="flex-row items-center gap-1">
            <CheckCircle2 color="rgb(34 197 94)" size={16} />
            <Text className="text-sm text-green-600">Résolue</Text>
          </View>
        );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Il y a moins d'une heure";
    if (diffInHours < 24) return `Il y a ${diffInHours}h`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `Il y a ${diffInDays}j`;
  };

  const openCount = requests.filter((r) => r.status === "open").length;
  const inProgressCount = requests.filter(
    (r) => r.status === "in_progress"
  ).length;
  const resolvedCount = requests.filter((r) => r.status === "resolved").length;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <View className="p-4">
          {/* Statistiques */}
          <View className="mb-4 flex-row gap-3">
            <Card className="flex-1">
              <CardContent className="p-4">
                <View className="flex-row items-center gap-2 mb-1">
                  <AlertCircle color="rgb(239 68 68)" size={20} />
                  <Text className="text-2xl font-bold text-foreground">
                    {openCount}
                  </Text>
                </View>
                <Text className="text-xs text-muted-foreground">Ouvertes</Text>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardContent className="p-4">
                <View className="flex-row items-center gap-2 mb-1">
                  <Clock color="rgb(234 179 8)" size={20} />
                  <Text className="text-2xl font-bold text-foreground">
                    {inProgressCount}
                  </Text>
                </View>
                <Text className="text-xs text-muted-foreground">En cours</Text>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardContent className="p-4">
                <View className="flex-row items-center gap-2 mb-1">
                  <CheckCircle2 color="rgb(34 197 94)" size={20} />
                  <Text className="text-2xl font-bold text-foreground">
                    {resolvedCount}
                  </Text>
                </View>
                <Text className="text-xs text-muted-foreground">Résolues</Text>
              </CardContent>
            </Card>
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
                Toutes
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setFilter("open")}
              className={`px-4 py-2 rounded-full ${
                filter === "open" ? "bg-primary" : "bg-secondary"
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  filter === "open"
                    ? "text-primary-foreground"
                    : "text-secondary-foreground"
                }`}
              >
                Ouvertes
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setFilter("in_progress")}
              className={`px-4 py-2 rounded-full ${
                filter === "in_progress" ? "bg-primary" : "bg-secondary"
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  filter === "in_progress"
                    ? "text-primary-foreground"
                    : "text-secondary-foreground"
                }`}
              >
                En cours
              </Text>
            </Pressable>
          </View>

          {/* Liste des réclamations */}
          <View className="space-y-3">
            {filteredRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader className="pb-3">
                  <View className="flex-row items-start gap-3">
                    <View className="mt-1">{getCategoryIcon(request.category)}</View>
                    <View className="flex-1">
                      <CardTitle className="text-base">{request.title}</CardTitle>
                      <Text className="text-sm text-muted-foreground mt-1">
                        {request.description}
                      </Text>
                    </View>
                  </View>
                </CardHeader>
                <CardContent className="pt-0">
                  <View className="space-y-3">
                    <View className="flex-row items-center justify-between">
                      {getPriorityBadge(request.priority)}
                      {getStatusBadge(request.status)}
                    </View>

                    <View className="space-y-2 pt-2 border-t border-border">
                      <View className="flex-row items-center gap-2">
                        <User color="rgb(113 113 122)" size={14} />
                        <Text className="text-sm text-muted-foreground">
                          {request.residentName} - App. {request.apartment}
                        </Text>
                      </View>
                      <Text className="text-xs text-muted-foreground">
                        {formatDate(request.createdAt)}
                      </Text>
                      {request.assignedTo && (
                        <View className="mt-2 p-2 bg-secondary rounded">
                          <Text className="text-xs text-secondary-foreground">
                            Assigné à: {request.assignedTo}
                          </Text>
                        </View>
                      )}
                    </View>

                    {request.status !== "resolved" && (
                      <View className="mt-3 flex-row gap-2">
                        {request.status === "open" && (
                          <Button
                            label="Assigner"
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onPress={() => {}}
                          />
                        )}
                        <Button
                          label={
                            request.status === "open"
                              ? "Démarrer"
                              : "Marquer résolu"
                          }
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

          {filteredRequests.length === 0 && (
            <Card className="mt-4">
              <CardContent className="p-8 items-center">
                <Text className="text-muted-foreground text-center">
                  Aucune réclamation trouvée
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
