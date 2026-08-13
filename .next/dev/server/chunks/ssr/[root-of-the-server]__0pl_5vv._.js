module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nav$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/nav-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function isActive(pathname, href) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
}
function Navbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [servicesOpen, setServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileServicesOpen, setMobileServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-outline/30 shadow-[0_4px_20px_rgba(24,42,85,0.06)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 h-16 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-8 h-8 flex items-center justify-center bg-navy text-paper text-sm font-semibold font-display",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nav$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE"].short
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-navy font-display text-lg font-semibold tracking-wide hidden sm:inline",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nav$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE"].name
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center gap-8",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nav$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>{
                                const active = isActive(pathname, link.href);
                                return link.label === "Services" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    onMouseEnter: ()=>setServicesOpen(true),
                                    onMouseLeave: ()=>setServicesOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: `text-xs tracking-[0.08em] uppercase font-semibold pb-1 border-b-2 flex items-center gap-1 transition-colors ${active ? "text-navy border-olive" : "text-slate border-transparent hover:text-navy"}`,
                                            children: [
                                                link.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px]",
                                                    children: "▾"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this),
                                        servicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white border border-outline/40 shadow-xl p-2 rounded-lg",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nav$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/services/${s.slug}`,
                                                            className: "block px-4 py-3 hover:bg-paper-dim transition-colors rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-navy",
                                                                    children: s.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Navbar.tsx",
                                                                    lineNumber: 61,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate mt-0.5",
                                                                    children: s.short
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Navbar.tsx",
                                                                    lineNumber: 64,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, s.slug, true, {
                                                            fileName: "[project]/components/Navbar.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 25
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/services",
                                                        className: "block px-4 py-3 text-sm text-olive font-medium border-t border-outline/30",
                                                        children: "View all services →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 54,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, link.href, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `text-xs tracking-[0.08em] uppercase font-semibold pb-1 border-b-2 transition-colors ${active ? "text-navy border-olive" : "text-slate border-transparent hover:text-navy"}`,
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "bg-olive text-white px-6 py-2.5 rounded text-xs tracking-[0.08em] uppercase font-semibold hover:bg-navy transition-colors",
                                children: "Book Consultation"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileOpen(!mobileOpen),
                        className: "md:hidden text-navy text-2xl leading-none",
                        "aria-label": "Toggle menu",
                        children: mobileOpen ? "×" : "≡"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden bg-paper border-t border-outline/30 px-6 pb-6 flex flex-col gap-1",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nav$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>{
                    const active = isActive(pathname, link.href);
                    return link.label === "Services" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileServicesOpen(!mobileServicesOpen),
                                className: `w-full text-left py-3 text-sm flex items-center justify-between ${active ? "text-navy font-semibold" : "text-navy"}`,
                                children: [
                                    "Services ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: mobileServicesOpen ? "−" : "+"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 120,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 114,
                                columnNumber: 17
                            }, this),
                            mobileServicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-4 pb-2 flex flex-col gap-1",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$nav$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SERVICES"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/services/${s.slug}`,
                                            className: "py-2 text-sm text-slate",
                                            onClick: ()=>setMobileOpen(false),
                                            children: s.title
                                        }, s.slug, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 125,
                                            columnNumber: 23
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/services",
                                        className: "py-2 text-sm text-olive",
                                        onClick: ()=>setMobileOpen(false),
                                        children: "View all services →"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 134,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 123,
                                columnNumber: 19
                            }, this)
                        ]
                    }, link.href, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 113,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: `py-3 text-sm ${active ? "text-navy font-semibold" : "text-navy"}`,
                        onClick: ()=>setMobileOpen(false),
                        children: link.label
                    }, link.href, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 145,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/nav-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BANKS",
    ()=>BANKS,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "PROCESS",
    ()=>PROCESS,
    "SERVICES",
    ()=>SERVICES,
    "SITE",
    ()=>SITE,
    "STATS",
    ()=>STATS,
    "TEAM",
    ()=>TEAM,
    "TESTIMONIALS",
    ()=>TESTIMONIALS,
    "WHY_US",
    ()=>WHY_US
]);
const SERVICES = [
    {
        slug: "internal-audits",
        title: "Internal Audits",
        short: "Process and control checks that catch gaps before they become losses.",
        icon: "ClipboardCheck"
    },
    {
        slug: "concurrent-audits",
        title: "Concurrent Audits",
        short: "Real-time transaction review for banks and NBFCs, empanelled with ICICI, IndusInd & RBL.",
        icon: "RefreshCw"
    },
    {
        slug: "stock-audits",
        title: "Stock Audits",
        short: "Physical verification and valuation of inventory pledged against working capital limits.",
        icon: "Package"
    },
    {
        slug: "gst-audits",
        title: "GST Audits",
        short: "Reconciliation and compliance review under Goods & Services Tax law.",
        icon: "Receipt"
    },
    {
        slug: "taxation",
        title: "Taxation",
        short: "Direct and indirect tax planning, filing and representation.",
        icon: "Landmark"
    },
    {
        slug: "statutory-audits",
        title: "Statutory Audits",
        short: "Independent audit of financial statements as mandated under the Companies Act.",
        icon: "Gavel"
    },
    {
        slug: "income-tax",
        title: "Income Tax",
        short: "Return filing, planning and assessment representation for individuals and businesses.",
        icon: "FileText"
    },
    {
        slug: "certification-attestation",
        title: "Certification & Attestation",
        short: "Net worth, turnover and other certificates required for banks, tenders and regulators.",
        icon: "Stamp"
    },
    {
        slug: "goods-service-tax-audit",
        title: "Goods and Service Tax Audit",
        short: "Detailed GSTR reconciliation and annual return audit for GST-registered entities.",
        icon: "FileSearch"
    }
];
const NAV_LINKS = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Services",
        href: "/services"
    },
    {
        label: "Contact Us",
        href: "/contact"
    }
];
const SITE = {
    name: "Giniyani & Associates",
    short: "G&A",
    tagline: "Chartered Accountants, Mumbai",
    phone: "+91 98798 82346",
    phone2: "+91 99132 29252",
    email: "ca.sohebginiyani@gmail.com",
    email2: "giniyaniandassociates@gmail.com",
    headOffice: "A/403, Jaiswal Heights, Near McDonald's, S V Road, Jogeshwari (West), Mumbai, Maharashtra – 400102",
    branchOffice: "11/965, Sharifa Manzil, Near Jumma Masjid, Chowk Bazar Main Road, Surat, Gujarat – 395003"
};
const STATS = [
    {
        value: "50+",
        label: "Satisfied clients served"
    },
    {
        value: "17",
        label: "Team members across roles"
    },
    {
        value: "3",
        label: "Banks empanelled with"
    }
];
const TEAM = [
    {
        name: "CA. Mohmad Soheb Giniyani",
        cred: "ICAI Membership No. 134952 · FCA",
        points: [
            "B. Com · LLB · ACMA",
            "Certified Concurrent Auditor of Banks",
            "DISA Qualified"
        ]
    },
    {
        name: "CA. Anju Sharda",
        cred: "ICAI Membership No. 100366 · FCA",
        points: [
            "B. Com"
        ]
    }
];
const BANKS = [
    {
        name: "ICICI Bank",
        desc: "Concurrent & Co-sourcing"
    },
    {
        name: "IndusInd Bank",
        desc: "Concurrent & Co-sourcing"
    },
    {
        name: "RBL Bank",
        desc: "Concurrent Audits"
    }
];
const WHY_US = [
    {
        title: "Dedicated engagement teams",
        body: "Every assignment is led by a Partner and staffed by a team suited to your specific industry and scale."
    },
    {
        title: "Current on regulation",
        body: "Frequent internal reviews and group discussions keep the firm ahead of legislative change, not reacting to it."
    },
    {
        title: "Bank-empanelled expertise",
        body: "Direct empanelment with ICICI, IndusInd and RBL means our audit standards are already tested against institutional benchmarks."
    },
    {
        title: "Client retention that speaks for itself",
        body: "The majority of our original clients are still with us today — the clearest evidence of the relationship we build."
    }
];
const TESTIMONIALS = [
    {
        quote: "Their concurrent audit team catches issues in our branch transactions well before quarter-end review — it changes how we prepare.",
        name: "Operations Head",
        org: "Private Bank Branch, Mumbai"
    },
    {
        quote: "Straightforward, on time, and they explain the numbers instead of just handing over a report.",
        name: "Finance Director",
        org: "Manufacturing Concern, Surat"
    },
    {
        quote: "We've stayed with Giniyani & Associates through two rounds of expansion. That continuity matters more than people realise.",
        name: "Proprietor",
        org: "Trading Firm, Jogeshwari"
    }
];
const PROCESS = [
    {
        step: "Initial review",
        body: "We understand your business, existing records, and compliance exposure."
    },
    {
        step: "Scoping & proposal",
        body: "A clear engagement plan — scope, timeline, and fees, with no surprises later."
    },
    {
        step: "Fieldwork",
        body: "A dedicated team executes the audit or filing, led by a Partner throughout."
    },
    {
        step: "Reporting & follow-up",
        body: "Findings explained in plain terms, with support through implementation."
    }
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0pl_5vv._.js.map