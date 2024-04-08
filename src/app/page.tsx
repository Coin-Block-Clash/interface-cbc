"use client";
import { useEffect, useState } from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { useBalance } from "wagmi";
import { switchChain } from "@wagmi/core";
import { config } from "../components/Wallet/WagmiProvider";
import { arbitrum, optimism } from "wagmi/chains";

export default function Home() {
  const [clientLoaded, setClientLoaded] = useState(false);
  const { address } = useAccount();

  const { data, isError, isLoading } = useBalance({
    address: "0x0000000000000000000000000000000000000000",
    chainId: arbitrum.id,
  });

  const handelSwitchArb = async () => {
    const result = await switchChain(config, {
      chainId: arbitrum.id,
    });
    return result;
  };

  const handelSwitchop = async () => {
    const result = await switchChain(config, {
      chainId: optimism.id,
    });
    return result;
  };

  useEffect(() => {
    setClientLoaded(true);
  }, []);

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
          onClick={handelSwitchArb}
        >
          Switch to ARB
        </button>
        <button
          className="border-2 border-green-800 rounded-md"
          onClick={handelSwitchop}
        >
          Switch to OP
        </button>
        <div className="flex">
          <h4>User Data</h4> :{" "}
          <input
            type="text"
            className="bg-black"
            placeholder="enter your data here"
          />
        </div>
        <div className="flex">
          <h4>User Tag</h4> :{" "}
          <input
            type="text"
            className="bg-black"
            placeholder="enter your game tag here"
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
      </div>
    </>
  );
}
