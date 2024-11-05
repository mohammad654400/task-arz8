export const QUERY_CLIENT_DEFAULTS = {
  staleTime: 60000,            // داده‌ها برای ۶۰ ثانیه تازه در نظر گرفته می‌شوند
  cacheTime: 300000,           // داده‌ها به مدت ۵ دقیقه در کش باقی می‌مانند
  retry: 3,                    // تعداد دفعات تلاش مجدد در صورت بروز خطا
  refetchOnWindowFocus: true,  // بازخوانی داده‌ها هنگام فوکوس مجدد روی پنجره
};
