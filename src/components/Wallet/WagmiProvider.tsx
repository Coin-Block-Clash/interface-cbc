"use client"
import { WagmiProvider, createConfig, http } from "wagmi";
import { optimismSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
    chains: [optimismSepolia],
    transports: {
      [optimismSepolia.id]: http(
        `https://opt-sepolia.g.alchemy.com/v2/VIUNoniLrNB_ahw2ZpQxObfZqp8yVDrT`,
      ),
    },
    walletConnectProjectId: "b3e275bd03d0f994672d0823110b5edf",
    appName: "Coin Block Clash",
    appDescription: "Your App Description",
    appUrl: "https://family.co", 
    appIcon: "https://family.co/logo.png", 
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
