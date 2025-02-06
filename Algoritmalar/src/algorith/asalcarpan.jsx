import React, { useState } from "react";

const AsalCarpan = () => {
    const [sayi, setSayi] = useState();
    const [asal, setAsal] = useState(2);
    const [temp, setTemp] = useState();

    const asalcarpan1 = () => {
        while (asal <= sayi) {
            if (sayi % asal === 0) {
                setTemp(asal);
                sayi = sayi / asal;
            } else {
                asal = asal + 1;
            }
        }
        return temp;
    }

    return (
        <div>
            <h1> Asal çarpan bulma </h1>
            <input type="number" placeholder="Sayı giriniz" onChange={(e) => setSayi(e.target.value)} />
            <div>
                <button onClick={asalcarpan1}>Hesapla</button>
            </div>
        </div>
    )
}

export default AsalCarpan;