import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  User,
  Bell,
  Lock,
  HelpCircle,
  FileText,
  LogOut,
  ChevronRight,
  Building2,
  Mail,
  Phone,
} from "lucide-react-native";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SettingItem {
  id: string;
  icon: any;
  title: string;
  description: string;
  onPress: () => void;
  color: string;
}

export default function SettingsScreen() {
  const router = useRouter();

  const handleLogout = () => {
    // Ici on ajoutera la logique de déconnexion
    router.replace("/(auth)/login");
  };

  const settingsSections = [
    {
      title: "Compte",
      items: [
        {
          id: "profile",
          icon: User,
          title: "Profil",
          description: "Gérer vos informations personnelles",
          onPress: () => {},
          color: "rgb(59 130 246)",
        },
        {
          id: "notifications",
          icon: Bell,
          title: "Notifications",
          description: "Gérer les alertes et notifications",
          onPress: () => {},
          color: "rgb(168 85 247)",
        },
        {
          id: "security",
          icon: Lock,
          title: "Sécurité",
          description: "Mot de passe et authentification",
          onPress: () => {},
          color: "rgb(239 68 68)",
        },
      ],
    },
    {
      title: "Assistance",
      items: [
        {
          id: "help",
          icon: HelpCircle,
          title: "Centre d'aide",
          description: "FAQ et guides d'utilisation",
          onPress: () => {},
          color: "rgb(34 197 94)",
        },
        {
          id: "terms",
          icon: FileText,
          title: "Conditions d'utilisation",
          description: "Politique de confidentialité et CGU",
          onPress: () => {},
          color: "rgb(113 113 122)",
        },
      ],
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <View className="p-4">
          {/* Informations du syndic */}
          <Card className="mb-6">
            <CardHeader>
              <View className="items-center">
                <View className="h-20 w-20 items-center justify-center rounded-full bg-primary mb-3">
                  <Building2 color="white" size={40} />
                </View>
                <CardTitle className="text-xl">Résidence Al Amal</CardTitle>
                <Text className="text-sm text-muted-foreground mt-1">
                  Syndic Principal
                </Text>
              </View>
            </CardHeader>
            <CardContent>
              <View className="space-y-3">
                <View className="flex-row items-center gap-3 p-3 bg-secondary rounded-lg">
                  <Mail color="rgb(113 113 122)" size={18} />
                  <Text className="text-sm text-foreground">
                    syndic@alamal.ma
                  </Text>
                </View>
                <View className="flex-row items-center gap-3 p-3 bg-secondary rounded-lg">
                  <Phone color="rgb(113 113 122)" size={18} />
                  <Text className="text-sm text-foreground">
                    +212 5 35 12 34 56
                  </Text>
                </View>
              </View>
            </CardContent>
          </Card>

          {/* Sections de paramètres */}
          {settingsSections.map((section, sectionIndex) => (
            <View key={sectionIndex} className="mb-6">
              <Text className="text-sm font-semibold text-muted-foreground mb-3 px-2">
                {section.title}
              </Text>
              <Card>
                <CardContent className="p-0">
                  {section.items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <Pressable
                        key={item.id}
                        onPress={item.onPress}
                        className={`p-4 flex-row items-center justify-between active:bg-secondary ${
                          itemIndex !== section.items.length - 1
                            ? "border-b border-border"
                            : ""
                        }`}
                      >
                        <View className="flex-row items-center gap-3 flex-1">
                          <View
                            className="h-10 w-10 items-center justify-center rounded-lg"
                            style={{ backgroundColor: item.color + "20" }}
                          >
                            <Icon color={item.color} size={20} />
                          </View>
                          <View className="flex-1">
                            <Text className="text-base font-medium text-foreground">
                              {item.title}
                            </Text>
                            <Text className="text-sm text-muted-foreground mt-0.5">
                              {item.description}
                            </Text>
                          </View>
                        </View>
                        <ChevronRight color="rgb(113 113 122)" size={20} />
                      </Pressable>
                    );
                  })}
                </CardContent>
              </Card>
            </View>
          ))}

          {/* Informations de l'application */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <View className="items-center space-y-2">
                <Text className="text-sm font-semibold text-foreground">
                  Khayrat Fes
                </Text>
                <Text className="text-xs text-muted-foreground">
                  Version 1.0.0
                </Text>
                <Text className="text-xs text-muted-foreground text-center mt-2">
                  Application de gestion de syndic résidentiel
                </Text>
              </View>
            </CardContent>
          </Card>

          {/* Bouton de déconnexion */}
          <Card className="mb-4">
            <CardContent className="p-0">
              <Pressable
                onPress={handleLogout}
                className="p-4 flex-row items-center justify-center gap-2 active:bg-secondary"
              >
                <LogOut color="rgb(239 68 68)" size={20} />
                <Text className="text-base font-semibold text-destructive">
                  Se déconnecter
                </Text>
              </Pressable>
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
