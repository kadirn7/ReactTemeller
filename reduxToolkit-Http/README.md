# Redux Toolkit ile HTTP İstekleri 🚀

Bu proje, Redux Toolkit ve Axios kullanarak HTTP GET isteklerinin nasıl yönetileceğini gösteren basit bir rehber niteliğindedir. Redux state yönetimi ve asenkron işlemlerin nasıl yapılandırılacağını adım adım öğrenmek isteyenler için hazırlanmıştır.

## 🎯 Proje Amacı

Bu örnek projede:
- Redux Toolkit ile store oluşturmayı
- createAsyncThunk ile HTTP isteklerini yönetmeyi
- Axios ile API çağrıları yapmayı
- Loading, error ve data state'lerini yönetmeyi
öğreneceksiniz.

## 🛠 Kurulum

Projeyi başlatmak için aşağıdaki adımları izleyin:

1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/yourusername/redux-toolkit-http-project.git
   cd redux-toolkit-http-project
   ```

2. Gerekli paketleri yükleyin:
   ```bash
   npm install
   ```
3. Gerekli Redux paketlerini yükleyin:
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```
4. Axios paketini yükleyin:
   ```bash
   npm install axios
   ```

## 📚 Öğrenme Yol Haritası

1. **Store Kurulumu**
   - Redux store'un oluşturulması
   - Provider ile uygulamanın sarmalanması

2. **Slice Oluşturma**
   - Initial state tanımlama
   - createAsyncThunk ile asenkron işlemler
   - Loading, error ve data durumlarının yönetimi

3. **HTTP İstekleri**
   - Axios ile API çağrıları
   - createAsyncThunk ile entegrasyon
   - Error handling

4. **Component Entegrasyonu**
   - useSelector ile state'e erişim
   - useDispatch ile action'ların tetiklenmesi
   - Loading ve error durumlarının UI'da gösterimi

## 🚀 Projeyi Çalıştırma

Geliştirme sunucusunu başlatmak için:
   ```bash
   npm run dev
   ```

## 📦 Kullanılan Paketler

- ⚛️ React
- 🔄 Redux Toolkit
- 🔗 React-Redux
- 🌐 Axios
- 📱 Vite

## 🗂 Proje Yapısı

```bash
src/
├── redux/
│   ├── store.jsx        # Redux store konfigürasyonu
│   └── userSlice.jsx    # Async thunk ve reducer'lar
├── user/
│   └── UserList.jsx     # Kullanıcı listesi komponenti
├── App.jsx              # Ana uygulama bileşeni
└── main.jsx            # Store provider yapılandırması
```

## 💡 Önemli Notlar

- Store'u oluşturduktan sonra `main.jsx`'de Provider ile uygulamayı sarmalamayı unutmayın
- API istekleri için `createAsyncThunk` kullanılmaktadır
- State yönetimi için `useSelector` ve `useDispatch` hook'ları kullanılmaktadır
- Loading ve error durumlarını kontrol etmeyi unutmayın

## 🤝 Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Bir Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.