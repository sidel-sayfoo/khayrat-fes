import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Building2 } from "lucide-react-native";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleLogin = () => {
    // Validation simple
    const newErrors = { email: "", password: "" };
    let isValid = true;

    if (!email) {
      newErrors.email = "L'email est requis";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email invalide";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Le mot de passe est requis";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // Pour l'instant, on redirige directement vers le tableau de bord
      // Plus tard, on ajoutera l'authentification réelle
      router.replace("/(tabs)/dashboard");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerClassName="flex-1 justify-center px-6"
          keyboardShouldPersistTaps="handled"
        >
          <View className="mb-8 items-center">
            <View className="mb-4 h-20 w-20 items-center justify-center rounded-full bg-primary">
              <Building2 color="white" size={40} />
            </View>
            <Text className="text-3xl font-bold text-foreground">
              Khayrat Fes
            </Text>
            <Text className="mt-2 text-center text-muted-foreground">
              Gestion de Syndic Résidentiel
            </Text>
          </View>

          <Card>
            <CardHeader>
              <CardTitle>Connexion</CardTitle>
              <CardDescription>
                Connectez-vous pour accéder à votre espace syndic
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                label="Email"
                placeholder="syndic@example.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                error={errors.email}
              />

              <Input
                label="Mot de passe"
                placeholder="••••••••"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                error={errors.password}
              />

              <Button
                label="Se connecter"
                onPress={handleLogin}
                className="mt-4"
              />

              <Button
                label="Mot de passe oublié ?"
                variant="link"
                onPress={() => {}}
              />
            </CardContent>
          </Card>

          <View className="mt-6">
            <Text className="text-center text-sm text-muted-foreground">
              En vous connectant, vous acceptez nos conditions d'utilisation
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
