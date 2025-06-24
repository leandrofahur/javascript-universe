import { Account, Client, Databases } from "react-native-appwrite";

// Appwrite client
const client = new Client()
client.setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
client.setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!)

// Appwrite account
const account = new Account(client)

// Appwrite databases
const databases = new Databases(client)

export { account, client, databases };

