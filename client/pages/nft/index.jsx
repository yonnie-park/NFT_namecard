import Link from "next/link";
export default function NFT(){
    return(
        <div className="NFTmain">
            <h1>Explore</h1>
            <div className="NFTmain__container">
                <Link href="/nft/padding_a"><img className="NFTmain__nft" src="/images/padding_a.jpg"/></Link>
                <Link href="/nft/padding_b"><img className="NFTmain__nft" src="/images/padding_b.jpg"/></Link>
                <Link href="/nft/hoodie_a"><img className="NFTmain__nft" src="/images/hoodie_a.jpg"/></Link>
                <Link href="/nft/hoodie_b"><img className="NFTmain__nft" src="/images/hoodie_b.jpg"/></Link>
                <Link href="/nft/flower_a"><img className="NFTmain__nft" src="/images/flower_a.jpg"/></Link>
                <Link href="/nft/flower_b"><img className="NFTmain__nft" src="/images/flower_b.jpg"/></Link>
            </div>
            <Link href="/">
                <button className="main__button">
                    go to info 
                </button>
            </Link>
        </div>
    )
}