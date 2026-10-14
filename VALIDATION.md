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
