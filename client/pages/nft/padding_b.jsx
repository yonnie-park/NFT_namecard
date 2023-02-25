import ConfettiExplosion from "react-confetti-explosion"
import Link from "next/link"
export default function Padding_b() {
    return (
      <div className="main">
        <ConfettiExplosion />
        <img className="NFT" src="/images/padding_b.jpg"/>
          <div className="main__content">
          <h2>Padding Yonnie B</h2>
  
          <div className="main__buttons">
            <button className="main__paddingB">Get this NFT</button>
            <Link href="/nft" className="main__explore">explore more NFTs</Link>
          </div>
        </div>
      </div>
  
    );
  }