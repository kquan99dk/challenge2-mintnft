import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import { login, logout } from "./utils";

// React Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// React Bootstraps imports
import { Nav, Navbar, Container, Row, Card, Alert } from "react-bootstrap";

import MintingTool from "./Components/MintingTool";
import Login from "./Components/login";


import getConfig from "./config";
const { networkId } = getConfig("development");

export default function App() {
  const [userHasNFT, setuserHasNFT] = useState(false);


  useEffect(() => {
    const receivedNFT = async () => {
      if (window.accountId !== "") {
        setuserHasNFT(
          await window.contract.nft_token({
            token_id: `${window.accountId}-nftcat`
          })
        );
      }
    };
    receivedNFT();
  }, []);
  return (
    <div style={{ backgroundImage: 'url("https://www.cryptokitties.co/images/pattern-tile.svg")', backgroundSize: '44rem auto' }}>
      <div style={{ padding: '10px', textAlign: 'right', backgroundColor: 'rgb(214 229 222 / 47%)' }}
      >
        <span style={{ cursor: 'pointer' }} onClick={window.walletConnection.isSignedIn() ? logout : login}>
          {window.walletConnection.isSignedIn()
            ? "Sign out"
            : "Login"}
        </span>

      </div>
      <div className="d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 44px)' }}>
        {!window.walletConnection.isSignedIn()
          ?
          <Login />
          :
          <MintingTool userNFTStatus={userHasNFT} />
        }
      </div>

    </div>
  );
}