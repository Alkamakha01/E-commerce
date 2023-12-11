
import React, { useState } from "react";

const Callback=()=>{
    const[item,setItem]=useState("")
    return(
        <main className="App">
            <form>
            <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} />
            <button>Checkout</button>

            </form>

        </main>

    )
}
export default Callback;