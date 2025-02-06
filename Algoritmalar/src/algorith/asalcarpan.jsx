import React, { useState } from "react";

const AsalCarpan = () => {
    const [sayi, setSayi] = useState('');
    const [sonuc, setSonuc] = useState([]);

    const asalCarpanlariBul = () => {
        let num = parseInt(sayi);
        let carpanlar = new Set();
        let bolum = 2;

        while (num > 1) {
            if (num % bolum === 0) {
                carpanlar.add(bolum);
                num = num / bolum;
            } else {
                bolum++;
            }
        }

        setSonuc(Array.from(carpanlar).sort((a, b) => a - b));
    }

    return (
        <div>
            <h1>Asal Çarpan Bulma</h1>
            <input 
                type="number" 
                value={sayi} 
                onChange={(e) => setSayi(e.target.value)}
                placeholder="Bir sayı giriniz"
            />
            <div>
                <button onClick={asalCarpanlariBul}>Hesapla</button>
            </div>
            {sonuc.length > 0 && (
                <div>
                    <h3>Asal Çarpanlar:</h3>
                    <p>{sayi} = {sonuc.join(' - ')}</p>
                </div>
            )}
        </div>
    );
}

export default AsalCarpan;