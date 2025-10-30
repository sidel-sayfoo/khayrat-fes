import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Search,
  Phone,
  Mail,
  MapPin,
  UserCheck,
  UserX,
} from "lucide-react-native";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Resident {
  id: number;
  name: string;
  apartment: string;
  phone: string;
  email: string;
  status: "active" | "inactive";
  balance: number;
}

export default function ResidentsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const residents: Resident[] = [
    {
      id: 1,
      name: "Ahmed Alami",
      apartment: "205",
      phone: "+212 6 12 34 56 78",
      email: "ahmed.alami@email.com",
      status: "active",
      balance: 0,
    },
    {
      id: 2,
      name: "Fatima Zahra",
      apartment: "102",
      phone: "+212 6 23 45 67 89",
      email: "fatima.zahra@email.com",
      status: "active",
      balance: -1500,
    },
    {
      id: 3,
      name: "Mohammed Bennani",
      apartment: "308",
      phone: "+212 6 34 56 78 90",
      email: "m.bennani@email.com",
      status: "active",
      balance: 500,
    },
    {
      id: 4,
      name: "Khadija El Idrissi",
      apartment: "401",
      phone: "+212 6 45 67 89 01",
      email: "k.elidrissi@email.com",
      status: "inactive",
      balance: -3000,
    },
    {
      id: 5,
      name: "Youssef Tazi",
      apartment: "156",
      phone: "+212 6 56 78 90 12",
      email: "y.tazi@email.com",
      status: "active",
      balance: 0,
    },
  ];

  const filteredResidents = residents.filter(
    (resident) =>
      resident.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resident.apartment.includes(searchQuery)
  );

  const activeCount = residents.filter((r) => r.status === "active").length;
  const totalBalance = residents.reduce((sum, r) => sum + r.balance, 0);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <View className="p-4">
          {/* Statistiques */}
          <View className="mb-4 flex-row gap-3">
            <Card className="flex-1">
              <CardContent className="p-4">
                <View className="flex-row items-center gap-2 mb-1">
                  <UserCheck color="rgb(34 197 94)" size={20} />
                  <Text className="text-2xl font-bold text-foreground">
                    {activeCount}
                  </Text>
                </View>
                <Text className="text-xs text-muted-foreground">
                  Résidents actifs
                </Text>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardContent className="p-4">
                <View className="flex-row items-center gap-2 mb-1">
                  <UserX color="rgb(239 68 68)" size={20} />
                  <Text className="text-2xl font-bold text-foreground">
                    {residents.length - activeCount}
                  </Text>
                </View>
                <Text className="text-xs text-muted-foreground">Inactifs</Text>
              </CardContent>
            </Card>
          </View>

          {/* Barre de recherche */}
          <View className="mb-4 flex-row items-center rounded-md border border-input bg-background px-4 h-12">
            <Search color="rgb(113 113 122)" size={20} />
            <TextInput
              placeholder="Rechercher un résident..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="flex-1 ml-2 text-base text-foreground"
              placeholderTextColor="rgb(113 113 122)"
            />
          </View>

          {/* Liste des résidents */}
          <View className="space-y-3">
            {filteredResidents.map((resident) => (
              <Card key={resident.id}>
                <CardHeader className="pb-3">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-1">
                      <CardTitle className="text-lg">{resident.name}</CardTitle>
                      <View className="flex-row items-center gap-2 mt-1">
                        <MapPin color="rgb(113 113 122)" size={14} />
                        <Text className="text-sm text-muted-foreground">
                          Appartement {resident.apartment}
                        </Text>
                      </View>
                    </View>
                    <Badge
                      label={resident.status === "active" ? "Actif" : "Inactif"}
                      variant={
                        resident.status === "active" ? "default" : "secondary"
                      }
                    />
                  </View>
                </CardHeader>
                <CardContent className="pt-0">
                  <View className="space-y-2">
                    <View className="flex-row items-center gap-2">
                      <Phone color="rgb(113 113 122)" size={16} />
                      <Text className="text-sm text-foreground">
                        {resident.phone}
                      </Text>
                    </View>
                    <View className="flex-row items-center gap-2">
                      <Mail color="rgb(113 113 122)" size={16} />
                      <Text className="text-sm text-foreground">
                        {resident.email}
                      </Text>
                    </View>
                    <View className="mt-2 pt-2 border-t border-border flex-row items-center justify-between">
                      <Text className="text-sm font-medium text-foreground">
                        Solde:
                      </Text>
                      <Text
                        className={`text-sm font-bold ${
                          resident.balance < 0
                            ? "text-destructive"
                            : resident.balance > 0
                            ? "text-green-600"
                            : "text-muted-foreground"
                        }`}
                      >
                        {resident.balance} DH
                      </Text>
                    </View>
                  </View>

                  <View className="mt-4 flex-row gap-2">
                    <Button
                      label="Voir détails"
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onPress={() => {}}
                    />
                    <Button
                      label="Contacter"
                      size="sm"
                      className="flex-1"
                      onPress={() => {}}
                    />
                  </View>
                </CardContent>
              </Card>
            ))}
          </View>

          {filteredResidents.length === 0 && (
            <Card className="mt-4">
              <CardContent className="p-8 items-center">
                <Text className="text-muted-foreground text-center">
                  Aucun résident trouvé
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
