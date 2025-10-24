document.addEventListener("DOMContentLoaded", function () {
  console.log("تم تحميل الموقع بنجاح");
  initializeTheme();
  initializeLanguage();
  setupThemeToggle();
  setupLanguageSwitcher();
  setupCategoryButtons();
  setupEventFilters();
  setupContactForm();
  setupEventButtons();
});

function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
  updateThemeIcon();
}

function initializeLanguage() {
  const savedLang = localStorage.getItem("language") || "ar";
  if (savedLang === "en") {
    translateToEnglish();
  }
  updateLanguageDisplay();
}

function setupThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      const currentTheme = document.body.classList.contains("dark-mode")
        ? "dark"
        : "light";
      localStorage.setItem("theme", currentTheme);
      updateThemeIcon();
    });
  }
}

function updateThemeIcon() {
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.innerHTML = isDark ? "☀️ وضع نهاري" : "🌙 وضع ليلي";
  }
}

function setupLanguageSwitcher() {
  const langButtons = document.querySelectorAll(".lang-switch");
  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const lang = this.getAttribute("data-lang");
      switchLanguage(lang);
    });
  });
}

function switchLanguage(lang) {
  localStorage.setItem("language", lang);
  if (lang === "en") {
    translateToEnglish();
  } else {
    translateToArabic();
  }
  updateLanguageDisplay();
}

function updateLanguageDisplay() {
  const langDisplay = document.getElementById("currentLang");
  const currentLang = localStorage.getItem("language") || "ar";
  if (langDisplay) {
    langDisplay.textContent =
      currentLang === "ar" ? "🇸🇾 العربية" : "🇬🇧 English";
  }
}

function translateToEnglish() {
  document.documentElement.setAttribute("lang", "en");
  document.documentElement.setAttribute("dir", "ltr");

  const translations = {
    "دليل فعاليات المدينة": "City Events Guide",
    الرئيسية: "Home",
    "كل الفعاليات": "All Events",
    "عن الدليل": "About",
    "اتصل بنا": "Contact Us",
    "فعاليات بارزة هذا الأسبوع": "Featured Events This Week",
    "تصنيفات سريعة": "Quick Categories",
    ثقافة: "Culture",
    رياضة: "Sports",
    موسيقى: "Music",
    عائلي: "Family",
    "أحدث الفعاليات": "Latest Events",
    "عرض جميع الفعاليات": "View All Events",
    التفاصيل: "Details",
    "معلومات التواصل": "Contact Information",
    "روابط سريعة": "Quick Links",
    تابعنا: "Follow Us",
    "جميع الحقوق محفوظة": "All Rights Reserved",
    "أعضاء الفريق": "Team Members",
  };

  applyTranslations(translations);
}

function translateToArabic() {
  document.documentElement.setAttribute("lang", "ar");
  document.documentElement.setAttribute("dir", "rtl");

  const translations = {
    "City Events Guide": "دليل فعاليات المدينة",
    Home: "الرئيسية",
    "All Events": "كل الفعاليات",
    About: "عن الدليل",
    "Contact Us": "اتصل بنا",
    "Featured Events This Week": "فعاليات بارزة هذا الأسبوع",
    "Quick Categories": "تصنيفات سريعة",
    Culture: "ثقافة",
    Sports: "رياضة",
    Music: "موسيقى",
    Family: "عائلي",
    "Latest Events": "أحدث الفعاليات",
    "View All Events": "عرض جميع الفعاليات",
    Details: "التفاصيل",
    "Contact Information": "معلومات التواصل",
    "Quick Links": "روابط سريعة",
    "Follow Us": "تابعنا",
    "All Rights Reserved": "جميع الحقوق محفوظة",
    "Team Members": "أعضاء الفريق",
  };

  applyTranslations(translations);
}

function applyTranslations(translations) {
  Object.keys(translations).forEach(function (key) {
    const elements = document.querySelectorAll("*");
    elements.forEach(function (element) {
      if (
        element.childNodes.length === 1 &&
        element.childNodes[0].nodeType === 3
      ) {
        const text = element.textContent.trim();
        if (text === key) {
          element.textContent = translations[key];
        }
      }
    });
  });
}

function setupCategoryButtons() {
  var categoryBtns = document.querySelectorAll(".category-btn");

  categoryBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var category = this.getAttribute("data-category");
      localStorage.setItem("selectedCategory", category);
      window.location.href = "events.html";
    });
  });

  if (window.location.pathname.includes("events.html")) {
    var savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      var categoryFilter = document.getElementById("categoryFilter");
      if (categoryFilter) {
        categoryFilter.value = savedCategory;
        filterEvents();
      }
      localStorage.removeItem("selectedCategory");
    }
  }
}

