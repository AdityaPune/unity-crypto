import { RootState } from "../store";
import { useSelector } from "react-redux";
import { ethers, BigNumber } from "ethers";
// import { contractAbi, ercAbi } from "../constants";

export const investMoney = async (amount: string, provider: any) => {
  console.log("Yolooo");
  //   const provider = useSelector((state: RootState) => state.account.provider);
  const signer = provider.getSigner();
  const poolAdd = "0x31304a223e5D52c072244d57874701B012E9Aa31";
  //   const poolContract = new ethers.Contract(poolAdd, contractAbi, signer);
  //   const erc20 = new ethers.Contract(
  //     "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
  //     ercAbi,
  //     provider?.getSigner()
  //   );
  //   const newAmount = amount + "000000";
  //   console.log(newAmount);
  //   console.log(erc20);
  //   const ercSend = await erc20.transfer(newAmount, poolAdd);
};
