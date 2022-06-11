import React from "react";

const Login = (props) => {
  return (
    <div className="w-75 py-3 px-5 d-flex bg-light" style={{ borderRadius: '15px', boxShadow: '0 0.2rem 0 0 #e7e6e4, 0 0.6rem 1.5rem 0 rgb(42 40 37 / 20%)' }}>
      <div className="d-flex justify-content-center" style={{ minWidth: '400px',width: '400px', height: '400px', borderRadius: '50%', overflow: 'hidden' }}>
        <img style={{ height: '100%' }} src="https://bafkreifyhyl36tjrmt3752piu75ajgifju52qck67xis73il26gi2y7g7u.ipfs.nftstorage.link/" />
      </div>
      <div className="flex-grow-1 ms-3 d-flex flex-column justify-content-center">
        <p style={{ fontSize: '30px', fontWeight:'900' }}>What is CryptoKitties?</p>
        <p style={{ fontSize: '20px', marginBottom: '0' }}>
          CryptoKitties is a game centered around breedable, collectible, and oh-so-adorable creatures we call CryptoKitties! Each cat is one-of-a-kind and 100% owned by you; it cannot be replicated, taken away, or destroyed.
        </p>
      </div>
    </div>
  );
};

export default Login;