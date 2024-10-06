// Ürün bilgilerini alacak fonksiyon
function getProductDetails() {
    const productTitle = document.getElementById("productTitle")?.textContent?.trim() || "Ürün Adı Bulunamadı";
    const productPrice = getProductPrice(); // Fiyatı al
    const asin = getASIN(); // ASIN numarasını al

    return { title: productTitle, price: productPrice, asin };
}

// Fiyatı DOM'dan alacak fonksiyon
function getProductPrice() {
    const priceElement = document.querySelector(".a-price .a-offscreen"); // Fiyatı içeren elemanı seç
    return priceElement ? priceElement.textContent!.trim() : "Fiyat Bulunamadı"; // Fiyat bulunamazsa varsayılan mesaj
}


// ASIN numarasını URL'den alacak fonksiyon
function getASIN() {
    const url = window.location.href; // Geçerli URL'yi al
    const asinMatch = url.match(/\/dp\/([A-Z0-9]{10})/); // ASIN'i bulmak için regex kullan

    return asinMatch ? asinMatch[1] : "ASIN Bulunamadı"; // ASIN bulunamazsa varsayılan mesaj
}

// Yeni buton oluşturun
const dropshipButton = document.createElement("button");
dropshipButton.textContent = "Add to Dropship";
dropshipButton.style.marginTop = "10px"; // Üstten boşluk ekleyin
dropshipButton.style.fontSize = "16px";
dropshipButton.style.padding = "5px 10px";
dropshipButton.style.backgroundColor = "#04C8C8";
dropshipButton.style.color = "white";
dropshipButton.style.border = "none";
dropshipButton.style.borderRadius = "5px";
dropshipButton.style.cursor = "pointer";

// "gsod_singleOfferDisplay_Desktop" ID'li div'i seçin
const targetDiv = document.getElementById("gsod_singleOfferDisplay_Desktop");

// Butona tıklama olayını ekleyin
dropshipButton.addEventListener("click", (event) => {
    event.preventDefault(); // Yönlendirmeyi engelle
    const { title, price, asin } = getProductDetails();
    showPopup(title, price, asin); // Popup göster
});

// Popup'ı gösteren fonksiyon
function showPopup(title: string, price: string, asin: string) { // Türler eklendi
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "white";
    popup.style.border = "1px solid #ccc";
    popup.style.borderRadius = "5px";
    popup.style.padding = "20px";
    popup.style.zIndex = "9999";
    popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    
    const titleElement = document.createElement("h3");
    titleElement.textContent = `Ürün: ${title}`;
    
    const priceElement = document.createElement("p");
    priceElement.textContent = `Fiyat: ${price}`; // Fiyatı göster
    
    const asinElement = document.createElement("p");
    asinElement.textContent = `ASIN: ${asin}`; // ASIN'i göster

    const closeButton = document.createElement("button");
    closeButton.textContent = "Kapat";
    closeButton.style.marginTop = "10px";
    closeButton.style.backgroundColor = "#ff5c5c";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";
    
    // Kapatma butonuna olay ekle
    closeButton.addEventListener("click", () => {
        popup.remove();
    });

    popup.appendChild(titleElement);
    popup.appendChild(priceElement); // Fiyatı popup'a ekle
    popup.appendChild(asinElement); // ASIN'i popup'a ekle
    popup.appendChild(closeButton);
    
    document.body.appendChild(popup);
}

// Butonu hedef div'in altına ekleyin
if (targetDiv) {
    targetDiv.appendChild(dropshipButton);
}