function setupEventFilters() {
  var searchInput = document.getElementById("searchInput");
  var categoryFilter = document.getElementById("categoryFilter");
  var dateFilter = document.getElementById("dateFilter");
  var locationFilter = document.getElementById("locationFilter");

  if (searchInput) {
    searchInput.addEventListener("input", filterEvents);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterEvents);
  }

  if (dateFilter) {
    dateFilter.addEventListener("change", filterEvents);
  }

  if (locationFilter) {
    locationFilter.addEventListener("change", filterEvents);
  }
}

function filterEvents() {
  var searchText = document.getElementById("searchInput").value.toLowerCase();
  var category = document.getElementById("categoryFilter").value;
  var location = document.getElementById("locationFilter").value;

  var eventCards = document.querySelectorAll(".event-card");
  var visibleCount = 0;

  eventCards.forEach(function (card) {
    var cardText = card.textContent.toLowerCase();
    var cardCategory = card.getAttribute("data-category");
    var cardLocation = card.getAttribute("data-location");

    var showCard = true;

    if (searchText && !cardText.includes(searchText)) {
      showCard = false;
    }

    if (category !== "all" && cardCategory !== category) {
      showCard = false;
    }

    if (location !== "all" && cardLocation !== location) {
      showCard = false;
    }

    if (showCard) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  var noResults = document.getElementById("noResults");
  if (noResults) {
    if (visibleCount === 0) {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
    }
  }
}

function setupContactForm() {
  var contactForm = document.getElementById("contactForm");

  if (!contactForm) {
    return;
  }

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
      showMessage("success", "تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.");
      contactForm.reset();
    } else {
      showMessage("danger", "الرجاء ملء جميع الحقول المطلوبة بشكل صحيح");
    }
  });
}

function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value.trim();

  var valid = true;

  if (name.length < 3) {
    document.getElementById("name").classList.add("is-invalid");
    valid = false;
  } else {
    document.getElementById("name").classList.remove("is-invalid");
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("email").classList.add("is-invalid");
    valid = false;
  } else {
    document.getElementById("email").classList.remove("is-invalid");
  }

  if (!subject) {
    document.getElementById("subject").classList.add("is-invalid");
    valid = false;
  } else {
    document.getElementById("subject").classList.remove("is-invalid");
  }

  if (message.length < 10) {
    document.getElementById("message").classList.add("is-invalid");
    valid = false;
  } else {
    document.getElementById("message").classList.remove("is-invalid");
  }

  return valid;
}

function showMessage(type, text) {
  var alertDiv = document.getElementById("formAlerts");

  if (!alertDiv) {
    return;
  }

  var alertHTML =
    '<div class="alert alert-' +
    type +
    ' alert-dismissible fade show" role="alert">';
  alertHTML += text;
  alertHTML +=
    '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';
  alertHTML += "</div>";

  alertDiv.innerHTML = alertHTML;

  setTimeout(function () {
    var alert = alertDiv.querySelector(".alert");
    if (alert) {
      alert.classList.remove("show");
    }
  }, 5000);
}

function setupEventButtons() {
  var addCalendarBtn = document.getElementById("addToCalendar");
  if (addCalendarBtn) {
    addCalendarBtn.addEventListener("click", function () {
      alert("سيتم إضافة الفعالية إلى تقويمك");
    });
  }

  var shareBtn = document.getElementById("shareEvent");
  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      if (navigator.share) {
        navigator
          .share({
            title: "دليل فعاليات المدينة",
            text: "شاهد هذه الفعالية",
            url: window.location.href,
          })
          .catch(function (err) {
            console.log("خطأ في المشاركة:", err);
          });
      } else {
        alert("تم نسخ الرابط");
      }
    });
  }

  var confirmBtn = document.getElementById("confirmBooking");
  if (confirmBtn) {
    confirmBtn.addEventListener("click", function () {
      alert("تم حجزك بنجاح! سنرسل لك التفاصيل عبر البريد الإلكتروني");

      var modal = bootstrap.Modal.getInstance(
        document.getElementById("bookingModal")
      );
      if (modal) {
        modal.hide();
      }

      var bookingForm = document.getElementById("bookingForm");
      if (bookingForm) {
        bookingForm.reset();
      }
    });
  }
}

console.log("دليل فعاليات المدينة - BWP401");
