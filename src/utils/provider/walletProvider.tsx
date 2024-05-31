"use client"
import { WagmiProvider, createConfig, http } from "wagmi";
import { arbitrumSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { ReactNode } from "react";

const config = createConfig(
  getDefaultConfig({
    chains: [arbitrumSepolia],
    transports: {
      [arbitrumSepolia.id]: http(
        `https://arb-sepolia.g.alchemy.com/v2/cZ4bhPnVqeZ0a-1P9tsqylQCNyXMcTeJ`,
      ),
    },
    walletConnectProjectId: 'b3e275bd03d0f994672d0823110b5edf',
    appName: "cbc",
    appDescription: "bet your skills",
    appUrl: "https://family.co", 
    appIcon: "https://family.co/logo.png", 
  }),
);

const queryClient = new QueryClient();

export function Providers(props: { children: ReactNode }) {
    return (
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ConnectKitProvider theme="rounded">{props.children}</ConnectKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    );
  }
