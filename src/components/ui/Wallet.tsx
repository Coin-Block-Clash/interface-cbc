import { ConnectKitButton } from "connectkit";

export const WalletButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <div
            className='button w-[170px]  h-[40px] bg-white cursor-pointer select-none
            active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
            active:border-b-[0px] transition-all duration-150
            [box-shadow:0_5px_0_0_#1b6ff8,0_10px_0_0_#1b70f841] rounded-full
            border-[1px] border-gray-800'
            onClick={show}
          >
            <span className='flex flex-col justify-center items-center h-full text-black'>
              {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
            </span>
          </div>
        );
      }}
    </ConnectKitButton.Custom>
  );
};