"use client";
import { useEffect, useState } from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { useBalance } from "wagmi";
import { switchChain } from "@wagmi/core";
import { config } from "../components/Wallet/WagmiProvider";
import { arbitrum, optimism } from "wagmi/chains";
import { toast } from "sonner"



export default function Home() {
  const [clientLoaded, setClientLoaded] = useState(false);
  const { address } = useAccount();

  const { data, isError, isLoading } = useBalance({
    address: "0x0000000000000000000000000000000000000000",
    chainId: arbitrum.id,
  });


  const handleSwitchArb = async () => {
    try {
      const result = await switchChain(config, {
        chainId: arbitrum.id,
      });
      toast.success("Switched to Arbitrum successfully.");
      return result;
    } catch (error) {
      toast.error("Failed to switch to Arbitrum.");
    }
  };

  const handleSwitchOp = async () => {
    try {
      const result = await switchChain(config, {
        chainId: optimism.id,
      });
      toast.success("Switched to Optimism successfully.");
      return result;
    } catch (error) {
      toast.error("Failed to switch to Optimism.");
    }
  };

  const handleToastOp = async () => {
    toast.success("Check");
  };


 useEffect(() => {
    setClientLoaded(true);
    // Optional: Welcome toast
    toast.success("Welcome! Component has loaded.");
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error("Error fetching balance.");
    }
  }, [isError]);

  return (
    <>
      <div className="flex justify-center flex-col items-center mt-4 gap-4">
        <h1>TEST WALLET AND DATA INPUT TO DB</h1>
        <ConnectKitButton />
        {clientLoaded && (
          <div className="flex">
            <h4>Wallet Data</h4>: {address}
          </div>
        )}
        <button
          className="border-2 border-green-800 rounded-md"
          onClick={handleSwitchArb}
        >
          Switch to ARB
        </button>
        <button
          className="border-2 border-green-800 rounded-md"
          onClick={handleSwitchOp}
        >
          Switch to OP
        </button>
        <div className="flex">
          <h4>User Game-Id</h4> :{" "}
          <input
            type="text"
            className="bg-black"
            placeholder="Game-ID"
          />
        </div>
        <div className="flex">
          <h4>User Email</h4> :{" "}
          <input
            type="text"
            className="bg-black"
            placeholder="Email"
          />
        </div>
        <div>
          {isLoading && <div>Loading...</div>}
          {isError && <div>Error fetching balance</div>}
          {data && (
            <div>
              Balance: {data.formatted} {data.symbol}
            </div>
          )}
        </div>
        <div>
          <button onClick={handleToastOp}>Toast</button>
        </div>
      </div>
     
    </>
  );
}
