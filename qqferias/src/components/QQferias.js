import React, { useState } from "react";
import './QQferias.css';
import Sidebar from "./Sidebar";

function QQferias(){
    return (
        <div>
          <Sidebar />
          <main>
            <h1>Meu aplicativo React</h1>
            <p>DASHBOARD!!!!    </p>
          </main>
        </div>
      );
};

export default QQferias;