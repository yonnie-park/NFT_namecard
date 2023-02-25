import ConfettiExplosion from "react-confetti-explosion";
import Link from "next/link"
export default function Flower_a() {
    return (
      <div className="main">
        <ConfettiExplosion />
        <img className="NFT" src="/images/flower_a.jpg"/>
          <div className="main__content">
          <h2>Flower Yonnie A</h2>
  
          <div className="main__buttons">
            <button className="main__flowerA">Get this NFT</button>
            <Link href="/nft" className="main__explore">explore more NFTs</Link>
            </div>
        </div>
      </div>
  
    );
  }