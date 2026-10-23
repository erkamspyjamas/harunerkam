# Harun Erkam Balı — Dual-mode portfolio

Mevcut ekOS v2.0 terminal portfolyosunu korur ve klasik bir portfolyo görünümü ekler. Derleme, paket kurulumu veya sunucu tarafı uygulama gerektirmez.

## Kullanım

`index.html` dosyasını tarayıcıda açabilir veya bu klasörde aşağıdaki komutla yerel önizleme başlatabilirsiniz:

```sh
python -m http.server 4173
```

Ardından `http://localhost:4173` adresini açın.

- İlk ziyarette ekOS açılır; üstteki **Classic portfolio** düğmesi komut yazmadan geçiş sağlar.
- **ekOS terminal** düğmesi terminale geri döndürür. Aynı sayfa oturumunda komut geçmişi, mevcut dizin ve çıktı korunur.
- Seçilen mod tarayıcıda hatırlanır. Depolama engellense de mod geçişi çalışır.
- Klasik mod bağlantısı: `?mode=classic`
- Terminal bağlantısı: `?mode=terminal`
- Bölüm bağlantısı: `?mode=classic#projects` (About, Experience, Skills, Projects, CV ve Contact için aynı yaklaşım).
- JavaScript kapalıysa klasik modun içeriği, bağlantıları ve CV indirmeleri kullanılabilir.
- Sayfanın yenilenmesi terminal oturumunu yeniden başlatır; sadece görünüm tercihi kalıcıdır.

## Dosyalar

- `index.html`: Semantik klasik içerik, mevcut terminal ve ortak geçiş düğmeleri.
- `style.css`: Ortak çerçeve, klasik tasarım ve responsive düzen.
- `terminal.css`: Mevcut ekOS stil dosyası; ekOS'a yönelik ek düzenlemeler `style.css` içindedir.
- `script.js`: Mevcut sanal dosya sistemi ve komutlar; erişilebilir odak yönetimi ve `portfolio` komutu eklenmiştir.
- `mode.js`: Görünüm tercihi, mod geçişi, odak yönetimi ve derin bağlantılar.
- `cv/`: Kaynaktaki üç orijinal CV PDF dosyası.
- `favicon.png`, `LICENSE`: Mevcut kaynaktan alınan dosyalar.

## İçerik ve tasarım

Site dili, mevcut uluslararası CV ve profil anlatımıyla uyumlu olarak İngilizcedir. Neurosound'daki dört aşamalı kariyer ilerlemesi, AutoDidactic Technologies deneyimi, eğitim ve güncel teknoloji alanları işlenmiştir. Özel projelerde bağlantı veya demo uydurulmamıştır. GitHub'daki public Doom Team ve Finance-Trading-Algorithms depoları doğrudan bağlantılanmıştır. C#/.NET API ve web uygulaması geliştirme, ASP.NET Core, Entity Framework Core, MSSQL ve Windows Server deneyimi About, Experience ve Skills bölümlerinde görünürdür.

Klasik modda sıcak açık arka plan, koyu yazı ve yeşil vurgu kullanılır. Terminalin koyu arka planı ve yeşil komut görünümü korunur. Harici yazı tipi, görsel veya JavaScript kütüphanesi gerektirmez.

## Proje kapsamı

Klasik görünüm ve ekOS sanal dosya sistemi aynı 13 proje özetini içerir. Doom Team, NSP .NET API Platform, Wi-Fi/Bluetooth kulaklık geliştirme, odyogram cihazı tersine mühendisliği, dinleme testi, NSP CRM ve NSP Stream eklenmiştir. Önceki altı proje ve Finance-Trading-Algorithms bağlantısı korunur.

Doom Team özeti 23 Ekim 2026 tarihli public main README ve Python paket tanımından doğrulanmıştır. Public sürüm Python tabanlı erken mühendislik sürümüdür; eski Doom Core TypeScript/Fastify yığını bu proje için kullanılmaz. NSP .NET API Platform özeti ilgili API ve Infrastructure projelerindeki ASP.NET Core, EF Core ve SQL Server kullanımından doğrulanmıştır. Diğer eklemeler kullanıcının verdiği çalışma adlarıyla sınırlı, genel kapsam açıklamalarıdır; doğrulanmamış teknoloji, performans veya klinik etkinlik iddiası eklenmez. Özel repo kodu, algoritma ayrıntıları veya iç ortam bilgileri yayınlanmaz.

## Klavye ve erişilebilirlik

- Mod düğmeleri Enter ve Space ile kullanılabilir; aktif durum `aria-pressed` ile bildirilir.
- Atla bağlantısı, görünür odak göstergeleri, semantik başlıklar ve mod değişimi duyurusu vardır.
- Gizli modun kontrolleri odak sırasından çıkarılır.
- Terminalde Tab kısmi komutu tamamlar ve tekrar basıldığında, giriş boşken veya eşleşme yokken de odağı komut alanında tutar. Shift+Tab komut alanından geri çıkabilir. Alt kısımda odak devralan hızlı komut düğmeleri yoktur.
- Komut alanı bağlantı tıklamalarından sonra odağı zorla devralmaz.
- Azaltılmış hareket tercihi, klasik sayfanın yumuşak kaydırmasını devre dışı bırakır.

## Yayına alma

ZIP içindeki dosyaları mevcut statik sitenin köküne, `cv/` klasör yapısını koruyarak yükleyin. Yeni `terminal.css` ve `mode.js` dosyalarının da yüklenmesi gerekir. Nginx, GitHub Pages veya benzeri statik hosting yeterlidir.

Mevcut bir repo üzerinde uygulanacaksa güncellenen `index.html`, `style.css`, `script.js`, `README.md` dosyalarını değiştirin; `terminal.css` ve `mode.js` dosyalarını ekleyin. CV dosyaları değişmemiştir.

Dosyalar statik hosting için hazırdır. Canlı HTML'deki Cloudflare analiz betiği bu kaynakta bulunmaz; gerekiyorsa hosting ayarınızdan etkinleştirin.

## Kaynak

- https://github.com/erkamspyjamas/harunerkam
- Başlangıç revizyonu: `83963b7a84bdd0cf8265db8e72048154ad88dbe5`
- Kariyer içeriği: https://github.com/erkamspyjamas/erkamspyjamas ve mevcut sitenin `script.js` içeriği (14 Ekim 2026).
- Lisans: MIT, mevcut `LICENSE` dosyasına bakın.
