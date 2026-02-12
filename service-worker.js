const CACHE_NAME = 'ecode-v2.0.0'; // تم تحديث الإصدار

// قائمة الملفات التي يجب تخزينها ليعمل الموقع بدون إنترنت
const urlsToCache = [
  // 1. الصفحات الرئيسية
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.png',
  '/favicon.ico',

  // 2. الملفات المشتركة (Assets & Components)
  '/assets/css/style.css',
  '/assets/js/main.js',
  '/assets/js/layout.js',
  '/components/header.html',
  '/components/footer.html',
  '/components/header-en.html',
  '/components/footer-en.html',

  // 3. الصفحات العربية
  '/ar/',
  '/ar/index.html',
  '/services/',
  '/services/index.html',
  '/plans/',
  '/plans/index.html',
  '/portfolio/',
  '/portfolio/index.html',
  '/contact/',
  '/contact/index.html',
  '/terms/',
  '/terms/index.html',
  '/privacy/',
  '/privacy/index.html',
  '/ar/offline.html', // صفحة الأوفلاين العربية

  // 4. الصفحات الإنجليزية
  '/en/',
  '/en/index.html',
  '/en/services/',
  '/en/services/index.html',
  '/en/plans/',
  '/en/plans/index.html',
  '/en/portfolio/',
  '/en/portfolio/index.html',
  '/en/contact/',
  '/en/contact/index.html',
  '/en/terms/',
  '/en/terms/index.html',
  '/en/privacy/',
  '/en/privacy/index.html',
  '/en/offline.html', // صفحة الأوفلاين الإنجليزية

  // 5. المصادر الخارجية (يفضل تخزينها محلياً للأداء الأفضل، لكن لا بأس بها هنا)
  'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

// Install Event - تثبيت وتخزين الملفات
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event - تنظيف الكاش القديم
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch Event - استراتيجية الشبكة أولاً مع السقوط للكاش (Network First, falling back to Cache)
// هذه الاستراتيجية أفضل للمحتوى المتغير، أو Stale-While-Revalidate للأصول الثابتة
self.addEventListener('fetch', (event) => {
  
  // تجاهل طلبات الـ POST والطلبات غير المدعومة في الكاش
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // إذا وجدنا الملف في الكاش، نرجعه فوراً (سرعة عالية)
        if (cachedResponse) {
          // في الخلفية، نحاول تحديث الكاش من الشبكة (Stale-While-Revalidate strategy light)
          fetch(event.request).then((networkResponse) => {
             if(networkResponse && networkResponse.status === 200) {
                 caches.open(CACHE_NAME).then((cache) => {
                     cache.put(event.request, networkResponse.clone());
                 });
             }
          }).catch(() => {}); // تجاهل أخطاء الشبكة في الخلفية
          
          return cachedResponse;
        }

        // إذا لم يكن في الكاش، نجلبه من الشبكة
        return fetch(event.request)
          .then((response) => {
            // التحقق من صحة الاستجابة
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // تخزين نسخة جديدة في الكاش للمستقبل
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // في حالة انقطاع الإنترنت والفشل التام
            // نتحقق إذا كان الطلب لصفحة HTML
            if (event.request.headers.get('accept').includes('text/html')) {
                // نحدد اللغة المطلوبة بناءً على الرابط
                const isEnglish = event.request.url.includes('/en/');
                const offlinePage = isEnglish ? '/en/offline.html' : '/ar/offline.html';
                
                return caches.match(offlinePage);
            }
          });
      })
  );
});

// Push Notifications
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'eCode';
  const options = {
    body: data.body || 'لديك إشعار جديد',
    icon: '/icons/icon-192x192.png', // تأكد من وجود هذه الأيقونة
    badge: '/icons/badge-72x72.png', // تأكد من وجود هذه الأيقونة
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
