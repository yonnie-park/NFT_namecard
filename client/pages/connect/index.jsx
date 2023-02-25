import { useState, useEffect } from "react";

export default function Connect(){
    const [account, setAccount] = useState("");
    const [isConnected, setIsConnected] = useState(false)
    const [web3, setWeb3] = useState();
    useEffect(()=>{
        if(typeof window.ethereum !== "undefined"){
        try{
            const web=new Web3(window.ethereum);
            setWeb3(web)
        } catch(err){
            console.log(err)
        }
        }
    },[])
    const connectWallet = async() => {
        const accounts=await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        if(isConnected)setAccount("")
        else {
          setAccount(accounts[0])
          setIsConnected(true)
          console.log(account)
        }
    
    }

    return(
        <div className="connect">
            <button className="connect__metamask" onClick={connectWallet}>
                <img className="connect__logo" src="/images/metamask.png"/>
                Connect Metamask
            </button>
        </div>
    )

}