# Doğrulama — 14 Ekim 2026

Yerel statik sunucu ve gerçek tarayıcı üzerinde kontrol edildi.

- Klasik mod: About, Experience, Skills, Projects, CV ve Contact içeriği görünür.
- Masaüstü proje bağlantısı hedef bölümü sabit başlığın altında konumlandırır.
- 390 ve 320 piksel mobil klasik görünümde sayfa yatay taşma göstermez. Bölüm navigasyonu kendi içinde yatay kaydırılabilir.
- 390 piksel mobil ekOS görünümü kullanılabilir; ortak geçiş düğmeleri görünür.
- Mod düğmesi Enter ile ve terminaldeki `portfolio` komutuyla klasik moda geçiş doğrulandı.
- Terminalde `cd projects` ve `cat sustindex.md` çalışır. Mod değişimi sonrası çıktı, `/projects` dizini ve ArrowUp ile komut geçmişi korunur.
- Kısmi `ab` komutu Tab ile `about` olur; sonraki Tab komut alanında kalır. Shift+Tab normal odak geçişini sağlar.
- Kaydedilen terminal ve klasik tercihleri, sorgusuz ana adres tekrar açıldığında uygulanır.
- JavaScript devre dışı bırakılarak klasik içeriğin ve bağlantıların erişilebilir olduğu, mod düğmelerinin gizlendiği doğrulandı. Test sonrası JavaScript ve ekran boyutu ayarları geri alındı.
- Master, Backend ve Full Stack PDF'leri tarayıcı düğmelerinden indirildi. İndirilen dosyaların baytları, paket ve orijinal kaynak dosyalarıyla birebir eşleşir.
- Bütün yerel HTML/CSS/JS, favicon ve CV kaynakları HTTP 200 ile gelir. Yinelenen HTML ID'si yoktur.
- `script.js` ve `mode.js` JavaScript sözdizimi kontrollerinden geçti.
- Son tarayıcı konsolunda hata veya uyarı görülmedi.
- Komut alanındaki yeşil odak çerçevesi kaldırıldı. Odak, komut isteminin alt çizgisi ve doğal metin imleciyle gösterilir; tarayıcıda `outline: none` doğrulandı.

Bu kontrol yerel teslimi kapsar. harunerkam.com'a dağıtım yapılmamıştır. Ekran okuyucu uygulamasıyla ayrıca test yapılmamıştır; semantik yapı, odak davranışı ve erişilebilirlik ağacı tarayıcıda kontrol edilmiştir.

## Ek proje kapsamı doğrulaması

- Doom Team / Doom Core ve belirtilen beş çalışma hem klasik görünümde hem ekOS `projects` listesindedir; toplam 12 proje kartı vardır.
- Altı yeni sanal proje dosyası gerçek tarayıcıda `cd projects` ve `cat` ile okunmuştur.
- 320 piksel ekranda 12 kartın sınırları sayfa genişliği içindedir; sayfa yatay taşmaz.
- Komut alanının yeşil çerçevesi yeniden oluşmaz; konsolda hata/uyarı görülmemiştir.

## Tab tamamlama düzeltmesi

- Sorun önce gerçek tarayıcıda tekrarlandı: `ab` → Tab → `about`; ikinci Tab odağı alttaki help düğmesine taşıyordu.
- Hızlı komut düğmeleri, ilgili olay dinleyicileri ve düğme stilleri kaldırıldı. Alt bölümde yalnız klavye ipuçları kalır.
- `ab`, `cv ba` ve `/projects` dizininde `cat doom-t` tamamlanır. Tekrarlanan Tab, boş giriş ve eşleşmeyen komutta odak `commandInput` üzerinde kalır.
- Shift+Tab komut alanından önceki kontrole çıkabilir. Enter ve komut geçmişi çalışır; tarayıcı konsolunda hata/uyarı yoktur.

## Proje kaldırma doğrulaması

- Kaldırılan proje klasik görünümde bulunmaz; kalan 12 kartın sırası kesintisizdir.
- ekOS `projects` listesinde 12 dosya görünür; kaldırılan dosyayı `cat` ile okumak `file not found` sonucunu verir.
- Eski ekOS verisinin önbellekten gelmemesi için script URL'sine güncel dosya özeti eklendi. Tarayıcının geçici test önbellek ayarı geri alındı.

## 23 Ekim 2026 — Public Doom Team ve Microsoft stack

- Doom Team public main README ve pyproject.toml üzerinden yeniden incelendi. Portfolyo ve profil açıklaması güncel Python CLI mühendislik sürümünü anlatır; public repo bağlantısı doğrudan eklenir.
- About, Experience, Skills ve ekOS karşılıklarında C#/.NET, ASP.NET Core, Entity Framework Core, MSSQL ve Windows Server görünürdür. Kubernetes adlandırması k8s olarak günceldir.
- NSP .NET API Platform ayrı kart ve sanal dosyadır; toplam 13 kart vardır. Önceden kaldırılan algoritma projesi geri eklenmemiştir.
- Gerçek tarayıcıda about, skills, experience ve iki proje dosyası okunarak içerik ve Doom Team bağlantısı doğrulandı; konsolda hata/uyarı yoktur.
- 390 piksel genişlikte sayfa yatay taşmaz. Sürümlü yerel CSS/JS ve favicon istekleri HTTP 200 döner.
- JavaScript sözdizimi ve iki deponun değişiklik boşluk kontrolleri geçti. Profil README kaynak içeriği ve bağlantıları kontrol edildi.

## 23 Ekim 2026 - Üç CV güncellemesi

- Orijinal üç PDF, origin/main altındaki cv/ dosyalarından alınıp metin ve sayfa görüntüleriyle incelendi.
- Master, Backend ve Full Stack sürümleri ikişer sayfa olarak yeniden düzenlendi; son altı sayfanın tamamı görsel olarak kontrol edildi.
- ASP.NET Core, EF Core, MSSQL, Windows Server, k8s, NSP .NET API Platform ve Doom Team üç sürümde de bulunur. Eski Kubernetes dağıtımı adı ve kaldırılan algoritma projesi bulunmaz.
- Telefon kullanıcı tercihiyle aynen korunur; eğitim tarihleri, GPA ve EF SET bilgileri korunur.
- PDF link anotasyonlarında public Doom Team, e-posta, site, LinkedIn ve GitHub hedefleri kontrol edildi. PDF metni seçilebilir durumdadır.
- CV indirme bağlantıları ve ekOS CV yolları güncel PDF özetleriyle sürümlenir.

- Son tarayıcı kontrolünde üç CV düğmesiyle indirilen dosyalar, teslim PDF'leriyle bayt düzeyinde aynı bulundu; konsolda hata/uyarı yoktur.
