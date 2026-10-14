# Doğrulama — 14 Ekim 2026

Yerel statik sunucu ve gerçek tarayıcı üzerinde kontrol edildi.

- Klasik mod: About, Experience, Skills, Projects, CV ve Contact içeriği görünür.
- Masaüstü proje bağlantısı hedef bölümü sabit başlığın altında konumlandırır.
- 390 ve 320 piksel mobil klasik görünümde sayfa yatay taşma göstermez. Bölüm navigasyonu kendi içinde yatay kaydırılabilir.
- 390 piksel mobil ekOS görünümü kullanılabilir; ortak geçiş düğmeleri görünür.
- Mod düğmesi Enter ile ve terminaldeki `portfolio` komutuyla klasik moda geçiş doğrulandı.
- Terminalde `cd projects` ve `cat sustindex.md` çalışır. Mod değişimi sonrası çıktı, `/projects` dizini ve ArrowUp ile komut geçmişi korunur.
- Kısmi `ab` komutu Tab ile `about` olur; sonraki Tab yardım düğmesine ilerler.
- Kaydedilen terminal ve klasik tercihleri, sorgusuz ana adres tekrar açıldığında uygulanır.
- JavaScript devre dışı bırakılarak klasik içeriğin ve bağlantıların erişilebilir olduğu, mod düğmelerinin gizlendiği doğrulandı. Test sonrası JavaScript ve ekran boyutu ayarları geri alındı.
- Master, Backend ve Full Stack PDF'leri tarayıcı düğmelerinden indirildi. İndirilen dosyaların baytları, paket ve orijinal kaynak dosyalarıyla birebir eşleşir.
- Bütün yerel HTML/CSS/JS, favicon ve CV kaynakları HTTP 200 ile gelir. Yinelenen HTML ID'si yoktur.
- `script.js` ve `mode.js` JavaScript sözdizimi kontrollerinden geçti.
- Son tarayıcı konsolunda hata veya uyarı görülmedi.
- Komut alanındaki yeşil odak çerçevesi kaldırıldı. Odak, komut isteminin alt çizgisi ve doğal metin imleciyle gösterilir; tarayıcıda `outline: none` doğrulandı.

Bu kontrol yerel teslimi kapsar. harunerkam.com'a dağıtım yapılmamıştır. Ekran okuyucu uygulamasıyla ayrıca test yapılmamıştır; semantik yapı, odak davranışı ve erişilebilirlik ağacı tarayıcıda kontrol edilmiştir.
