// بيانات المستخدمين الافتراضية
const ADMIN_USER = "ali";
const ADMIN_PASS = "ali3100300";

// وظيفة تسجيل الدخول
function login(username, password) {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
        // حفظ بيانات تسجيل الدخول في المتصفح
        sessionStorage.setItem("userRole", "admin");
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "pos.html"; // التوجه لصفحة البيع بعد الدخول
        return true;
    } else if (username === "guest") {
        sessionStorage.setItem("userRole", "guest");
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "pos.html";
        return true;
    } else {
        alert("خطأ في اسم المستخدم أو كلمة المرور!");
        return false;
    }
}

// وظيفة حماية الصفحات (توضع في بداية كل صفحة)
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const role = sessionStorage.getItem("userRole");

    if (!isLoggedIn) {
        // إذا لم يكن مسجل دخول، ارجعه لصفحة الدخول
        window.location.href = "index.html";
    }

    // حماية الصفحات الحساسة من الـ Guest
    const sensitivePages = ["inventory.html", "reports.html", "funds.html"];
    const currentPage = window.location.pathname.split("/").pop();

    if (role === "guest" && sensitivePages.includes(currentPage)) {
        alert("عذراً، ليس لديك صلاحية للدخول هنا.");
        window.location.href = "pos.html";
    }
}

// وظيفة تسجيل الخروج
function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}
