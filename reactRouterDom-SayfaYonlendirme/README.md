
# React Router Dom ve Nested Routes Kullanımı

Bu proje, React Router Dom v6 kullanarak sayfa yönlendirmelerini ve nested (iç içe) route'ları nasıl yönetebileceğinizi gösteren bir örnek uygulamadır.

## Özellikler

- React Router Dom v6 ile sayfa yönlendirmeleri
- Nested Routes (İç içe route'lar) kullanımı
- Outlet component'i ile dinamik içerik gösterimi
- 404 Not Found sayfası yönetimi

## Kurulum

Projeyi lokalde çalıştırmak için:

1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/kadirn7/ReactTemeller
   cd reactRouterDom-SayfaYonlendirme
   ```

2. Gerekli paketleri yükleyin:
   ```bash
   npm install
   ```

3. Projeyi çalıştırın:
   ```bash
   npm run dev
   ```

## Proje Yapısı

src/
├── components/
│ └── Header.jsx # Navigasyon menüsü
├── pages/
│ ├── Home.jsx # Ana sayfa
│ ├── About.jsx # Hakkımızda sayfası
│ ├── Contact.jsx # İletişim sayfası
│ ├── Products.jsx # Ürünler sayfası
│ ├── EmployeeAbout.jsx # Çalışanlar alt sayfası
│ ├── CompanyAbout.jsx # Şirket alt sayfası
│ └── NotfoundPage.jsx # 404 sayfası
└── App.jsx # Ana uygulama ve route tanımlamaları


## Route Yapılandırması

```jsx
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}>
<Route path='employee' element={<EmployeeAbout/>}/>
<Route path='company' element={<CompanyAbout/>}/>
</Route>
<Route path='/contact' element={<Contact/>}/>
<Route path='/products' element={<Products/>}/>
<Route path='' element={<NotfoundPage/>}/>
</Routes>
```

## Nested Routes ve Outlet Kullanımı

Bu projede, `/about` route'u altında iki alt sayfa bulunmaktadır:
- `/about/employee` - Çalışanlar hakkında bilgi
- `/about/company` - Şirket hakkında bilgi

`About.jsx` component'inde `Outlet` kullanarak, alt route'ların içeriğini dinamik olarak görüntüleyebilirsiniz:

```jsx
import { Outlet } from 'react-router-dom'
function About() {
return (
<div>
<h1>Hakkımızda</h1>
<Outlet /> {/ Alt route'ların içeriği burada görüntülenir /}
</div>
)
}
```

## Navigasyon

Sayfalar arası geçiş için `Link` component'i kullanılmıştır:
jsx
<Link to="/">Ana Sayfa</Link>
<Link to="/about">Hakkımızda</Link>
<Link to="/products">Ürünler</Link>
<Link to="/contact">İletişim</Link>

## Teknolojiler

- React
- React Router Dom v6
- Vite

## Lisans

MIT