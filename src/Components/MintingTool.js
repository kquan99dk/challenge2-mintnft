import React from "react";
import { Alert } from "react-bootstrap";
const BN = require("bn.js");

const MintingTool = (props) => {
  const mintNFT = async () => {
    await window.contract.nft_mint(
      {
        token_id: `${window.accountId}-nftcat`,
        metadata: {
          title: "Cat NFT",
          description: "NFT",
          media:
            "https://bafkreifyhyl36tjrmt3752piu75ajgifju52qck67xis73il26gi2y7g7u.ipfs.nftstorage.link/",
        },
        receiver_id: window.accountId,
      },
      300000000000000, // attached GAS (optional)
      new BN("1000000000000000000000000")
    );
  };

  return (
    <div className="w-75 py-3 px-5 d-flex bg-light" style={{ borderRadius: '15px', boxShadow: '0 0.2rem 0 0 #e7e6e4, 0 0.6rem 1.5rem 0 rgb(42 40 37 / 20%)' }}>
      <div className="d-flex justify-content-center" style={{ minWidth: '400px', width: '400px', height: '400px', borderRadius: '50%', overflow: 'hidden' }}>
        <img style={{ height: '100%' }} src="https://bafkreifyhyl36tjrmt3752piu75ajgifju52qck67xis73il26gi2y7g7u.ipfs.nftstorage.link/" />
      </div>
      <div className="flex-grow-1 ms-3 d-flex flex-column justify-content-center">
        <p style={{ fontSize: '30px', fontWeight: '900' }}>Wellcome {window.accountId}</p>
        <button className="btn btn-danger mt-3" disabled={props.userNFTStatus || window.accountId === ""} onClick={mintNFT}>{props.userNFTStatus ? 'Congratulation! You minted! Thanks for doing good.' : 'Buy NFT'}</button>
        <i className="mt-3">You can see NFT in <a href="https://wallet.testnet.near.org/?tab=collectibles">your wallet</a></i>
      </div>
    </div>
  );
};

MintingTool.propTypes = {};

export default MintingTool;