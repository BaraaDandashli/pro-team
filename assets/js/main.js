// ملف JavaScript - دليل فعاليات المدينة
// اسم الطالب: [ضع اسمك هنا]
// الرقم الجامعي: [ضع رقمك هنا]

// تشغيل الكود بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('تم تحميل الموقع بنجاح');

    // تشغيل الوظائف
    setupCategoryButtons();
    setupEventFilters();
    setupContactForm();
    setupEventButtons();
});

// وظيفة أزرار التصنيفات في الصفحة الرئيسية
function setupCategoryButtons() {
    var categoryBtns = document.querySelectorAll('.category-btn');

    categoryBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var category = this.getAttribute('data-category');
            localStorage.setItem('selectedCategory', category);
            window.location.href = 'events.html';
        });
    });

    // إذا كنا في صفحة الفعاليات
    if (window.location.pathname.includes('events.html')) {
        var savedCategory = localStorage.getItem('selectedCategory');
        if (savedCategory) {
            var categoryFilter = document.getElementById('categoryFilter');
            if (categoryFilter) {
                categoryFilter.value = savedCategory;
                filterEvents();
            }
            localStorage.removeItem('selectedCategory');
        }
    }
}

// وظيفة فلترة الفعاليات
function setupEventFilters() {
    var searchInput = document.getElementById('searchInput');
    var categoryFilter = document.getElementById('categoryFilter');
    var dateFilter = document.getElementById('dateFilter');
    var locationFilter = document.getElementById('locationFilter');

    if (searchInput) {
        searchInput.addEventListener('input', filterEvents);
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterEvents);
    }

    if (dateFilter) {
        dateFilter.addEventListener('change', filterEvents);
    }

    if (locationFilter) {
        locationFilter.addEventListener('change', filterEvents);
    }
}

// تصفية الفعاليات
function filterEvents() {
    var searchText = document.getElementById('searchInput').value.toLowerCase();
    var category = document.getElementById('categoryFilter').value;
    var location = document.getElementById('locationFilter').value;

    var eventCards = document.querySelectorAll('.event-card');
    var visibleCount = 0;

    eventCards.forEach(function(card) {
        var cardText = card.textContent.toLowerCase();
        var cardCategory = card.getAttribute('data-category');
        var cardLocation = card.getAttribute('data-location');

        var showCard = true;

        // فلتر البحث
        if (searchText && !cardText.includes(searchText)) {
            showCard = false;
        }

        // فلتر التصنيف
        if (category !== 'all' && cardCategory !== category) {
            showCard = false;
        }

        // فلتر الموقع
        if (location !== 'all' && cardLocation !== location) {
            showCard = false;
        }

        // إظهار أو إخفاء البطاقة
        if (showCard) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // رسالة لا توجد نتائج
    var noResults = document.getElementById('noResults');
    if (noResults) {
        if (visibleCount === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    }
}

// التحقق من نموذج التواصل
function setupContactForm() {
    var contactForm = document.getElementById('contactForm');

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            showMessage('success', 'تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.');
            contactForm.reset();
        } else {
            showMessage('danger', 'الرجاء ملء جميع الحقول المطلوبة بشكل صحيح');
        }
    });
}

// التحقق من البيانات
function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value.trim();

    var valid = true;

    // التحقق من الاسم
    if (name.length < 3) {
        document.getElementById('name').classList.add('is-invalid');
        valid = false;
    } else {
        document.getElementById('name').classList.remove('is-invalid');
    }

    // التحقق من البريد الإلكتروني
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email').classList.add('is-invalid');
        valid = false;
    } else {
        document.getElementById('email').classList.remove('is-invalid');
    }

    // التحقق من الموضوع
    if (!subject) {
        document.getElementById('subject').classList.add('is-invalid');
        valid = false;
    } else {
        document.getElementById('subject').classList.remove('is-invalid');
    }

    // التحقق من الرسالة
    if (message.length < 10) {
        document.getElementById('message').classList.add('is-invalid');
        valid = false;
    } else {
        document.getElementById('message').classList.remove('is-invalid');
    }

    return valid;
}

// عرض رسائل التنبيه
function showMessage(type, text) {
    var alertDiv = document.getElementById('formAlerts');

    if (!alertDiv) {
        return;
    }

    var alertHTML = '<div class="alert alert-' + type + ' alert-dismissible fade show" role="alert">';
    alertHTML += text;
    alertHTML += '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';
    alertHTML += '</div>';

    alertDiv.innerHTML = alertHTML;

    // إخفاء الرسالة بعد 5 ثواني
    setTimeout(function() {
        var alert = alertDiv.querySelector('.alert');
        if (alert) {
            alert.classList.remove('show');
        }
    }, 5000);
}

// أزرار صفحة تفاصيل الفعالية
function setupEventButtons() {
    // زر إضافة للتقويم
    var addCalendarBtn = document.getElementById('addToCalendar');
    if (addCalendarBtn) {
        addCalendarBtn.addEventListener('click', function() {
            alert('سيتم إضافة الفعالية إلى تقويمك');
        });
    }

    // زر المشاركة
    var shareBtn = document.getElementById('shareEvent');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: 'دليل فعاليات المدينة',
                    text: 'شاهد هذه الفعالية',
                    url: window.location.href
                }).catch(function(err) {
                    console.log('خطأ في المشاركة:', err);
                });
            } else {
                alert('تم نسخ الرابط');
            }
        });
    }

    // زر تأكيد الحجز
    var confirmBtn = document.getElementById('confirmBooking');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            alert('تم حجزك بنجاح! سنرسل لك التفاصيل عبر البريد الإلكتروني');

            var modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
            if (modal) {
                modal.hide();
            }

            var bookingForm = document.getElementById('bookingForm');
            if (bookingForm) {
                bookingForm.reset();
            }
        });
    }
}

// رسالة في الكونسول
console.log('دليل فعاليات المدينة - BWP401');
