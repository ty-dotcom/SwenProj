module.exports = [
"[project]/frontend/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
(()=>{
    const e = new Error("Cannot find module 'clsx'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'tailwind-merge'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function cn(...inputs) {
    return twMerge(clsx(inputs));
}
}),
"[project]/frontend/src/components/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buttonClassName",
    ()=>buttonClassName,
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Button({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonClassName, className),
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/Button.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
const buttonClassName = "flex items-center justify-center gap-2 rounded-full bg-blue-500 px-3 py-2 font-semibold text-white transition-colors hover:bg-blue-600 active:bg-blue-600 disabled:bg-gray-200";
}),
"[project]/frontend/src/app/data:cb4914 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00840b91875c2f28aa0ca0dd0c1682b5096139e79e":"getAdminId"},"frontend/src/app/actions.ts",""] */ __turbopack_context__.s([
    "getAdminId",
    ()=>getAdminId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getAdminId = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00840b91875c2f28aa0ca0dd0c1682b5096139e79e", __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAdminId"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuaW1wb3J0IHsgY2xlcmtDbGllbnQsIGN1cnJlbnRVc2VyIH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XHJcbmltcG9ydCB7IFN0cmVhbUNsaWVudCB9IGZyb20gXCJAc3RyZWFtLWlvL25vZGUtc2RrXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9rZW4oKSB7XHJcbiAgY29uc3Qgc3RyZWFtQXBpS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSRUFNX1ZJREVPX0FQSV9LRVk7XHJcbiAgY29uc3Qgc3RyZWFtQXBpU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU1RSRUFNX1ZJREVPX0FQSV9TRUNSRVQ7XHJcbiAgaWYgKCFzdHJlYW1BcGlLZXkgfHwgIXN0cmVhbUFwaVNlY3JldCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3RyZWFtIEFQSSBrZXkgb3Igc2VjcmV0IG5vdCBzZXRcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgY3VycmVudFVzZXIoKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coXCJHZW5lcmF0aW5nIHRva2VuIGZvciB1c2VyOiBcIiwgdXNlcj8uaWQpO1xyXG5cclxuICBpZiAoIXVzZXIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWRcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdHJlYW1DbGllbnQgPSBuZXcgU3RyZWFtQ2xpZW50KHN0cmVhbUFwaUtleSwgc3RyZWFtQXBpU2VjcmV0KTtcclxuXHJcbiAgY29uc3QgZXhwaXJhdGlvblRpbWUgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSArIDYwICogNjA7XHJcblxyXG4gIGNvbnN0IGlzc3VlZEF0ID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCkgLSA2MDtcclxuXHJcbiAgY29uc3QgdG9rZW4gPSBzdHJlYW1DbGllbnQuZ2VuZXJhdGVVc2VyVG9rZW4oe1xyXG4gICAgdXNlcl9pZDogdXNlci5pZCxcclxuICAgIGV4cDogZXhwaXJhdGlvblRpbWUsXHJcbiAgICBpYXQ6IGlzc3VlZEF0XHJcbiAgfSk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGdlbmVyYXRlZCB0b2tlbjogXCIsIHRva2VuKTtcclxuXHJcbiAgcmV0dXJuIHRva2VuO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWRtaW5JZCgpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IChhd2FpdCBjbGVya0NsaWVudCgpKS51c2Vycy5nZXRVc2VyTGlzdCh7XHJcbiAgICB1c2VybmFtZTogW1wiYWRtaW5cIl0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXNwb25zZS5kYXRhWzBdLmlkO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcklkcyhlbWFpbEFkZHJlc3Nlczogc3RyaW5nW10pIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IChhd2FpdCBjbGVya0NsaWVudCgpKS51c2Vycy5nZXRVc2VyTGlzdCh7XHJcbiAgICBlbWFpbEFkZHJlc3M6IGVtYWlsQWRkcmVzc2VzLFxyXG4gIH0pO1xyXG4gIHJldHVybiByZXNwb25zZS5kYXRhLm1hcCgodXNlcikgPT4gdXNlci5pZCk7XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitSQW9Dc0IifQ==
}),
"[project]/frontend/src/app/data:517918 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40072adaee9277e6592e7a7d91ceb790dd36889449":"getUserIds"},"frontend/src/app/actions.ts",""] */ __turbopack_context__.s([
    "getUserIds",
    ()=>getUserIds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getUserIds = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40072adaee9277e6592e7a7d91ceb790dd36889449", __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getUserIds"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuaW1wb3J0IHsgY2xlcmtDbGllbnQsIGN1cnJlbnRVc2VyIH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XHJcbmltcG9ydCB7IFN0cmVhbUNsaWVudCB9IGZyb20gXCJAc3RyZWFtLWlvL25vZGUtc2RrXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9rZW4oKSB7XHJcbiAgY29uc3Qgc3RyZWFtQXBpS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSRUFNX1ZJREVPX0FQSV9LRVk7XHJcbiAgY29uc3Qgc3RyZWFtQXBpU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU1RSRUFNX1ZJREVPX0FQSV9TRUNSRVQ7XHJcbiAgaWYgKCFzdHJlYW1BcGlLZXkgfHwgIXN0cmVhbUFwaVNlY3JldCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3RyZWFtIEFQSSBrZXkgb3Igc2VjcmV0IG5vdCBzZXRcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgY3VycmVudFVzZXIoKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coXCJHZW5lcmF0aW5nIHRva2VuIGZvciB1c2VyOiBcIiwgdXNlcj8uaWQpO1xyXG5cclxuICBpZiAoIXVzZXIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGF1dGhlbnRpY2F0ZWRcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdHJlYW1DbGllbnQgPSBuZXcgU3RyZWFtQ2xpZW50KHN0cmVhbUFwaUtleSwgc3RyZWFtQXBpU2VjcmV0KTtcclxuXHJcbiAgY29uc3QgZXhwaXJhdGlvblRpbWUgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSArIDYwICogNjA7XHJcblxyXG4gIGNvbnN0IGlzc3VlZEF0ID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCkgLSA2MDtcclxuXHJcbiAgY29uc3QgdG9rZW4gPSBzdHJlYW1DbGllbnQuZ2VuZXJhdGVVc2VyVG9rZW4oe1xyXG4gICAgdXNlcl9pZDogdXNlci5pZCxcclxuICAgIGV4cDogZXhwaXJhdGlvblRpbWUsXHJcbiAgICBpYXQ6IGlzc3VlZEF0XHJcbiAgfSk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGdlbmVyYXRlZCB0b2tlbjogXCIsIHRva2VuKTtcclxuXHJcbiAgcmV0dXJuIHRva2VuO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWRtaW5JZCgpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IChhd2FpdCBjbGVya0NsaWVudCgpKS51c2Vycy5nZXRVc2VyTGlzdCh7XHJcbiAgICB1c2VybmFtZTogW1wiYWRtaW5cIl0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXNwb25zZS5kYXRhWzBdLmlkO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcklkcyhlbWFpbEFkZHJlc3Nlczogc3RyaW5nW10pIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IChhd2FpdCBjbGVya0NsaWVudCgpKS51c2Vycy5nZXRVc2VyTGlzdCh7XHJcbiAgICBlbWFpbEFkZHJlc3M6IGVtYWlsQWRkcmVzc2VzLFxyXG4gIH0pO1xyXG4gIHJldHVybiByZXNwb25zZS5kYXRhLm1hcCgodXNlcikgPT4gdXNlci5pZCk7XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitSQTRDc0IifQ==
}),
"[project]/frontend/src/app/CreateMeetingPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateMeetingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Will be re-adjusted to the calendar page
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Button.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@clerk/nextjs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@stream-io/video-react-sdk'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$data$3a$cb4914__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/frontend/src/app/data:cb4914 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$data$3a$517918__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/frontend/src/app/data:517918 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
;
;
function CreateMeetingPage() {
    const [startTimeInput, setStartTimeInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [participantsInput, setParticipantsInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loadingCall, setLoadingCall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [call, setCall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const client = useStreamVideoClient();
    const { user } = useUser();
    async function createMeeting() {
        if (!client || !user) {
            return;
        }
        try {
            setLoadingCall(true);
            const id = crypto.randomUUID();
            const call = client.call("default", id);
            const memberEmails = participantsInput.split(",").map((email)=>email.trim());
            const memberIds = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$data$3a$517918__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getUserIds"])(memberEmails);
            const adminId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$data$3a$cb4914__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAdminId"])();
            const members = memberIds.map((id)=>({
                    user_id: id,
                    role: "call_member"
                })).concat({
                user_id: adminId,
                role: "host"
            }).concat({
                user_id: user.id,
                role: "call_member"
            }).filter((v, i, a)=>a.findIndex((v2)=>v2.user_id === v.user_id) === i);
            const starts_at = new Date(startTimeInput || Date.now()).toISOString();
            await call.getOrCreate({
                data: {
                    starts_at,
                    members
                }
            });
            setCall(call);
            setLoadingCall(false);
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again later.");
        }
    }
    if (!client || !user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Loader2, {
            className: "mx-auto animate-spin"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
            lineNumber: 70,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center space-y-6 text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-center text-2xl font-bold",
                children: [
                    "Welcome ",
                    user.username,
                    "!"
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-80 space-y-6 rounded-md bg-slate-100 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold",
                        children: "Create a new meeting"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StartTimeInput, {
                        value: startTimeInput,
                        onChange: setStartTimeInput
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticipantsInput, {
                        value: participantsInput,
                        onChange: setParticipantsInput
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onClick: createMeeting,
                        className: "w-full hover:cursor-pointer",
                        children: "Create meeting"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            loadingCall && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Loader2, {
                className: "mx-auto animate-spin"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                lineNumber: 89,
                columnNumber: 23
            }, this),
            call && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MeetingLink, {
                call: call,
                name: user.fullName ? user.fullName : ""
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
function StartTimeInput({ value, onChange }) {
    const dateTimeLocalNow = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60_000).toISOString().slice(0, 16);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-medium",
                children: "Meeting starts at:"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "datetime-local",
                value: value,
                onChange: (e)=>onChange(e.target.value),
                min: dateTimeLocalNow,
                className: "w-full rounded-md border border-gray-300 p-2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                lineNumber: 112,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
// Participants must have an account.
function ParticipantsInput({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-medium",
                children: "Participants:"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: "Enter participant email addresses separated by commas excluding yours.",
                className: "w-full rounded-md border border-gray-300 p-2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                lineNumber: 134,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
function MeetingLink({ call, name }) {
    const meetingLink = `${("TURBOPACK compile-time value", "https://localhost:5000")}/meeting/${call.id}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Invitation link:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: meetingLink,
                                className: "font-bold text-blue-400 hover:underline",
                                children: meetingLink
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: "Copy invitation link",
                        onClick: ()=>{
                            navigator.clipboard.writeText(meetingLink);
                            alert("Copied to clipboard");
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Copy, {}, void 0, false, {
                            fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: getMailToLink(meetingLink, name, call.state.startsAt),
                target: "_blank",
                className: "text-blue-500 hover:underline",
                children: "Send email invitation"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
function CallDetails({ call, name, starts_at }) {
    const meetingLink = `${("TURBOPACK compile-time value", "https://localhost:5000")}/meeting/${call.id}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute w-full bg-gray-500 opacity-10 items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-60 rounded-2xl relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(X, {
                    className: "hover:text-red-500 justify-end"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                    lineNumber: 195,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold",
                    children: "Meeting Details"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                    lineNumber: 196,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "User: ",
                                name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                            lineNumber: 198,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Starts At: ",
                                starts_at
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                            lineNumber: 199,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Meeting Link: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: meetingLink
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                                    lineNumber: 200,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                            lineNumber: 200,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
                    lineNumber: 197,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
            lineNumber: 194,
            columnNumber: 10
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/CreateMeetingPage.tsx",
        lineNumber: 193,
        columnNumber: 9
    }, this);
}
function getMailToLink(meetingLink, name, startsAt) {
    const startDateFormatted = startsAt ? startsAt.toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "short"
    }) : undefined;
    const subject = "Join my meeting" + (startDateFormatted ? ` at ${startDateFormatted}` : "");
    const body = `Join my meeting at ${meetingLink}.` + (startDateFormatted ? `\n\nThe meeting starts at ${startDateFormatted}.` : "") + `Welcome ${name}, to your session at Mind, Heart & Soul Counselling. Let's have a splendid time.`;
    return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
}),
];

//# sourceMappingURL=frontend_src_a45666e6._.js.map