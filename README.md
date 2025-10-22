# 🎉 دليل فعاليات المدينة - City Events Guide

## معلومات المشروع / Project Information

**المادة:** BWP401
**الفصل الدراسي:** Fall 2024
**عنوان المشروع:** دليل فعاليات المدينة
**الدكتور:** باسل الخطيب

---

## 📋 وصف المشروع / Project Description

موقع إلكتروني شامل لعرض وإدارة الفعاليات المحلية في المدينة. يوفر المشروع منصة سهلة الاستخدام للمستخدمين لاكتشاف الفعاليات الثقافية والرياضية والموسيقية والعائلية.

A comprehensive website for displaying and managing local city events. The project provides an easy-to-use platform for users to discover cultural, sports, musical, and family events.

---

## 👥 أعضاء الفريق / Team Members

**⚠️ مهم: يجب تعديل هذه المعلومات في الملفات التالية:**

1. في ملف `index.html` (في الـ Footer)
2. في ملف `assets/js/main.js` (في نهاية الملف)

```
الطالب 1: [اسمك الكامل] - ID: [رقمك الجامعي]
الطالب 2: [اسم الزميل] - ID: [رقم الزميل]
الطالب 3: [اسم الزميل] - ID: [رقم الزميل]
```

---

## 📁 هيكل المشروع / Project Structure

```
bw/
├── index.html              # الصفحة الرئيسية
├── events.html             # صفحة جميع الفعاليات
├── event.html              # صفحة تفاصيل الفعالية
├── about.html              # صفحة عن الدليل
├── contact.html            # صفحة اتصل بنا
├── assets/
│   ├── css/
│   │   └── styles.css      # ملف التنسيقات
│   ├── js/
│   │   └── main.js         # ملف JavaScript
│   └── img/                # مجلد الصور (اختياري)
└── README.md               # هذا الملف
```

---

## 🛠️ التقنيات المستخدمة / Technologies Used

### 1. HTML5
- ✅ هيكل واضح ومنظم (Header, Main, Footer)
- ✅ 5 صفحات HTML منفصلة
- ✅ روابط تنقل تعمل بشكل صحيح

### 2. CSS3
- ✅ تصميم متجاوب باستخدام Flexbox و Grid
- ✅ لوحة ألوان مناسبة وجذابة
- ✅ خطوط عربية واضحة (Cairo Font)
- ✅ تأثيرات Hover وAnimations

### 3. JavaScript
- ✅ سلايدر للفعاليات البارزة
- ✅ فلترة الفعاليات (حسب التصنيف/التاريخ/الموقع)
- ✅ التحقق من نموذج الاتصال
- ✅ رسائل النجاح/الخطأ
- ✅ تأثيرات تفاعلية

### 4. Bootstrap 5.3
- ✅ Bootstrap Grid System
- ✅ Navbar متجاوب
- ✅ Cards للفعاليات
- ✅ Forms مع التحقق
- ✅ Modal للحجز
- ✅ Alerts للرسائل
- ✅ Badges للتصنيفات

---

## ✨ المميزات / Features

### الصفحة الرئيسية (index.html)
- ✅ شريط تنقل متجاوب
- ✅ سلايدر للفعاليات البارزة
- ✅ أزرار تصنيفات سريعة
- ✅ شبكة أحدث الفعاليات
- ✅ تذييل مع معلومات التواصل

### صفحة الفعاليات (events.html)
- ✅ شريط بحث
- ✅ فلاتر متعددة (التصنيف، التاريخ، الموقع)
- ✅ عرض جميع الفعاليات بشكل Cards
- ✅ رسالة "لا توجد نتائج" عند الفلترة

### صفحة تفاصيل الفعالية (event.html)
- ✅ معلومات كاملة عن الفعالية
- ✅ معرض صور
- ✅ خريطة الموقع
- ✅ زر "احجز الآن" مع Modal
- ✅ أزرار "أضف للتقويم" و "شارك"
- ✅ فعاليات ذات صلة

### صفحة عن الدليل (about.html)
- ✅ نبذة عن المشروع
- ✅ الرؤية والرسالة والقيم
- ✅ فريق العمل
- ✅ الشركاء
- ✅ السياسات
- ✅ إحصائيات

### صفحة اتصل بنا (contact.html)
- ✅ نموذج تواصل مع التحقق
- ✅ معلومات التواصل
- ✅ روابط السوشيال ميديا
- ✅ خريطة الموقع
- ✅ أسئلة شائعة (Accordion)

---

## 🚀 كيفية الاستخدام / How to Use

### 1. فتح المشروع محلياً
ببساطة افتح ملف `index.html` في المتصفح الخاص بك.

### 2. الاستضافة على GitHub Pages

#### الخطوات:

