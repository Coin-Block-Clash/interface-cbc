"use client"
import { useEffect, useState } from 'react';
import { ConnectKitButton } from 'connectkit';
import { useAccount } from 'wagmi';

export default function Home() {
  const [clientLoaded, setClientLoaded] = useState(false);
  const { address } = useAccount();


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
        <div className="flex">
          <h4>User Data</h4> : <input type="text" className="bg-black" placeholder="enter your data here"/>
        </div>
        <div className="flex">
          <h4>User Tag</h4> : <input type="text" className="bg-black" placeholder="enter your game tag here"/>
        </div>
      </div>
    </>
  );
}
