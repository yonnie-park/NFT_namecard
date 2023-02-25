import Link from "next/link";
export default function Home() {
  return (
    <div className="main">
      <img className="main__yonnie" src="/images/yonnie.jpg"/>
      <h1>Jung Yeon Park</h1>
      <div className="main__info">
        <div className="main__infodiv">
          <img className="main__icon" src="/images/telephone.png"/>
          <p>010-9705-3269</p>
        </div>
        <div className="main__infodiv">
          <img className="main__icon" src="/images/mail.png"/>
          <p>juon0805@gmail.com</p>
        </div>
        <div className="main__infodiv">
          <img className="main__icon" src="/images/telegram.png"/>
          <p>@yonnieO_O</p>
        </div>
        <div className="main__infodiv">
          <img className="main__icon" src="/images/twitter.png"/>
          <p>@0xO_Oi</p>
        </div>
        <div className="main__infodiv">
          <img className="main__icon" src="/images/github.png"/>
          <p>github.com/yonnie-park</p>
        </div>
      </div>

      <Link href="/nft">
        <button className="main__button">
         view NFTs 
         </button>
      </Link>
    </div>
  );
}