1. **إنشاء حساب GitHub**
   - اذهب إلى [github.com](https://github.com)
   - أنشئ حساب جديد

2. **إنشاء Repository جديد**
   - اضغط على "New repository"
   - اختر اسم (مثلاً: city-events-guide)
   - اجعله Public
   - اضغط "Create repository"

3. **رفع الملفات**
   - اضغط "Upload files"
   - ارفع جميع ملفات المشروع
   - تأكد من رفع المجلدات (assets/css, assets/js)
   - اضغط "Commit changes"

4. **تفعيل GitHub Pages**
   - اذهب إلى "Settings"
   - من القائمة الجانبية اختر "Pages"
   - في "Source" اختر:
     - Branch: main
     - Folder: / (root)
   - اضغط "Save"

5. **الحصول على الرابط**
   - انتظر دقيقة واحدة
   - سيظهر رابط الموقع:
   ```
   https://[username].github.io/[repository-name]/
   ```

---

## 📝 التعديلات المطلوبة / Required Modifications

### ⚠️ قبل التسليم، تأكد من:

1. **تحديث معلومات الفريق:**
   - افتح `index.html`
   - ابحث عن "أعضاء الفريق"
   - ضع أسماءكم وأرقامكم الجامعية

2. **تخصيص المحتوى:**
   - يمكنك تغيير أسماء الفعاليات
   - يمكنك تغيير الألوان في `assets/css/styles.css`
   - يمكنك إضافة صور حقيقية بدلاً من placeholder

3. **اختبار جميع المميزات:**
   - ✅ التنقل بين الصفحات
   - ✅ فلترة الفعاليات
   - ✅ إرسال نموذج الاتصال
   - ✅ الحجز من صفحة التفاصيل
   - ✅ التصميم المتجاوب على الموبايل

---

## 🎨 تخصيص الألوان / Customizing Colors

لتغيير الألوان، افتح `assets/css/styles.css` وعدل:

```css
:root {
    --primary-color: #0d6efd;      /* اللون الأساسي */
    --secondary-color: #6c757d;    /* اللون الثانوي */
    --success-color: #198754;      /* لون النجاح */
    --danger-color: #dc3545;       /* لون الخطر */
}
```

---

## 🐛 حل المشاكل / Troubleshooting

### المشكلة: CSS لا يعمل
**الحل:** تأكد من أن مسار الملف صحيح في HTML:
```html
<link rel="stylesheet" href="assets/css/styles.css">
```

### المشكلة: JavaScript لا يعمل
**الحل:**
1. افتح Console في المتصفح (F12)
2. تحقق من وجود أخطاء
3. تأكد من مسار الملف:
```html
<script src="assets/js/main.js"></script>
```

### المشكلة: الفلاتر لا تعمل
**الحل:** تأكد من أن كل Event Card له الـ attributes الصحيحة:
```html
<div class="event-card" data-category="music" data-date="2025-10-25" data-location="downtown">
```

---

## 📚 مراجع مفيدة / Helpful Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [GitHub Pages Guide](https://pages.github.com/)

---

## ✅ معايير التقييم / Grading Criteria

### HTML (20%)
- ✅ البنية واضحة ومنظمة
- ✅ الروابط تعمل بشكل صحيح
- ✅ استخدام صحيح للعناصر

### CSS (20%)
- ✅ تصميم جذاب ومتجاوب
- ✅ ألوان وخطوط مناسبة
- ✅ استخدام Flexbox/Grid

### JavaScript (20%)
- ✅ تفاعلية مفيدة (سلايدر، فلترة)
- ✅ التحقق من النموذج
- ✅ رسائل النجاح/الخطأ

### Bootstrap (20%)
- ✅ استخدام Grid System
- ✅ استخدام المكونات (Navbar, Cards, etc.)

### الإبداع (10%)
- ✅ تصميم فريد
- ✅ محتوى جذاب
- ✅ تفاصيل مميزة

### الجودة العامة (10%)
- ✅ خالي من الأخطاء
- ✅ تنظيم الملفات
- ✅ سهولة التصفح

---

## 📞 الدعم / Support

إذا واجهت أي مشاكل:
1. راجع قسم "حل المشاكل" أعلاه
2. تحقق من Console في المتصفح (F12)
3. تأكد من اتباع الخطوات بالترتيب

---

## 📄 الترخيص / License

هذا المشروع للأغراض التعليمية فقط - BWP401 Fall 2024

---

## 🎓 ملاحظات نهائية / Final Notes

- اقرأ التعليمات في ملف PDF بعناية
- تأكد من استضافة المشروع على GitHub Pages
- لا تنسى وضع أسماءكم وأرقامكم الجامعية
- اختبر الموقع على أجهزة مختلفة (كمبيوتر، تابلت، موبايل)
- سلم الرابط على Moodle قبل الموعد النهائي

**بالتوفيق! 🎉**
