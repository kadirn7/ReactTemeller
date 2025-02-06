function asalCarpanlariBul(sayi) {
    // Girilen sayıyı kontrol et
    if (sayi <= 1) {
        return "Lütfen 1'den büyük bir sayı giriniz.";
    }

    let num = parseInt(sayi);
    let carpanlar = new Set(); // Tekrar eden sayıları engellemek için Set kullanıyoruz
    let bolum = 2;

    // Asal çarpanları bul
    while (num > 1) {
        if (num % bolum === 0) {
            carpanlar.add(bolum); // Set'e ekle
            num = num / bolum;
        } else {
            bolum++;
        }
    }

    // Set'i array'e çevir ve sırala
    const sonuc = Array.from(carpanlar).sort((a, b) => a - b);
    
    // Sonucu formatla
    return `${sayi} = ${sonuc.join(' - ')}`;
}

// Test için örnek kullanımlar
console.log(asalCarpanlariBul(12));  // Çıktı: "12 = 2 - 3"
console.log(asalCarpanlariBul(36));  // Çıktı: "36 = 2 - 3"
console.log(asalCarpanlariBul(99));  // Çıktı: "99 = 3 - 11"
console.log(asalCarpanlariBul(100)); // Çıktı: "100 = 2 - 5"

// Fonksiyonu dışa aktar
export default asalCarpanlariBul;
