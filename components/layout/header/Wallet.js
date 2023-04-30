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
      {address == '' ? <Address>Connect Wallet</Address>: <Address>{address.slice(0,6)}...{address.slice(39)}</Address>}
        {balance == '' ? <Balance></Balance>:<Balance>{balance.slice(0,4)} Matic</Balance>}
    </ConnectWalletWrapper>
  );
};

const ConnectWalletWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: ${(props) => props.theme.bgDiv}; */
  padding: 5px 9px;
  /* height: 100%; */
  color: ${(props) => props.theme.color};
  border-radius: 10px;
  font-family: 'poppins';
  white-space: nowrap;
  font-size: small;
  cursor: pointer;
`;

const Address = styled.h2`
    background-color: ${(props) => props.theme.bgSubDiv};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px 0 5px;
    border-radius: 10px;
`

const Balance = styled.h2`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-right: 1vh;
`
export default Wallet;
