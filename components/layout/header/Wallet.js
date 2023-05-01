import { ethers } from "ethers";
import { useState } from "react";
import styled from "styled-components";

const networks = {
  polygon: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Testnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
};

const Wallet = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  const connectWallet = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = await new ethers.providers.Web3Provider(window.ethereum, "any");
    const { chainId } = await provider.getNetwork();
    if (chainId !== 80001) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks["polygon"],
          },
        ],
      });
    }
    const account = provider.getSigner();
    const Address = await account.getAddress();
    setAddress(Address);
    const Bal = ethers.utils.formatEther(await account.getBalance());
    setBalance(Bal);
  };
  return (
    <ConnectWalletWrapper onClick={connectWallet}>
      {address == '' ? <Address>Connect MetaMask</Address>: <Address>{address.slice(0,6)}...{address.slice(39)} {balance.slice(0,4)} Matic</Address>}
    </ConnectWalletWrapper>
  );
};

const ConnectWalletWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5vw;
  color: white;
  border-radius: 10px;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  
`;

const Address = styled.h2`
    background: linear-gradient(145deg,#bc04c7 0%,#59009b 100%);
     padding: 8px 12px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    
`

const Balance = styled.h2`
    display: flex;
    padding: 8px 12px;
    background: linear-gradient(145deg,#bc04c7 0%,#59009b 100%);
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-right: 1vh;
    border-radius: 10px;
`
export default Wallet;
