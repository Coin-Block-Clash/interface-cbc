import { ConnectKitButton } from "connectkit";

export const CustomWallet = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
        <>
        <button>
        {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
          </button>

            <div>
               <button onClick={show}>
                  Show Wallet
               </button>
            </div>
        </>
        );
      }}
    </ConnectKitButton.Custom>
  );
};