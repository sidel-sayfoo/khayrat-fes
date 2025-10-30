import { Redirect } from "expo-router";

export default function Index() {
  // Pour l'instant, on redirige vers la page de connexion
  // Plus tard, on vérifiera si l'utilisateur est authentifié
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Redirect href="/(tabs)/dashboard" />;
  }

  return <Redirect href="/(auth)/login" />;
}
