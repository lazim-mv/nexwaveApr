import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

function Header() {

  let router = useRouter();

  const navigateToContact = () => {
    router.push("/components/Form");
  };

  return (
    
    <div className="headerShadowContainer" >
      <div className="headerContainer">
        <div className="headerList" >
          <a href="">Home</a>
          <a href="">Services</a>
        </div>
        <div className="headerContact">
          <button onClick={navigateToContact}>Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
