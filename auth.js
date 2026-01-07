const ADMIN_PASS = "ali3100300";

function login(pass) {
    if (pass === ADMIN_PASS) {
        sessionStorage.setItem("role", "admin");
        window.location.href = "pos.html";
    } else {
        alert("كلمة مرور خاطئة!");
    }
}

function guestLogin() {
    sessionStorage.setItem("role", "guest");
    window.location.href = "pos.html";
}

function checkAuth() {
    const role = sessionStorage.getItem("role");
    if (!role) window.location.href = "index.html";
    
    // حماية الصفحات الحساسة من الـ Guest
    const currentFile = window.location.pathname.split("/").pop();
    const adminOnly = ["inventory.html", "reports.html", "funds.html", "settings.html"];
    if (role === "guest" && adminOnly.includes(currentFile)) {
        alert("صلاحية أدمن فقط!");
        window.location.href = "pos.html";
    }
}

function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}
