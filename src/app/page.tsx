"use client";
import { useEffect, useState } from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount, useBalance } from "wagmi";
import { switchChain } from "@wagmi/core";
import { config } from "../components/Wallet/WagmiProvider";
import { arbitrum, optimism } from "wagmi/chains";
import { toast } from "sonner";

export default function Home() {
  const [clientLoaded, setClientLoaded] = useState(false);
  const [gameID, setGameID] = useState(""); // CamelCase state variable
  const [userEmail, setUserEmail] = useState(""); // CamelCase state variable

  const { address } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address: "0x0000000000000000000000000000000000000000",
    chainId: arbitrum.id,
  });

  const handleGameChange = (event:any) => {
    setGameID(event.target.value);
  };
  
  const handleEmailChange = (event:any) => {
    setUserEmail(event.target.value);
  };


  const handleSwitchChain = async (chain:any) => {
    try {
      const result = await switchChain(config, { chainId: chain.id });
      toast.success(`Switched to ${chain.name} successfully.`);
      return result;
    } catch (error) {
      console.error(error);
      toast.error(`Failed to switch to ${chain.name}.`);
    }
  };

  useEffect(() => {
    setClientLoaded(true);
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
        {clientLoaded && <div><h4>Wallet Data</h4>: {address}</div>}
        <button className="border-2 border-green-800 rounded-md" onClick={() => handleSwitchChain(arbitrum)}>Switch to ARB</button>
        <button className="border-2 border-green-800 rounded-md" onClick={() => handleSwitchChain(optimism)}>Switch to OP</button>
        <div className="flex">
          <h4>User Game-Id</h4> : <input type="text" className="bg-black" placeholder="Game-ID" value={gameID} onChange={handleGameChange}/>
          <button className="border-2 border-green-800 rounded-md">Submit</button>
        </div>
        <div className="flex">
          <h4>User Email</h4>  : <input type="text" className="bg-black" placeholder="Email" value={userEmail} onChange={handleEmailChange} />
          <button className="border-2 border-green-800 rounded-md" onClick={handleEmailChange}>Submit</button>
        </div>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching balance</div>}
        {data && <div>Balance: {data.formatted} {data.symbol}</div>}
        <div>
          <button onClick={() => toast.success("Success!")}>Toast</button>
        </div>
      </div>
    </>
  );
}
