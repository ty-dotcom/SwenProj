module.exports = [
"[project]/node_modules/@clerk/nextjs/dist/esm/server/middleware-storage.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clerkMiddlewareRequestDataStorage",
    ()=>clerkMiddlewareRequestDataStorage,
    "clerkMiddlewareRequestDataStore",
    ()=>clerkMiddlewareRequestDataStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$async_hooks__$5b$external$5d$__$28$node$3a$async_hooks$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:async_hooks [external] (node:async_hooks, cjs)");
;
;
const clerkMiddlewareRequestDataStore = /* @__PURE__ */ new Map();
const clerkMiddlewareRequestDataStorage = new __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$async_hooks__$5b$external$5d$__$28$node$3a$async_hooks$2c$__cjs$29$__["AsyncLocalStorage"]();
;
 //# sourceMappingURL=middleware-storage.js.map
}),
"[project]/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clerkClient",
    ()=>clerkClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/backend/dist/internal.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5WJOTWIE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/backend/dist/chunk-5WJOTWIE.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/createClerkClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/headers-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$middleware$2d$storage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/middleware-storage.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/utils.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const clerkClient = async ()=>{
    var _a, _b;
    let requestData;
    try {
        const request = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildRequestLike"])();
        const encryptedRequestData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeader"])(request, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$5WJOTWIE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ClerkRequestData);
        requestData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptClerkRequestData"])(encryptedRequestData);
    } catch (err) {
        if (err && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPrerenderingBailout"])(err)) {
            throw err;
        }
    }
    const options = (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$middleware$2d$storage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clerkMiddlewareRequestDataStorage"].getStore()) == null ? void 0 : _a.get("requestData")) != null ? _b : requestData;
    if ((options == null ? void 0 : options.secretKey) || (options == null ? void 0 : options.publishableKey)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClerkClientWithOptions"])(options);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClerkClientWithOptions"])({});
};
;
 //# sourceMappingURL=clerkClient.js.map
}),
"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "currentUser",
    ()=>currentUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
;
;
;
async function currentUser(opts) {
    __turbopack_context__.r("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])({
        treatPendingAsSignedOut: opts == null ? void 0 : opts.treatPendingAsSignedOut
    });
    if (!userId) {
        return null;
    }
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clerkClient"])()).users.getUser(userId);
}
;
 //# sourceMappingURL=currentUser.js.map
}),
"[project]/node_modules/safe-buffer/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ var buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src){
        dst[key] = src[key];
    }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
    module.exports = buffer;
} else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
SafeBuffer.prototype = Object.create(Buffer.prototype);
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number');
    }
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
        } else {
            buf.fill(fill);
        }
    } else {
        buf.fill(0);
    }
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return buffer.SlowBuffer(size);
};
}),
"[project]/node_modules/jws/lib/data-stream.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*global module, process*/ var Buffer = __turbopack_context__.r("[project]/node_modules/safe-buffer/index.js [app-rsc] (ecmascript)").Buffer;
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
function DataStream(data) {
    this.buffer = null;
    this.writable = true;
    this.readable = true;
    // No input
    if (!data) {
        this.buffer = Buffer.alloc(0);
        return this;
    }
    // Stream
    if (typeof data.pipe === 'function') {
        this.buffer = Buffer.alloc(0);
        data.pipe(this);
        return this;
    }
    // Buffer or String
    // or Object (assumedly a passworded key)
    if (data.length || typeof data === 'object') {
        this.buffer = data;
        this.writable = false;
        process.nextTick((function() {
            this.emit('end', data);
            this.readable = false;
            this.emit('close');
        }).bind(this));
        return this;
    }
    throw new TypeError('Unexpected data type (' + typeof data + ')');
}
util.inherits(DataStream, Stream);
DataStream.prototype.write = function write(data) {
    this.buffer = Buffer.concat([
        this.buffer,
        Buffer.from(data)
    ]);
    this.emit('data', data);
};
DataStream.prototype.end = function end(data) {
    if (data) this.write(data);
    this.emit('end', data);
    this.emit('close');
    this.writable = false;
    this.readable = false;
};
module.exports = DataStream;
}),
"[project]/node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function getParamSize(keySize) {
    var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
    return result;
}
var paramBytesForAlg = {
    ES256: getParamSize(256),
    ES384: getParamSize(384),
    ES512: getParamSize(521)
};
function getParamBytesForAlg(alg) {
    var paramBytes = paramBytesForAlg[alg];
    if (paramBytes) {
        return paramBytes;
    }
    throw new Error('Unknown algorithm "' + alg + '"');
}
module.exports = getParamBytesForAlg;
}),
"[project]/node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var Buffer = __turbopack_context__.r("[project]/node_modules/safe-buffer/index.js [app-rsc] (ecmascript)").Buffer;
var getParamBytesForAlg = __turbopack_context__.r("[project]/node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js [app-rsc] (ecmascript)");
var MAX_OCTET = 0x80, CLASS_UNIVERSAL = 0, PRIMITIVE_BIT = 0x20, TAG_SEQ = 0x10, TAG_INT = 0x02, ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6, ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
function base64Url(base64) {
    return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function signatureAsBuffer(signature) {
    if (Buffer.isBuffer(signature)) {
        return signature;
    } else if ('string' === typeof signature) {
        return Buffer.from(signature, 'base64');
    }
    throw new TypeError('ECDSA signature must be a Base64 string or a Buffer');
}
function derToJose(signature, alg) {
    signature = signatureAsBuffer(signature);
    var paramBytes = getParamBytesForAlg(alg);
    // the DER encoded param should at most be the param size, plus a padding
    // zero, since due to being a signed integer
    var maxEncodedParamLength = paramBytes + 1;
    var inputLength = signature.length;
    var offset = 0;
    if (signature[offset++] !== ENCODED_TAG_SEQ) {
        throw new Error('Could not find expected "seq"');
    }
    var seqLength = signature[offset++];
    if (seqLength === (MAX_OCTET | 1)) {
        seqLength = signature[offset++];
    }
    if (inputLength - offset < seqLength) {
        throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
    }
    if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "r"');
    }
    var rLength = signature[offset++];
    if (inputLength - offset - 2 < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
    }
    if (maxEncodedParamLength < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
    }
    var rOffset = offset;
    offset += rLength;
    if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "s"');
    }
    var sLength = signature[offset++];
    if (inputLength - offset !== sLength) {
        throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
    }
    if (maxEncodedParamLength < sLength) {
        throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
    }
    var sOffset = offset;
    offset += sLength;
    if (offset !== inputLength) {
        throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
    }
    var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
    var dst = Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);
    for(offset = 0; offset < rPadding; ++offset){
        dst[offset] = 0;
    }
    signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
    offset = paramBytes;
    for(var o = offset; offset < o + sPadding; ++offset){
        dst[offset] = 0;
    }
    signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
    dst = dst.toString('base64');
    dst = base64Url(dst);
    return dst;
}
function countPadding(buf, start, stop) {
    var padding = 0;
    while(start + padding < stop && buf[start + padding] === 0){
        ++padding;
    }
    var needsSign = buf[start + padding] >= MAX_OCTET;
    if (needsSign) {
        --padding;
    }
    return padding;
}
function joseToDer(signature, alg) {
    signature = signatureAsBuffer(signature);
    var paramBytes = getParamBytesForAlg(alg);
    var signatureBytes = signature.length;
    if (signatureBytes !== paramBytes * 2) {
        throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
    }
    var rPadding = countPadding(signature, 0, paramBytes);
    var sPadding = countPadding(signature, paramBytes, signature.length);
    var rLength = paramBytes - rPadding;
    var sLength = paramBytes - sPadding;
    var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
    var shortLength = rsBytes < MAX_OCTET;
    var dst = Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
    var offset = 0;
    dst[offset++] = ENCODED_TAG_SEQ;
    if (shortLength) {
        // Bit 8 has value "0"
        // bits 7-1 give the length.
        dst[offset++] = rsBytes;
    } else {
        // Bit 8 of first octet has value "1"
        // bits 7-1 give the number of additional length octets.
        dst[offset++] = MAX_OCTET | 1;
        // length, base 256
        dst[offset++] = rsBytes & 0xff;
    }
    dst[offset++] = ENCODED_TAG_INT;
    dst[offset++] = rLength;
    if (rPadding < 0) {
        dst[offset++] = 0;
        offset += signature.copy(dst, offset, 0, paramBytes);
    } else {
        offset += signature.copy(dst, offset, rPadding, paramBytes);
    }
    dst[offset++] = ENCODED_TAG_INT;
    dst[offset++] = sLength;
    if (sPadding < 0) {
        dst[offset++] = 0;
        signature.copy(dst, offset, paramBytes);
    } else {
        signature.copy(dst, offset, paramBytes + sPadding);
    }
    return dst;
}
module.exports = {
    derToJose: derToJose,
    joseToDer: joseToDer
};
}),
"[project]/node_modules/buffer-equal-constant-time/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*jshint node:true */ var Buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").Buffer; // browserify
var SlowBuffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").SlowBuffer;
module.exports = bufferEq;
function bufferEq(a, b) {
    // shortcutting on type is necessary for correctness
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        return false;
    }
    // buffer sizes should be well-known information, so despite this
    // shortcutting, it doesn't leak any information about the *contents* of the
    // buffers.
    if (a.length !== b.length) {
        return false;
    }
    var c = 0;
    for(var i = 0; i < a.length; i++){
        /*jshint bitwise:false */ c |= a[i] ^ b[i]; // XOR
    }
    return c === 0;
}
bufferEq.install = function() {
    Buffer.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
        return bufferEq(this, that);
    };
};
var origBufEqual = Buffer.prototype.equal;
var origSlowBufEqual = SlowBuffer.prototype.equal;
bufferEq.restore = function() {
    Buffer.prototype.equal = origBufEqual;
    SlowBuffer.prototype.equal = origSlowBufEqual;
};
}),
"[project]/node_modules/jwa/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Buffer = __turbopack_context__.r("[project]/node_modules/safe-buffer/index.js [app-rsc] (ecmascript)").Buffer;
var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
var formatEcdsa = __turbopack_context__.r("[project]/node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js [app-rsc] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
var MSG_INVALID_SECRET = 'secret must be a string or buffer';
var MSG_INVALID_VERIFIER_KEY = 'key must be a string or a buffer';
var MSG_INVALID_SIGNER_KEY = 'key must be a string, a buffer or an object';
var supportsKeyObjects = typeof crypto.createPublicKey === 'function';
if (supportsKeyObjects) {
    MSG_INVALID_VERIFIER_KEY += ' or a KeyObject';
    MSG_INVALID_SECRET += 'or a KeyObject';
}
function checkIsPublicKey(key) {
    if (Buffer.isBuffer(key)) {
        return;
    }
    if (typeof key === 'string') {
        return;
    }
    if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key !== 'object') {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key.type !== 'string') {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key.asymmetricKeyType !== 'string') {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key.export !== 'function') {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
}
;
function checkIsPrivateKey(key) {
    if (Buffer.isBuffer(key)) {
        return;
    }
    if (typeof key === 'string') {
        return;
    }
    if (typeof key === 'object') {
        return;
    }
    throw typeError(MSG_INVALID_SIGNER_KEY);
}
;
function checkIsSecretKey(key) {
    if (Buffer.isBuffer(key)) {
        return;
    }
    if (typeof key === 'string') {
        return key;
    }
    if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_SECRET);
    }
    if (typeof key !== 'object') {
        throw typeError(MSG_INVALID_SECRET);
    }
    if (key.type !== 'secret') {
        throw typeError(MSG_INVALID_SECRET);
    }
    if (typeof key.export !== 'function') {
        throw typeError(MSG_INVALID_SECRET);
    }
}
function fromBase64(base64) {
    return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function toBase64(base64url) {
    base64url = base64url.toString();
    var padding = 4 - base64url.length % 4;
    if (padding !== 4) {
        for(var i = 0; i < padding; ++i){
            base64url += '=';
        }
    }
    return base64url.replace(/\-/g, '+').replace(/_/g, '/');
}
function typeError(template) {
    var args = [].slice.call(arguments, 1);
    var errMsg = util.format.bind(util, template).apply(null, args);
    return new TypeError(errMsg);
}
function bufferOrString(obj) {
    return Buffer.isBuffer(obj) || typeof obj === 'string';
}
function normalizeInput(thing) {
    if (!bufferOrString(thing)) thing = JSON.stringify(thing);
    return thing;
}
function createHmacSigner(bits) {
    return function sign(thing, secret) {
        checkIsSecretKey(secret);
        thing = normalizeInput(thing);
        var hmac = crypto.createHmac('sha' + bits, secret);
        var sig = (hmac.update(thing), hmac.digest('base64'));
        return fromBase64(sig);
    };
}
var bufferEqual;
var timingSafeEqual = 'timingSafeEqual' in crypto ? function timingSafeEqual(a, b) {
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    return crypto.timingSafeEqual(a, b);
} : function timingSafeEqual(a, b) {
    if (!bufferEqual) {
        bufferEqual = __turbopack_context__.r("[project]/node_modules/buffer-equal-constant-time/index.js [app-rsc] (ecmascript)");
    }
    return bufferEqual(a, b);
};
function createHmacVerifier(bits) {
    return function verify(thing, signature, secret) {
        var computedSig = createHmacSigner(bits)(thing, secret);
        return timingSafeEqual(Buffer.from(signature), Buffer.from(computedSig));
    };
}
function createKeySigner(bits) {
    return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        // Even though we are specifying "RSA" here, this works with ECDSA
        // keys as well.
        var signer = crypto.createSign('RSA-SHA' + bits);
        var sig = (signer.update(thing), signer.sign(privateKey, 'base64'));
        return fromBase64(sig);
    };
}
function createKeyVerifier(bits) {
    return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify('RSA-SHA' + bits);
        verifier.update(thing);
        return verifier.verify(publicKey, signature, 'base64');
    };
}
function createPSSKeySigner(bits) {
    return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto.createSign('RSA-SHA' + bits);
        var sig = (signer.update(thing), signer.sign({
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, 'base64'));
        return fromBase64(sig);
    };
}
function createPSSKeyVerifier(bits) {
    return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify('RSA-SHA' + bits);
        verifier.update(thing);
        return verifier.verify({
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, signature, 'base64');
    };
}
function createECDSASigner(bits) {
    var inner = createKeySigner(bits);
    return function sign() {
        var signature = inner.apply(null, arguments);
        signature = formatEcdsa.derToJose(signature, 'ES' + bits);
        return signature;
    };
}
function createECDSAVerifer(bits) {
    var inner = createKeyVerifier(bits);
    return function verify(thing, signature, publicKey) {
        signature = formatEcdsa.joseToDer(signature, 'ES' + bits).toString('base64');
        var result = inner(thing, signature, publicKey);
        return result;
    };
}
function createNoneSigner() {
    return function sign() {
        return '';
    };
}
function createNoneVerifier() {
    return function verify(thing, signature) {
        return signature === '';
    };
}
module.exports = function jwa(algorithm) {
    var signerFactories = {
        hs: createHmacSigner,
        rs: createKeySigner,
        ps: createPSSKeySigner,
        es: createECDSASigner,
        none: createNoneSigner
    };
    var verifierFactories = {
        hs: createHmacVerifier,
        rs: createKeyVerifier,
        ps: createPSSKeyVerifier,
        es: createECDSAVerifer,
        none: createNoneVerifier
    };
    var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
    if (!match) throw typeError(MSG_INVALID_ALGORITHM, algorithm);
    var algo = (match[1] || match[3]).toLowerCase();
    var bits = match[2];
    return {
        sign: signerFactories[algo](bits),
        verify: verifierFactories[algo](bits)
    };
};
}),
"[project]/node_modules/jws/lib/tostring.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*global module*/ var Buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").Buffer;
module.exports = function toString(obj) {
    if (typeof obj === 'string') return obj;
    if (typeof obj === 'number' || Buffer.isBuffer(obj)) return obj.toString();
    return JSON.stringify(obj);
};
}),
"[project]/node_modules/jws/lib/sign-stream.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*global module*/ var Buffer = __turbopack_context__.r("[project]/node_modules/safe-buffer/index.js [app-rsc] (ecmascript)").Buffer;
var DataStream = __turbopack_context__.r("[project]/node_modules/jws/lib/data-stream.js [app-rsc] (ecmascript)");
var jwa = __turbopack_context__.r("[project]/node_modules/jwa/index.js [app-rsc] (ecmascript)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
var toString = __turbopack_context__.r("[project]/node_modules/jws/lib/tostring.js [app-rsc] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
function base64url(string, encoding) {
    return Buffer.from(string, encoding).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function jwsSecuredInput(header, payload, encoding) {
    encoding = encoding || 'utf8';
    var encodedHeader = base64url(toString(header), 'binary');
    var encodedPayload = base64url(toString(payload), encoding);
    return util.format('%s.%s', encodedHeader, encodedPayload);
}
function jwsSign(opts) {
    var header = opts.header;
    var payload = opts.payload;
    var secretOrKey = opts.secret || opts.privateKey;
    var encoding = opts.encoding;
    var algo = jwa(header.alg);
    var securedInput = jwsSecuredInput(header, payload, encoding);
    var signature = algo.sign(securedInput, secretOrKey);
    return util.format('%s.%s', securedInput, signature);
}
function SignStream(opts) {
    var secret = opts.secret || opts.privateKey || opts.key;
    var secretStream = new DataStream(secret);
    this.readable = true;
    this.header = opts.header;
    this.encoding = opts.encoding;
    this.secret = this.privateKey = this.key = secretStream;
    this.payload = new DataStream(opts.payload);
    this.secret.once('close', (function() {
        if (!this.payload.writable && this.readable) this.sign();
    }).bind(this));
    this.payload.once('close', (function() {
        if (!this.secret.writable && this.readable) this.sign();
    }).bind(this));
}
util.inherits(SignStream, Stream);
SignStream.prototype.sign = function sign() {
    try {
        var signature = jwsSign({
            header: this.header,
            payload: this.payload.buffer,
            secret: this.secret.buffer,
            encoding: this.encoding
        });
        this.emit('done', signature);
        this.emit('data', signature);
        this.emit('end');
        this.readable = false;
        return signature;
    } catch (e) {
        this.readable = false;
        this.emit('error', e);
        this.emit('close');
    }
};
SignStream.sign = jwsSign;
module.exports = SignStream;
}),
"[project]/node_modules/jws/lib/verify-stream.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*global module*/ var Buffer = __turbopack_context__.r("[project]/node_modules/safe-buffer/index.js [app-rsc] (ecmascript)").Buffer;
var DataStream = __turbopack_context__.r("[project]/node_modules/jws/lib/data-stream.js [app-rsc] (ecmascript)");
var jwa = __turbopack_context__.r("[project]/node_modules/jwa/index.js [app-rsc] (ecmascript)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
var toString = __turbopack_context__.r("[project]/node_modules/jws/lib/tostring.js [app-rsc] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
function isObject(thing) {
    return Object.prototype.toString.call(thing) === '[object Object]';
}
function safeJsonParse(thing) {
    if (isObject(thing)) return thing;
    try {
        return JSON.parse(thing);
    } catch (e) {
        return undefined;
    }
}
function headerFromJWS(jwsSig) {
    var encodedHeader = jwsSig.split('.', 1)[0];
    return safeJsonParse(Buffer.from(encodedHeader, 'base64').toString('binary'));
}
function securedInputFromJWS(jwsSig) {
    return jwsSig.split('.', 2).join('.');
}
function signatureFromJWS(jwsSig) {
    return jwsSig.split('.')[2];
}
function payloadFromJWS(jwsSig, encoding) {
    encoding = encoding || 'utf8';
    var payload = jwsSig.split('.')[1];
    return Buffer.from(payload, 'base64').toString(encoding);
}
function isValidJws(string) {
    return JWS_REGEX.test(string) && !!headerFromJWS(string);
}
function jwsVerify(jwsSig, algorithm, secretOrKey) {
    if (!algorithm) {
        var err = new Error("Missing algorithm parameter for jws.verify");
        err.code = "MISSING_ALGORITHM";
        throw err;
    }
    jwsSig = toString(jwsSig);
    var signature = signatureFromJWS(jwsSig);
    var securedInput = securedInputFromJWS(jwsSig);
    var algo = jwa(algorithm);
    return algo.verify(securedInput, signature, secretOrKey);
}
function jwsDecode(jwsSig, opts) {
    opts = opts || {};
    jwsSig = toString(jwsSig);
    if (!isValidJws(jwsSig)) return null;
    var header = headerFromJWS(jwsSig);
    if (!header) return null;
    var payload = payloadFromJWS(jwsSig);
    if (header.typ === 'JWT' || opts.json) payload = JSON.parse(payload, opts.encoding);
    return {
        header: header,
        payload: payload,
        signature: signatureFromJWS(jwsSig)
    };
}
function VerifyStream(opts) {
    opts = opts || {};
    var secretOrKey = opts.secret || opts.publicKey || opts.key;
    var secretStream = new DataStream(secretOrKey);
    this.readable = true;
    this.algorithm = opts.algorithm;
    this.encoding = opts.encoding;
    this.secret = this.publicKey = this.key = secretStream;
    this.signature = new DataStream(opts.signature);
    this.secret.once('close', (function() {
        if (!this.signature.writable && this.readable) this.verify();
    }).bind(this));
    this.signature.once('close', (function() {
        if (!this.secret.writable && this.readable) this.verify();
    }).bind(this));
}
util.inherits(VerifyStream, Stream);
VerifyStream.prototype.verify = function verify() {
    try {
        var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
        var obj = jwsDecode(this.signature.buffer, this.encoding);
        this.emit('done', valid, obj);
        this.emit('data', valid);
        this.emit('end');
        this.readable = false;
        return valid;
    } catch (e) {
        this.readable = false;
        this.emit('error', e);
        this.emit('close');
    }
};
VerifyStream.decode = jwsDecode;
VerifyStream.isValid = isValidJws;
VerifyStream.verify = jwsVerify;
module.exports = VerifyStream;
}),
"[project]/node_modules/jws/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*global exports*/ var SignStream = __turbopack_context__.r("[project]/node_modules/jws/lib/sign-stream.js [app-rsc] (ecmascript)");
var VerifyStream = __turbopack_context__.r("[project]/node_modules/jws/lib/verify-stream.js [app-rsc] (ecmascript)");
var ALGORITHMS = [
    'HS256',
    'HS384',
    'HS512',
    'RS256',
    'RS384',
    'RS512',
    'PS256',
    'PS384',
    'PS512',
    'ES256',
    'ES384',
    'ES512'
];
exports.ALGORITHMS = ALGORITHMS;
exports.sign = SignStream.sign;
exports.verify = VerifyStream.verify;
exports.decode = VerifyStream.decode;
exports.isValid = VerifyStream.isValid;
exports.createSign = function createSign(opts) {
    return new SignStream(opts);
};
exports.createVerify = function createVerify(opts) {
    return new VerifyStream(opts);
};
}),
"[project]/node_modules/jsonwebtoken/decode.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var jws = __turbopack_context__.r("[project]/node_modules/jws/index.js [app-rsc] (ecmascript)");
module.exports = function(jwt, options) {
    options = options || {};
    var decoded = jws.decode(jwt, options);
    if (!decoded) {
        return null;
    }
    var payload = decoded.payload;
    //try parse the payload
    if (typeof payload === 'string') {
        try {
            var obj = JSON.parse(payload);
            if (obj !== null && typeof obj === 'object') {
                payload = obj;
            }
        } catch (e) {}
    }
    //return header if `complete` option is enabled.  header includes claims
    //such as `kid` and `alg` used to select the key within a JWKS needed to
    //verify the signature
    if (options.complete === true) {
        return {
            header: decoded.header,
            payload: payload,
            signature: decoded.signature
        };
    }
    return payload;
};
}),
"[project]/node_modules/jsonwebtoken/lib/JsonWebTokenError.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var JsonWebTokenError = function(message, error) {
    Error.call(this, message);
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }
    this.name = 'JsonWebTokenError';
    this.message = message;
    if (error) this.inner = error;
};
JsonWebTokenError.prototype = Object.create(Error.prototype);
JsonWebTokenError.prototype.constructor = JsonWebTokenError;
module.exports = JsonWebTokenError;
}),
"[project]/node_modules/jsonwebtoken/lib/NotBeforeError.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var JsonWebTokenError = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/JsonWebTokenError.js [app-rsc] (ecmascript)");
var NotBeforeError = function(message, date) {
    JsonWebTokenError.call(this, message);
    this.name = 'NotBeforeError';
    this.date = date;
};
NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);
NotBeforeError.prototype.constructor = NotBeforeError;
module.exports = NotBeforeError;
}),
"[project]/node_modules/jsonwebtoken/lib/TokenExpiredError.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var JsonWebTokenError = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/JsonWebTokenError.js [app-rsc] (ecmascript)");
var TokenExpiredError = function(message, expiredAt) {
    JsonWebTokenError.call(this, message);
    this.name = 'TokenExpiredError';
    this.expiredAt = expiredAt;
};
TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);
TokenExpiredError.prototype.constructor = TokenExpiredError;
module.exports = TokenExpiredError;
}),
"[project]/node_modules/ms/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/node_modules/jsonwebtoken/lib/timespan.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var ms = __turbopack_context__.r("[project]/node_modules/ms/index.js [app-rsc] (ecmascript)");
module.exports = function(time, iat) {
    var timestamp = iat || Math.floor(Date.now() / 1000);
    if (typeof time === 'string') {
        var milliseconds = ms(time);
        if (typeof milliseconds === 'undefined') {
            return;
        }
        return Math.floor(timestamp + milliseconds / 1000);
    } else if (typeof time === 'number') {
        return timestamp + time;
    } else {
        return;
    }
};
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/internal/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0';
const MAX_LENGTH = 256;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */ 9007199254740991;
// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16;
// Max safe length for a build identifier. The max length minus 6 characters for
// the shortest version with a build 0.0.0+BUILD.
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
const RELEASE_TYPES = [
    'major',
    'premajor',
    'minor',
    'preminor',
    'patch',
    'prepatch',
    'prerelease'
];
module.exports = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 0b001,
    FLAG_LOOSE: 0b010
};
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/internal/debug.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const debug = typeof process === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args)=>console.error('SEMVER', ...args) : ()=>{};
module.exports = debug;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/internal/re.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_LENGTH } = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/constants.js [app-rsc] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/debug.js [app-rsc] (ecmascript)");
exports = module.exports = {};
// The actual regexps go on exports.re
const re = exports.re = [];
const safeRe = exports.safeRe = [];
const src = exports.src = [];
const safeSrc = exports.safeSrc = [];
const t = exports.t = {};
let R = 0;
const LETTERDASHNUMBER = '[a-zA-Z0-9-]';
// Replace some greedy regex tokens to prevent regex dos issues. These regex are
// used internally via the safeRe object since all inputs in this library get
// normalized first to trim and collapse all extra whitespace. The original
// regexes are exported for userland consumption and lower level usage. A
// future breaking change could export the safer regex only with a note that
// all input should have extra whitespace removed.
const safeRegexReplacements = [
    [
        '\\s',
        1
    ],
    [
        '\\d',
        MAX_LENGTH
    ],
    [
        LETTERDASHNUMBER,
        MAX_SAFE_BUILD_LENGTH
    ]
];
const makeSafeRegex = (value)=>{
    for (const [token, max] of safeRegexReplacements){
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
    }
    return value;
};
const createToken = (name, value, isGlobal)=>{
    const safe = makeSafeRegex(value);
    const index = R++;
    debug(name, index, value);
    t[name] = index;
    src[index] = value;
    safeSrc[index] = safe;
    re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
    safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined);
};
// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.
createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
createToken('NUMERICIDENTIFIERLOOSE', '\\d+');
// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.
createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
// ## Main Version
// Three dot-separated numeric identifiers.
createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})`);
createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.
// Non-numberic identifiers include numberic identifiers but can be longer.
// Therefore non-numberic identifiers must go first.
createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.
createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.
createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`);
// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.
createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.
createToken('FULLPLAIN', `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
createToken('FULL', `^${src[t.FULLPLAIN]}$`);
// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);
createToken('GTLT', '((?:<|>)?=?)');
// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCEPLAIN', `${'(^|[^\\d])' + '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
createToken('COERCE', `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
createToken('COERCEFULL', src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?` + `(?:${src[t.BUILD]})?` + `(?:$|[^\\d])`);
createToken('COERCERTL', src[t.COERCE], true);
createToken('COERCERTLFULL', src[t.COERCEFULL], true);
// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)');
createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = '$1~';
createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)');
createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
exports.caretTrimReplace = '$1^';
createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = '$1$2$3';
// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAIN]})` + `\\s*$`);
createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAINLOOSE]})` + `\\s*$`);
// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*');
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/internal/parse-options.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// parse out just the options we care about
const looseOption = Object.freeze({
    loose: true
});
const emptyOpts = Object.freeze({});
const parseOptions = (options)=>{
    if (!options) {
        return emptyOpts;
    }
    if (typeof options !== 'object') {
        return looseOption;
    }
    return options;
};
module.exports = parseOptions;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/internal/identifiers.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const numeric = /^[0-9]+$/;
const compareIdentifiers = (a, b)=>{
    if (typeof a === 'number' && typeof b === 'number') {
        return a === b ? 0 : a < b ? -1 : 1;
    }
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
        a = +a;
        b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b)=>compareIdentifiers(b, a);
module.exports = {
    compareIdentifiers,
    rcompareIdentifiers
};
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const debug = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/debug.js [app-rsc] (ecmascript)");
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/constants.js [app-rsc] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/re.js [app-rsc] (ecmascript)");
const parseOptions = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/parse-options.js [app-rsc] (ecmascript)");
const { compareIdentifiers } = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/identifiers.js [app-rsc] (ecmascript)");
class SemVer {
    constructor(version, options){
        options = parseOptions(options);
        if (version instanceof SemVer) {
            if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
                return version;
            } else {
                version = version.version;
            }
        } else if (typeof version !== 'string') {
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
            throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
        }
        debug('SemVer', version, options);
        this.options = options;
        this.loose = !!options.loose;
        // this isn't actually relevant for versions, but keep it so that we
        // don't run into trouble passing this.options around.
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
            throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        // these are actually numbers
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
            throw new TypeError('Invalid major version');
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
            throw new TypeError('Invalid minor version');
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
            throw new TypeError('Invalid patch version');
        }
        // numberify any prerelease numeric ids
        if (!m[4]) {
            this.prerelease = [];
        } else {
            this.prerelease = m[4].split('.').map((id)=>{
                if (/^[0-9]+$/.test(id)) {
                    const num = +id;
                    if (num >= 0 && num < MAX_SAFE_INTEGER) {
                        return num;
                    }
                }
                return id;
            });
        }
        this.build = m[5] ? m[5].split('.') : [];
        this.format();
    }
    format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
            this.version += `-${this.prerelease.join('.')}`;
        }
        return this.version;
    }
    toString() {
        return this.version;
    }
    compare(other) {
        debug('SemVer.compare', this.version, this.options, other);
        if (!(other instanceof SemVer)) {
            if (typeof other === 'string' && other === this.version) {
                return 0;
            }
            other = new SemVer(other, this.options);
        }
        if (other.version === this.version) {
            return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        if (this.major < other.major) {
            return -1;
        }
        if (this.major > other.major) {
            return 1;
        }
        if (this.minor < other.minor) {
            return -1;
        }
        if (this.minor > other.minor) {
            return 1;
        }
        if (this.patch < other.patch) {
            return -1;
        }
        if (this.patch > other.patch) {
            return 1;
        }
        return 0;
    }
    comparePre(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        // NOT having a prerelease is > having one
        if (this.prerelease.length && !other.prerelease.length) {
            return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
            return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
            return 0;
        }
        let i = 0;
        do {
            const a = this.prerelease[i];
            const b = other.prerelease[i];
            debug('prerelease compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    compareBuild(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        let i = 0;
        do {
            const a = this.build[i];
            const b = other.build[i];
            debug('build compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier, identifierBase) {
        if (release.startsWith('pre')) {
            if (!identifier && identifierBase === false) {
                throw new Error('invalid increment argument: identifier is empty');
            }
            // Avoid an invalid semver results
            if (identifier) {
                const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
                if (!match || match[1] !== identifier) {
                    throw new Error(`invalid identifier: ${identifier}`);
                }
            }
        }
        switch(release){
            case 'premajor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor = 0;
                this.major++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'preminor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'prepatch':
                // If this is already a prerelease, it will bump to the next version
                // drop any prereleases that might already exist, since they are not
                // relevant at this point.
                this.prerelease.length = 0;
                this.inc('patch', identifier, identifierBase);
                this.inc('pre', identifier, identifierBase);
                break;
            // If the input is a non-prerelease version, this acts the same as
            // prepatch.
            case 'prerelease':
                if (this.prerelease.length === 0) {
                    this.inc('patch', identifier, identifierBase);
                }
                this.inc('pre', identifier, identifierBase);
                break;
            case 'release':
                if (this.prerelease.length === 0) {
                    throw new Error(`version ${this.raw} is not a prerelease`);
                }
                this.prerelease.length = 0;
                break;
            case 'major':
                // If this is a pre-major version, bump up to the same major version.
                // Otherwise increment major.
                // 1.0.0-5 bumps to 1.0.0
                // 1.1.0 bumps to 2.0.0
                if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                    this.major++;
                }
                this.minor = 0;
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'minor':
                // If this is a pre-minor version, bump up to the same minor version.
                // Otherwise increment minor.
                // 1.2.0-5 bumps to 1.2.0
                // 1.2.1 bumps to 1.3.0
                if (this.patch !== 0 || this.prerelease.length === 0) {
                    this.minor++;
                }
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'patch':
                // If this is not a pre-release version, it will increment the patch.
                // If it is a pre-release it will bump up to the same patch version.
                // 1.2.0-5 patches to 1.2.0
                // 1.2.0 patches to 1.2.1
                if (this.prerelease.length === 0) {
                    this.patch++;
                }
                this.prerelease = [];
                break;
            // This probably shouldn't be used publicly.
            // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
            case 'pre':
                {
                    const base = Number(identifierBase) ? 1 : 0;
                    if (this.prerelease.length === 0) {
                        this.prerelease = [
                            base
                        ];
                    } else {
                        let i = this.prerelease.length;
                        while(--i >= 0){
                            if (typeof this.prerelease[i] === 'number') {
                                this.prerelease[i]++;
                                i = -2;
                            }
                        }
                        if (i === -1) {
                            // didn't increment anything
                            if (identifier === this.prerelease.join('.') && identifierBase === false) {
                                throw new Error('invalid increment argument: identifier already exists');
                            }
                            this.prerelease.push(base);
                        }
                    }
                    if (identifier) {
                        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                        let prerelease = [
                            identifier,
                            base
                        ];
                        if (identifierBase === false) {
                            prerelease = [
                                identifier
                            ];
                        }
                        if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                            if (isNaN(this.prerelease[1])) {
                                this.prerelease = prerelease;
                            }
                        } else {
                            this.prerelease = prerelease;
                        }
                    }
                    break;
                }
            default:
                throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
            this.raw += `+${this.build.join('.')}`;
        }
        return this;
    }
}
module.exports = SemVer;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const parse = (version, options, throwErrors = false)=>{
    if (version instanceof SemVer) {
        return version;
    }
    try {
        return new SemVer(version, options);
    } catch (er) {
        if (!throwErrors) {
            return null;
        }
        throw er;
    }
};
module.exports = parse;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/valid.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const valid = (version, options)=>{
    const v = parse(version, options);
    return v ? v.version : null;
};
module.exports = valid;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/clean.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const clean = (version, options)=>{
    const s = parse(version.trim().replace(/^[=v]+/, ''), options);
    return s ? s.version : null;
};
module.exports = clean;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/inc.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const inc = (version, release, options, identifier, identifierBase)=>{
    if (typeof options === 'string') {
        identifierBase = identifier;
        identifier = options;
        options = undefined;
    }
    try {
        return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier, identifierBase).version;
    } catch (er) {
        return null;
    }
};
module.exports = inc;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/diff.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const diff = (version1, version2)=>{
    const v1 = parse(version1, null, true);
    const v2 = parse(version2, null, true);
    const comparison = v1.compare(v2);
    if (comparison === 0) {
        return null;
    }
    const v1Higher = comparison > 0;
    const highVersion = v1Higher ? v1 : v2;
    const lowVersion = v1Higher ? v2 : v1;
    const highHasPre = !!highVersion.prerelease.length;
    const lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
        // Going from prerelease -> no prerelease requires some special casing
        // If the low version has only a major, then it will always be a major
        // Some examples:
        // 1.0.0-1 -> 1.0.0
        // 1.0.0-1 -> 1.1.1
        // 1.0.0-1 -> 2.0.0
        if (!lowVersion.patch && !lowVersion.minor) {
            return 'major';
        }
        // If the main part has no difference
        if (lowVersion.compareMain(highVersion) === 0) {
            if (lowVersion.minor && !lowVersion.patch) {
                return 'minor';
            }
            return 'patch';
        }
    }
    // add the `pre` prefix if we are going to a prerelease version
    const prefix = highHasPre ? 'pre' : '';
    if (v1.major !== v2.major) {
        return prefix + 'major';
    }
    if (v1.minor !== v2.minor) {
        return prefix + 'minor';
    }
    if (v1.patch !== v2.patch) {
        return prefix + 'patch';
    }
    // high and low are preleases
    return 'prerelease';
};
module.exports = diff;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/major.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const major = (a, loose)=>new SemVer(a, loose).major;
module.exports = major;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/minor.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const minor = (a, loose)=>new SemVer(a, loose).minor;
module.exports = minor;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/patch.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const patch = (a, loose)=>new SemVer(a, loose).patch;
module.exports = patch;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/prerelease.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const prerelease = (version, options)=>{
    const parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};
module.exports = prerelease;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const compare = (a, b, loose)=>new SemVer(a, loose).compare(new SemVer(b, loose));
module.exports = compare;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/rcompare.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const rcompare = (a, b, loose)=>compare(b, a, loose);
module.exports = rcompare;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare-loose.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const compareLoose = (a, b)=>compare(a, b, true);
module.exports = compareLoose;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare-build.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const compareBuild = (a, b, loose)=>{
    const versionA = new SemVer(a, loose);
    const versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
module.exports = compareBuild;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/sort.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compareBuild = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare-build.js [app-rsc] (ecmascript)");
const sort = (list, loose)=>list.sort((a, b)=>compareBuild(a, b, loose));
module.exports = sort;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/rsort.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compareBuild = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare-build.js [app-rsc] (ecmascript)");
const rsort = (list, loose)=>list.sort((a, b)=>compareBuild(b, a, loose));
module.exports = rsort;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/gt.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const gt = (a, b, loose)=>compare(a, b, loose) > 0;
module.exports = gt;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/lt.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const lt = (a, b, loose)=>compare(a, b, loose) < 0;
module.exports = lt;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/eq.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const eq = (a, b, loose)=>compare(a, b, loose) === 0;
module.exports = eq;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/neq.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const neq = (a, b, loose)=>compare(a, b, loose) !== 0;
module.exports = neq;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/gte.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const gte = (a, b, loose)=>compare(a, b, loose) >= 0;
module.exports = gte;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/lte.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const lte = (a, b, loose)=>compare(a, b, loose) <= 0;
module.exports = lte;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/cmp.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const eq = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/eq.js [app-rsc] (ecmascript)");
const neq = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/neq.js [app-rsc] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/gt.js [app-rsc] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/gte.js [app-rsc] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/lt.js [app-rsc] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/lte.js [app-rsc] (ecmascript)");
const cmp = (a, op, b, loose)=>{
    switch(op){
        case '===':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a === b;
        case '!==':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a !== b;
        case '':
        case '=':
        case '==':
            return eq(a, b, loose);
        case '!=':
            return neq(a, b, loose);
        case '>':
            return gt(a, b, loose);
        case '>=':
            return gte(a, b, loose);
        case '<':
            return lt(a, b, loose);
        case '<=':
            return lte(a, b, loose);
        default:
            throw new TypeError(`Invalid operator: ${op}`);
    }
};
module.exports = cmp;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/coerce.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const parse = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/re.js [app-rsc] (ecmascript)");
const coerce = (version, options)=>{
    if (version instanceof SemVer) {
        return version;
    }
    if (typeof version === 'number') {
        version = String(version);
    }
    if (typeof version !== 'string') {
        return null;
    }
    options = options || {};
    let match = null;
    if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
    } else {
        // Find the right-most coercible string that does not share
        // a terminus with a more left-ward coercible string.
        // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
        // With includePrerelease option set, '1.2.3.4-rc' wants to coerce '2.3.4-rc', not '2.3.4'
        //
        // Walk through the string checking with a /g regexp
        // Manually set the index so as to pick up overlapping matches.
        // Stop when we get a match that ends at the string end, since no
        // coercible string can be more right-ward without the same terminus.
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)){
            if (!match || next.index + next[0].length !== match.index + match[0].length) {
                match = next;
            }
            coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        // leave it in a clean state
        coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) {
        return null;
    }
    const major = match[2];
    const minor = match[3] || '0';
    const patch = match[4] || '0';
    const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : '';
    const build = options.includePrerelease && match[6] ? `+${match[6]}` : '';
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
};
module.exports = coerce;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/internal/lrucache.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

class LRUCache {
    constructor(){
        this.max = 1000;
        this.map = new Map();
    }
    get(key) {
        const value = this.map.get(key);
        if (value === undefined) {
            return undefined;
        } else {
            // Remove the key from the map and add it to the end
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        }
    }
    delete(key) {
        return this.map.delete(key);
    }
    set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== undefined) {
            // If cache is full, delete the least recently used item
            if (this.map.size >= this.max) {
                const firstKey = this.map.keys().next().value;
                this.delete(firstKey);
            }
            this.map.set(key, value);
        }
        return this;
    }
}
module.exports = LRUCache;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/classes/range.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SPACE_CHARACTERS = /\s+/g;
// hoisted class for cyclic dependency
class Range {
    constructor(range, options){
        options = parseOptions(options);
        if (range instanceof Range) {
            if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
                return range;
            } else {
                return new Range(range.raw, options);
            }
        }
        if (range instanceof Comparator) {
            // just put it in the set and return
            this.raw = range.value;
            this.set = [
                [
                    range
                ]
            ];
            this.formatted = undefined;
            return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        // First reduce all whitespace as much as possible so we do not have to rely
        // on potentially slow regexes like \s*. This is then stored and used for
        // future error messages as well.
        this.raw = range.trim().replace(SPACE_CHARACTERS, ' ');
        // First, split on ||
        this.set = this.raw.split('||')// map the range to a 2d array of comparators
        .map((r)=>this.parseRange(r.trim()))// throw out any comparator lists that are empty
        // this generally means that it was not a valid range, which is allowed
        // in loose mode, but will still throw if the WHOLE range is invalid.
        .filter((c)=>c.length);
        if (!this.set.length) {
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        // if we have any that are not the null set, throw out null sets.
        if (this.set.length > 1) {
            // keep the first one, in case they're all null sets
            const first = this.set[0];
            this.set = this.set.filter((c)=>!isNullSet(c[0]));
            if (this.set.length === 0) {
                this.set = [
                    first
                ];
            } else if (this.set.length > 1) {
                // if we have any that are *, then the range is just *
                for (const c of this.set){
                    if (c.length === 1 && isAny(c[0])) {
                        this.set = [
                            c
                        ];
                        break;
                    }
                }
            }
        }
        this.formatted = undefined;
    }
    get range() {
        if (this.formatted === undefined) {
            this.formatted = '';
            for(let i = 0; i < this.set.length; i++){
                if (i > 0) {
                    this.formatted += '||';
                }
                const comps = this.set[i];
                for(let k = 0; k < comps.length; k++){
                    if (k > 0) {
                        this.formatted += ' ';
                    }
                    this.formatted += comps[k].toString().trim();
                }
            }
        }
        return this.formatted;
    }
    format() {
        return this.range;
    }
    toString() {
        return this.range;
    }
    parseRange(range) {
        // memoize range parsing for performance.
        // this is a very hot path, and fully deterministic.
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ':' + range;
        const cached = cache.get(memoKey);
        if (cached) {
            return cached;
        }
        const loose = this.options.loose;
        // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug('hyphen replace', range);
        // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug('comparator trim', range);
        // `~ 1.2.3` => `~1.2.3`
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug('tilde trim', range);
        // `^ 1.2.3` => `^1.2.3`
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug('caret trim', range);
        // At this point, the range is completely trimmed and
        // ready to be split into comparators.
        let rangeList = range.split(' ').map((comp)=>parseComparator(comp, this.options)).join(' ').split(/\s+/)// >=0.0.0 is equivalent to *
        .map((comp)=>replaceGTE0(comp, this.options));
        if (loose) {
            // in loose mode, throw out any that are not valid comparators
            rangeList = rangeList.filter((comp)=>{
                debug('loose invalid filter', comp, this.options);
                return !!comp.match(re[t.COMPARATORLOOSE]);
            });
        }
        debug('range list', rangeList);
        // if any comparators are the null set, then replace with JUST null set
        // if more than one comparator, remove any * comparators
        // also, don't include the same comparator more than once
        const rangeMap = new Map();
        const comparators = rangeList.map((comp)=>new Comparator(comp, this.options));
        for (const comp of comparators){
            if (isNullSet(comp)) {
                return [
                    comp
                ];
            }
            rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has('')) {
            rangeMap.delete('');
        }
        const result = [
            ...rangeMap.values()
        ];
        cache.set(memoKey, result);
        return result;
    }
    intersects(range, options) {
        if (!(range instanceof Range)) {
            throw new TypeError('a Range is required');
        }
        return this.set.some((thisComparators)=>{
            return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators)=>{
                return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator)=>{
                    return rangeComparators.every((rangeComparator)=>{
                        return thisComparator.intersects(rangeComparator, options);
                    });
                });
            });
        });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
        if (!version) {
            return false;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        for(let i = 0; i < this.set.length; i++){
            if (testSet(this.set[i], version, this.options)) {
                return true;
            }
        }
        return false;
    }
}
module.exports = Range;
const LRU = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/lrucache.js [app-rsc] (ecmascript)");
const cache = new LRU();
const parseOptions = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/parse-options.js [app-rsc] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/comparator.js [app-rsc] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/debug.js [app-rsc] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const { safeRe: re, t, comparatorTrimReplace, tildeTrimReplace, caretTrimReplace } = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/re.js [app-rsc] (ecmascript)");
const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/constants.js [app-rsc] (ecmascript)");
const isNullSet = (c)=>c.value === '<0.0.0-0';
const isAny = (c)=>c.value === '';
// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options)=>{
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while(result && remainingComparators.length){
        result = remainingComparators.every((otherComparator)=>{
            return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
    }
    return result;
};
// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options)=>{
    comp = comp.replace(re[t.BUILD], '');
    debug('comp', comp, options);
    comp = replaceCarets(comp, options);
    debug('caret', comp);
    comp = replaceTildes(comp, options);
    debug('tildes', comp);
    comp = replaceXRanges(comp, options);
    debug('xrange', comp);
    comp = replaceStars(comp, options);
    debug('stars', comp);
    return comp;
};
const isX = (id)=>!id || id.toLowerCase() === 'x' || id === '*';
// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
// ~0.0.1 --> >=0.0.1 <0.1.0-0
const replaceTildes = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceTilde(c, options)).join(' ');
};
const replaceTilde = (comp, options)=>{
    const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('tilde', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            // ~1.2 == >=1.2.0 <1.3.0-0
            ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
            debug('replaceTilde pr', pr);
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
            // ~1.2.3 == >=1.2.3 <1.3.0-0
            ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug('tilde return', ret);
        return ret;
    });
};
// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
// ^0.0.1 --> >=0.0.1 <0.0.2-0
// ^0.1.0 --> >=0.1.0 <0.2.0-0
const replaceCarets = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceCaret(c, options)).join(' ');
};
const replaceCaret = (comp, options)=>{
    debug('caret', comp, options);
    const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
    const z = options.includePrerelease ? '-0' : '';
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('caret', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            if (M === '0') {
                ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
            } else {
                ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
            }
        } else if (pr) {
            debug('replaceCaret pr', pr);
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
            }
        } else {
            debug('no pr');
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
            }
        }
        debug('caret return', ret);
        return ret;
    });
};
const replaceXRanges = (comp, options)=>{
    debug('replaceXRanges', comp, options);
    return comp.split(/\s+/).map((c)=>replaceXRange(c, options)).join(' ');
};
const replaceXRange = (comp, options)=>{
    comp = comp.trim();
    const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr)=>{
        debug('xRange', comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === '=' && anyX) {
            gtlt = '';
        }
        // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value
        pr = options.includePrerelease ? '-0' : '';
        if (xM) {
            if (gtlt === '>' || gtlt === '<') {
                // nothing is allowed
                ret = '<0.0.0-0';
            } else {
                // nothing is forbidden
                ret = '*';
            }
        } else if (gtlt && anyX) {
            // we know patch is an x, because we have any x at all.
            // replace X with 0
            if (xm) {
                m = 0;
            }
            p = 0;
            if (gtlt === '>') {
                // >1 => >=2.0.0
                // >1.2 => >=1.3.0
                gtlt = '>=';
                if (xm) {
                    M = +M + 1;
                    m = 0;
                    p = 0;
                } else {
                    m = +m + 1;
                    p = 0;
                }
            } else if (gtlt === '<=') {
                // <=0.7.x is actually <0.8.0, since any 0.7.x should
                // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                gtlt = '<';
                if (xm) {
                    M = +M + 1;
                } else {
                    m = +m + 1;
                }
            }
            if (gtlt === '<') {
                pr = '-0';
            }
            ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
            ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
            ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug('xRange return', ret);
        return ret;
    });
};
// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options)=>{
    debug('replaceStars', comp, options);
    // Looseness is ignored here.  star is always as loose as it gets!
    return comp.trim().replace(re[t.STAR], '');
};
const replaceGTE0 = (comp, options)=>{
    debug('replaceGTE0', comp, options);
    return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '');
};
// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
// TODO build?
const hyphenReplace = (incPr)=>($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr)=>{
        if (isX(fM)) {
            from = '';
        } else if (isX(fm)) {
            from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
        } else if (isX(fp)) {
            from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
        } else if (fpr) {
            from = `>=${from}`;
        } else {
            from = `>=${from}${incPr ? '-0' : ''}`;
        }
        if (isX(tM)) {
            to = '';
        } else if (isX(tm)) {
            to = `<${+tM + 1}.0.0-0`;
        } else if (isX(tp)) {
            to = `<${tM}.${+tm + 1}.0-0`;
        } else if (tpr) {
            to = `<=${tM}.${tm}.${tp}-${tpr}`;
        } else if (incPr) {
            to = `<${tM}.${tm}.${+tp + 1}-0`;
        } else {
            to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
    };
const testSet = (set, version, options)=>{
    for(let i = 0; i < set.length; i++){
        if (!set[i].test(version)) {
            return false;
        }
    }
    if (version.prerelease.length && !options.includePrerelease) {
        // Find the set of versions that are allowed to have prereleases
        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
        // That should allow `1.2.3-pr.2` to pass.
        // However, `1.2.4-alpha.notready` should NOT be allowed,
        // even though it's within the range set by the comparators.
        for(let i = 0; i < set.length; i++){
            debug(set[i].semver);
            if (set[i].semver === Comparator.ANY) {
                continue;
            }
            if (set[i].semver.prerelease.length > 0) {
                const allowed = set[i].semver;
                if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
                    return true;
                }
            }
        }
        // Version has a -pre, but it's not one of the ones we like.
        return false;
    }
    return true;
};
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/classes/comparator.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const ANY = Symbol('SemVer ANY');
// hoisted class for cyclic dependency
class Comparator {
    static get ANY() {
        return ANY;
    }
    constructor(comp, options){
        options = parseOptions(options);
        if (comp instanceof Comparator) {
            if (comp.loose === !!options.loose) {
                return comp;
            } else {
                comp = comp.value;
            }
        }
        comp = comp.trim().split(/\s+/).join(' ');
        debug('comparator', comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
            this.value = '';
        } else {
            this.value = this.operator + this.semver.version;
        }
        debug('comp', this);
    }
    parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
            throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== undefined ? m[1] : '';
        if (this.operator === '=') {
            this.operator = '';
        }
        // if it literally is just '>' or '' then allow anything.
        if (!m[2]) {
            this.semver = ANY;
        } else {
            this.semver = new SemVer(m[2], this.options.loose);
        }
    }
    toString() {
        return this.value;
    }
    test(version) {
        debug('Comparator.test', version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
            return true;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        return cmp(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
        if (!(comp instanceof Comparator)) {
            throw new TypeError('a Comparator is required');
        }
        if (this.operator === '') {
            if (this.value === '') {
                return true;
            }
            return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === '') {
            if (comp.value === '') {
                return true;
            }
            return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        // Special cases where nothing can possibly be lower
        if (options.includePrerelease && (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
            return false;
        }
        if (!options.includePrerelease && (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
            return false;
        }
        // Same direction increasing (> or >=)
        if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
            return true;
        }
        // Same direction decreasing (< or <=)
        if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
            return true;
        }
        // same SemVer and both sides are inclusive (<= or >=)
        if (this.semver.version === comp.semver.version && this.operator.includes('=') && comp.operator.includes('=')) {
            return true;
        }
        // opposite directions less than
        if (cmp(this.semver, '<', comp.semver, options) && this.operator.startsWith('>') && comp.operator.startsWith('<')) {
            return true;
        }
        // opposite directions greater than
        if (cmp(this.semver, '>', comp.semver, options) && this.operator.startsWith('<') && comp.operator.startsWith('>')) {
            return true;
        }
        return false;
    }
}
module.exports = Comparator;
const parseOptions = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/parse-options.js [app-rsc] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/re.js [app-rsc] (ecmascript)");
const cmp = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/cmp.js [app-rsc] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/debug.js [app-rsc] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/functions/satisfies.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const satisfies = (version, range, options)=>{
    try {
        range = new Range(range, options);
    } catch (er) {
        return false;
    }
    return range.test(version);
};
module.exports = satisfies;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/to-comparators.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
// Mostly just for testing and legacy API reasons
const toComparators = (range, options)=>new Range(range, options).set.map((comp)=>comp.map((c)=>c.value).join(' ').trim().split(' '));
module.exports = toComparators;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/max-satisfying.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const maxSatisfying = (versions, range, options)=>{
    let max = null;
    let maxSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!max || maxSV.compare(v) === -1) {
                // compare(max, v, true)
                max = v;
                maxSV = new SemVer(max, options);
            }
        }
    });
    return max;
};
module.exports = maxSatisfying;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/min-satisfying.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const minSatisfying = (versions, range, options)=>{
    let min = null;
    let minSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!min || minSV.compare(v) === 1) {
                // compare(min, v, true)
                min = v;
                minSV = new SemVer(min, options);
            }
        }
    });
    return min;
};
module.exports = minSatisfying;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/min-version.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/gt.js [app-rsc] (ecmascript)");
const minVersion = (range, loose)=>{
    range = new Range(range, loose);
    let minver = new SemVer('0.0.0');
    if (range.test(minver)) {
        return minver;
    }
    minver = new SemVer('0.0.0-0');
    if (range.test(minver)) {
        return minver;
    }
    minver = null;
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator)=>{
            // Clone to avoid manipulating the comparator's semver object.
            const compver = new SemVer(comparator.semver.version);
            switch(comparator.operator){
                case '>':
                    if (compver.prerelease.length === 0) {
                        compver.patch++;
                    } else {
                        compver.prerelease.push(0);
                    }
                    compver.raw = compver.format();
                /* fallthrough */ case '':
                case '>=':
                    if (!setMin || gt(compver, setMin)) {
                        setMin = compver;
                    }
                    break;
                case '<':
                case '<=':
                    break;
                /* istanbul ignore next */ default:
                    throw new Error(`Unexpected operation: ${comparator.operator}`);
            }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
            minver = setMin;
        }
    }
    if (minver && range.test(minver)) {
        return minver;
    }
    return null;
};
module.exports = minVersion;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/valid.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const validRange = (range, options)=>{
    try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return new Range(range, options).range || '*';
    } catch (er) {
        return null;
    }
};
module.exports = validRange;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/outside.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/comparator.js [app-rsc] (ecmascript)");
const { ANY } = Comparator;
const Range = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const satisfies = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/satisfies.js [app-rsc] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/gt.js [app-rsc] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/lt.js [app-rsc] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/lte.js [app-rsc] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/gte.js [app-rsc] (ecmascript)");
const outside = (version, range, hilo, options)=>{
    version = new SemVer(version, options);
    range = new Range(range, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch(hilo){
        case '>':
            gtfn = gt;
            ltefn = lte;
            ltfn = lt;
            comp = '>';
            ecomp = '>=';
            break;
        case '<':
            gtfn = lt;
            ltefn = gte;
            ltfn = gt;
            comp = '<';
            ecomp = '<=';
            break;
        default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    // If it satisfies the range it is not outside
    if (satisfies(version, range, options)) {
        return false;
    }
    // From now on, variable terms are as if we're in "gtr" mode.
    // but note that everything is flipped for the "ltr" function.
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator)=>{
            if (comparator.semver === ANY) {
                comparator = new Comparator('>=0.0.0');
            }
            high = high || comparator;
            low = low || comparator;
            if (gtfn(comparator.semver, high.semver, options)) {
                high = comparator;
            } else if (ltfn(comparator.semver, low.semver, options)) {
                low = comparator;
            }
        });
        // If the edge version comparator has a operator then our version
        // isn't outside it
        if (high.operator === comp || high.operator === ecomp) {
            return false;
        }
        // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
            return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
            return false;
        }
    }
    return true;
};
module.exports = outside;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/gtr.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Determine if version is greater than all the versions possible in the range.
const outside = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/outside.js [app-rsc] (ecmascript)");
const gtr = (version, range, options)=>outside(version, range, '>', options);
module.exports = gtr;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/ltr.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const outside = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/outside.js [app-rsc] (ecmascript)");
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options)=>outside(version, range, '<', options);
module.exports = ltr;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/intersects.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const intersects = (r1, r2, options)=>{
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
};
module.exports = intersects;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/simplify.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/satisfies.js [app-rsc] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
module.exports = (versions, range, options)=>{
    const set = [];
    let first = null;
    let prev = null;
    const v = versions.sort((a, b)=>compare(a, b, options));
    for (const version of v){
        const included = satisfies(version, range, options);
        if (included) {
            prev = version;
            if (!first) {
                first = version;
            }
        } else {
            if (prev) {
                set.push([
                    first,
                    prev
                ]);
            }
            prev = null;
            first = null;
        }
    }
    if (first) {
        set.push([
            first,
            null
        ]);
    }
    const ranges = [];
    for (const [min, max] of set){
        if (min === max) {
            ranges.push(min);
        } else if (!max && min === v[0]) {
            ranges.push('*');
        } else if (!max) {
            ranges.push(`>=${min}`);
        } else if (min === v[0]) {
            ranges.push(`<=${max}`);
        } else {
            ranges.push(`${min} - ${max}`);
        }
    }
    const simplified = ranges.join(' || ');
    const original = typeof range.raw === 'string' ? range.raw : String(range);
    return simplified.length < original.length ? simplified : range;
};
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/subset.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/comparator.js [app-rsc] (ecmascript)");
const { ANY } = Comparator;
const satisfies = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/satisfies.js [app-rsc] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true
const subset = (sub, dom, options = {})=>{
    if (sub === dom) {
        return true;
    }
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (const simpleSub of sub.set){
        for (const simpleDom of dom.set){
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
                continue OUTER;
            }
        }
        // the null set is a subset of everything, but null simple ranges in
        // a complex range should be ignored.  so if we saw a non-null range,
        // then we know this isn't a subset, but if EVERY simple range was null,
        // then it is a subset.
        if (sawNonNull) {
            return false;
        }
    }
    return true;
};
const minimumVersionWithPreRelease = [
    new Comparator('>=0.0.0-0')
];
const minimumVersion = [
    new Comparator('>=0.0.0')
];
const simpleSubset = (sub, dom, options)=>{
    if (sub === dom) {
        return true;
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
            return true;
        } else if (options.includePrerelease) {
            sub = minimumVersionWithPreRelease;
        } else {
            sub = minimumVersion;
        }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
            return true;
        } else {
            dom = minimumVersion;
        }
    }
    const eqSet = new Set();
    let gt, lt;
    for (const c of sub){
        if (c.operator === '>' || c.operator === '>=') {
            gt = higherGT(gt, c, options);
        } else if (c.operator === '<' || c.operator === '<=') {
            lt = lowerLT(lt, c, options);
        } else {
            eqSet.add(c.semver);
        }
    }
    if (eqSet.size > 1) {
        return null;
    }
    let gtltComp;
    if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
            return null;
        } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
            return null;
        }
    }
    // will iterate one or zero times
    for (const eq of eqSet){
        if (gt && !satisfies(eq, String(gt), options)) {
            return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
            return null;
        }
        for (const c of dom){
            if (!satisfies(eq, String(c), options)) {
                return false;
            }
        }
        return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    // if the subset has a prerelease, we need a comparator in the superset
    // with the same tuple and a prerelease, or it's not a subset
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    // exception: <1.2.3-0 is the same as <1.2.3
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
    }
    for (const c of dom){
        hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>=';
        hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<=';
        if (gt) {
            if (needDomGTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
                    needDomGTPre = false;
                }
            }
            if (c.operator === '>' || c.operator === '>=') {
                higher = higherGT(gt, c, options);
                if (higher === c && higher !== gt) {
                    return false;
                }
            } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options)) {
                return false;
            }
        }
        if (lt) {
            if (needDomLTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
                    needDomLTPre = false;
                }
            }
            if (c.operator === '<' || c.operator === '<=') {
                lower = lowerLT(lt, c, options);
                if (lower === c && lower !== lt) {
                    return false;
                }
            } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options)) {
                return false;
            }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
            return false;
        }
    }
    // if there was a < or >, and nothing in the dom, then must be false
    // UNLESS it was limited by another range in the other direction.
    // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
    if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
    }
    if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
    }
    // we needed a prerelease range in a specific tuple, but didn't get one
    // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
    // because it includes prereleases in the 1.2.3 tuple
    if (needDomGTPre || needDomLTPre) {
        return false;
    }
    return true;
};
// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a;
};
// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a;
};
module.exports = subset;
}),
"[project]/node_modules/jsonwebtoken/node_modules/semver/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// just pre-load all the stuff that index.js lazily exports
const internalRe = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/re.js [app-rsc] (ecmascript)");
const constants = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/constants.js [app-rsc] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const identifiers = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/internal/identifiers.js [app-rsc] (ecmascript)");
const parse = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const valid = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/valid.js [app-rsc] (ecmascript)");
const clean = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/clean.js [app-rsc] (ecmascript)");
const inc = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/inc.js [app-rsc] (ecmascript)");
const diff = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/diff.js [app-rsc] (ecmascript)");
const major = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/major.js [app-rsc] (ecmascript)");
const minor = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/minor.js [app-rsc] (ecmascript)");
const patch = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/patch.js [app-rsc] (ecmascript)");
const prerelease = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/prerelease.js [app-rsc] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const rcompare = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/rcompare.js [app-rsc] (ecmascript)");
const compareLoose = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare-loose.js [app-rsc] (ecmascript)");
const compareBuild = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/compare-build.js [app-rsc] (ecmascript)");
const sort = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/sort.js [app-rsc] (ecmascript)");
const rsort = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/rsort.js [app-rsc] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/gt.js [app-rsc] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/lt.js [app-rsc] (ecmascript)");
const eq = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/eq.js [app-rsc] (ecmascript)");
const neq = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/neq.js [app-rsc] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/gte.js [app-rsc] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/lte.js [app-rsc] (ecmascript)");
const cmp = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/cmp.js [app-rsc] (ecmascript)");
const coerce = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/coerce.js [app-rsc] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/comparator.js [app-rsc] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const satisfies = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/functions/satisfies.js [app-rsc] (ecmascript)");
const toComparators = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/to-comparators.js [app-rsc] (ecmascript)");
const maxSatisfying = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/max-satisfying.js [app-rsc] (ecmascript)");
const minSatisfying = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/min-satisfying.js [app-rsc] (ecmascript)");
const minVersion = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/min-version.js [app-rsc] (ecmascript)");
const validRange = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/valid.js [app-rsc] (ecmascript)");
const outside = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/outside.js [app-rsc] (ecmascript)");
const gtr = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/gtr.js [app-rsc] (ecmascript)");
const ltr = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/ltr.js [app-rsc] (ecmascript)");
const intersects = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/intersects.js [app-rsc] (ecmascript)");
const simplifyRange = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/simplify.js [app-rsc] (ecmascript)");
const subset = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/ranges/subset.js [app-rsc] (ecmascript)");
module.exports = {
    parse,
    valid,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants.RELEASE_TYPES,
    compareIdentifiers: identifiers.compareIdentifiers,
    rcompareIdentifiers: identifiers.rcompareIdentifiers
};
}),
"[project]/node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const semver = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/index.js [app-rsc] (ecmascript)");
module.exports = semver.satisfies(process.version, '>=15.7.0');
}),
"[project]/node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const semver = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/index.js [app-rsc] (ecmascript)");
module.exports = semver.satisfies(process.version, '>=16.9.0');
}),
"[project]/node_modules/jsonwebtoken/lib/validateAsymmetricKey.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const ASYMMETRIC_KEY_DETAILS_SUPPORTED = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js [app-rsc] (ecmascript)");
const RSA_PSS_KEY_DETAILS_SUPPORTED = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js [app-rsc] (ecmascript)");
const allowedAlgorithmsForKeys = {
    'ec': [
        'ES256',
        'ES384',
        'ES512'
    ],
    'rsa': [
        'RS256',
        'PS256',
        'RS384',
        'PS384',
        'RS512',
        'PS512'
    ],
    'rsa-pss': [
        'PS256',
        'PS384',
        'PS512'
    ]
};
const allowedCurves = {
    ES256: 'prime256v1',
    ES384: 'secp384r1',
    ES512: 'secp521r1'
};
module.exports = function(algorithm, key) {
    if (!algorithm || !key) return;
    const keyType = key.asymmetricKeyType;
    if (!keyType) return;
    const allowedAlgorithms = allowedAlgorithmsForKeys[keyType];
    if (!allowedAlgorithms) {
        throw new Error(`Unknown key type "${keyType}".`);
    }
    if (!allowedAlgorithms.includes(algorithm)) {
        throw new Error(`"alg" parameter for "${keyType}" key type must be one of: ${allowedAlgorithms.join(', ')}.`);
    }
    /*
   * Ignore the next block from test coverage because it gets executed
   * conditionally depending on the Node version. Not ignoring it would
   * prevent us from reaching the target % of coverage for versions of
   * Node under 15.7.0.
   */ /* istanbul ignore next */ if (ASYMMETRIC_KEY_DETAILS_SUPPORTED) {
        switch(keyType){
            case 'ec':
                const keyCurve = key.asymmetricKeyDetails.namedCurve;
                const allowedCurve = allowedCurves[algorithm];
                if (keyCurve !== allowedCurve) {
                    throw new Error(`"alg" parameter "${algorithm}" requires curve "${allowedCurve}".`);
                }
                break;
            case 'rsa-pss':
                if (RSA_PSS_KEY_DETAILS_SUPPORTED) {
                    const length = parseInt(algorithm.slice(-3), 10);
                    const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = key.asymmetricKeyDetails;
                    if (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm) {
                        throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${algorithm}.`);
                    }
                    if (saltLength !== undefined && saltLength > length >> 3) {
                        throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${algorithm}.`);
                    }
                }
                break;
        }
    }
};
}),
"[project]/node_modules/jsonwebtoken/lib/psSupported.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var semver = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/node_modules/semver/index.js [app-rsc] (ecmascript)");
module.exports = semver.satisfies(process.version, '^6.12.0 || >=8.0.0');
}),
"[project]/node_modules/jsonwebtoken/verify.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const JsonWebTokenError = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/JsonWebTokenError.js [app-rsc] (ecmascript)");
const NotBeforeError = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/NotBeforeError.js [app-rsc] (ecmascript)");
const TokenExpiredError = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/TokenExpiredError.js [app-rsc] (ecmascript)");
const decode = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/decode.js [app-rsc] (ecmascript)");
const timespan = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/timespan.js [app-rsc] (ecmascript)");
const validateAsymmetricKey = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/validateAsymmetricKey.js [app-rsc] (ecmascript)");
const PS_SUPPORTED = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/psSupported.js [app-rsc] (ecmascript)");
const jws = __turbopack_context__.r("[project]/node_modules/jws/index.js [app-rsc] (ecmascript)");
const { KeyObject, createSecretKey, createPublicKey } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const PUB_KEY_ALGS = [
    'RS256',
    'RS384',
    'RS512'
];
const EC_KEY_ALGS = [
    'ES256',
    'ES384',
    'ES512'
];
const RSA_KEY_ALGS = [
    'RS256',
    'RS384',
    'RS512'
];
const HS_ALGS = [
    'HS256',
    'HS384',
    'HS512'
];
if (PS_SUPPORTED) {
    PUB_KEY_ALGS.splice(PUB_KEY_ALGS.length, 0, 'PS256', 'PS384', 'PS512');
    RSA_KEY_ALGS.splice(RSA_KEY_ALGS.length, 0, 'PS256', 'PS384', 'PS512');
}
module.exports = function(jwtString, secretOrPublicKey, options, callback) {
    if (typeof options === 'function' && !callback) {
        callback = options;
        options = {};
    }
    if (!options) {
        options = {};
    }
    //clone this object since we are going to mutate it.
    options = Object.assign({}, options);
    let done;
    if (callback) {
        done = callback;
    } else {
        done = function(err, data) {
            if (err) throw err;
            return data;
        };
    }
    if (options.clockTimestamp && typeof options.clockTimestamp !== 'number') {
        return done(new JsonWebTokenError('clockTimestamp must be a number'));
    }
    if (options.nonce !== undefined && (typeof options.nonce !== 'string' || options.nonce.trim() === '')) {
        return done(new JsonWebTokenError('nonce must be a non-empty string'));
    }
    if (options.allowInvalidAsymmetricKeyTypes !== undefined && typeof options.allowInvalidAsymmetricKeyTypes !== 'boolean') {
        return done(new JsonWebTokenError('allowInvalidAsymmetricKeyTypes must be a boolean'));
    }
    const clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1000);
    if (!jwtString) {
        return done(new JsonWebTokenError('jwt must be provided'));
    }
    if (typeof jwtString !== 'string') {
        return done(new JsonWebTokenError('jwt must be a string'));
    }
    const parts = jwtString.split('.');
    if (parts.length !== 3) {
        return done(new JsonWebTokenError('jwt malformed'));
    }
    let decodedToken;
    try {
        decodedToken = decode(jwtString, {
            complete: true
        });
    } catch (err) {
        return done(err);
    }
    if (!decodedToken) {
        return done(new JsonWebTokenError('invalid token'));
    }
    const header = decodedToken.header;
    let getSecret;
    if (typeof secretOrPublicKey === 'function') {
        if (!callback) {
            return done(new JsonWebTokenError('verify must be called asynchronous if secret or public key is provided as a callback'));
        }
        getSecret = secretOrPublicKey;
    } else {
        getSecret = function(header, secretCallback) {
            return secretCallback(null, secretOrPublicKey);
        };
    }
    return getSecret(header, function(err, secretOrPublicKey) {
        if (err) {
            return done(new JsonWebTokenError('error in secret or public key callback: ' + err.message));
        }
        const hasSignature = parts[2].trim() !== '';
        if (!hasSignature && secretOrPublicKey) {
            return done(new JsonWebTokenError('jwt signature is required'));
        }
        if (hasSignature && !secretOrPublicKey) {
            return done(new JsonWebTokenError('secret or public key must be provided'));
        }
        if (!hasSignature && !options.algorithms) {
            return done(new JsonWebTokenError('please specify "none" in "algorithms" to verify unsigned tokens'));
        }
        if (secretOrPublicKey != null && !(secretOrPublicKey instanceof KeyObject)) {
            try {
                secretOrPublicKey = createPublicKey(secretOrPublicKey);
            } catch (_) {
                try {
                    secretOrPublicKey = createSecretKey(typeof secretOrPublicKey === 'string' ? Buffer.from(secretOrPublicKey) : secretOrPublicKey);
                } catch (_) {
                    return done(new JsonWebTokenError('secretOrPublicKey is not valid key material'));
                }
            }
        }
        if (!options.algorithms) {
            if (secretOrPublicKey.type === 'secret') {
                options.algorithms = HS_ALGS;
            } else if ([
                'rsa',
                'rsa-pss'
            ].includes(secretOrPublicKey.asymmetricKeyType)) {
                options.algorithms = RSA_KEY_ALGS;
            } else if (secretOrPublicKey.asymmetricKeyType === 'ec') {
                options.algorithms = EC_KEY_ALGS;
            } else {
                options.algorithms = PUB_KEY_ALGS;
            }
        }
        if (options.algorithms.indexOf(decodedToken.header.alg) === -1) {
            return done(new JsonWebTokenError('invalid algorithm'));
        }
        if (header.alg.startsWith('HS') && secretOrPublicKey.type !== 'secret') {
            return done(new JsonWebTokenError(`secretOrPublicKey must be a symmetric key when using ${header.alg}`));
        } else if (/^(?:RS|PS|ES)/.test(header.alg) && secretOrPublicKey.type !== 'public') {
            return done(new JsonWebTokenError(`secretOrPublicKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInvalidAsymmetricKeyTypes) {
            try {
                validateAsymmetricKey(header.alg, secretOrPublicKey);
            } catch (e) {
                return done(e);
            }
        }
        let valid;
        try {
            valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey);
        } catch (e) {
            return done(e);
        }
        if (!valid) {
            return done(new JsonWebTokenError('invalid signature'));
        }
        const payload = decodedToken.payload;
        if (typeof payload.nbf !== 'undefined' && !options.ignoreNotBefore) {
            if (typeof payload.nbf !== 'number') {
                return done(new JsonWebTokenError('invalid nbf value'));
            }
            if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
                return done(new NotBeforeError('jwt not active', new Date(payload.nbf * 1000)));
            }
        }
        if (typeof payload.exp !== 'undefined' && !options.ignoreExpiration) {
            if (typeof payload.exp !== 'number') {
                return done(new JsonWebTokenError('invalid exp value'));
            }
            if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
                return done(new TokenExpiredError('jwt expired', new Date(payload.exp * 1000)));
            }
        }
        if (options.audience) {
            const audiences = Array.isArray(options.audience) ? options.audience : [
                options.audience
            ];
            const target = Array.isArray(payload.aud) ? payload.aud : [
                payload.aud
            ];
            const match = target.some(function(targetAudience) {
                return audiences.some(function(audience) {
                    return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
                });
            });
            if (!match) {
                return done(new JsonWebTokenError('jwt audience invalid. expected: ' + audiences.join(' or ')));
            }
        }
        if (options.issuer) {
            const invalid_issuer = typeof options.issuer === 'string' && payload.iss !== options.issuer || Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1;
            if (invalid_issuer) {
                return done(new JsonWebTokenError('jwt issuer invalid. expected: ' + options.issuer));
            }
        }
        if (options.subject) {
            if (payload.sub !== options.subject) {
                return done(new JsonWebTokenError('jwt subject invalid. expected: ' + options.subject));
            }
        }
        if (options.jwtid) {
            if (payload.jti !== options.jwtid) {
                return done(new JsonWebTokenError('jwt jwtid invalid. expected: ' + options.jwtid));
            }
        }
        if (options.nonce) {
            if (payload.nonce !== options.nonce) {
                return done(new JsonWebTokenError('jwt nonce invalid. expected: ' + options.nonce));
            }
        }
        if (options.maxAge) {
            if (typeof payload.iat !== 'number') {
                return done(new JsonWebTokenError('iat required when maxAge is specified'));
            }
            const maxAgeTimestamp = timespan(options.maxAge, payload.iat);
            if (typeof maxAgeTimestamp === 'undefined') {
                return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
            }
            if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
                return done(new TokenExpiredError('maxAge exceeded', new Date(maxAgeTimestamp * 1000)));
            }
        }
        if (options.complete === true) {
            const signature = decodedToken.signature;
            return done(null, {
                header: header,
                payload: payload,
                signature: signature
            });
        }
        return done(null, payload);
    });
};
}),
"[project]/node_modules/lodash.includes/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 1.7976931348623157e+308, NAN = 0 / 0;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', stringTag = '[object String]', symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array ? array.length : 0, result = Array(length);
    while(++index < length){
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while(fromRight ? index-- : ++index < length){
        if (predicate(array[index], index, array)) {
            return index;
        }
    }
    return -1;
}
/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
        return baseFindIndex(array, baseIsNaN, fromIndex);
    }
    var index = fromIndex - 1, length = array.length;
    while(++index < length){
        if (array[index] === value) {
            return index;
        }
    }
    return -1;
}
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */ function baseIsNaN(value) {
    return value !== value;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n){
        result[index] = iteratee(index);
    }
    return result;
}
/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */ function baseValues(object, props) {
    return arrayMap(props, function(key) {
        return object[key];
    });
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = overArg(Object.keys, Object), nativeMax = Math.max;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    // Safari 9 makes `arguments.length` enumerable in strict mode.
    var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
    var length = result.length, skipIndexes = !!length;
    for(var key in value){
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
            result.push(key);
        }
    }
    return result;
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) {
        return nativeKeys(object);
    }
    var result = [];
    for(var key in Object(object)){
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
            result.push(key);
        }
    }
    return result;
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
}
/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */ function includes(collection, value, fromIndex, guard) {
    collection = isArrayLike(collection) ? collection : values(collection);
    fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
    var length = collection.length;
    if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
    }
    return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ function isArguments(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */ function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */ function isString(value) {
    return typeof value == 'string' || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */ function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */ function values(object) {
    return object ? baseValues(object, keys(object)) : [];
}
module.exports = includes;
}),
"[project]/node_modules/lodash.isboolean/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */ /** `Object#toString` result references. */ var boolTag = '[object Boolean]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */ function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && objectToString.call(value) == boolTag;
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
module.exports = isBoolean;
}),
"[project]/node_modules/lodash.isinteger/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e+308, NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on
 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * _.isInteger(3);
 * // => true
 *
 * _.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isInteger(Infinity);
 * // => false
 *
 * _.isInteger('3');
 * // => false
 */ function isInteger(value) {
    return typeof value == 'number' && value == toInteger(value);
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */ function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = isInteger;
}),
"[project]/node_modules/lodash.isnumber/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */ /** `Object#toString` result references. */ var numberTag = '[object Number]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
 * as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */ function isNumber(value) {
    return typeof value == 'number' || isObjectLike(value) && objectToString.call(value) == numberTag;
}
module.exports = isNumber;
}),
"[project]/node_modules/lodash.isplainobject/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** `Object#toString` result references. */ var objectTag = '[object Object]';
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */ function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
        try {
            result = !!(value + '');
        } catch (e) {}
    }
    return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
        return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;
}),
"[project]/node_modules/lodash.isstring/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */ /** `Object#toString` result references. */ var stringTag = '[object String]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */ function isString(value) {
    return typeof value == 'string' || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
}
module.exports = isString;
}),
"[project]/node_modules/lodash.once/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e+308, NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */ function before(n, func) {
    var result;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    n = toInteger(n);
    return function() {
        if (--n > 0) {
            result = func.apply(this, arguments);
        }
        if (n <= 1) {
            func = undefined;
        }
        return result;
    };
}
/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */ function once(func) {
    return before(2, func);
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */ function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = once;
}),
"[project]/node_modules/jsonwebtoken/sign.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const timespan = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/timespan.js [app-rsc] (ecmascript)");
const PS_SUPPORTED = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/psSupported.js [app-rsc] (ecmascript)");
const validateAsymmetricKey = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/validateAsymmetricKey.js [app-rsc] (ecmascript)");
const jws = __turbopack_context__.r("[project]/node_modules/jws/index.js [app-rsc] (ecmascript)");
const includes = __turbopack_context__.r("[project]/node_modules/lodash.includes/index.js [app-rsc] (ecmascript)");
const isBoolean = __turbopack_context__.r("[project]/node_modules/lodash.isboolean/index.js [app-rsc] (ecmascript)");
const isInteger = __turbopack_context__.r("[project]/node_modules/lodash.isinteger/index.js [app-rsc] (ecmascript)");
const isNumber = __turbopack_context__.r("[project]/node_modules/lodash.isnumber/index.js [app-rsc] (ecmascript)");
const isPlainObject = __turbopack_context__.r("[project]/node_modules/lodash.isplainobject/index.js [app-rsc] (ecmascript)");
const isString = __turbopack_context__.r("[project]/node_modules/lodash.isstring/index.js [app-rsc] (ecmascript)");
const once = __turbopack_context__.r("[project]/node_modules/lodash.once/index.js [app-rsc] (ecmascript)");
const { KeyObject, createSecretKey, createPrivateKey } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const SUPPORTED_ALGS = [
    'RS256',
    'RS384',
    'RS512',
    'ES256',
    'ES384',
    'ES512',
    'HS256',
    'HS384',
    'HS512',
    'none'
];
if (PS_SUPPORTED) {
    SUPPORTED_ALGS.splice(3, 0, 'PS256', 'PS384', 'PS512');
}
const sign_options_schema = {
    expiresIn: {
        isValid: function(value) {
            return isInteger(value) || isString(value) && value;
        },
        message: '"expiresIn" should be a number of seconds or string representing a timespan'
    },
    notBefore: {
        isValid: function(value) {
            return isInteger(value) || isString(value) && value;
        },
        message: '"notBefore" should be a number of seconds or string representing a timespan'
    },
    audience: {
        isValid: function(value) {
            return isString(value) || Array.isArray(value);
        },
        message: '"audience" must be a string or array'
    },
    algorithm: {
        isValid: includes.bind(null, SUPPORTED_ALGS),
        message: '"algorithm" must be a valid string enum value'
    },
    header: {
        isValid: isPlainObject,
        message: '"header" must be an object'
    },
    encoding: {
        isValid: isString,
        message: '"encoding" must be a string'
    },
    issuer: {
        isValid: isString,
        message: '"issuer" must be a string'
    },
    subject: {
        isValid: isString,
        message: '"subject" must be a string'
    },
    jwtid: {
        isValid: isString,
        message: '"jwtid" must be a string'
    },
    noTimestamp: {
        isValid: isBoolean,
        message: '"noTimestamp" must be a boolean'
    },
    keyid: {
        isValid: isString,
        message: '"keyid" must be a string'
    },
    mutatePayload: {
        isValid: isBoolean,
        message: '"mutatePayload" must be a boolean'
    },
    allowInsecureKeySizes: {
        isValid: isBoolean,
        message: '"allowInsecureKeySizes" must be a boolean'
    },
    allowInvalidAsymmetricKeyTypes: {
        isValid: isBoolean,
        message: '"allowInvalidAsymmetricKeyTypes" must be a boolean'
    }
};
const registered_claims_schema = {
    iat: {
        isValid: isNumber,
        message: '"iat" should be a number of seconds'
    },
    exp: {
        isValid: isNumber,
        message: '"exp" should be a number of seconds'
    },
    nbf: {
        isValid: isNumber,
        message: '"nbf" should be a number of seconds'
    }
};
function validate(schema, allowUnknown, object, parameterName) {
    if (!isPlainObject(object)) {
        throw new Error('Expected "' + parameterName + '" to be a plain object.');
    }
    Object.keys(object).forEach(function(key) {
        const validator = schema[key];
        if (!validator) {
            if (!allowUnknown) {
                throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
            }
            return;
        }
        if (!validator.isValid(object[key])) {
            throw new Error(validator.message);
        }
    });
}
function validateOptions(options) {
    return validate(sign_options_schema, false, options, 'options');
}
function validatePayload(payload) {
    return validate(registered_claims_schema, true, payload, 'payload');
}
const options_to_payload = {
    'audience': 'aud',
    'issuer': 'iss',
    'subject': 'sub',
    'jwtid': 'jti'
};
const options_for_objects = [
    'expiresIn',
    'notBefore',
    'noTimestamp',
    'audience',
    'issuer',
    'subject',
    'jwtid'
];
module.exports = function(payload, secretOrPrivateKey, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = {};
    } else {
        options = options || {};
    }
    const isObjectPayload = typeof payload === 'object' && !Buffer.isBuffer(payload);
    const header = Object.assign({
        alg: options.algorithm || 'HS256',
        typ: isObjectPayload ? 'JWT' : undefined,
        kid: options.keyid
    }, options.header);
    function failure(err) {
        if (callback) {
            return callback(err);
        }
        throw err;
    }
    if (!secretOrPrivateKey && options.algorithm !== 'none') {
        return failure(new Error('secretOrPrivateKey must have a value'));
    }
    if (secretOrPrivateKey != null && !(secretOrPrivateKey instanceof KeyObject)) {
        try {
            secretOrPrivateKey = createPrivateKey(secretOrPrivateKey);
        } catch (_) {
            try {
                secretOrPrivateKey = createSecretKey(typeof secretOrPrivateKey === 'string' ? Buffer.from(secretOrPrivateKey) : secretOrPrivateKey);
            } catch (_) {
                return failure(new Error('secretOrPrivateKey is not valid key material'));
            }
        }
    }
    if (header.alg.startsWith('HS') && secretOrPrivateKey.type !== 'secret') {
        return failure(new Error(`secretOrPrivateKey must be a symmetric key when using ${header.alg}`));
    } else if (/^(?:RS|PS|ES)/.test(header.alg)) {
        if (secretOrPrivateKey.type !== 'private') {
            return failure(new Error(`secretOrPrivateKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInsecureKeySizes && !header.alg.startsWith('ES') && secretOrPrivateKey.asymmetricKeyDetails !== undefined && //KeyObject.asymmetricKeyDetails is supported in Node 15+
        secretOrPrivateKey.asymmetricKeyDetails.modulusLength < 2048) {
            return failure(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
        }
    }
    if (typeof payload === 'undefined') {
        return failure(new Error('payload is required'));
    } else if (isObjectPayload) {
        try {
            validatePayload(payload);
        } catch (error) {
            return failure(error);
        }
        if (!options.mutatePayload) {
            payload = Object.assign({}, payload);
        }
    } else {
        const invalid_options = options_for_objects.filter(function(opt) {
            return typeof options[opt] !== 'undefined';
        });
        if (invalid_options.length > 0) {
            return failure(new Error('invalid ' + invalid_options.join(',') + ' option for ' + typeof payload + ' payload'));
        }
    }
    if (typeof payload.exp !== 'undefined' && typeof options.expiresIn !== 'undefined') {
        return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
    }
    if (typeof payload.nbf !== 'undefined' && typeof options.notBefore !== 'undefined') {
        return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
    }
    try {
        validateOptions(options);
    } catch (error) {
        return failure(error);
    }
    if (!options.allowInvalidAsymmetricKeyTypes) {
        try {
            validateAsymmetricKey(header.alg, secretOrPrivateKey);
        } catch (error) {
            return failure(error);
        }
    }
    const timestamp = payload.iat || Math.floor(Date.now() / 1000);
    if (options.noTimestamp) {
        delete payload.iat;
    } else if (isObjectPayload) {
        payload.iat = timestamp;
    }
    if (typeof options.notBefore !== 'undefined') {
        try {
            payload.nbf = timespan(options.notBefore, timestamp);
        } catch (err) {
            return failure(err);
        }
        if (typeof payload.nbf === 'undefined') {
            return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
    }
    if (typeof options.expiresIn !== 'undefined' && typeof payload === 'object') {
        try {
            payload.exp = timespan(options.expiresIn, timestamp);
        } catch (err) {
            return failure(err);
        }
        if (typeof payload.exp === 'undefined') {
            return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
    }
    Object.keys(options_to_payload).forEach(function(key) {
        const claim = options_to_payload[key];
        if (typeof options[key] !== 'undefined') {
            if (typeof payload[claim] !== 'undefined') {
                return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
            }
            payload[claim] = options[key];
        }
    });
    const encoding = options.encoding || 'utf8';
    if (typeof callback === 'function') {
        callback = callback && once(callback);
        jws.createSign({
            header: header,
            privateKey: secretOrPrivateKey,
            payload: payload,
            encoding: encoding
        }).once('error', callback).once('done', function(signature) {
            // TODO: Remove in favor of the modulus length check before signing once node 15+ is the minimum supported version
            if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
                return callback(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
            }
            callback(null, signature);
        });
    } else {
        let signature = jws.sign({
            header: header,
            payload: payload,
            secret: secretOrPrivateKey,
            encoding: encoding
        });
        // TODO: Remove in favor of the modulus length check before signing once node 15+ is the minimum supported version
        if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
            throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`);
        }
        return signature;
    }
};
}),
"[project]/node_modules/jsonwebtoken/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    decode: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/decode.js [app-rsc] (ecmascript)"),
    verify: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/verify.js [app-rsc] (ecmascript)"),
    sign: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/sign.js [app-rsc] (ecmascript)"),
    JsonWebTokenError: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/JsonWebTokenError.js [app-rsc] (ecmascript)"),
    NotBeforeError: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/NotBeforeError.js [app-rsc] (ecmascript)"),
    TokenExpiredError: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/TokenExpiredError.js [app-rsc] (ecmascript)")
};
}),
"[project]/node_modules/uuid/dist/esm-node/native.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID
};
}),
"[project]/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
}),
"[project]/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/native.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
;
;
;
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@stream-io/node-sdk/dist/index.es.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChannelOwnCapability",
    ()=>ChannelOwnCapability,
    "FeedOwnCapability",
    ()=>FeedOwnCapability,
    "OwnCapability",
    ()=>OwnCapability,
    "StreamCall",
    ()=>StreamCall,
    "StreamChannel",
    ()=>StreamChannel,
    "StreamChatClient",
    ()=>StreamChatClient,
    "StreamClient",
    ()=>StreamClient,
    "StreamFeed",
    ()=>StreamFeed,
    "StreamFeedsClient",
    ()=>StreamFeedsClient,
    "StreamVideoClient",
    ()=>StreamVideoClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript) <export default as v4>");
;
;
;
function JWTUserToken(apiSecret, payload) {
    // make sure we return a clear error when jwt is shimmed (ie. browser build)
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] == null || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].sign == null) {
        throw Error(`Unable to find jwt crypto, if you are getting this error is probably because you are trying to generate tokens on browser or React Native (or other environment where crypto functions are not available). Please Note: token should only be generated server-side.`);
    }
    const opts = Object.assign({
        algorithm: 'HS256',
        noTimestamp: true
    });
    if (payload.iat) {
        opts.noTimestamp = false;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].sign(payload, apiSecret, opts);
}
function JWTServerToken(apiSecret, jwtOptions = {}) {
    const payload = {
        server: true
    };
    const opts = Object.assign({
        algorithm: 'HS256',
        noTimestamp: true
    }, jwtOptions);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].sign(payload, apiSecret, opts);
}
const decoders = {};
const decodeDatetimeType = (input)=>typeof input === 'number' ? new Date(Math.floor(input / 1000000)) : new Date(input);
decoders.DatetimeType = decodeDatetimeType;
const decode = (typeMappings, input)=>{
    if (!input || Object.keys(typeMappings).length === 0) return input;
    Object.keys(typeMappings).forEach((key)=>{
        if (input[key] != null) {
            if (typeMappings[key]) {
                const decoder = decoders[typeMappings[key].type];
                if (decoder) {
                    if (typeMappings[key].isSingle) {
                        input[key] = decoder(input[key]);
                    } else {
                        Object.keys(input[key]).forEach((k)=>{
                            input[key][k] = decoder(input[key][k]);
                        });
                    }
                }
            }
        }
    });
    return input;
};
decoders.AcceptFeedMemberInviteResponse = (input)=>{
    const typeMappings = {
        member: {
            type: 'FeedMemberResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AcceptFollowResponse = (input)=>{
    const typeMappings = {
        follow: {
            type: 'FollowResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActionLogResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        review_queue_item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        },
        target_user: {
            type: 'UserResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActivityAddedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActivityDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActivityFeedbackEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActivityMarkEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActivityMarkedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActivityPinResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActivityPinnedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        pinned_activity: {
            type: 'PinActivityResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActivityReactionAddedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        reaction: {
            type: 'FeedsReactionResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActivityReactionDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        reaction: {
            type: 'FeedsReactionResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActivityReactionUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        reaction: {
            type: 'FeedsReactionResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActivityRemovedFromFeedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActivityResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        comments: {
            type: 'CommentResponse',
            isSingle: false
        },
        latest_reactions: {
            type: 'FeedsReactionResponse',
            isSingle: false
        },
        mentioned_users: {
            type: 'UserResponse',
            isSingle: false
        },
        own_bookmarks: {
            type: 'BookmarkResponse',
            isSingle: false
        },
        own_reactions: {
            type: 'FeedsReactionResponse',
            isSingle: false
        },
        reaction_groups: {
            type: 'ReactionGroupResponse',
            isSingle: false
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        edited_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        expires_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        current_feed: {
            type: 'FeedResponse',
            isSingle: true
        },
        parent: {
            type: 'ActivityResponse',
            isSingle: true
        },
        poll: {
            type: 'PollResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActivitySelectorConfigResponse = (input)=>{
    const typeMappings = {
        cutoff_time: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActivityUnpinnedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        pinned_activity: {
            type: 'PinActivityResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ActivityUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AddActivityResponse = (input)=>{
    const typeMappings = {
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AddBookmarkResponse = (input)=>{
    const typeMappings = {
        bookmark: {
            type: 'BookmarkResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AddCommentReactionResponse = (input)=>{
    const typeMappings = {
        comment: {
            type: 'CommentResponse',
            isSingle: true
        },
        reaction: {
            type: 'FeedsReactionResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AddCommentResponse = (input)=>{
    const typeMappings = {
        comment: {
            type: 'CommentResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AddCommentsBatchResponse = (input)=>{
    const typeMappings = {
        comments: {
            type: 'CommentResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.AddReactionResponse = (input)=>{
    const typeMappings = {
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        reaction: {
            type: 'FeedsReactionResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AggregatedActivityResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activities: {
            type: 'ActivityResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.AnyEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AppResponseFields = (input)=>{
    const typeMappings = {
        event_hooks: {
            type: 'EventHook',
            isSingle: false
        },
        call_types: {
            type: 'CallType',
            isSingle: false
        },
        channel_configs: {
            type: 'ChannelConfig',
            isSingle: false
        },
        push_notifications: {
            type: 'PushNotificationFields',
            isSingle: true
        },
        revoke_tokens_issued_before: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AsyncBulkImageModerationEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        finished_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        started_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AsyncExportChannelsEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        finished_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        started_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AsyncExportErrorEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        finished_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        started_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AsyncExportModerationLogsEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        finished_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        started_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AsyncExportUsersEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        finished_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        started_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AutomodDetails = (input)=>{
    const typeMappings = {
        result: {
            type: 'MessageModerationResult',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.Ban = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'Channel',
            isSingle: true
        },
        created_by: {
            type: 'User',
            isSingle: true
        },
        target: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BanResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        banned_by: {
            type: 'UserResponse',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BlockListResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BlockUsersResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BlockedUserEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        blocked_by_user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BlockedUserResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        blocked_user: {
            type: 'UserResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BookmarkAddedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        bookmark: {
            type: 'BookmarkResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BookmarkDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        bookmark: {
            type: 'BookmarkResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BookmarkFolderDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        bookmark_folder: {
            type: 'BookmarkFolderResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BookmarkFolderResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BookmarkFolderUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        bookmark_folder: {
            type: 'BookmarkFolderResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BookmarkResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        folder: {
            type: 'BookmarkFolderResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BookmarkUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        bookmark: {
            type: 'BookmarkResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallAcceptedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallClosedCaptionsFailedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallClosedCaptionsStartedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallClosedCaptionsStoppedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallCreatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallEndedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallFrameRecordingFailedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallFrameRecordingFrameReadyEvent = (input)=>{
    const typeMappings = {
        captured_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        users: {
            type: 'UserResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.CallFrameRecordingStartedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallFrameRecordingStoppedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallHLSBroadcastingFailedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallHLSBroadcastingStartedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallHLSBroadcastingStoppedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallLiveStartedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallMemberAddedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallMemberRemovedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallMemberUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallMemberUpdatedPermissionEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallMissedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallModerationBlurEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallModerationWarningEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallNotificationEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallParticipantResponse = (input)=>{
    const typeMappings = {
        joined_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallParticipantTimeline = (input)=>{
    const typeMappings = {
        timestamp: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallReactionEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        reaction: {
            type: 'ReactionResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallRecording = (input)=>{
    const typeMappings = {
        end_time: {
            type: 'DatetimeType',
            isSingle: true
        },
        start_time: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallRecordingFailedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallRecordingReadyEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call_recording: {
            type: 'CallRecording',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallRecordingStartedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallRecordingStoppedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallRejectedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallReportResponse = (input)=>{
    const typeMappings = {
        ended_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        started_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        created_by: {
            type: 'UserResponse',
            isSingle: true
        },
        ended_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        starts_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        session: {
            type: 'CallSessionResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallRingEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallRtmpBroadcastFailedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallRtmpBroadcastStartedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallRtmpBroadcastStoppedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallSessionEndedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallSessionParticipantCountsUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallSessionParticipantJoinedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        participant: {
            type: 'CallParticipantResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallSessionParticipantLeftEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        participant: {
            type: 'CallParticipantResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallSessionResponse = (input)=>{
    const typeMappings = {
        participants: {
            type: 'CallParticipantResponse',
            isSingle: false
        },
        accepted_by: {
            type: 'DatetimeType',
            isSingle: false
        },
        missed_by: {
            type: 'DatetimeType',
            isSingle: false
        },
        rejected_by: {
            type: 'DatetimeType',
            isSingle: false
        },
        ended_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        live_ended_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        live_started_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        started_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        timer_ends_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallSessionStartedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallStateResponseFields = (input)=>{
    const typeMappings = {
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallStatsParticipant = (input)=>{
    const typeMappings = {
        sessions: {
            type: 'CallStatsParticipantSession',
            isSingle: false
        },
        latest_activity_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallStatsParticipantSession = (input)=>{
    const typeMappings = {
        ended_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        started_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallStatsReportReadyEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallStatsReportSummaryResponse = (input)=>{
    const typeMappings = {
        first_stats_time: {
            type: 'DatetimeType',
            isSingle: true
        },
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallTranscription = (input)=>{
    const typeMappings = {
        end_time: {
            type: 'DatetimeType',
            isSingle: true
        },
        start_time: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallTranscriptionFailedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallTranscriptionReadyEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call_transcription: {
            type: 'CallTranscription',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallTranscriptionStartedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallTranscriptionStoppedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallType = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallTypeResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallUserFeedbackSubmittedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallUserMutedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CampaignCompletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        campaign: {
            type: 'CampaignResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CampaignResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        segments: {
            type: 'Segment',
            isSingle: false
        },
        users: {
            type: 'UserResponse',
            isSingle: false
        },
        stats: {
            type: 'CampaignStatsResponse',
            isSingle: true
        },
        scheduled_for: {
            type: 'DatetimeType',
            isSingle: true
        },
        stop_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        sender: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CampaignStartedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        campaign: {
            type: 'CampaignResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CampaignStatsResponse = (input)=>{
    const typeMappings = {
        stats_completed_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        stats_started_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.Channel = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_message_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        message_count_updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        active_live_locations: {
            type: 'SharedLocation',
            isSingle: false
        },
        invites: {
            type: 'ChannelMember',
            isSingle: false
        },
        members: {
            type: 'ChannelMember',
            isSingle: false
        },
        config: {
            type: 'ChannelConfig',
            isSingle: true
        },
        created_by: {
            type: 'User',
            isSingle: true
        },
        members_lookup: {
            type: 'ChannelMemberLookup',
            isSingle: false
        },
        truncated_by: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelConfig = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelConfigWithInfo = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        commands: {
            type: 'Command',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelCreatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelFrozenEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelHiddenEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelMember = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        archived_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        ban_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        invite_accepted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        invite_rejected_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        pinned_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelMemberLookup = (input)=>{
    const typeMappings = {
        archived_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        ban_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        pinned_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelMemberResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        archived_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        ban_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        invite_accepted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        invite_rejected_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        pinned_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelMute = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelMutedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelPushPreferences = (input)=>{
    const typeMappings = {
        disabled_until: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        hide_messages_before: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_message_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        mute_expires_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        truncated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        members: {
            type: 'ChannelMemberResponse',
            isSingle: false
        },
        config: {
            type: 'ChannelConfigWithInfo',
            isSingle: true
        },
        created_by: {
            type: 'UserResponse',
            isSingle: true
        },
        truncated_by: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelStateResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'ChannelMemberResponse',
            isSingle: false
        },
        messages: {
            type: 'MessageResponse',
            isSingle: false
        },
        pinned_messages: {
            type: 'MessageResponse',
            isSingle: false
        },
        threads: {
            type: 'ThreadStateResponse',
            isSingle: false
        },
        hide_messages_before: {
            type: 'DatetimeType',
            isSingle: true
        },
        active_live_locations: {
            type: 'SharedLocationResponseData',
            isSingle: false
        },
        pending_messages: {
            type: 'PendingMessageResponse',
            isSingle: false
        },
        read: {
            type: 'ReadStateResponse',
            isSingle: false
        },
        watchers: {
            type: 'UserResponse',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        draft: {
            type: 'DraftResponse',
            isSingle: true
        },
        membership: {
            type: 'ChannelMemberResponse',
            isSingle: true
        },
        push_preferences: {
            type: 'ChannelPushPreferences',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelStateResponseFields = (input)=>{
    const typeMappings = {
        members: {
            type: 'ChannelMemberResponse',
            isSingle: false
        },
        messages: {
            type: 'MessageResponse',
            isSingle: false
        },
        pinned_messages: {
            type: 'MessageResponse',
            isSingle: false
        },
        threads: {
            type: 'ThreadStateResponse',
            isSingle: false
        },
        hide_messages_before: {
            type: 'DatetimeType',
            isSingle: true
        },
        active_live_locations: {
            type: 'SharedLocationResponseData',
            isSingle: false
        },
        pending_messages: {
            type: 'PendingMessageResponse',
            isSingle: false
        },
        read: {
            type: 'ReadStateResponse',
            isSingle: false
        },
        watchers: {
            type: 'UserResponse',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        draft: {
            type: 'DraftResponse',
            isSingle: true
        },
        membership: {
            type: 'ChannelMemberResponse',
            isSingle: true
        },
        push_preferences: {
            type: 'ChannelPushPreferences',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelTruncatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelTypeConfig = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        commands: {
            type: 'Command',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelUnFrozenEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelUnmutedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelVisibleEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChatActivityStatsResponse = (input)=>{
    const typeMappings = {
        messages: {
            type: 'MessageStatsResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CheckResponse = (input)=>{
    const typeMappings = {
        item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ClosedCaptionEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.Command = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CommentAddedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        comment: {
            type: 'CommentResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CommentDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        comment: {
            type: 'CommentResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CommentReactionAddedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        comment: {
            type: 'CommentResponse',
            isSingle: true
        },
        reaction: {
            type: 'FeedsReactionResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CommentReactionDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        comment: {
            type: 'CommentResponse',
            isSingle: true
        },
        reaction: {
            type: 'FeedsReactionResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CommentReactionUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        comment: {
            type: 'CommentResponse',
            isSingle: true
        },
        reaction: {
            type: 'FeedsReactionResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CommentResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        mentioned_users: {
            type: 'UserResponse',
            isSingle: false
        },
        own_reactions: {
            type: 'FeedsReactionResponse',
            isSingle: false
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_reactions: {
            type: 'FeedsReactionResponse',
            isSingle: false
        },
        reaction_groups: {
            type: 'ReactionGroupResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.CommentUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        comment: {
            type: 'CommentResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ConfigResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CountByMinuteResponse = (input)=>{
    const typeMappings = {
        start_ts: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateBlockListResponse = (input)=>{
    const typeMappings = {
        blocklist: {
            type: 'BlockListResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateCallTypeResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateChannelTypeResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateCommandResponse = (input)=>{
    const typeMappings = {
        command: {
            type: 'Command',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateFeedGroupResponse = (input)=>{
    const typeMappings = {
        feed_group: {
            type: 'FeedGroupResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateFeedViewResponse = (input)=>{
    const typeMappings = {
        feed_view: {
            type: 'FeedViewResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateFeedsBatchResponse = (input)=>{
    const typeMappings = {
        feeds: {
            type: 'FeedResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateGuestResponse = (input)=>{
    const typeMappings = {
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateImportResponse = (input)=>{
    const typeMappings = {
        import_task: {
            type: 'ImportTask',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateMembershipLevelResponse = (input)=>{
    const typeMappings = {
        membership_level: {
            type: 'MembershipLevelResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateRoleResponse = (input)=>{
    const typeMappings = {
        role: {
            type: 'Role',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CustomCheckResponse = (input)=>{
    const typeMappings = {
        item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CustomVideoEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeactivateUserResponse = (input)=>{
    const typeMappings = {
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeleteActivityReactionResponse = (input)=>{
    const typeMappings = {
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        reaction: {
            type: 'FeedsReactionResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeleteBookmarkResponse = (input)=>{
    const typeMappings = {
        bookmark: {
            type: 'BookmarkResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeleteCallResponse = (input)=>{
    const typeMappings = {
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeleteChannelResponse = (input)=>{
    const typeMappings = {
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeleteCommentReactionResponse = (input)=>{
    const typeMappings = {
        comment: {
            type: 'CommentResponse',
            isSingle: true
        },
        reaction: {
            type: 'FeedsReactionResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeleteCommentResponse = (input)=>{
    const typeMappings = {
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        comment: {
            type: 'CommentResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeleteMessageResponse = (input)=>{
    const typeMappings = {
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeleteReactionResponse = (input)=>{
    const typeMappings = {
        message: {
            type: 'MessageResponse',
            isSingle: true
        },
        reaction: {
            type: 'ReactionResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.Device = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeviceResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DraftPayloadResponse = (input)=>{
    const typeMappings = {
        mentioned_users: {
            type: 'UserResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.DraftResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        message: {
            type: 'DraftPayloadResponse',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        parent_message: {
            type: 'MessageResponse',
            isSingle: true
        },
        quoted_message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.EgressRTMPResponse = (input)=>{
    const typeMappings = {
        started_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.EntityCreatorResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        ban_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        deactivated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_active: {
            type: 'DatetimeType',
            isSingle: true
        },
        revoke_tokens_issued_before: {
            type: 'DatetimeType',
            isSingle: true
        },
        devices: {
            type: 'DeviceResponse',
            isSingle: false
        },
        push_notifications: {
            type: 'PushNotificationSettingsResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.EventHook = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.EventResponse = (input)=>{
    const typeMappings = {
        event: {
            type: 'WSEvent',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ExportUserResponse = (input)=>{
    const typeMappings = {
        messages: {
            type: 'MessageResponse',
            isSingle: false
        },
        reactions: {
            type: 'ReactionResponse',
            isSingle: false
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FeedCreatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        members: {
            type: 'FeedMemberResponse',
            isSingle: false
        },
        feed: {
            type: 'FeedResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FeedDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FeedGroupChangedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FeedGroupDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FeedGroupResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activity_selectors: {
            type: 'ActivitySelectorConfigResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.FeedMemberAddedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        member: {
            type: 'FeedMemberResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FeedMemberRemovedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FeedMemberResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        invite_accepted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        invite_rejected_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        membership_level: {
            type: 'MembershipLevelResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FeedMemberUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        member: {
            type: 'FeedMemberResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FeedResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        created_by: {
            type: 'UserResponse',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        own_follows: {
            type: 'FollowResponse',
            isSingle: false
        },
        own_membership: {
            type: 'FeedMemberResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FeedSuggestionResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        created_by: {
            type: 'UserResponse',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        own_follows: {
            type: 'FollowResponse',
            isSingle: false
        },
        own_membership: {
            type: 'FeedMemberResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FeedUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        feed: {
            type: 'FeedResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FeedViewResponse = (input)=>{
    const typeMappings = {
        last_used_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activity_selectors: {
            type: 'ActivitySelectorConfigResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.FeedsReactionResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FlagDetails = (input)=>{
    const typeMappings = {
        automod: {
            type: 'AutomodDetails',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FlagFeedback = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FlagUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        created_by: {
            type: 'UserResponse',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FollowBatchResponse = (input)=>{
    const typeMappings = {
        follows: {
            type: 'FollowResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.FollowCreatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        follow: {
            type: 'FollowResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FollowDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        follow: {
            type: 'FollowResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FollowResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        source_feed: {
            type: 'FeedResponse',
            isSingle: true
        },
        target_feed: {
            type: 'FeedResponse',
            isSingle: true
        },
        request_accepted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        request_rejected_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FollowUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        follow: {
            type: 'FollowResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FullUserResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel_mutes: {
            type: 'ChannelMute',
            isSingle: false
        },
        devices: {
            type: 'DeviceResponse',
            isSingle: false
        },
        mutes: {
            type: 'UserMuteResponse',
            isSingle: false
        },
        ban_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        deactivated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_active: {
            type: 'DatetimeType',
            isSingle: true
        },
        revoke_tokens_issued_before: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetActiveCallsStatusResponse = (input)=>{
    const typeMappings = {
        end_time: {
            type: 'DatetimeType',
            isSingle: true
        },
        start_time: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetActivityResponse = (input)=>{
    const typeMappings = {
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetApplicationResponse = (input)=>{
    const typeMappings = {
        app: {
            type: 'AppResponseFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetBlockListResponse = (input)=>{
    const typeMappings = {
        blocklist: {
            type: 'BlockListResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetBlockedUsersResponse = (input)=>{
    const typeMappings = {
        blocks: {
            type: 'BlockedUserResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.GetCallReportResponse = (input)=>{
    const typeMappings = {
        video_reactions: {
            type: 'VideoReactionsResponse',
            isSingle: false
        },
        chat_activity: {
            type: 'ChatActivityStatsResponse',
            isSingle: true
        },
        session: {
            type: 'CallSessionResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetCallResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetCallTypeResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetChannelTypeResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        commands: {
            type: 'Command',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.GetCommandResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetCommentRepliesResponse = (input)=>{
    const typeMappings = {
        comments: {
            type: 'ThreadedCommentResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.GetCommentResponse = (input)=>{
    const typeMappings = {
        comment: {
            type: 'CommentResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetCommentsResponse = (input)=>{
    const typeMappings = {
        comments: {
            type: 'ThreadedCommentResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.GetConfigResponse = (input)=>{
    const typeMappings = {
        config: {
            type: 'ConfigResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetDraftResponse = (input)=>{
    const typeMappings = {
        draft: {
            type: 'DraftResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetFeedGroupResponse = (input)=>{
    const typeMappings = {
        feed_group: {
            type: 'FeedGroupResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetFeedViewResponse = (input)=>{
    const typeMappings = {
        feed_view: {
            type: 'FeedViewResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetFollowSuggestionsResponse = (input)=>{
    const typeMappings = {
        suggestions: {
            type: 'FeedSuggestionResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.GetImportResponse = (input)=>{
    const typeMappings = {
        import_task: {
            type: 'ImportTask',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetManyMessagesResponse = (input)=>{
    const typeMappings = {
        messages: {
            type: 'MessageResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.GetMessageResponse = (input)=>{
    const typeMappings = {
        message: {
            type: 'MessageWithChannelResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetModerationRuleResponse = (input)=>{
    const typeMappings = {
        rule: {
            type: 'ModerationRuleV2Response',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetOrCreateCallResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetOrCreateFeedGroupResponse = (input)=>{
    const typeMappings = {
        feed_group: {
            type: 'FeedGroupResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetOrCreateFeedResponse = (input)=>{
    const typeMappings = {
        activities: {
            type: 'ActivityResponse',
            isSingle: false
        },
        aggregated_activities: {
            type: 'AggregatedActivityResponse',
            isSingle: false
        },
        followers: {
            type: 'FollowResponse',
            isSingle: false
        },
        following: {
            type: 'FollowResponse',
            isSingle: false
        },
        members: {
            type: 'FeedMemberResponse',
            isSingle: false
        },
        pinned_activities: {
            type: 'ActivityPinResponse',
            isSingle: false
        },
        feed: {
            type: 'FeedResponse',
            isSingle: true
        },
        notification_status: {
            type: 'NotificationStatusResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetOrCreateFeedViewResponse = (input)=>{
    const typeMappings = {
        feed_view: {
            type: 'FeedViewResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetPushTemplatesResponse = (input)=>{
    const typeMappings = {
        templates: {
            type: 'PushTemplate',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.GetReactionsResponse = (input)=>{
    const typeMappings = {
        reactions: {
            type: 'Reaction',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.GetRepliesResponse = (input)=>{
    const typeMappings = {
        messages: {
            type: 'MessageResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.GetReviewQueueItemResponse = (input)=>{
    const typeMappings = {
        item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetSegmentResponse = (input)=>{
    const typeMappings = {
        segment: {
            type: 'SegmentResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetTaskResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetThreadResponse = (input)=>{
    const typeMappings = {
        thread: {
            type: 'ThreadStateResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GoLiveResponse = (input)=>{
    const typeMappings = {
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ImportTask = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        history: {
            type: 'ImportTaskHistory',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ImportTaskHistory = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.KickedUserEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        kicked_by_user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ListBlockListResponse = (input)=>{
    const typeMappings = {
        blocklists: {
            type: 'BlockListResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListCallTypeResponse = (input)=>{
    const typeMappings = {
        call_types: {
            type: 'CallTypeResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListChannelTypesResponse = (input)=>{
    const typeMappings = {
        channel_types: {
            type: 'ChannelTypeConfig',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListCommandsResponse = (input)=>{
    const typeMappings = {
        commands: {
            type: 'Command',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListDevicesResponse = (input)=>{
    const typeMappings = {
        devices: {
            type: 'DeviceResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListFeedGroupsResponse = (input)=>{
    const typeMappings = {
        groups: {
            type: 'FeedGroupResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListFeedViewsResponse = (input)=>{
    const typeMappings = {
        views: {
            type: 'FeedViewResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListImportsResponse = (input)=>{
    const typeMappings = {
        import_tasks: {
            type: 'ImportTask',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListPushProvidersResponse = (input)=>{
    const typeMappings = {
        push_providers: {
            type: 'PushProviderResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListRecordingsResponse = (input)=>{
    const typeMappings = {
        recordings: {
            type: 'CallRecording',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListRolesResponse = (input)=>{
    const typeMappings = {
        roles: {
            type: 'Role',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListTranscriptionsResponse = (input)=>{
    const typeMappings = {
        transcriptions: {
            type: 'CallTranscription',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.MarkReadResponse = (input)=>{
    const typeMappings = {
        event: {
            type: 'MessageReadEvent',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MemberAddedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        member: {
            type: 'ChannelMember',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MemberRemovedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        member: {
            type: 'ChannelMember',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MemberResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MemberUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        member: {
            type: 'ChannelMember',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MembersResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'ChannelMemberResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.MembershipLevelResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.Message = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_reactions: {
            type: 'Reaction',
            isSingle: false
        },
        mentioned_users: {
            type: 'User',
            isSingle: false
        },
        own_reactions: {
            type: 'Reaction',
            isSingle: false
        },
        reaction_groups: {
            type: 'ReactionGroupResponse',
            isSingle: false
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        message_text_updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        pin_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        pinned_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'User',
            isSingle: false
        },
        member: {
            type: 'ChannelMember',
            isSingle: true
        },
        pinned_by: {
            type: 'User',
            isSingle: true
        },
        poll: {
            type: 'Poll',
            isSingle: true
        },
        quoted_message: {
            type: 'Message',
            isSingle: true
        },
        reminder: {
            type: 'MessageReminder',
            isSingle: true
        },
        shared_location: {
            type: 'SharedLocation',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'User',
            isSingle: false
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageFlagResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        approved_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        rejected_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        reviewed_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        details: {
            type: 'FlagDetails',
            isSingle: true
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        moderation_feedback: {
            type: 'FlagFeedback',
            isSingle: true
        },
        moderation_result: {
            type: 'MessageModerationResult',
            isSingle: true
        },
        reviewed_by: {
            type: 'UserResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageFlaggedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'User',
            isSingle: false
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageHistoryEntryResponse = (input)=>{
    const typeMappings = {
        message_updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageModerationResult = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageNewEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'User',
            isSingle: false
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageReadEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel_last_message_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        thread: {
            type: 'ThreadResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageReminder = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        remind_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'Channel',
            isSingle: true
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_reactions: {
            type: 'ReactionResponse',
            isSingle: false
        },
        mentioned_users: {
            type: 'UserResponse',
            isSingle: false
        },
        own_reactions: {
            type: 'ReactionResponse',
            isSingle: false
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        message_text_updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        pin_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        pinned_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'UserResponse',
            isSingle: false
        },
        draft: {
            type: 'DraftResponse',
            isSingle: true
        },
        member: {
            type: 'ChannelMemberResponse',
            isSingle: true
        },
        pinned_by: {
            type: 'UserResponse',
            isSingle: true
        },
        poll: {
            type: 'PollResponseData',
            isSingle: true
        },
        quoted_message: {
            type: 'MessageResponse',
            isSingle: true
        },
        reaction_groups: {
            type: 'ReactionGroupResponse',
            isSingle: false
        },
        reminder: {
            type: 'ReminderResponseData',
            isSingle: true
        },
        shared_location: {
            type: 'SharedLocationResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageStatsResponse = (input)=>{
    const typeMappings = {
        count_over_time: {
            type: 'CountByMinuteResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageUnblockedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'User',
            isSingle: false
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageUndeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'User',
            isSingle: false
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'User',
            isSingle: false
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageWithChannelResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_reactions: {
            type: 'ReactionResponse',
            isSingle: false
        },
        mentioned_users: {
            type: 'UserResponse',
            isSingle: false
        },
        own_reactions: {
            type: 'ReactionResponse',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        message_text_updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        pin_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        pinned_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'UserResponse',
            isSingle: false
        },
        draft: {
            type: 'DraftResponse',
            isSingle: true
        },
        member: {
            type: 'ChannelMemberResponse',
            isSingle: true
        },
        pinned_by: {
            type: 'UserResponse',
            isSingle: true
        },
        poll: {
            type: 'PollResponseData',
            isSingle: true
        },
        quoted_message: {
            type: 'MessageResponse',
            isSingle: true
        },
        reaction_groups: {
            type: 'ReactionGroupResponse',
            isSingle: false
        },
        reminder: {
            type: 'ReminderResponseData',
            isSingle: true
        },
        shared_location: {
            type: 'SharedLocationResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ModerationCheckCompletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ModerationCustomActionEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        review_queue_item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ModerationFlagResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        review_queue_item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ModerationFlaggedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ModerationMarkReviewedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ModerationRuleV2Response = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MuteChannelResponse = (input)=>{
    const typeMappings = {
        channel_mutes: {
            type: 'ChannelMute',
            isSingle: false
        },
        channel_mute: {
            type: 'ChannelMute',
            isSingle: true
        },
        own_user: {
            type: 'OwnUser',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MuteResponse = (input)=>{
    const typeMappings = {
        mutes: {
            type: 'UserMute',
            isSingle: false
        },
        own_user: {
            type: 'OwnUser',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.NotificationFeedUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        aggregated_activities: {
            type: 'AggregatedActivityResponse',
            isSingle: false
        },
        notification_status: {
            type: 'NotificationStatusResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.NotificationMarkUnreadEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_read_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.NotificationStatusResponse = (input)=>{
    const typeMappings = {
        last_read_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_seen_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.OwnUser = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel_mutes: {
            type: 'ChannelMute',
            isSingle: false
        },
        devices: {
            type: 'Device',
            isSingle: false
        },
        mutes: {
            type: 'UserMute',
            isSingle: false
        },
        deactivated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_active: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_engaged_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        push_preferences: {
            type: 'PushPreferences',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.OwnUserResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel_mutes: {
            type: 'ChannelMute',
            isSingle: false
        },
        devices: {
            type: 'DeviceResponse',
            isSingle: false
        },
        mutes: {
            type: 'UserMuteResponse',
            isSingle: false
        },
        deactivated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_active: {
            type: 'DatetimeType',
            isSingle: true
        },
        revoke_tokens_issued_before: {
            type: 'DatetimeType',
            isSingle: true
        },
        push_preferences: {
            type: 'PushPreferences',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ParticipantCountByMinuteResponse = (input)=>{
    const typeMappings = {
        start_ts: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ParticipantCountOverTimeResponse = (input)=>{
    const typeMappings = {
        by_minute: {
            type: 'ParticipantCountByMinuteResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ParticipantSeriesTimeframe = (input)=>{
    const typeMappings = {
        since: {
            type: 'DatetimeType',
            isSingle: true
        },
        until: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PendingMessageEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'Channel',
            isSingle: true
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PendingMessageResponse = (input)=>{
    const typeMappings = {
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PermissionRequestEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PinActivityResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.Poll = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_answers: {
            type: 'PollVote',
            isSingle: false
        },
        own_votes: {
            type: 'PollVote',
            isSingle: false
        },
        created_by: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PollResponse = (input)=>{
    const typeMappings = {
        poll: {
            type: 'PollResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PollResponseData = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_answers: {
            type: 'PollVoteResponseData',
            isSingle: false
        },
        own_votes: {
            type: 'PollVoteResponseData',
            isSingle: false
        },
        created_by: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PollVote = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PollVoteResponse = (input)=>{
    const typeMappings = {
        vote: {
            type: 'PollVoteResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PollVoteResponseData = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PollVotesResponse = (input)=>{
    const typeMappings = {
        votes: {
            type: 'PollVoteResponseData',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.PushNotificationFields = (input)=>{
    const typeMappings = {
        providers: {
            type: 'PushProvider',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.PushNotificationSettingsResponse = (input)=>{
    const typeMappings = {
        disabled_until: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PushPreferences = (input)=>{
    const typeMappings = {
        disabled_until: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PushProvider = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        disabled_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        push_templates: {
            type: 'PushTemplate',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.PushProviderResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        disabled_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PushTemplate = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryActivitiesResponse = (input)=>{
    const typeMappings = {
        activities: {
            type: 'ActivityResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryActivityReactionsResponse = (input)=>{
    const typeMappings = {
        reactions: {
            type: 'FeedsReactionResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryBannedUsersResponse = (input)=>{
    const typeMappings = {
        bans: {
            type: 'BanResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryBookmarkFoldersResponse = (input)=>{
    const typeMappings = {
        bookmark_folders: {
            type: 'BookmarkFolderResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryBookmarksResponse = (input)=>{
    const typeMappings = {
        bookmarks: {
            type: 'BookmarkResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryCallMembersResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'MemberResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryCallParticipantsResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        participants: {
            type: 'CallParticipantResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryCallSessionParticipantStatsResponse = (input)=>{
    const typeMappings = {
        participants: {
            type: 'CallStatsParticipant',
            isSingle: false
        },
        call_ended_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        call_started_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryCallSessionParticipantStatsTimelineResponse = (input)=>{
    const typeMappings = {
        events: {
            type: 'CallParticipantTimeline',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryCallStatsResponse = (input)=>{
    const typeMappings = {
        reports: {
            type: 'CallStatsReportSummaryResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryCallsResponse = (input)=>{
    const typeMappings = {
        calls: {
            type: 'CallStateResponseFields',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryCampaignsResponse = (input)=>{
    const typeMappings = {
        campaigns: {
            type: 'CampaignResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryChannelsResponse = (input)=>{
    const typeMappings = {
        channels: {
            type: 'ChannelStateResponseFields',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryCommentReactionsResponse = (input)=>{
    const typeMappings = {
        reactions: {
            type: 'FeedsReactionResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryCommentsResponse = (input)=>{
    const typeMappings = {
        comments: {
            type: 'CommentResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryDraftsResponse = (input)=>{
    const typeMappings = {
        drafts: {
            type: 'DraftResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryFeedMembersResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'FeedMemberResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryFeedModerationTemplate = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryFeedModerationTemplatesResponse = (input)=>{
    const typeMappings = {
        templates: {
            type: 'QueryFeedModerationTemplate',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryFeedsResponse = (input)=>{
    const typeMappings = {
        feeds: {
            type: 'FeedResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryFollowsResponse = (input)=>{
    const typeMappings = {
        follows: {
            type: 'FollowResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryMembershipLevelsResponse = (input)=>{
    const typeMappings = {
        membership_levels: {
            type: 'MembershipLevelResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryMessageFlagsResponse = (input)=>{
    const typeMappings = {
        flags: {
            type: 'MessageFlagResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryMessageHistoryResponse = (input)=>{
    const typeMappings = {
        message_history: {
            type: 'MessageHistoryEntryResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryModerationConfigsResponse = (input)=>{
    const typeMappings = {
        configs: {
            type: 'ConfigResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryModerationFlagsResponse = (input)=>{
    const typeMappings = {
        flags: {
            type: 'ModerationFlagResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryModerationLogsResponse = (input)=>{
    const typeMappings = {
        logs: {
            type: 'ActionLogResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryModerationRulesResponse = (input)=>{
    const typeMappings = {
        rules: {
            type: 'ModerationRuleV2Response',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryPollsResponse = (input)=>{
    const typeMappings = {
        polls: {
            type: 'PollResponseData',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryReactionsResponse = (input)=>{
    const typeMappings = {
        reactions: {
            type: 'ReactionResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryRemindersResponse = (input)=>{
    const typeMappings = {
        reminders: {
            type: 'ReminderResponseData',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryReviewQueueResponse = (input)=>{
    const typeMappings = {
        items: {
            type: 'ReviewQueueItemResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QuerySegmentTargetsResponse = (input)=>{
    const typeMappings = {
        targets: {
            type: 'SegmentTargetResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QuerySegmentsResponse = (input)=>{
    const typeMappings = {
        segments: {
            type: 'SegmentResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryThreadsResponse = (input)=>{
    const typeMappings = {
        threads: {
            type: 'ThreadStateResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryUsersResponse = (input)=>{
    const typeMappings = {
        users: {
            type: 'FullUserResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.Reaction = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReactionDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'User',
            isSingle: false
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        reaction: {
            type: 'Reaction',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReactionGroupResponse = (input)=>{
    const typeMappings = {
        first_reaction_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_reaction_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReactionNewEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'User',
            isSingle: false
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        reaction: {
            type: 'Reaction',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReactionResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReactionUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        reaction: {
            type: 'Reaction',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReactivateUserResponse = (input)=>{
    const typeMappings = {
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReadStateResponse = (input)=>{
    const typeMappings = {
        last_read: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        last_delivered_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.RejectFeedMemberInviteResponse = (input)=>{
    const typeMappings = {
        member: {
            type: 'FeedMemberResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.RejectFollowResponse = (input)=>{
    const typeMappings = {
        follow: {
            type: 'FollowResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReminderCreatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        reminder: {
            type: 'ReminderResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReminderDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        reminder: {
            type: 'ReminderResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReminderNotificationEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        reminder: {
            type: 'ReminderResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReminderResponseData = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        remind_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReminderUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        reminder: {
            type: 'ReminderResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReviewQueueItemNewEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        flags: {
            type: 'ModerationFlagResponse',
            isSingle: false
        },
        action: {
            type: 'ActionLogResponse',
            isSingle: true
        },
        review_queue_item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReviewQueueItemResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        actions: {
            type: 'ActionLogResponse',
            isSingle: false
        },
        bans: {
            type: 'Ban',
            isSingle: false
        },
        flags: {
            type: 'ModerationFlagResponse',
            isSingle: false
        },
        completed_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        reviewed_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        assigned_to: {
            type: 'UserResponse',
            isSingle: true
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        },
        entity_creator: {
            type: 'EntityCreatorResponse',
            isSingle: true
        },
        feeds_v2_reaction: {
            type: 'Reaction',
            isSingle: true
        },
        feeds_v3_activity: {
            type: 'ActivityResponse',
            isSingle: true
        },
        feeds_v3_comment: {
            type: 'CommentResponse',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        },
        reaction: {
            type: 'Reaction',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReviewQueueItemUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        flags: {
            type: 'ModerationFlagResponse',
            isSingle: false
        },
        action: {
            type: 'ActionLogResponse',
            isSingle: true
        },
        review_queue_item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.Role = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SearchResult = (input)=>{
    const typeMappings = {
        message: {
            type: 'SearchResultMessage',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SearchResultMessage = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_reactions: {
            type: 'ReactionResponse',
            isSingle: false
        },
        mentioned_users: {
            type: 'UserResponse',
            isSingle: false
        },
        own_reactions: {
            type: 'ReactionResponse',
            isSingle: false
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        message_text_updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        pin_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        pinned_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'UserResponse',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        draft: {
            type: 'DraftResponse',
            isSingle: true
        },
        member: {
            type: 'ChannelMemberResponse',
            isSingle: true
        },
        pinned_by: {
            type: 'UserResponse',
            isSingle: true
        },
        poll: {
            type: 'PollResponseData',
            isSingle: true
        },
        quoted_message: {
            type: 'MessageResponse',
            isSingle: true
        },
        reaction_groups: {
            type: 'ReactionGroupResponse',
            isSingle: false
        },
        reminder: {
            type: 'ReminderResponseData',
            isSingle: true
        },
        shared_location: {
            type: 'SharedLocationResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.Segment = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SegmentResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SegmentTargetResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SendMessageResponse = (input)=>{
    const typeMappings = {
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SendReactionResponse = (input)=>{
    const typeMappings = {
        message: {
            type: 'MessageResponse',
            isSingle: true
        },
        reaction: {
            type: 'ReactionResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SharedLocation = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        end_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'Channel',
            isSingle: true
        },
        message: {
            type: 'Message',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SharedLocationResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        end_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SharedLocationResponseData = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        end_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SharedLocationsResponse = (input)=>{
    const typeMappings = {
        active_live_locations: {
            type: 'SharedLocationResponseData',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.SingleFollowResponse = (input)=>{
    const typeMappings = {
        follow: {
            type: 'FollowResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.StopLiveResponse = (input)=>{
    const typeMappings = {
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.StoriesFeedUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        activities: {
            type: 'ActivityResponse',
            isSingle: false
        },
        aggregated_activities: {
            type: 'AggregatedActivityResponse',
            isSingle: false
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SubmitActionResponse = (input)=>{
    const typeMappings = {
        item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ThreadParticipant = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_read_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_thread_message_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        left_thread_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ThreadResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_message_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'ThreadParticipant',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        created_by: {
            type: 'UserResponse',
            isSingle: true
        },
        parent_message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ThreadStateResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_replies: {
            type: 'MessageResponse',
            isSingle: false
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_message_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        read: {
            type: 'ReadStateResponse',
            isSingle: false
        },
        thread_participants: {
            type: 'ThreadParticipant',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        created_by: {
            type: 'UserResponse',
            isSingle: true
        },
        draft: {
            type: 'DraftResponse',
            isSingle: true
        },
        parent_message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ThreadUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread: {
            type: 'ThreadResponse',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ThreadedCommentResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        mentioned_users: {
            type: 'UserResponse',
            isSingle: false
        },
        own_reactions: {
            type: 'FeedsReactionResponse',
            isSingle: false
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_reactions: {
            type: 'FeedsReactionResponse',
            isSingle: false
        },
        replies: {
            type: 'ThreadedCommentResponse',
            isSingle: false
        },
        reaction_groups: {
            type: 'ReactionGroupResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.TruncateChannelResponse = (input)=>{
    const typeMappings = {
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UnblockedUserEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UnfollowBatchResponse = (input)=>{
    const typeMappings = {
        follows: {
            type: 'FollowResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.UnfollowResponse = (input)=>{
    const typeMappings = {
        follow: {
            type: 'FollowResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UnpinActivityResponse = (input)=>{
    const typeMappings = {
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UnreadCountsBatchResponse = (input)=>{
    const typeMappings = {
        counts_by_user: {
            type: 'UnreadCountsResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.UnreadCountsChannel = (input)=>{
    const typeMappings = {
        last_read: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UnreadCountsResponse = (input)=>{
    const typeMappings = {
        channels: {
            type: 'UnreadCountsChannel',
            isSingle: false
        },
        threads: {
            type: 'UnreadCountsThread',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.UnreadCountsThread = (input)=>{
    const typeMappings = {
        last_read: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateActivityPartialResponse = (input)=>{
    const typeMappings = {
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateActivityResponse = (input)=>{
    const typeMappings = {
        activity: {
            type: 'ActivityResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateBlockListResponse = (input)=>{
    const typeMappings = {
        blocklist: {
            type: 'BlockListResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateBookmarkFolderResponse = (input)=>{
    const typeMappings = {
        bookmark_folder: {
            type: 'BookmarkFolderResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateBookmarkResponse = (input)=>{
    const typeMappings = {
        bookmark: {
            type: 'BookmarkResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateCallMembersResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'MemberResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateCallResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateCallTypeResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateChannelPartialResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'ChannelMemberResponse',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateChannelResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'ChannelMemberResponse',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateChannelTypeResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateCommandResponse = (input)=>{
    const typeMappings = {
        command: {
            type: 'Command',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateCommentResponse = (input)=>{
    const typeMappings = {
        comment: {
            type: 'CommentResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateFeedGroupResponse = (input)=>{
    const typeMappings = {
        feed_group: {
            type: 'FeedGroupResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateFeedMembersResponse = (input)=>{
    const typeMappings = {
        added: {
            type: 'FeedMemberResponse',
            isSingle: false
        },
        updated: {
            type: 'FeedMemberResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateFeedResponse = (input)=>{
    const typeMappings = {
        feed: {
            type: 'FeedResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateFeedViewResponse = (input)=>{
    const typeMappings = {
        feed_view: {
            type: 'FeedViewResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateFollowResponse = (input)=>{
    const typeMappings = {
        follow: {
            type: 'FollowResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateMemberPartialResponse = (input)=>{
    const typeMappings = {
        channel_member: {
            type: 'ChannelMemberResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateMembershipLevelResponse = (input)=>{
    const typeMappings = {
        membership_level: {
            type: 'MembershipLevelResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateMessagePartialResponse = (input)=>{
    const typeMappings = {
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateMessageResponse = (input)=>{
    const typeMappings = {
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateReminderResponse = (input)=>{
    const typeMappings = {
        reminder: {
            type: 'ReminderResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateThreadPartialResponse = (input)=>{
    const typeMappings = {
        thread: {
            type: 'ThreadResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateUsersResponse = (input)=>{
    const typeMappings = {
        users: {
            type: 'FullUserResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdatedCallPermissionsEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpsertActivitiesResponse = (input)=>{
    const typeMappings = {
        activities: {
            type: 'ActivityResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.UpsertConfigResponse = (input)=>{
    const typeMappings = {
        config: {
            type: 'ConfigResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpsertModerationRuleResponse = (input)=>{
    const typeMappings = {
        rule: {
            type: 'ModerationRuleV2Response',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpsertModerationTemplateResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpsertPushPreferencesResponse = (input)=>{
    const typeMappings = {
        user_preferences: {
            type: 'PushPreferences',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.UpsertPushProviderResponse = (input)=>{
    const typeMappings = {
        push_provider: {
            type: 'PushProviderResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpsertPushTemplateResponse = (input)=>{
    const typeMappings = {
        template: {
            type: 'PushTemplate',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.User = (input)=>{
    const typeMappings = {
        ban_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deactivated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_active: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_engaged_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        revoke_tokens_issued_before: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserBannedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        created_by: {
            type: 'User',
            isSingle: true
        },
        expiration: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserDeactivatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        created_by: {
            type: 'User',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserFlaggedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserMessagesDeletedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserMute = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        target: {
            type: 'User',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserMuteResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        target: {
            type: 'UserResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserMutedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserReactivatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        ban_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        deactivated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_active: {
            type: 'DatetimeType',
            isSingle: true
        },
        revoke_tokens_issued_before: {
            type: 'DatetimeType',
            isSingle: true
        },
        devices: {
            type: 'DeviceResponse',
            isSingle: false
        },
        push_notifications: {
            type: 'PushNotificationSettingsResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserResponseCommonFields = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deactivated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_active: {
            type: 'DatetimeType',
            isSingle: true
        },
        revoke_tokens_issued_before: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserUnbannedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserUnmutedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserUnreadReminderEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserUpdatedEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        received_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.VideoReactionOverTimeResponse = (input)=>{
    const typeMappings = {
        by_minute: {
            type: 'CountByMinuteResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.VideoReactionsResponse = (input)=>{
    const typeMappings = {
        count_over_time: {
            type: 'VideoReactionOverTimeResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.WSEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel_last_message_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        created_by: {
            type: 'UserResponse',
            isSingle: true
        },
        me: {
            type: 'OwnUserResponse',
            isSingle: true
        },
        member: {
            type: 'ChannelMemberResponse',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        },
        poll: {
            type: 'PollResponseData',
            isSingle: true
        },
        poll_vote: {
            type: 'PollVoteResponseData',
            isSingle: true
        },
        reaction: {
            type: 'ReactionResponse',
            isSingle: true
        },
        thread: {
            type: 'ThreadResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.WrappedUnreadCountsResponse = (input)=>{
    const typeMappings = {
        channels: {
            type: 'UnreadCountsChannel',
            isSingle: false
        },
        threads: {
            type: 'UnreadCountsThread',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
class CommonApi {
    constructor(apiClient){
        this.apiClient = apiClient;
    }
    async getApp() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/app', undefined, undefined);
        decoders.GetApplicationResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateApp(request) {
        const body = {
            async_url_enrich_enabled: request?.async_url_enrich_enabled,
            auto_translation_enabled: request?.auto_translation_enabled,
            before_message_send_hook_url: request?.before_message_send_hook_url,
            cdn_expiration_seconds: request?.cdn_expiration_seconds,
            channel_hide_members_only: request?.channel_hide_members_only,
            custom_action_handler_url: request?.custom_action_handler_url,
            disable_auth_checks: request?.disable_auth_checks,
            disable_permissions_checks: request?.disable_permissions_checks,
            enforce_unique_usernames: request?.enforce_unique_usernames,
            feeds_moderation_enabled: request?.feeds_moderation_enabled,
            feeds_v2_region: request?.feeds_v2_region,
            guest_user_creation_disabled: request?.guest_user_creation_disabled,
            image_moderation_enabled: request?.image_moderation_enabled,
            max_aggregated_activities_length: request?.max_aggregated_activities_length,
            migrate_permissions_to_v2: request?.migrate_permissions_to_v2,
            moderation_enabled: request?.moderation_enabled,
            moderation_webhook_url: request?.moderation_webhook_url,
            multi_tenant_enabled: request?.multi_tenant_enabled,
            permission_version: request?.permission_version,
            reminders_interval: request?.reminders_interval,
            reminders_max_members: request?.reminders_max_members,
            revoke_tokens_issued_before: request?.revoke_tokens_issued_before,
            sns_key: request?.sns_key,
            sns_secret: request?.sns_secret,
            sns_topic_arn: request?.sns_topic_arn,
            sqs_key: request?.sqs_key,
            sqs_secret: request?.sqs_secret,
            sqs_url: request?.sqs_url,
            user_response_time_enabled: request?.user_response_time_enabled,
            webhook_url: request?.webhook_url,
            allowed_flag_reasons: request?.allowed_flag_reasons,
            event_hooks: request?.event_hooks,
            image_moderation_block_labels: request?.image_moderation_block_labels,
            image_moderation_labels: request?.image_moderation_labels,
            user_search_disallowed_roles: request?.user_search_disallowed_roles,
            webhook_events: request?.webhook_events,
            apn_config: request?.apn_config,
            async_moderation_config: request?.async_moderation_config,
            datadog_info: request?.datadog_info,
            file_upload_config: request?.file_upload_config,
            firebase_config: request?.firebase_config,
            grants: request?.grants,
            huawei_config: request?.huawei_config,
            image_upload_config: request?.image_upload_config,
            moderation_dashboard_preferences: request?.moderation_dashboard_preferences,
            push_config: request?.push_config,
            xiaomi_config: request?.xiaomi_config
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/app', undefined, undefined, body, 'application/json');
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async listBlockLists(request) {
        const queryParams = {
            team: request?.team
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/blocklists', undefined, queryParams);
        decoders.ListBlockListResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createBlockList(request) {
        const body = {
            name: request?.name,
            words: request?.words,
            is_leet_check_enabled: request?.is_leet_check_enabled,
            is_plural_check_enabled: request?.is_plural_check_enabled,
            team: request?.team,
            type: request?.type
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/blocklists', undefined, undefined, body, 'application/json');
        decoders.CreateBlockListResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteBlockList(request) {
        const queryParams = {
            team: request?.team
        };
        const pathParams = {
            name: request?.name
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/blocklists/{name}', pathParams, queryParams);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getBlockList(request) {
        const queryParams = {
            team: request?.team
        };
        const pathParams = {
            name: request?.name
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/blocklists/{name}', pathParams, queryParams);
        decoders.GetBlockListResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateBlockList(request) {
        const pathParams = {
            name: request?.name
        };
        const body = {
            is_leet_check_enabled: request?.is_leet_check_enabled,
            is_plural_check_enabled: request?.is_plural_check_enabled,
            team: request?.team,
            words: request?.words
        };
        const response = await this.apiClient.sendRequest('PUT', '/api/v2/blocklists/{name}', pathParams, undefined, body, 'application/json');
        decoders.UpdateBlockListResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async checkPush(request) {
        const body = {
            apn_template: request?.apn_template,
            event_type: request?.event_type,
            firebase_data_template: request?.firebase_data_template,
            firebase_template: request?.firebase_template,
            message_id: request?.message_id,
            push_provider_name: request?.push_provider_name,
            push_provider_type: request?.push_provider_type,
            skip_devices: request?.skip_devices,
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/check_push', undefined, undefined, body, 'application/json');
        decoders.CheckPushResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async checkSNS(request) {
        const body = {
            sns_key: request?.sns_key,
            sns_secret: request?.sns_secret,
            sns_topic_arn: request?.sns_topic_arn
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/check_sns', undefined, undefined, body, 'application/json');
        decoders.CheckSNSResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async checkSQS(request) {
        const body = {
            sqs_key: request?.sqs_key,
            sqs_secret: request?.sqs_secret,
            sqs_url: request?.sqs_url
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/check_sqs', undefined, undefined, body, 'application/json');
        decoders.CheckSQSResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteDevice(request) {
        const queryParams = {
            id: request?.id,
            user_id: request?.user_id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/devices', undefined, queryParams);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async listDevices(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/devices', undefined, queryParams);
        decoders.ListDevicesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createDevice(request) {
        const body = {
            id: request?.id,
            push_provider: request?.push_provider,
            push_provider_name: request?.push_provider_name,
            user_id: request?.user_id,
            voip_token: request?.voip_token,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/devices', undefined, undefined, body, 'application/json');
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async exportUsers(request) {
        const body = {
            user_ids: request?.user_ids
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/export/users', undefined, undefined, body, 'application/json');
        decoders.ExportUsersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async listExternalStorage() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/external_storage', undefined, undefined);
        decoders.ListExternalStorageResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createExternalStorage(request) {
        const body = {
            bucket: request?.bucket,
            name: request?.name,
            storage_type: request?.storage_type,
            gcs_credentials: request?.gcs_credentials,
            path: request?.path,
            aws_s3: request?.aws_s3,
            azure_blob: request?.azure_blob
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/external_storage', undefined, undefined, body, 'application/json');
        decoders.CreateExternalStorageResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteExternalStorage(request) {
        const pathParams = {
            name: request?.name
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/external_storage/{name}', pathParams, undefined);
        decoders.DeleteExternalStorageResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateExternalStorage(request) {
        const pathParams = {
            name: request?.name
        };
        const body = {
            bucket: request?.bucket,
            storage_type: request?.storage_type,
            gcs_credentials: request?.gcs_credentials,
            path: request?.path,
            aws_s3: request?.aws_s3,
            azure_blob: request?.azure_blob
        };
        const response = await this.apiClient.sendRequest('PUT', '/api/v2/external_storage/{name}', pathParams, undefined, body, 'application/json');
        decoders.UpdateExternalStorageResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async checkExternalStorage(request) {
        const pathParams = {
            name: request?.name
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/external_storage/{name}/check', pathParams, undefined);
        decoders.CheckExternalStorageResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createGuest(request) {
        const body = {
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/guest', undefined, undefined, body, 'application/json');
        decoders.CreateGuestResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createImportURL(request) {
        const body = {
            filename: request?.filename
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/import_urls', undefined, undefined, body, 'application/json');
        decoders.CreateImportURLResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async listImports() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/imports', undefined, undefined);
        decoders.ListImportsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createImport(request) {
        const body = {
            mode: request?.mode,
            path: request?.path
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/imports', undefined, undefined, body, 'application/json');
        decoders.CreateImportResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getImport(request) {
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/imports/{id}', pathParams, undefined);
        decoders.GetImportResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getOG(request) {
        const queryParams = {
            url: request?.url
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/og', undefined, queryParams);
        decoders.GetOGResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async listPermissions() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/permissions', undefined, undefined);
        decoders.ListPermissionsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getPermission(request) {
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/permissions/{id}', pathParams, undefined);
        decoders.GetCustomPermissionResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createPoll(request) {
        const body = {
            name: request?.name,
            allow_answers: request?.allow_answers,
            allow_user_suggested_options: request?.allow_user_suggested_options,
            description: request?.description,
            enforce_unique_vote: request?.enforce_unique_vote,
            id: request?.id,
            is_closed: request?.is_closed,
            max_votes_allowed: request?.max_votes_allowed,
            user_id: request?.user_id,
            voting_visibility: request?.voting_visibility,
            options: request?.options,
            custom: request?.custom,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/polls', undefined, undefined, body, 'application/json');
        decoders.PollResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updatePoll(request) {
        const body = {
            id: request?.id,
            name: request?.name,
            allow_answers: request?.allow_answers,
            allow_user_suggested_options: request?.allow_user_suggested_options,
            description: request?.description,
            enforce_unique_vote: request?.enforce_unique_vote,
            is_closed: request?.is_closed,
            max_votes_allowed: request?.max_votes_allowed,
            user_id: request?.user_id,
            voting_visibility: request?.voting_visibility,
            options: request?.options,
            custom: request?.custom,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('PUT', '/api/v2/polls', undefined, undefined, body, 'application/json');
        decoders.PollResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryPolls(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter: request?.filter
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/polls/query', undefined, queryParams, body, 'application/json');
        decoders.QueryPollsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deletePoll(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const pathParams = {
            poll_id: request?.poll_id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/polls/{poll_id}', pathParams, queryParams);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getPoll(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const pathParams = {
            poll_id: request?.poll_id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/polls/{poll_id}', pathParams, queryParams);
        decoders.PollResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updatePollPartial(request) {
        const pathParams = {
            poll_id: request?.poll_id
        };
        const body = {
            user_id: request?.user_id,
            unset: request?.unset,
            set: request?.set,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/polls/{poll_id}', pathParams, undefined, body, 'application/json');
        decoders.PollResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createPollOption(request) {
        const pathParams = {
            poll_id: request?.poll_id
        };
        const body = {
            text: request?.text,
            user_id: request?.user_id,
            custom: request?.custom,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/polls/{poll_id}/options', pathParams, undefined, body, 'application/json');
        decoders.PollOptionResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updatePollOption(request) {
        const pathParams = {
            poll_id: request?.poll_id
        };
        const body = {
            id: request?.id,
            text: request?.text,
            user_id: request?.user_id,
            custom: request?.custom,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('PUT', '/api/v2/polls/{poll_id}/options', pathParams, undefined, body, 'application/json');
        decoders.PollOptionResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deletePollOption(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const pathParams = {
            poll_id: request?.poll_id,
            option_id: request?.option_id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/polls/{poll_id}/options/{option_id}', pathParams, queryParams);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getPollOption(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const pathParams = {
            poll_id: request?.poll_id,
            option_id: request?.option_id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/polls/{poll_id}/options/{option_id}', pathParams, queryParams);
        decoders.PollOptionResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryPollVotes(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const pathParams = {
            poll_id: request?.poll_id
        };
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter: request?.filter
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/polls/{poll_id}/votes', pathParams, queryParams, body, 'application/json');
        decoders.PollVotesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updatePushNotificationPreferences(request) {
        const body = {
            preferences: request?.preferences
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/push_preferences', undefined, undefined, body, 'application/json');
        decoders.UpsertPushPreferencesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async listPushProviders() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/push_providers', undefined, undefined);
        decoders.ListPushProvidersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async upsertPushProvider(request) {
        const body = {
            push_provider: request?.push_provider
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/push_providers', undefined, undefined, body, 'application/json');
        decoders.UpsertPushProviderResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deletePushProvider(request) {
        const pathParams = {
            type: request?.type,
            name: request?.name
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/push_providers/{type}/{name}', pathParams, undefined);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getPushTemplates(request) {
        const queryParams = {
            push_provider_type: request?.push_provider_type,
            push_provider_name: request?.push_provider_name
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/push_templates', undefined, queryParams);
        decoders.GetPushTemplatesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async upsertPushTemplate(request) {
        const body = {
            event_type: request?.event_type,
            push_provider_type: request?.push_provider_type,
            enable_push: request?.enable_push,
            push_provider_name: request?.push_provider_name,
            template: request?.template
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/push_templates', undefined, undefined, body, 'application/json');
        decoders.UpsertPushTemplateResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getRateLimits(request) {
        const queryParams = {
            server_side: request?.server_side,
            android: request?.android,
            ios: request?.ios,
            web: request?.web,
            endpoints: request?.endpoints
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/rate_limits', undefined, queryParams);
        decoders.GetRateLimitsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async listRoles() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/roles', undefined, undefined);
        decoders.ListRolesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createRole(request) {
        const body = {
            name: request?.name
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/roles', undefined, undefined, body, 'application/json');
        decoders.CreateRoleResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteRole(request) {
        const pathParams = {
            name: request?.name
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/roles/{name}', pathParams, undefined);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getTask(request) {
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/tasks/{id}', pathParams, undefined);
        decoders.GetTaskResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteFile(request) {
        const queryParams = {
            url: request?.url
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/uploads/file', undefined, queryParams);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async uploadFile(request) {
        const body = {
            file: request?.file,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/uploads/file', undefined, undefined, body, 'multipart/form-data');
        decoders.FileUploadResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteImage(request) {
        const queryParams = {
            url: request?.url
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/uploads/image', undefined, queryParams);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async uploadImage(request) {
        const body = {
            file: request?.file,
            upload_sizes: request?.upload_sizes,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/uploads/image', undefined, undefined, body, 'multipart/form-data');
        decoders.ImageUploadResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryUsers(request) {
        const queryParams = {
            payload: request?.payload
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/users', undefined, queryParams);
        decoders.QueryUsersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateUsersPartial(request) {
        const body = {
            users: request?.users
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/users', undefined, undefined, body, 'application/json');
        decoders.UpdateUsersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateUsers(request) {
        const body = {
            users: request?.users
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/users', undefined, undefined, body, 'application/json');
        decoders.UpdateUsersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getBlockedUsers(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/users/block', undefined, queryParams);
        decoders.GetBlockedUsersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async blockUsers(request) {
        const body = {
            blocked_user_id: request?.blocked_user_id,
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/users/block', undefined, undefined, body, 'application/json');
        decoders.BlockUsersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deactivateUsers(request) {
        const body = {
            user_ids: request?.user_ids,
            created_by_id: request?.created_by_id,
            mark_channels_deleted: request?.mark_channels_deleted,
            mark_messages_deleted: request?.mark_messages_deleted
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/users/deactivate', undefined, undefined, body, 'application/json');
        decoders.DeactivateUsersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteUsers(request) {
        const body = {
            user_ids: request?.user_ids,
            calls: request?.calls,
            conversations: request?.conversations,
            files: request?.files,
            messages: request?.messages,
            new_call_owner_id: request?.new_call_owner_id,
            new_channel_owner_id: request?.new_channel_owner_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/users/delete', undefined, undefined, body, 'application/json');
        decoders.DeleteUsersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getUserLiveLocations(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/users/live_locations', undefined, queryParams);
        decoders.SharedLocationsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateLiveLocation(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const body = {
            message_id: request?.message_id,
            end_at: request?.end_at,
            latitude: request?.latitude,
            longitude: request?.longitude
        };
        const response = await this.apiClient.sendRequest('PUT', '/api/v2/users/live_locations', undefined, queryParams, body, 'application/json');
        decoders.SharedLocationResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async reactivateUsers(request) {
        const body = {
            user_ids: request?.user_ids,
            created_by_id: request?.created_by_id,
            restore_channels: request?.restore_channels,
            restore_messages: request?.restore_messages
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/users/reactivate', undefined, undefined, body, 'application/json');
        decoders.ReactivateUsersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async restoreUsers(request) {
        const body = {
            user_ids: request?.user_ids
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/users/restore', undefined, undefined, body, 'application/json');
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async unblockUsers(request) {
        const body = {
            blocked_user_id: request?.blocked_user_id,
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/users/unblock', undefined, undefined, body, 'application/json');
        decoders.UnblockUsersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deactivateUser(request) {
        const pathParams = {
            user_id: request?.user_id
        };
        const body = {
            created_by_id: request?.created_by_id,
            mark_messages_deleted: request?.mark_messages_deleted
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/users/{user_id}/deactivate', pathParams, undefined, body, 'application/json');
        decoders.DeactivateUserResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async exportUser(request) {
        const pathParams = {
            user_id: request?.user_id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/users/{user_id}/export', pathParams, undefined);
        decoders.ExportUserResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async reactivateUser(request) {
        const pathParams = {
            user_id: request?.user_id
        };
        const body = {
            created_by_id: request?.created_by_id,
            name: request?.name,
            restore_messages: request?.restore_messages
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/users/{user_id}/reactivate', pathParams, undefined, body, 'application/json');
        decoders.ReactivateUserResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
}
class VideoApi {
    constructor(apiClient){
        this.apiClient = apiClient;
    }
    async getActiveCallsStatus() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/video/active_calls_status', undefined, undefined);
        decoders.GetActiveCallsStatusResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryUserFeedback(request) {
        const queryParams = {
            full: request?.full
        };
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter_conditions: request?.filter_conditions
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/feedback', undefined, queryParams, body, 'application/json');
        decoders.QueryUserFeedbackResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryCallMembers(request) {
        const body = {
            id: request?.id,
            type: request?.type,
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter_conditions: request?.filter_conditions
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/members', undefined, undefined, body, 'application/json');
        decoders.QueryCallMembersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryCallStats(request) {
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter_conditions: request?.filter_conditions
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/stats', undefined, undefined, body, 'application/json');
        decoders.QueryCallStatsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getCall(request) {
        const queryParams = {
            members_limit: request?.members_limit,
            ring: request?.ring,
            notify: request?.notify,
            video: request?.video
        };
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/video/call/{type}/{id}', pathParams, queryParams);
        decoders.GetCallResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateCall(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            starts_at: request?.starts_at,
            custom: request?.custom,
            settings_override: request?.settings_override
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/video/call/{type}/{id}', pathParams, undefined, body, 'application/json');
        decoders.UpdateCallResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getOrCreateCall(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            members_limit: request?.members_limit,
            notify: request?.notify,
            ring: request?.ring,
            video: request?.video,
            data: request?.data
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}', pathParams, undefined, body, 'application/json');
        decoders.GetOrCreateCallResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async blockUser(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            user_id: request?.user_id
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/block', pathParams, undefined, body, 'application/json');
        decoders.BlockUserResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async sendClosedCaption(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            speaker_id: request?.speaker_id,
            text: request?.text,
            end_time: request?.end_time,
            language: request?.language,
            service: request?.service,
            start_time: request?.start_time,
            translated: request?.translated,
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/closed_captions', pathParams, undefined, body, 'application/json');
        decoders.SendClosedCaptionResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteCall(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            hard: request?.hard
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/delete', pathParams, undefined, body, 'application/json');
        decoders.DeleteCallResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async sendCallEvent(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            user_id: request?.user_id,
            custom: request?.custom,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/event', pathParams, undefined, body, 'application/json');
        decoders.SendCallEventResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async collectUserFeedback(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            rating: request?.rating,
            sdk: request?.sdk,
            sdk_version: request?.sdk_version,
            reason: request?.reason,
            user_session_id: request?.user_session_id,
            custom: request?.custom
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/feedback', pathParams, undefined, body, 'application/json');
        decoders.CollectUserFeedbackResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async goLive(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            recording_storage_name: request?.recording_storage_name,
            start_closed_caption: request?.start_closed_caption,
            start_hls: request?.start_hls,
            start_recording: request?.start_recording,
            start_transcription: request?.start_transcription,
            transcription_storage_name: request?.transcription_storage_name
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/go_live', pathParams, undefined, body, 'application/json');
        decoders.GoLiveResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async kickUser(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            user_id: request?.user_id,
            block: request?.block,
            kicked_by_id: request?.kicked_by_id,
            kicked_by: request?.kicked_by
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/kick', pathParams, undefined, body, 'application/json');
        decoders.KickUserResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async endCall(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/mark_ended', pathParams, undefined);
        decoders.EndCallResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateCallMembers(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            remove_members: request?.remove_members,
            update_members: request?.update_members
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/members', pathParams, undefined, body, 'application/json');
        decoders.UpdateCallMembersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async muteUsers(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            audio: request?.audio,
            mute_all_users: request?.mute_all_users,
            muted_by_id: request?.muted_by_id,
            screenshare: request?.screenshare,
            screenshare_audio: request?.screenshare_audio,
            video: request?.video,
            user_ids: request?.user_ids,
            muted_by: request?.muted_by
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/mute_users', pathParams, undefined, body, 'application/json');
        decoders.MuteUsersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryCallParticipants(request) {
        const queryParams = {
            limit: request?.limit
        };
        const pathParams = {
            id: request?.id,
            type: request?.type
        };
        const body = {
            filter_conditions: request?.filter_conditions
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/participants', pathParams, queryParams, body, 'application/json');
        decoders.QueryCallParticipantsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async videoPin(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            session_id: request?.session_id,
            user_id: request?.user_id
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/pin', pathParams, undefined, body, 'application/json');
        decoders.PinResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async listRecordings(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/video/call/{type}/{id}/recordings', pathParams, undefined);
        decoders.ListRecordingsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getCallReport(request) {
        const queryParams = {
            session_id: request?.session_id
        };
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/video/call/{type}/{id}/report', pathParams, queryParams);
        decoders.GetCallReportResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async startRTMPBroadcasts(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            broadcasts: request?.broadcasts
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/rtmp_broadcasts', pathParams, undefined, body, 'application/json');
        decoders.StartRTMPBroadcastsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async stopAllRTMPBroadcasts(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/rtmp_broadcasts/stop', pathParams, undefined);
        decoders.StopAllRTMPBroadcastsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async stopRTMPBroadcast(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id,
            name: request?.name
        };
        const body = {};
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/rtmp_broadcasts/{name}/stop', pathParams, undefined, body, 'application/json');
        decoders.StopRTMPBroadcastsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async startHLSBroadcasting(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/start_broadcasting', pathParams, undefined);
        decoders.StartHLSBroadcastingResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async startClosedCaptions(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            enable_transcription: request?.enable_transcription,
            external_storage: request?.external_storage,
            language: request?.language,
            speech_segment_config: request?.speech_segment_config
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/start_closed_captions', pathParams, undefined, body, 'application/json');
        decoders.StartClosedCaptionsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async startFrameRecording(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            recording_external_storage: request?.recording_external_storage
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/start_frame_recording', pathParams, undefined, body, 'application/json');
        decoders.StartFrameRecordingResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async startRecording(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            recording_external_storage: request?.recording_external_storage
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/start_recording', pathParams, undefined, body, 'application/json');
        decoders.StartRecordingResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async startTranscription(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            enable_closed_captions: request?.enable_closed_captions,
            language: request?.language,
            transcription_external_storage: request?.transcription_external_storage
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/start_transcription', pathParams, undefined, body, 'application/json');
        decoders.StartTranscriptionResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async stopHLSBroadcasting(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/stop_broadcasting', pathParams, undefined);
        decoders.StopHLSBroadcastingResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async stopClosedCaptions(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            stop_transcription: request?.stop_transcription
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/stop_closed_captions', pathParams, undefined, body, 'application/json');
        decoders.StopClosedCaptionsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async stopFrameRecording(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/stop_frame_recording', pathParams, undefined);
        decoders.StopFrameRecordingResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async stopLive(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            continue_closed_caption: request?.continue_closed_caption,
            continue_hls: request?.continue_hls,
            continue_recording: request?.continue_recording,
            continue_rtmp_broadcasts: request?.continue_rtmp_broadcasts,
            continue_transcription: request?.continue_transcription
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/stop_live', pathParams, undefined, body, 'application/json');
        decoders.StopLiveResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async stopRecording(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/stop_recording', pathParams, undefined);
        decoders.StopRecordingResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async stopTranscription(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            stop_closed_captions: request?.stop_closed_captions
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/stop_transcription', pathParams, undefined, body, 'application/json');
        decoders.StopTranscriptionResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async listTranscriptions(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/video/call/{type}/{id}/transcriptions', pathParams, undefined);
        decoders.ListTranscriptionsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async unblockUser(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            user_id: request?.user_id
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/unblock', pathParams, undefined, body, 'application/json');
        decoders.UnblockUserResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async videoUnpin(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            session_id: request?.session_id,
            user_id: request?.user_id
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/unpin', pathParams, undefined, body, 'application/json');
        decoders.UnpinResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateUserPermissions(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            user_id: request?.user_id,
            grant_permissions: request?.grant_permissions,
            revoke_permissions: request?.revoke_permissions
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/call/{type}/{id}/user_permissions', pathParams, undefined, body, 'application/json');
        decoders.UpdateUserPermissionsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteRecording(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id,
            session: request?.session,
            filename: request?.filename
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/video/call/{type}/{id}/{session}/recordings/{filename}', pathParams, undefined);
        decoders.DeleteRecordingResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteTranscription(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id,
            session: request?.session,
            filename: request?.filename
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/video/call/{type}/{id}/{session}/transcriptions/{filename}', pathParams, undefined);
        decoders.DeleteTranscriptionResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getCallSessionParticipantStatsDetails(request) {
        const queryParams = {
            since: request?.since,
            until: request?.until,
            max_points: request?.max_points
        };
        const pathParams = {
            call_type: request?.call_type,
            call_id: request?.call_id,
            session: request?.session,
            user: request?.user,
            user_session: request?.user_session
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/video/call_stats/{call_type}/{call_id}/{session}/participant/{user}/{user_session}/details', pathParams, queryParams);
        decoders.GetCallSessionParticipantStatsDetailsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryCallSessionParticipantStats(request) {
        const queryParams = {
            sort: request?.sort,
            filter_conditions: request?.filter_conditions
        };
        const pathParams = {
            call_type: request?.call_type,
            call_id: request?.call_id,
            session: request?.session
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/video/call_stats/{call_type}/{call_id}/{session}/participants', pathParams, queryParams);
        decoders.QueryCallSessionParticipantStatsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getCallSessionParticipantStatsTimeline(request) {
        const queryParams = {
            start_time: request?.start_time,
            end_time: request?.end_time,
            severity: request?.severity
        };
        const pathParams = {
            call_type: request?.call_type,
            call_id: request?.call_id,
            session: request?.session,
            user: request?.user,
            user_session: request?.user_session
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/video/call_stats/{call_type}/{call_id}/{session}/participants/{user}/{user_session}/timeline', pathParams, queryParams);
        decoders.QueryCallSessionParticipantStatsTimelineResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryCalls(request) {
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter_conditions: request?.filter_conditions
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/calls', undefined, undefined, body, 'application/json');
        decoders.QueryCallsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async listCallTypes() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/video/calltypes', undefined, undefined);
        decoders.ListCallTypeResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createCallType(request) {
        const body = {
            name: request?.name,
            external_storage: request?.external_storage,
            grants: request?.grants,
            notification_settings: request?.notification_settings,
            settings: request?.settings
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/calltypes', undefined, undefined, body, 'application/json');
        decoders.CreateCallTypeResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteCallType(request) {
        const pathParams = {
            name: request?.name
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/video/calltypes/{name}', pathParams, undefined);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getCallType(request) {
        const pathParams = {
            name: request?.name
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/video/calltypes/{name}', pathParams, undefined);
        decoders.GetCallTypeResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateCallType(request) {
        const pathParams = {
            name: request?.name
        };
        const body = {
            external_storage: request?.external_storage,
            grants: request?.grants,
            notification_settings: request?.notification_settings,
            settings: request?.settings
        };
        const response = await this.apiClient.sendRequest('PUT', '/api/v2/video/calltypes/{name}', pathParams, undefined, body, 'application/json');
        decoders.UpdateCallTypeResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getEdges() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/video/edges', undefined, undefined);
        decoders.GetEdgesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryAggregateCallStats(request) {
        const body = {
            from: request?.from,
            to: request?.to,
            report_types: request?.report_types
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/video/stats', undefined, undefined, body, 'application/json');
        decoders.QueryAggregateCallStatsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
}
class CallApi {
    constructor(videoApi, type, id){
        this.videoApi = videoApi;
        this.type = type;
        this.id = id;
    }
    get(request) {
        return this.videoApi.getCall({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    update(request) {
        return this.videoApi.updateCall({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    getOrCreate(request) {
        return this.videoApi.getOrCreateCall({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    blockUser(request) {
        return this.videoApi.blockUser({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    sendClosedCaption(request) {
        return this.videoApi.sendClosedCaption({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    delete(request) {
        return this.videoApi.deleteCall({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    sendCallEvent(request) {
        return this.videoApi.sendCallEvent({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    collectUserFeedback(request) {
        return this.videoApi.collectUserFeedback({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    goLive(request) {
        return this.videoApi.goLive({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    kickUser(request) {
        return this.videoApi.kickUser({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    end() {
        return this.videoApi.endCall({
            id: this.id,
            type: this.type
        });
    }
    updateCallMembers(request) {
        return this.videoApi.updateCallMembers({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    muteUsers(request) {
        return this.videoApi.muteUsers({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    queryCallParticipants(request) {
        return this.videoApi.queryCallParticipants({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    videoPin(request) {
        return this.videoApi.videoPin({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    listRecordings() {
        return this.videoApi.listRecordings({
            id: this.id,
            type: this.type
        });
    }
    getCallReport(request) {
        return this.videoApi.getCallReport({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    startRTMPBroadcasts(request) {
        return this.videoApi.startRTMPBroadcasts({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    stopAllRTMPBroadcasts() {
        return this.videoApi.stopAllRTMPBroadcasts({
            id: this.id,
            type: this.type
        });
    }
    stopRTMPBroadcast(request) {
        return this.videoApi.stopRTMPBroadcast({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    startHLSBroadcasting() {
        return this.videoApi.startHLSBroadcasting({
            id: this.id,
            type: this.type
        });
    }
    startClosedCaptions(request) {
        return this.videoApi.startClosedCaptions({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    startFrameRecording(request) {
        return this.videoApi.startFrameRecording({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    startRecording(request) {
        return this.videoApi.startRecording({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    startTranscription(request) {
        return this.videoApi.startTranscription({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    stopHLSBroadcasting() {
        return this.videoApi.stopHLSBroadcasting({
            id: this.id,
            type: this.type
        });
    }
    stopClosedCaptions(request) {
        return this.videoApi.stopClosedCaptions({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    stopFrameRecording() {
        return this.videoApi.stopFrameRecording({
            id: this.id,
            type: this.type
        });
    }
    stopLive(request) {
        return this.videoApi.stopLive({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    stopRecording() {
        return this.videoApi.stopRecording({
            id: this.id,
            type: this.type
        });
    }
    stopTranscription(request) {
        return this.videoApi.stopTranscription({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    listTranscriptions() {
        return this.videoApi.listTranscriptions({
            id: this.id,
            type: this.type
        });
    }
    unblockUser(request) {
        return this.videoApi.unblockUser({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    videoUnpin(request) {
        return this.videoApi.videoUnpin({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    updateUserPermissions(request) {
        return this.videoApi.updateUserPermissions({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    deleteRecording(request) {
        return this.videoApi.deleteRecording({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    deleteTranscription(request) {
        return this.videoApi.deleteTranscription({
            id: this.id,
            type: this.type,
            ...request
        });
    }
}
class StreamCall extends CallApi {
    constructor(videoApi, type, id, streamClient){
        super(videoApi, type, id);
        this.type = type;
        this.id = id;
        this.streamClient = streamClient;
        this.create = (request)=>this.getOrCreate(request);
        this.queryMembers = (request)=>{
            return this.videoApi.queryCallMembers({
                id: this.id,
                type: this.type,
                ...request ?? {}
            });
        };
        this.getOrCreate = async (request)=>{
            const response = await super.getOrCreate(request);
            this.data = response.call;
            return response;
        };
        this.get = async ()=>{
            const response = await super.get();
            this.data = response.call;
            return response;
        };
        this.createSRTCredentials = (userID)=>{
            if (!this.data) {
                throw new Error('Object is not initialized, call get() or getOrCreate() first');
            }
            const token = this.streamClient.generatePermanentUserToken({
                user_id: userID
            });
            const segments = token.split('.');
            if (segments.length !== 3) {
                throw new Error('Invalid token format');
            }
            return {
                address: this.data.ingress.srt.address.replace('{passphrase}', segments[2]).replace('{token}', token)
            };
        };
    }
    get cid() {
        return `${this.type}:${this.id}`;
    }
}
class StreamVideoClient extends VideoApi {
    constructor({ streamClient, apiClient }){
        super(apiClient);
        this.call = (type, id)=>{
            return new StreamCall(this, type, id, this.streamClient);
        };
        this.connectOpenAi = async (options)=>{
            let doCreateRealtimeClient;
            try {
                doCreateRealtimeClient = (await (()=>{
                    const e = new Error("Cannot find module '@stream-io/openai-realtime-api'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                })()).createRealtimeClient;
            } catch  {
                throw new Error('Cannot create Realtime API client. Is @stream-io/openai-realtime-api installed?');
            }
            if (!options.agentUserId) {
                throw new Error('"agentUserId" must by specified in options');
            }
            const token = this.streamClient.generateCallToken({
                user_id: options.agentUserId,
                call_cids: [
                    options.call.cid
                ],
                validity_in_seconds: options.validityInSeconds
            });
            const realtimeClient = doCreateRealtimeClient({
                baseUrl: this.streamClient.apiClient.apiConfig.baseUrl,
                call: options.call,
                streamApiKey: this.streamClient.apiClient.apiConfig.apiKey,
                streamUserToken: token,
                openAiApiKey: options.openAiApiKey,
                model: options.model
            });
            await realtimeClient.connect();
            return realtimeClient;
        };
        this.streamClient = streamClient;
    }
}
class ChatApi {
    constructor(apiClient){
        this.apiClient = apiClient;
    }
    async queryCampaigns(request) {
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            user_limit: request?.user_limit,
            sort: request?.sort,
            filter: request?.filter
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/campaigns/query', undefined, undefined, body, 'application/json');
        decoders.QueryCampaignsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getCampaign(request) {
        const queryParams = {
            prev: request?.prev,
            next: request?.next,
            limit: request?.limit
        };
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/campaigns/{id}', pathParams, queryParams);
        decoders.GetCampaignResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async startCampaign(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            scheduled_for: request?.scheduled_for,
            stop_at: request?.stop_at
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/campaigns/{id}/start', pathParams, undefined, body, 'application/json');
        decoders.StartCampaignResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async scheduleCampaign(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {};
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/campaigns/{id}/stop', pathParams, undefined, body, 'application/json');
        decoders.CampaignResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryChannels(request) {
        const body = {
            limit: request?.limit,
            member_limit: request?.member_limit,
            message_limit: request?.message_limit,
            offset: request?.offset,
            state: request?.state,
            user_id: request?.user_id,
            sort: request?.sort,
            filter_conditions: request?.filter_conditions,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channels', undefined, undefined, body, 'application/json');
        decoders.QueryChannelsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteChannels(request) {
        const body = {
            cids: request?.cids,
            hard_delete: request?.hard_delete
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channels/delete', undefined, undefined, body, 'application/json');
        decoders.DeleteChannelsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async markChannelsRead(request) {
        const body = {
            user_id: request?.user_id,
            read_by_channel: request?.read_by_channel,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channels/read', undefined, undefined, body, 'application/json');
        decoders.MarkReadResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getOrCreateDistinctChannel(request) {
        const pathParams = {
            type: request?.type
        };
        const body = {
            hide_for_creator: request?.hide_for_creator,
            state: request?.state,
            thread_unread_counts: request?.thread_unread_counts,
            data: request?.data,
            members: request?.members,
            messages: request?.messages,
            watchers: request?.watchers
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channels/{type}/query', pathParams, undefined, body, 'application/json');
        decoders.ChannelStateResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteChannel(request) {
        const queryParams = {
            hard_delete: request?.hard_delete
        };
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/chat/channels/{type}/{id}', pathParams, queryParams);
        decoders.DeleteChannelResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateChannelPartial(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            user_id: request?.user_id,
            unset: request?.unset,
            set: request?.set,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/chat/channels/{type}/{id}', pathParams, undefined, body, 'application/json');
        decoders.UpdateChannelPartialResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateChannel(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            accept_invite: request?.accept_invite,
            cooldown: request?.cooldown,
            hide_history: request?.hide_history,
            reject_invite: request?.reject_invite,
            skip_push: request?.skip_push,
            user_id: request?.user_id,
            add_members: request?.add_members,
            add_moderators: request?.add_moderators,
            assign_roles: request?.assign_roles,
            demote_moderators: request?.demote_moderators,
            invites: request?.invites,
            remove_members: request?.remove_members,
            data: request?.data,
            message: request?.message,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}', pathParams, undefined, body, 'application/json');
        decoders.UpdateChannelResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteDraft(request) {
        const queryParams = {
            parent_id: request?.parent_id,
            user_id: request?.user_id
        };
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/chat/channels/{type}/{id}/draft', pathParams, queryParams);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getDraft(request) {
        const queryParams = {
            parent_id: request?.parent_id,
            user_id: request?.user_id
        };
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/channels/{type}/{id}/draft', pathParams, queryParams);
        decoders.GetDraftResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async sendEvent(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            event: request?.event
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/event', pathParams, undefined, body, 'application/json');
        decoders.EventResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteChannelFile(request) {
        const queryParams = {
            url: request?.url
        };
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/chat/channels/{type}/{id}/file', pathParams, queryParams);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async uploadChannelFile(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            file: request?.file,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/file', pathParams, undefined, body, 'multipart/form-data');
        decoders.UploadChannelFileResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async hideChannel(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            clear_history: request?.clear_history,
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/hide', pathParams, undefined, body, 'application/json');
        decoders.HideChannelResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteChannelImage(request) {
        const queryParams = {
            url: request?.url
        };
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/chat/channels/{type}/{id}/image', pathParams, queryParams);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async uploadChannelImage(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            file: request?.file,
            upload_sizes: request?.upload_sizes,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/image', pathParams, undefined, body, 'multipart/form-data');
        decoders.UploadChannelResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateMemberPartial(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            unset: request?.unset,
            set: request?.set
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/chat/channels/{type}/{id}/member', pathParams, queryParams, body, 'application/json');
        decoders.UpdateMemberPartialResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async sendMessage(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            message: request?.message,
            force_moderation: request?.force_moderation,
            keep_channel_hidden: request?.keep_channel_hidden,
            pending: request?.pending,
            skip_enrich_url: request?.skip_enrich_url,
            skip_push: request?.skip_push,
            pending_message_metadata: request?.pending_message_metadata
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/message', pathParams, undefined, body, 'application/json');
        decoders.SendMessageResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getManyMessages(request) {
        const queryParams = {
            ids: request?.ids
        };
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/channels/{type}/{id}/messages', pathParams, queryParams);
        decoders.GetManyMessagesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getOrCreateChannel(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            hide_for_creator: request?.hide_for_creator,
            state: request?.state,
            thread_unread_counts: request?.thread_unread_counts,
            data: request?.data,
            members: request?.members,
            messages: request?.messages,
            watchers: request?.watchers
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/query', pathParams, undefined, body, 'application/json');
        decoders.ChannelStateResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async markRead(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            message_id: request?.message_id,
            thread_id: request?.thread_id,
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/read', pathParams, undefined, body, 'application/json');
        decoders.MarkReadResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async showChannel(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/show', pathParams, undefined, body, 'application/json');
        decoders.ShowChannelResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async truncateChannel(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            hard_delete: request?.hard_delete,
            skip_push: request?.skip_push,
            truncated_at: request?.truncated_at,
            user_id: request?.user_id,
            member_ids: request?.member_ids,
            message: request?.message,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/truncate', pathParams, undefined, body, 'application/json');
        decoders.TruncateChannelResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async markUnread(request) {
        const pathParams = {
            type: request?.type,
            id: request?.id
        };
        const body = {
            message_id: request?.message_id,
            thread_id: request?.thread_id,
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/unread', pathParams, undefined, body, 'application/json');
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async listChannelTypes() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/channeltypes', undefined, undefined);
        decoders.ListChannelTypesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createChannelType(request) {
        const body = {
            automod: request?.automod,
            automod_behavior: request?.automod_behavior,
            max_message_length: request?.max_message_length,
            name: request?.name,
            blocklist: request?.blocklist,
            blocklist_behavior: request?.blocklist_behavior,
            connect_events: request?.connect_events,
            count_messages: request?.count_messages,
            custom_events: request?.custom_events,
            delivery_events: request?.delivery_events,
            mark_messages_pending: request?.mark_messages_pending,
            message_retention: request?.message_retention,
            mutes: request?.mutes,
            partition_size: request?.partition_size,
            partition_ttl: request?.partition_ttl,
            polls: request?.polls,
            push_notifications: request?.push_notifications,
            reactions: request?.reactions,
            read_events: request?.read_events,
            replies: request?.replies,
            search: request?.search,
            shared_locations: request?.shared_locations,
            skip_last_msg_update_for_system_msgs: request?.skip_last_msg_update_for_system_msgs,
            typing_events: request?.typing_events,
            uploads: request?.uploads,
            url_enrichment: request?.url_enrichment,
            user_message_reminders: request?.user_message_reminders,
            blocklists: request?.blocklists,
            commands: request?.commands,
            permissions: request?.permissions,
            grants: request?.grants
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/channeltypes', undefined, undefined, body, 'application/json');
        decoders.CreateChannelTypeResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteChannelType(request) {
        const pathParams = {
            name: request?.name
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/chat/channeltypes/{name}', pathParams, undefined);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getChannelType(request) {
        const pathParams = {
            name: request?.name
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/channeltypes/{name}', pathParams, undefined);
        decoders.GetChannelTypeResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateChannelType(request) {
        const pathParams = {
            name: request?.name
        };
        const body = {
            automod: request?.automod,
            automod_behavior: request?.automod_behavior,
            max_message_length: request?.max_message_length,
            blocklist: request?.blocklist,
            blocklist_behavior: request?.blocklist_behavior,
            connect_events: request?.connect_events,
            count_messages: request?.count_messages,
            custom_events: request?.custom_events,
            delivery_events: request?.delivery_events,
            mark_messages_pending: request?.mark_messages_pending,
            mutes: request?.mutes,
            partition_size: request?.partition_size,
            partition_ttl: request?.partition_ttl,
            polls: request?.polls,
            push_notifications: request?.push_notifications,
            quotes: request?.quotes,
            reactions: request?.reactions,
            read_events: request?.read_events,
            reminders: request?.reminders,
            replies: request?.replies,
            search: request?.search,
            shared_locations: request?.shared_locations,
            skip_last_msg_update_for_system_msgs: request?.skip_last_msg_update_for_system_msgs,
            typing_events: request?.typing_events,
            uploads: request?.uploads,
            url_enrichment: request?.url_enrichment,
            user_message_reminders: request?.user_message_reminders,
            allowed_flag_reasons: request?.allowed_flag_reasons,
            blocklists: request?.blocklists,
            commands: request?.commands,
            permissions: request?.permissions,
            automod_thresholds: request?.automod_thresholds,
            grants: request?.grants
        };
        const response = await this.apiClient.sendRequest('PUT', '/api/v2/chat/channeltypes/{name}', pathParams, undefined, body, 'application/json');
        decoders.UpdateChannelTypeResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async listCommands() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/commands', undefined, undefined);
        decoders.ListCommandsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createCommand(request) {
        const body = {
            description: request?.description,
            name: request?.name,
            args: request?.args,
            set: request?.set
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/commands', undefined, undefined, body, 'application/json');
        decoders.CreateCommandResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteCommand(request) {
        const pathParams = {
            name: request?.name
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/chat/commands/{name}', pathParams, undefined);
        decoders.DeleteCommandResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getCommand(request) {
        const pathParams = {
            name: request?.name
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/commands/{name}', pathParams, undefined);
        decoders.GetCommandResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateCommand(request) {
        const pathParams = {
            name: request?.name
        };
        const body = {
            description: request?.description,
            args: request?.args,
            set: request?.set
        };
        const response = await this.apiClient.sendRequest('PUT', '/api/v2/chat/commands/{name}', pathParams, undefined, body, 'application/json');
        decoders.UpdateCommandResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryDrafts(request) {
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            user_id: request?.user_id,
            sort: request?.sort,
            filter: request?.filter,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/drafts/query', undefined, undefined, body, 'application/json');
        decoders.QueryDraftsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async exportChannels(request) {
        const body = {
            channels: request?.channels,
            clear_deleted_message_text: request?.clear_deleted_message_text,
            export_users: request?.export_users,
            include_soft_deleted_channels: request?.include_soft_deleted_channels,
            include_truncated_messages: request?.include_truncated_messages,
            version: request?.version
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/export_channels', undefined, undefined, body, 'application/json');
        decoders.ExportChannelsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryMembers(request) {
        const queryParams = {
            payload: request?.payload
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/members', undefined, queryParams);
        decoders.MembersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryMessageHistory(request) {
        const body = {
            filter: request?.filter,
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/messages/history', undefined, undefined, body, 'application/json');
        decoders.QueryMessageHistoryResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteMessage(request) {
        const queryParams = {
            hard: request?.hard,
            deleted_by: request?.deleted_by,
            delete_for_me: request?.delete_for_me
        };
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/chat/messages/{id}', pathParams, queryParams);
        decoders.DeleteMessageResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getMessage(request) {
        const queryParams = {
            show_deleted_message: request?.show_deleted_message
        };
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/messages/{id}', pathParams, queryParams);
        decoders.GetMessageResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateMessage(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            message: request?.message,
            skip_enrich_url: request?.skip_enrich_url,
            skip_push: request?.skip_push
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/messages/{id}', pathParams, undefined, body, 'application/json');
        decoders.UpdateMessageResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateMessagePartial(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            skip_enrich_url: request?.skip_enrich_url,
            user_id: request?.user_id,
            unset: request?.unset,
            set: request?.set,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('PUT', '/api/v2/chat/messages/{id}', pathParams, undefined, body, 'application/json');
        decoders.UpdateMessagePartialResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async runMessageAction(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            form_data: request?.form_data,
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/messages/{id}/action', pathParams, undefined, body, 'application/json');
        decoders.MessageResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async commitMessage(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {};
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/messages/{id}/commit', pathParams, undefined, body, 'application/json');
        decoders.MessageResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async ephemeralMessageUpdate(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            skip_enrich_url: request?.skip_enrich_url,
            user_id: request?.user_id,
            unset: request?.unset,
            set: request?.set,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/chat/messages/{id}/ephemeral', pathParams, undefined, body, 'application/json');
        decoders.UpdateMessagePartialResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async sendReaction(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            reaction: request?.reaction,
            enforce_unique: request?.enforce_unique,
            skip_push: request?.skip_push
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/messages/{id}/reaction', pathParams, undefined, body, 'application/json');
        decoders.SendReactionResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteReaction(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const pathParams = {
            id: request?.id,
            type: request?.type
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/chat/messages/{id}/reaction/{type}', pathParams, queryParams);
        decoders.DeleteReactionResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getReactions(request) {
        const queryParams = {
            limit: request?.limit,
            offset: request?.offset
        };
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/messages/{id}/reactions', pathParams, queryParams);
        decoders.GetReactionsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryReactions(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            user_id: request?.user_id,
            sort: request?.sort,
            filter: request?.filter,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/messages/{id}/reactions', pathParams, undefined, body, 'application/json');
        decoders.QueryReactionsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async translateMessage(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            language: request?.language
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/messages/{id}/translate', pathParams, undefined, body, 'application/json');
        decoders.MessageResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async undeleteMessage(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            message: request?.message,
            skip_enrich_url: request?.skip_enrich_url,
            skip_push: request?.skip_push
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/messages/{id}/undelete', pathParams, undefined, body, 'application/json');
        decoders.UpdateMessageResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async castPollVote(request) {
        const pathParams = {
            message_id: request?.message_id,
            poll_id: request?.poll_id
        };
        const body = {
            user_id: request?.user_id,
            user: request?.user,
            vote: request?.vote
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/messages/{message_id}/polls/{poll_id}/vote', pathParams, undefined, body, 'application/json');
        decoders.PollVoteResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deletePollVote(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const pathParams = {
            message_id: request?.message_id,
            poll_id: request?.poll_id,
            vote_id: request?.vote_id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/chat/messages/{message_id}/polls/{poll_id}/vote/{vote_id}', pathParams, queryParams);
        decoders.PollVoteResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteReminder(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const pathParams = {
            message_id: request?.message_id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/chat/messages/{message_id}/reminders', pathParams, queryParams);
        decoders.DeleteReminderResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateReminder(request) {
        const pathParams = {
            message_id: request?.message_id
        };
        const body = {
            remind_at: request?.remind_at,
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/chat/messages/{message_id}/reminders', pathParams, undefined, body, 'application/json');
        decoders.UpdateReminderResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createReminder(request) {
        const pathParams = {
            message_id: request?.message_id
        };
        const body = {
            remind_at: request?.remind_at,
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/messages/{message_id}/reminders', pathParams, undefined, body, 'application/json');
        decoders.ReminderResponseData?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getReplies(request) {
        const queryParams = {
            limit: request?.limit,
            id_gte: request?.id_gte,
            id_gt: request?.id_gt,
            id_lte: request?.id_lte,
            id_lt: request?.id_lt,
            id_around: request?.id_around,
            sort: request?.sort
        };
        const pathParams = {
            parent_id: request?.parent_id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/messages/{parent_id}/replies', pathParams, queryParams);
        decoders.GetRepliesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryMessageFlags(request) {
        const queryParams = {
            payload: request?.payload
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/moderation/flags/message', undefined, queryParams);
        decoders.QueryMessageFlagsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async muteChannel(request) {
        const body = {
            expiration: request?.expiration,
            user_id: request?.user_id,
            channel_cids: request?.channel_cids,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/moderation/mute/channel', undefined, undefined, body, 'application/json');
        decoders.MuteChannelResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async unmuteChannel(request) {
        const body = {
            expiration: request?.expiration,
            user_id: request?.user_id,
            channel_cids: request?.channel_cids,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/moderation/unmute/channel', undefined, undefined, body, 'application/json');
        decoders.UnmuteResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryBannedUsers(request) {
        const queryParams = {
            payload: request?.payload
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/query_banned_users', undefined, queryParams);
        decoders.QueryBannedUsersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryReminders(request) {
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            user_id: request?.user_id,
            sort: request?.sort,
            filter: request?.filter,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/reminders/query', undefined, undefined, body, 'application/json');
        decoders.QueryRemindersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async search(request) {
        const queryParams = {
            payload: request?.payload
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/search', undefined, queryParams);
        decoders.SearchResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async querySegments(request) {
        const body = {
            filter: request?.filter,
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/segments/query', undefined, undefined, body, 'application/json');
        decoders.QuerySegmentsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteSegment(request) {
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/chat/segments/{id}', pathParams, undefined);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getSegment(request) {
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/segments/{id}', pathParams, undefined);
        decoders.GetSegmentResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteSegmentTargets(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            target_ids: request?.target_ids
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/segments/{id}/deletetargets', pathParams, undefined, body, 'application/json');
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async segmentTargetExists(request) {
        const pathParams = {
            id: request?.id,
            target_id: request?.target_id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/segments/{id}/target/{target_id}', pathParams, undefined);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async querySegmentTargets(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter: request?.filter
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/segments/{id}/targets/query', pathParams, undefined, body, 'application/json');
        decoders.QuerySegmentTargetsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryThreads(request) {
        const body = {
            limit: request?.limit,
            member_limit: request?.member_limit,
            next: request?.next,
            participant_limit: request?.participant_limit,
            prev: request?.prev,
            reply_limit: request?.reply_limit,
            user_id: request?.user_id,
            sort: request?.sort,
            filter: request?.filter,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/threads', undefined, undefined, body, 'application/json');
        decoders.QueryThreadsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getThread(request) {
        const queryParams = {
            reply_limit: request?.reply_limit,
            participant_limit: request?.participant_limit,
            member_limit: request?.member_limit
        };
        const pathParams = {
            message_id: request?.message_id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/threads/{message_id}', pathParams, queryParams);
        decoders.GetThreadResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateThreadPartial(request) {
        const pathParams = {
            message_id: request?.message_id
        };
        const body = {
            user_id: request?.user_id,
            unset: request?.unset,
            set: request?.set,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/chat/threads/{message_id}', pathParams, undefined, body, 'application/json');
        decoders.UpdateThreadPartialResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async unreadCounts() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/chat/unread', undefined, undefined);
        decoders.WrappedUnreadCountsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async unreadCountsBatch(request) {
        const body = {
            user_ids: request?.user_ids
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/unread_batch', undefined, undefined, body, 'application/json');
        decoders.UnreadCountsBatchResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async sendUserCustomEvent(request) {
        const pathParams = {
            user_id: request?.user_id
        };
        const body = {
            event: request?.event
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/chat/users/{user_id}/event', pathParams, undefined, body, 'application/json');
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
}
class ChannelApi {
    constructor(chatApi, type, id){
        this.chatApi = chatApi;
        this.type = type;
        this.id = id;
    }
    delete(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.deleteChannel({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    updateChannelPartial(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.updateChannelPartial({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    update(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.updateChannel({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    deleteDraft(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.deleteDraft({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    getDraft(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.getDraft({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    sendEvent(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.sendEvent({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    deleteChannelFile(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.deleteChannelFile({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    uploadChannelFile(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.uploadChannelFile({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    hide(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.hideChannel({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    deleteChannelImage(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.deleteChannelImage({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    uploadChannelImage(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.uploadChannelImage({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    updateMemberPartial(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.updateMemberPartial({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    sendMessage(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.sendMessage({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    getManyMessages(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.getManyMessages({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    getOrCreate(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.getOrCreateChannel({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    markRead(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.markRead({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    show(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.showChannel({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    truncate(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.truncateChannel({
            id: this.id,
            type: this.type,
            ...request
        });
    }
    markUnread(request) {
        if (!this.id) {
            throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
        }
        return this.chatApi.markUnread({
            id: this.id,
            type: this.type,
            ...request
        });
    }
}
class StreamChannel extends ChannelApi {
    constructor(){
        super(...arguments);
        this.getOrCreate = (channel_get_or_create_request)=>{
            if (!this.id) {
                return this.chatApi.getOrCreateDistinctChannel({
                    type: this.type,
                    ...channel_get_or_create_request
                }).then((response)=>{
                    this.id = response.channel?.id;
                    return response;
                });
            } else {
                return this.chatApi.getOrCreateChannel({
                    id: this.id,
                    type: this.type,
                    ...channel_get_or_create_request
                });
            }
        };
    }
    get cid() {
        return `${this.type}:${this.id}`;
    }
    queryMembers(request) {
        return this.chatApi.queryMembers({
            payload: {
                id: this.id,
                type: this.type,
                ...request?.payload ?? {
                    filter_conditions: {}
                }
            }
        });
    }
}
class StreamChatClient extends ChatApi {
    constructor(){
        super(...arguments);
        this.channel = (type, id)=>{
            return new StreamChannel(this, type, id);
        };
    }
}
class ModerationApi {
    constructor(apiClient){
        this.apiClient = apiClient;
    }
    async ban(request) {
        const body = {
            target_user_id: request?.target_user_id,
            banned_by_id: request?.banned_by_id,
            channel_cid: request?.channel_cid,
            delete_messages: request?.delete_messages,
            ip_ban: request?.ip_ban,
            reason: request?.reason,
            shadow: request?.shadow,
            timeout: request?.timeout,
            banned_by: request?.banned_by
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/ban', undefined, undefined, body, 'application/json');
        decoders.BanResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async bulkImageModeration(request) {
        const body = {
            csv_file: request?.csv_file
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/bulk_image_moderation', undefined, undefined, body, 'application/json');
        decoders.BulkImageModerationResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async check(request) {
        const body = {
            entity_creator_id: request?.entity_creator_id,
            entity_id: request?.entity_id,
            entity_type: request?.entity_type,
            config_key: request?.config_key,
            config_team: request?.config_team,
            test_mode: request?.test_mode,
            user_id: request?.user_id,
            config: request?.config,
            moderation_payload: request?.moderation_payload,
            options: request?.options,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/check', undefined, undefined, body, 'application/json');
        decoders.CheckResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async upsertConfig(request) {
        const body = {
            key: request?.key,
            async: request?.async,
            team: request?.team,
            user_id: request?.user_id,
            ai_image_config: request?.ai_image_config,
            ai_text_config: request?.ai_text_config,
            ai_video_config: request?.ai_video_config,
            automod_platform_circumvention_config: request?.automod_platform_circumvention_config,
            automod_semantic_filters_config: request?.automod_semantic_filters_config,
            automod_toxicity_config: request?.automod_toxicity_config,
            aws_rekognition_config: request?.aws_rekognition_config,
            block_list_config: request?.block_list_config,
            bodyguard_config: request?.bodyguard_config,
            google_vision_config: request?.google_vision_config,
            llm_config: request?.llm_config,
            rule_builder_config: request?.rule_builder_config,
            user: request?.user,
            velocity_filter_config: request?.velocity_filter_config,
            video_call_rule_config: request?.video_call_rule_config
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/config', undefined, undefined, body, 'application/json');
        decoders.UpsertConfigResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteConfig(request) {
        const queryParams = {
            team: request?.team
        };
        const pathParams = {
            key: request?.key
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/moderation/config/{key}', pathParams, queryParams);
        decoders.DeleteModerationConfigResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getConfig(request) {
        const queryParams = {
            team: request?.team
        };
        const pathParams = {
            key: request?.key
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/moderation/config/{key}', pathParams, queryParams);
        decoders.GetConfigResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryModerationConfigs(request) {
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            user_id: request?.user_id,
            sort: request?.sort,
            filter: request?.filter,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/configs', undefined, undefined, body, 'application/json');
        decoders.QueryModerationConfigsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async customCheck(request) {
        const body = {
            entity_id: request?.entity_id,
            entity_type: request?.entity_type,
            flags: request?.flags,
            entity_creator_id: request?.entity_creator_id,
            user_id: request?.user_id,
            moderation_payload: request?.moderation_payload,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/custom_check', undefined, undefined, body, 'application/json');
        decoders.CustomCheckResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async v2DeleteTemplate() {
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/moderation/feeds_moderation_template', undefined, undefined);
        decoders.DeleteModerationTemplateResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async v2QueryTemplates() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/moderation/feeds_moderation_template', undefined, undefined);
        decoders.QueryFeedModerationTemplatesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async v2UpsertTemplate(request) {
        const body = {
            name: request?.name,
            config: request?.config
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/feeds_moderation_template', undefined, undefined, body, 'application/json');
        decoders.UpsertModerationTemplateResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async flag(request) {
        const body = {
            entity_id: request?.entity_id,
            entity_type: request?.entity_type,
            entity_creator_id: request?.entity_creator_id,
            reason: request?.reason,
            user_id: request?.user_id,
            custom: request?.custom,
            moderation_payload: request?.moderation_payload,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/flag', undefined, undefined, body, 'application/json');
        decoders.FlagResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryModerationFlags(request) {
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter: request?.filter
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/flags', undefined, undefined, body, 'application/json');
        decoders.QueryModerationFlagsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryModerationLogs(request) {
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            user_id: request?.user_id,
            sort: request?.sort,
            filter: request?.filter,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/logs', undefined, undefined, body, 'application/json');
        decoders.QueryModerationLogsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async upsertModerationRule(request) {
        const body = {
            name: request?.name,
            rule_type: request?.rule_type,
            action: request?.action,
            cooldown_period: request?.cooldown_period,
            description: request?.description,
            enabled: request?.enabled,
            logic: request?.logic,
            team: request?.team,
            conditions: request?.conditions,
            config_keys: request?.config_keys,
            groups: request?.groups
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/moderation_rule', undefined, undefined, body, 'application/json');
        decoders.UpsertModerationRuleResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteModerationRule() {
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/moderation/moderation_rule/{id}', undefined, undefined);
        decoders.DeleteModerationRuleResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getModerationRule() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/moderation/moderation_rule/{id}', undefined, undefined);
        decoders.GetModerationRuleResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryModerationRules(request) {
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            user_id: request?.user_id,
            sort: request?.sort,
            filter: request?.filter,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/moderation_rules', undefined, undefined, body, 'application/json');
        decoders.QueryModerationRulesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async mute(request) {
        const body = {
            target_ids: request?.target_ids,
            timeout: request?.timeout,
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/mute', undefined, undefined, body, 'application/json');
        decoders.MuteResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryReviewQueue(request) {
        const body = {
            limit: request?.limit,
            lock_count: request?.lock_count,
            lock_duration: request?.lock_duration,
            lock_items: request?.lock_items,
            next: request?.next,
            prev: request?.prev,
            stats_only: request?.stats_only,
            user_id: request?.user_id,
            sort: request?.sort,
            filter: request?.filter,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/review_queue', undefined, undefined, body, 'application/json');
        decoders.QueryReviewQueueResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getReviewQueueItem(request) {
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/moderation/review_queue/{id}', pathParams, undefined);
        decoders.GetReviewQueueItemResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async submitAction(request) {
        const body = {
            action_type: request?.action_type,
            item_id: request?.item_id,
            user_id: request?.user_id,
            ban: request?.ban,
            block: request?.block,
            custom: request?.custom,
            delete_activity: request?.delete_activity,
            delete_comment: request?.delete_comment,
            delete_message: request?.delete_message,
            delete_reaction: request?.delete_reaction,
            delete_user: request?.delete_user,
            mark_reviewed: request?.mark_reviewed,
            shadow_block: request?.shadow_block,
            unban: request?.unban,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/submit_action', undefined, undefined, body, 'application/json');
        decoders.SubmitActionResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async unban(request) {
        const queryParams = {
            target_user_id: request?.target_user_id,
            channel_cid: request?.channel_cid,
            created_by: request?.created_by
        };
        const body = {
            unbanned_by_id: request?.unbanned_by_id,
            unbanned_by: request?.unbanned_by
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/unban', undefined, queryParams, body, 'application/json');
        decoders.UnbanResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async unmute(request) {
        const body = {
            target_ids: request?.target_ids,
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/moderation/unmute', undefined, undefined, body, 'application/json');
        decoders.UnmuteResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
}
class StreamModerationClient extends ModerationApi {
}
class StreamError extends Error {
    constructor(message, metadata, code, errorOptions){
        super(message, errorOptions);
        this.metadata = metadata;
        this.code = code;
    }
}
const getRateLimitFromResponseHeader = (responseHeaders)=>{
    const rateLimit = responseHeaders.has('x-ratelimit-limit') ? +responseHeaders.get('x-ratelimit-limit') : undefined;
    const rateLimitRemaining = responseHeaders.has('x-ratelimit-remaining') ? +responseHeaders.get('x-ratelimit-remaining') : undefined;
    const rateLimitReset = responseHeaders.has('x-ratelimit-reset') ? new Date(+responseHeaders.get('x-ratelimit-reset') * 1000) : undefined;
    const result = {
        rateLimit,
        rateLimitRemaining,
        rateLimitReset
    };
    return result;
};
class ApiClient {
    constructor(apiConfig){
        this.apiConfig = apiConfig;
        /**
         *
         * @internal
         */ this.sendRequest = async (method, url, pathParams, queryParams, body, requestContentType)=>{
            queryParams = queryParams ?? {};
            queryParams.api_key = this.apiConfig.apiKey;
            const encodedParams = this.queryParamsStringify(queryParams);
            if (pathParams) {
                Object.keys(pathParams).forEach((paramName)=>{
                    url = url.replace(`{${paramName}}`, pathParams[paramName]);
                });
            }
            url += `?${encodedParams}`;
            const clientRequestId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            const headers = {
                Authorization: this.apiConfig.token,
                'stream-auth-type': 'jwt',
                'X-Stream-Client': 'stream-node-' + "0.7.17",
                'Accept-Encoding': 'gzip',
                'x-client-request-id': clientRequestId
            };
            // https://stackoverflow.com/questions/39280438/fetch-missing-boundary-in-multipart-form-data-post
            if (requestContentType !== 'multipart/form-data') {
                headers['Content-Type'] = requestContentType ?? 'application/json';
            }
            const signal = AbortSignal.timeout(this.apiConfig.timeout);
            const encodedBody = requestContentType === 'multipart/form-data' ? new FormData() : JSON.stringify(body);
            if (requestContentType === 'multipart/form-data') {
                Object.keys(body).forEach((key)=>{
                    encodedBody.append(key, body[key]);
                });
            }
            try {
                const response = await fetch(`${this.apiConfig.baseUrl}${url}`, {
                    signal: requestContentType === 'multipart/form-data' ? undefined : signal,
                    method,
                    body: encodedBody,
                    headers,
                    dispatcher: this.dispatcher
                });
                const responseHeaders = response.headers;
                const metadata = {
                    clientRequestId,
                    responseHeaders,
                    responseCode: response.status,
                    rateLimit: getRateLimitFromResponseHeader(responseHeaders)
                };
                if (response.status < 200 || response.status >= 300) {
                    let error;
                    try {
                        error = await response.json();
                    } catch (_) {
                        throw new StreamError(`Stream error: ${response.status} - ${response.statusText}`, metadata, response.status);
                    }
                    throw new StreamError(`Stream error code ${error.code}: ${error.message}`, metadata, error.code, undefined);
                }
                const responseBody = await response.json();
                return {
                    body: responseBody,
                    metadata
                };
            } catch (error) {
                if (error instanceof StreamError) {
                    throw error;
                }
                const metadata = {
                    clientRequestId,
                    responseCode: error.status
                };
                if (error.name === 'AbortError' || error.name === 'TimeoutError') {
                    throw new StreamError(`The request was aborted due to to the ${this.apiConfig.timeout}ms timeout, you can set the timeout in the StreamClient constructor`, metadata, undefined, error);
                } else {
                    throw new StreamError(`The request failed due to an unexpected error`, metadata, error);
                }
            }
        };
        this.queryParamsStringify = (params)=>{
            const newParams = [];
            for(const k in params){
                const param = params[k];
                if (Array.isArray(param)) {
                    newParams.push(`${k}=${encodeURIComponent(param.join(','))}`);
                } else if (param instanceof Date) {
                    newParams.push(param.toISOString());
                } else if (typeof param === 'object') {
                    newParams.push(`${k}=${encodeURIComponent(JSON.stringify(param))}`);
                } else {
                    if (typeof param === 'string' || typeof param === 'number' || typeof param === 'boolean') {
                        newParams.push(`${k}=${encodeURIComponent(param)}`);
                    }
                }
            }
            return newParams.join('&');
        };
        this.dispatcher = this.apiConfig.agent;
    }
}
class FeedsApi {
    constructor(apiClient){
        this.apiClient = apiClient;
    }
    async addActivity(request) {
        const body = {
            type: request?.type,
            feeds: request?.feeds,
            expires_at: request?.expires_at,
            id: request?.id,
            parent_id: request?.parent_id,
            poll_id: request?.poll_id,
            restrict_replies: request?.restrict_replies,
            text: request?.text,
            user_id: request?.user_id,
            visibility: request?.visibility,
            visibility_tag: request?.visibility_tag,
            attachments: request?.attachments,
            filter_tags: request?.filter_tags,
            interest_tags: request?.interest_tags,
            mentioned_user_ids: request?.mentioned_user_ids,
            custom: request?.custom,
            location: request?.location,
            search_data: request?.search_data
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/activities', undefined, undefined, body, 'application/json');
        decoders.AddActivityResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async upsertActivities(request) {
        const body = {
            activities: request?.activities
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/activities/batch', undefined, undefined, body, 'application/json');
        decoders.UpsertActivitiesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteActivities(request) {
        const body = {
            ids: request?.ids,
            hard_delete: request?.hard_delete,
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/activities/delete', undefined, undefined, body, 'application/json');
        decoders.DeleteActivitiesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryActivities(request) {
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter: request?.filter
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/activities/query', undefined, undefined, body, 'application/json');
        decoders.QueryActivitiesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteBookmark(request) {
        const queryParams = {
            folder_id: request?.folder_id,
            user_id: request?.user_id
        };
        const pathParams = {
            activity_id: request?.activity_id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/feeds/activities/{activity_id}/bookmarks', pathParams, queryParams);
        decoders.DeleteBookmarkResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateBookmark(request) {
        const pathParams = {
            activity_id: request?.activity_id
        };
        const body = {
            folder_id: request?.folder_id,
            new_folder_id: request?.new_folder_id,
            user_id: request?.user_id,
            custom: request?.custom,
            new_folder: request?.new_folder,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/feeds/activities/{activity_id}/bookmarks', pathParams, undefined, body, 'application/json');
        decoders.UpdateBookmarkResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async addBookmark(request) {
        const pathParams = {
            activity_id: request?.activity_id
        };
        const body = {
            folder_id: request?.folder_id,
            user_id: request?.user_id,
            custom: request?.custom,
            new_folder: request?.new_folder,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/activities/{activity_id}/bookmarks', pathParams, undefined, body, 'application/json');
        decoders.AddBookmarkResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async activityFeedback(request) {
        const pathParams = {
            activity_id: request?.activity_id
        };
        const body = {
            hide: request?.hide,
            show_less: request?.show_less,
            show_more: request?.show_more,
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/activities/{activity_id}/feedback', pathParams, undefined, body, 'application/json');
        decoders.ActivityFeedbackResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async castPollVote(request) {
        const pathParams = {
            activity_id: request?.activity_id,
            poll_id: request?.poll_id
        };
        const body = {
            user_id: request?.user_id,
            user: request?.user,
            vote: request?.vote
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/activities/{activity_id}/polls/{poll_id}/vote', pathParams, undefined, body, 'application/json');
        decoders.PollVoteResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deletePollVote(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const pathParams = {
            activity_id: request?.activity_id,
            poll_id: request?.poll_id,
            vote_id: request?.vote_id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/feeds/activities/{activity_id}/polls/{poll_id}/vote/{vote_id}', pathParams, queryParams);
        decoders.PollVoteResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async addActivityReaction(request) {
        const pathParams = {
            activity_id: request?.activity_id
        };
        const body = {
            type: request?.type,
            create_notification_activity: request?.create_notification_activity,
            enforce_unique: request?.enforce_unique,
            skip_push: request?.skip_push,
            user_id: request?.user_id,
            custom: request?.custom,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/activities/{activity_id}/reactions', pathParams, undefined, body, 'application/json');
        decoders.AddReactionResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryActivityReactions(request) {
        const pathParams = {
            activity_id: request?.activity_id
        };
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter: request?.filter
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/activities/{activity_id}/reactions/query', pathParams, undefined, body, 'application/json');
        decoders.QueryActivityReactionsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteActivityReaction(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const pathParams = {
            activity_id: request?.activity_id,
            type: request?.type
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/feeds/activities/{activity_id}/reactions/{type}', pathParams, queryParams);
        decoders.DeleteActivityReactionResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteActivity(request) {
        const queryParams = {
            hard_delete: request?.hard_delete
        };
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/feeds/activities/{id}', pathParams, queryParams);
        decoders.DeleteActivityResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getActivity(request) {
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/feeds/activities/{id}', pathParams, undefined);
        decoders.GetActivityResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateActivityPartial(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            user_id: request?.user_id,
            unset: request?.unset,
            set: request?.set,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/feeds/activities/{id}', pathParams, undefined, body, 'application/json');
        decoders.UpdateActivityPartialResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateActivity(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            expires_at: request?.expires_at,
            poll_id: request?.poll_id,
            restrict_replies: request?.restrict_replies,
            text: request?.text,
            user_id: request?.user_id,
            visibility: request?.visibility,
            attachments: request?.attachments,
            feeds: request?.feeds,
            filter_tags: request?.filter_tags,
            interest_tags: request?.interest_tags,
            custom: request?.custom,
            location: request?.location,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('PUT', '/api/v2/feeds/activities/{id}', pathParams, undefined, body, 'application/json');
        decoders.UpdateActivityResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryBookmarkFolders(request) {
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter: request?.filter
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/bookmark_folders/query', undefined, undefined, body, 'application/json');
        decoders.QueryBookmarkFoldersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteBookmarkFolder(request) {
        const pathParams = {
            folder_id: request?.folder_id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/feeds/bookmark_folders/{folder_id}', pathParams, undefined);
        decoders.DeleteBookmarkFolderResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateBookmarkFolder(request) {
        const pathParams = {
            folder_id: request?.folder_id
        };
        const body = {
            name: request?.name,
            user_id: request?.user_id,
            custom: request?.custom,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/feeds/bookmark_folders/{folder_id}', pathParams, undefined, body, 'application/json');
        decoders.UpdateBookmarkFolderResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryBookmarks(request) {
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter: request?.filter
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/bookmarks/query', undefined, undefined, body, 'application/json');
        decoders.QueryBookmarksResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getComments(request) {
        const queryParams = {
            object_id: request?.object_id,
            object_type: request?.object_type,
            depth: request?.depth,
            sort: request?.sort,
            replies_limit: request?.replies_limit,
            limit: request?.limit,
            prev: request?.prev,
            next: request?.next
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/feeds/comments', undefined, queryParams);
        decoders.GetCommentsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async addComment(request) {
        const body = {
            object_id: request?.object_id,
            object_type: request?.object_type,
            comment: request?.comment,
            create_notification_activity: request?.create_notification_activity,
            parent_id: request?.parent_id,
            skip_push: request?.skip_push,
            user_id: request?.user_id,
            attachments: request?.attachments,
            mentioned_user_ids: request?.mentioned_user_ids,
            custom: request?.custom,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/comments', undefined, undefined, body, 'application/json');
        decoders.AddCommentResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async addCommentsBatch(request) {
        const body = {
            comments: request?.comments
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/comments/batch', undefined, undefined, body, 'application/json');
        decoders.AddCommentsBatchResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryComments(request) {
        const body = {
            filter: request?.filter,
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/comments/query', undefined, undefined, body, 'application/json');
        decoders.QueryCommentsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteComment(request) {
        const queryParams = {
            hard_delete: request?.hard_delete
        };
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/feeds/comments/{id}', pathParams, queryParams);
        decoders.DeleteCommentResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getComment(request) {
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/feeds/comments/{id}', pathParams, undefined);
        decoders.GetCommentResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateComment(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            comment: request?.comment,
            skip_push: request?.skip_push,
            user_id: request?.user_id,
            custom: request?.custom,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/feeds/comments/{id}', pathParams, undefined, body, 'application/json');
        decoders.UpdateCommentResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async addCommentReaction(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            type: request?.type,
            create_notification_activity: request?.create_notification_activity,
            enforce_unique: request?.enforce_unique,
            skip_push: request?.skip_push,
            user_id: request?.user_id,
            custom: request?.custom,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/comments/{id}/reactions', pathParams, undefined, body, 'application/json');
        decoders.AddCommentReactionResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryCommentReactions(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter: request?.filter
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/comments/{id}/reactions/query', pathParams, undefined, body, 'application/json');
        decoders.QueryCommentReactionsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteCommentReaction(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const pathParams = {
            id: request?.id,
            type: request?.type
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/feeds/comments/{id}/reactions/{type}', pathParams, queryParams);
        decoders.DeleteCommentReactionResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getCommentReplies(request) {
        const queryParams = {
            depth: request?.depth,
            sort: request?.sort,
            replies_limit: request?.replies_limit,
            limit: request?.limit,
            prev: request?.prev,
            next: request?.next
        };
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/feeds/comments/{id}/replies', pathParams, queryParams);
        decoders.GetCommentRepliesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async listFeedGroups(request) {
        const queryParams = {
            include_soft_deleted: request?.include_soft_deleted
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/feeds/feed_groups', undefined, queryParams);
        decoders.ListFeedGroupsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createFeedGroup(request) {
        const body = {
            id: request?.id,
            default_visibility: request?.default_visibility,
            activity_processors: request?.activity_processors,
            activity_selectors: request?.activity_selectors,
            aggregation: request?.aggregation,
            custom: request?.custom,
            notification: request?.notification,
            push_notification: request?.push_notification,
            ranking: request?.ranking,
            stories: request?.stories
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/feed_groups', undefined, undefined, body, 'application/json');
        decoders.CreateFeedGroupResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteFeed(request) {
        const queryParams = {
            hard_delete: request?.hard_delete
        };
        const pathParams = {
            feed_group_id: request?.feed_group_id,
            feed_id: request?.feed_id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/feeds/feed_groups/{feed_group_id}/feeds/{feed_id}', pathParams, queryParams);
        decoders.DeleteFeedResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getOrCreateFeed(request) {
        const pathParams = {
            feed_group_id: request?.feed_group_id,
            feed_id: request?.feed_id
        };
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            user_id: request?.user_id,
            view: request?.view,
            watch: request?.watch,
            activity_selector_options: request?.activity_selector_options,
            data: request?.data,
            external_ranking: request?.external_ranking,
            filter: request?.filter,
            followers_pagination: request?.followers_pagination,
            following_pagination: request?.following_pagination,
            interest_weights: request?.interest_weights,
            member_pagination: request?.member_pagination,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/feed_groups/{feed_group_id}/feeds/{feed_id}', pathParams, undefined, body, 'application/json');
        decoders.GetOrCreateFeedResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateFeed(request) {
        const pathParams = {
            feed_group_id: request?.feed_group_id,
            feed_id: request?.feed_id
        };
        const body = {
            created_by_id: request?.created_by_id,
            custom: request?.custom
        };
        const response = await this.apiClient.sendRequest('PUT', '/api/v2/feeds/feed_groups/{feed_group_id}/feeds/{feed_id}', pathParams, undefined, body, 'application/json');
        decoders.UpdateFeedResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async markActivity(request) {
        const pathParams = {
            feed_group_id: request?.feed_group_id,
            feed_id: request?.feed_id
        };
        const body = {
            mark_all_read: request?.mark_all_read,
            mark_all_seen: request?.mark_all_seen,
            user_id: request?.user_id,
            mark_read: request?.mark_read,
            mark_seen: request?.mark_seen,
            mark_watched: request?.mark_watched,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/feed_groups/{feed_group_id}/feeds/{feed_id}/activities/mark/batch', pathParams, undefined, body, 'application/json');
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async unpinActivity(request) {
        const queryParams = {
            user_id: request?.user_id
        };
        const pathParams = {
            feed_group_id: request?.feed_group_id,
            feed_id: request?.feed_id,
            activity_id: request?.activity_id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/feeds/feed_groups/{feed_group_id}/feeds/{feed_id}/activities/{activity_id}/pin', pathParams, queryParams);
        decoders.UnpinActivityResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async pinActivity(request) {
        const pathParams = {
            feed_group_id: request?.feed_group_id,
            feed_id: request?.feed_id,
            activity_id: request?.activity_id
        };
        const body = {
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/feed_groups/{feed_group_id}/feeds/{feed_id}/activities/{activity_id}/pin', pathParams, undefined, body, 'application/json');
        decoders.PinActivityResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateFeedMembers(request) {
        const pathParams = {
            feed_group_id: request?.feed_group_id,
            feed_id: request?.feed_id
        };
        const body = {
            operation: request?.operation,
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            members: request?.members
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/feeds/feed_groups/{feed_group_id}/feeds/{feed_id}/members', pathParams, undefined, body, 'application/json');
        decoders.UpdateFeedMembersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async acceptFeedMemberInvite(request) {
        const pathParams = {
            feed_id: request?.feed_id,
            feed_group_id: request?.feed_group_id
        };
        const body = {
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/feed_groups/{feed_group_id}/feeds/{feed_id}/members/accept', pathParams, undefined, body, 'application/json');
        decoders.AcceptFeedMemberInviteResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryFeedMembers(request) {
        const pathParams = {
            feed_group_id: request?.feed_group_id,
            feed_id: request?.feed_id
        };
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter: request?.filter
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/feed_groups/{feed_group_id}/feeds/{feed_id}/members/query', pathParams, undefined, body, 'application/json');
        decoders.QueryFeedMembersResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async rejectFeedMemberInvite(request) {
        const pathParams = {
            feed_group_id: request?.feed_group_id,
            feed_id: request?.feed_id
        };
        const body = {
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/feed_groups/{feed_group_id}/feeds/{feed_id}/members/reject', pathParams, undefined, body, 'application/json');
        decoders.RejectFeedMemberInviteResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getFollowSuggestions(request) {
        const queryParams = {
            limit: request?.limit,
            user_id: request?.user_id
        };
        const pathParams = {
            feed_group_id: request?.feed_group_id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/feeds/feed_groups/{feed_group_id}/follow_suggestions', pathParams, queryParams);
        decoders.GetFollowSuggestionsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteFeedGroup(request) {
        const queryParams = {
            hard_delete: request?.hard_delete
        };
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/feeds/feed_groups/{id}', pathParams, queryParams);
        decoders.DeleteFeedGroupResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getFeedGroup(request) {
        const queryParams = {
            include_soft_deleted: request?.include_soft_deleted
        };
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/feeds/feed_groups/{id}', pathParams, queryParams);
        decoders.GetFeedGroupResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getOrCreateFeedGroup(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            default_visibility: request?.default_visibility,
            activity_processors: request?.activity_processors,
            activity_selectors: request?.activity_selectors,
            aggregation: request?.aggregation,
            custom: request?.custom,
            notification: request?.notification,
            push_notification: request?.push_notification,
            ranking: request?.ranking,
            stories: request?.stories
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/feed_groups/{id}', pathParams, undefined, body, 'application/json');
        decoders.GetOrCreateFeedGroupResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateFeedGroup(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            default_visibility: request?.default_visibility,
            activity_processors: request?.activity_processors,
            activity_selectors: request?.activity_selectors,
            aggregation: request?.aggregation,
            custom: request?.custom,
            notification: request?.notification,
            push_notification: request?.push_notification,
            ranking: request?.ranking,
            stories: request?.stories
        };
        const response = await this.apiClient.sendRequest('PUT', '/api/v2/feeds/feed_groups/{id}', pathParams, undefined, body, 'application/json');
        decoders.UpdateFeedGroupResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async listFeedViews() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/feeds/feed_views', undefined, undefined);
        decoders.ListFeedViewsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createFeedView(request) {
        const body = {
            id: request?.id,
            activity_processors: request?.activity_processors,
            activity_selectors: request?.activity_selectors,
            aggregation: request?.aggregation,
            ranking: request?.ranking
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/feed_views', undefined, undefined, body, 'application/json');
        decoders.CreateFeedViewResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteFeedView(request) {
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/feeds/feed_views/{id}', pathParams, undefined);
        decoders.DeleteFeedViewResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getFeedView(request) {
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/feeds/feed_views/{id}', pathParams, undefined);
        decoders.GetFeedViewResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getOrCreateFeedView(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            activity_processors: request?.activity_processors,
            activity_selectors: request?.activity_selectors,
            aggregation: request?.aggregation,
            ranking: request?.ranking
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/feed_views/{id}', pathParams, undefined, body, 'application/json');
        decoders.GetOrCreateFeedViewResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateFeedView(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            activity_processors: request?.activity_processors,
            activity_selectors: request?.activity_selectors,
            aggregation: request?.aggregation,
            ranking: request?.ranking
        };
        const response = await this.apiClient.sendRequest('PUT', '/api/v2/feeds/feed_views/{id}', pathParams, undefined, body, 'application/json');
        decoders.UpdateFeedViewResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async listFeedVisibilities() {
        const response = await this.apiClient.sendRequest('GET', '/api/v2/feeds/feed_visibilities', undefined, undefined);
        decoders.ListFeedVisibilitiesResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getFeedVisibility(request) {
        const pathParams = {
            name: request?.name
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/feeds/feed_visibilities/{name}', pathParams, undefined);
        decoders.GetFeedVisibilityResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateFeedVisibility(request) {
        const pathParams = {
            name: request?.name
        };
        const body = {
            grants: request?.grants
        };
        const response = await this.apiClient.sendRequest('PUT', '/api/v2/feeds/feed_visibilities/{name}', pathParams, undefined, body, 'application/json');
        decoders.UpdateFeedVisibilityResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createFeedsBatch(request) {
        const body = {
            feeds: request?.feeds
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/feeds/batch', undefined, undefined, body, 'application/json');
        decoders.CreateFeedsBatchResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async ownCapabilitiesBatch(request) {
        const body = {
            feeds: request?.feeds,
            user_id: request?.user_id,
            user: request?.user
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/feeds/own_capabilities/batch', undefined, undefined, body, 'application/json');
        decoders.OwnCapabilitiesBatchResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async _queryFeeds(request) {
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            watch: request?.watch,
            sort: request?.sort,
            filter: request?.filter
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/feeds/query', undefined, undefined, body, 'application/json');
        decoders.QueryFeedsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async getFeedsRateLimits(request) {
        const queryParams = {
            endpoints: request?.endpoints,
            android: request?.android,
            ios: request?.ios,
            web: request?.web,
            server_side: request?.server_side
        };
        const response = await this.apiClient.sendRequest('GET', '/api/v2/feeds/feeds/rate_limits', undefined, queryParams);
        decoders.GetFeedsRateLimitsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateFollow(request) {
        const body = {
            source: request?.source,
            target: request?.target,
            create_notification_activity: request?.create_notification_activity,
            follower_role: request?.follower_role,
            push_preference: request?.push_preference,
            skip_push: request?.skip_push,
            custom: request?.custom
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/feeds/follows', undefined, undefined, body, 'application/json');
        decoders.UpdateFollowResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async follow(request) {
        const body = {
            source: request?.source,
            target: request?.target,
            create_notification_activity: request?.create_notification_activity,
            push_preference: request?.push_preference,
            skip_push: request?.skip_push,
            custom: request?.custom
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/follows', undefined, undefined, body, 'application/json');
        decoders.SingleFollowResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async acceptFollow(request) {
        const body = {
            source: request?.source,
            target: request?.target,
            follower_role: request?.follower_role
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/follows/accept', undefined, undefined, body, 'application/json');
        decoders.AcceptFollowResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async followBatch(request) {
        const body = {
            follows: request?.follows
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/follows/batch', undefined, undefined, body, 'application/json');
        decoders.FollowBatchResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryFollows(request) {
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter: request?.filter
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/follows/query', undefined, undefined, body, 'application/json');
        decoders.QueryFollowsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async rejectFollow(request) {
        const body = {
            source: request?.source,
            target: request?.target
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/follows/reject', undefined, undefined, body, 'application/json');
        decoders.RejectFollowResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async unfollow(request) {
        const pathParams = {
            source: request?.source,
            target: request?.target
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/feeds/follows/{source}/{target}', pathParams, undefined);
        decoders.UnfollowResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async createMembershipLevel(request) {
        const body = {
            id: request?.id,
            name: request?.name,
            description: request?.description,
            priority: request?.priority,
            tags: request?.tags,
            custom: request?.custom
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/membership_levels', undefined, undefined, body, 'application/json');
        decoders.CreateMembershipLevelResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryMembershipLevels(request) {
        const body = {
            limit: request?.limit,
            next: request?.next,
            prev: request?.prev,
            sort: request?.sort,
            filter: request?.filter
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/membership_levels/query', undefined, undefined, body, 'application/json');
        decoders.QueryMembershipLevelsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteMembershipLevel(request) {
        const pathParams = {
            id: request?.id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/feeds/membership_levels/{id}', pathParams, undefined);
        decoders.Response?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async updateMembershipLevel(request) {
        const pathParams = {
            id: request?.id
        };
        const body = {
            description: request?.description,
            name: request?.name,
            priority: request?.priority,
            tags: request?.tags,
            custom: request?.custom
        };
        const response = await this.apiClient.sendRequest('PATCH', '/api/v2/feeds/membership_levels/{id}', pathParams, undefined, body, 'application/json');
        decoders.UpdateMembershipLevelResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async queryFeedsUsageStats(request) {
        const body = {
            from: request?.from,
            to: request?.to
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/stats/usage', undefined, undefined, body, 'application/json');
        decoders.QueryFeedsUsageStatsResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async unfollowBatch(request) {
        const body = {
            follows: request?.follows
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/unfollow/batch', undefined, undefined, body, 'application/json');
        decoders.UnfollowBatchResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async deleteFeedUserData(request) {
        const pathParams = {
            user_id: request?.user_id
        };
        const response = await this.apiClient.sendRequest('DELETE', '/api/v2/feeds/users/{user_id}/delete', pathParams, undefined);
        decoders.DeleteFeedUserDataResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
    async exportFeedUserData(request) {
        const pathParams = {
            user_id: request?.user_id
        };
        const response = await this.apiClient.sendRequest('POST', '/api/v2/feeds/users/{user_id}/export', pathParams, undefined);
        decoders.ExportFeedUserDataResponse?.(response.body);
        return {
            ...response.body,
            metadata: response.metadata
        };
    }
}
class FeedApi {
    constructor(feedsApi, group, id){
        this.feedsApi = feedsApi;
        this.group = group;
        this.id = id;
    }
    delete(request) {
        return this.feedsApi.deleteFeed({
            feed_id: this.id,
            feed_group_id: this.group,
            ...request
        });
    }
    getOrCreate(request) {
        return this.feedsApi.getOrCreateFeed({
            feed_id: this.id,
            feed_group_id: this.group,
            ...request
        });
    }
    update(request) {
        return this.feedsApi.updateFeed({
            feed_id: this.id,
            feed_group_id: this.group,
            ...request
        });
    }
    markActivity(request) {
        return this.feedsApi.markActivity({
            feed_id: this.id,
            feed_group_id: this.group,
            ...request
        });
    }
    unpinActivity(request) {
        return this.feedsApi.unpinActivity({
            feed_id: this.id,
            feed_group_id: this.group,
            ...request
        });
    }
    pinActivity(request) {
        return this.feedsApi.pinActivity({
            feed_id: this.id,
            feed_group_id: this.group,
            ...request
        });
    }
    updateFeedMembers(request) {
        return this.feedsApi.updateFeedMembers({
            feed_id: this.id,
            feed_group_id: this.group,
            ...request
        });
    }
    acceptFeedMemberInvite(request) {
        return this.feedsApi.acceptFeedMemberInvite({
            feed_id: this.id,
            feed_group_id: this.group,
            ...request
        });
    }
    queryFeedMembers(request) {
        return this.feedsApi.queryFeedMembers({
            feed_id: this.id,
            feed_group_id: this.group,
            ...request
        });
    }
    rejectFeedMemberInvite(request) {
        return this.feedsApi.rejectFeedMemberInvite({
            feed_id: this.id,
            feed_group_id: this.group,
            ...request
        });
    }
}
class StreamFeed extends FeedApi {
    get feed() {
        return `${this.group}:${this.id}`;
    }
}
class StreamFeedsClient extends FeedsApi {
    constructor(){
        super(...arguments);
        this.feed = (group, id)=>{
            return new StreamFeed(this, group, id);
        };
        this.queryFeeds = (request)=>{
            return super._queryFeeds(request);
        };
        /**
         * @deprecated Use addActivityReaction instead
         */ this.addReaction = (request)=>{
            return super.addActivityReaction(request);
        };
    }
}
class StreamClient extends CommonApi {
    /**
     *
     * @param apiKey
     * @param secret
     * @param config config object
     */ constructor(apiKey, secret, config){
        const token = JWTServerToken(secret);
        const timeout = config?.timeout ?? StreamClient.DEFAULT_TIMEOUT;
        const chatBaseUrl = config?.basePath ?? 'https://chat.stream-io-api.com';
        const videoBaseUrl = config?.basePath ?? 'https://video.stream-io-api.com';
        const feedsBaseUrl = config?.basePath ?? 'https://feeds.stream-io-api.com';
        const chatApiClient = new ApiClient({
            apiKey,
            token,
            baseUrl: chatBaseUrl,
            timeout,
            agent: config?.agent
        });
        const videoApiClient = new ApiClient({
            apiKey,
            token,
            baseUrl: videoBaseUrl,
            timeout,
            agent: config?.agent
        });
        const feedsApiClient = new ApiClient({
            apiKey,
            token,
            baseUrl: feedsBaseUrl,
            timeout,
            agent: config?.agent
        });
        super(chatApiClient);
        this.apiKey = apiKey;
        this.secret = secret;
        this.config = config;
        this.options = {};
        this.upsertUsers = (users)=>{
            const payload = {};
            users.forEach((u)=>{
                payload[u.id] = u;
            });
            return this.updateUsers({
                users: payload
            });
        };
        this.queryBannedUsers = (request)=>{
            return this.chat.queryBannedUsers(request);
        };
        // @ts-expect-error API spec says file should be a string
        this.uploadFile = (request)=>{
            return super.uploadFile({
                // @ts-expect-error API spec says file should be a string
                file: request.file,
                // @ts-expect-error form data will only work if this is a string
                user: JSON.stringify(request.user)
            });
        };
        // @ts-expect-error API spec says file should be a string
        this.uploadImage = (request)=>{
            return super.uploadImage({
                // @ts-expect-error API spec says file should be a string
                file: request.file,
                // @ts-expect-error form data will only work if this is a string
                user: JSON.stringify(request.user),
                // @ts-expect-error form data will only work if this is a string
                upload_sizes: JSON.stringify(request.upload_sizes)
            });
        };
        /**
         *
         * @param payload
         * - user_id - the id of the user the token is for
         * - validity_in_seconds - how many seconds is the token valid for (starting from issued at), by default it's 1 hour, dicarded if exp is provided
         * - exp - when the token expires, unix timestamp in seconds
         * - iat - issued at date of the token, unix timestamp in seconds, by default it's now
         */ this.generateUserToken = (payload)=>{
            const defaultIat = Math.floor((Date.now() - 1000) / 1000);
            payload.iat = payload.iat ?? defaultIat;
            const validityInSeconds = payload.validity_in_seconds ?? 60 * 60;
            payload.exp = payload.exp ?? payload.iat + validityInSeconds;
            return JWTUserToken(this.secret, payload);
        };
        /**
         *
         * @param payload
         * - user_id - the id of the user the token is for
         * - iat - issued at date of the token, unix timestamp in seconds, by default it's now
         */ this.generatePermanentUserToken = (payload)=>{
            const defaultIat = Math.floor((Date.now() - 1000) / 1000);
            payload.iat = payload.iat ?? defaultIat;
            return JWTUserToken(this.secret, payload);
        };
        /**
         *
         * @param payload
         * - user_id - the id of the user the token is for
         * - validity_in_seconds - how many seconds is the token valid for (starting from issued at), by default it's 1 hour, dicarded if exp is provided
         * - exp - when the token expires, unix timestamp in seconds
         * - iat - issued at date of the token, unix timestamp in seconds, by default it's now
         */ this.generateCallToken = (payload)=>{
            return this.generateUserToken(payload);
        };
        /**
         *
         * @param userID
         * @param exp
         * @param iat deprecated, the default date will be set internally
         * @returns
         *
         * @deprecated use generateUserToken instead
         */ this.createToken = (userID, exp = Math.round(Date.now() / 1000) + 60 * 60, iat = Math.floor((Date.now() - 1000) / 1000))=>{
            const payload = {
                user_id: userID,
                exp,
                iat
            };
            return JWTUserToken(this.secret, payload);
        };
        /**
         *
         * @param userID
         * @param call_cids
         * @param exp
         * @param iat this is deprecated, the current date will be set internally
         * @returns
         *
         * @deprecated use generateCallToken instead
         */ this.createCallToken = (userIdOrObject, call_cids, exp = Math.round(Date.now() / 1000) + 60 * 60, iat = Math.floor((Date.now() - 1000) / 1000))=>{
            const payload = {
                exp,
                iat,
                call_cids,
                user_id: typeof userIdOrObject === 'string' ? userIdOrObject : userIdOrObject.user_id
            };
            if (typeof userIdOrObject === 'object' && userIdOrObject.role) {
                payload.role = userIdOrObject.role;
            }
            return JWTUserToken(this.secret, payload);
        };
        this.verifyWebhook = (requestBody, xSignature)=>{
            const key = Buffer.from(this.secret, 'utf8');
            const hash = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac('sha256', key).update(requestBody).digest('hex');
            try {
                return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].timingSafeEqual(Buffer.from(hash), Buffer.from(xSignature));
            } catch (err) {
                return false;
            }
        };
        this.video = new StreamVideoClient({
            streamClient: this,
            apiClient: videoApiClient
        });
        this.chat = new StreamChatClient(this.apiClient);
        this.moderation = new StreamModerationClient(chatApiClient);
        this.feeds = new StreamFeedsClient(feedsApiClient);
    }
}
StreamClient.DEFAULT_TIMEOUT = 3000;
const ChannelOwnCapability = {
    BAN_CHANNEL_MEMBERS: 'ban-channel-members',
    CAST_POLL_VOTE: 'cast-poll-vote',
    CONNECT_EVENTS: 'connect-events',
    CREATE_ATTACHMENT: 'create-attachment',
    DELETE_ANY_MESSAGE: 'delete-any-message',
    DELETE_CHANNEL: 'delete-channel',
    DELETE_OWN_MESSAGE: 'delete-own-message',
    DELIVERY_EVENTS: 'delivery-events',
    FLAG_MESSAGE: 'flag-message',
    FREEZE_CHANNEL: 'freeze-channel',
    JOIN_CHANNEL: 'join-channel',
    LEAVE_CHANNEL: 'leave-channel',
    MUTE_CHANNEL: 'mute-channel',
    PIN_MESSAGE: 'pin-message',
    QUERY_POLL_VOTES: 'query-poll-votes',
    QUOTE_MESSAGE: 'quote-message',
    READ_EVENTS: 'read-events',
    SEARCH_MESSAGES: 'search-messages',
    SEND_CUSTOM_EVENTS: 'send-custom-events',
    SEND_LINKS: 'send-links',
    SEND_MESSAGE: 'send-message',
    SEND_POLL: 'send-poll',
    SEND_REACTION: 'send-reaction',
    SEND_REPLY: 'send-reply',
    SEND_RESTRICTED_VISIBILITY_MESSAGE: 'send-restricted-visibility-message',
    SEND_TYPING_EVENTS: 'send-typing-events',
    SET_CHANNEL_COOLDOWN: 'set-channel-cooldown',
    SHARE_LOCATION: 'share-location',
    SKIP_SLOW_MODE: 'skip-slow-mode',
    SLOW_MODE: 'slow-mode',
    TYPING_EVENTS: 'typing-events',
    UPDATE_ANY_MESSAGE: 'update-any-message',
    UPDATE_CHANNEL: 'update-channel',
    UPDATE_CHANNEL_MEMBERS: 'update-channel-members',
    UPDATE_OWN_MESSAGE: 'update-own-message',
    UPDATE_THREAD: 'update-thread',
    UPLOAD_FILE: 'upload-file'
};
const FeedOwnCapability = {
    ADD_ACTIVITY: 'add-activity',
    ADD_ACTIVITY_BOOKMARK: 'add-activity-bookmark',
    ADD_ACTIVITY_REACTION: 'add-activity-reaction',
    ADD_COMMENT: 'add-comment',
    ADD_COMMENT_REACTION: 'add-comment-reaction',
    CREATE_FEED: 'create-feed',
    DELETE_ANY_ACTIVITY: 'delete-any-activity',
    DELETE_ANY_COMMENT: 'delete-any-comment',
    DELETE_FEED: 'delete-feed',
    DELETE_OWN_ACTIVITY: 'delete-own-activity',
    DELETE_OWN_ACTIVITY_BOOKMARK: 'delete-own-activity-bookmark',
    DELETE_OWN_ACTIVITY_REACTION: 'delete-own-activity-reaction',
    DELETE_OWN_COMMENT: 'delete-own-comment',
    DELETE_OWN_COMMENT_REACTION: 'delete-own-comment-reaction',
    FOLLOW: 'follow',
    PIN_ACTIVITY: 'pin-activity',
    QUERY_FEED_MEMBERS: 'query-feed-members',
    QUERY_FOLLOWS: 'query-follows',
    READ_ACTIVITIES: 'read-activities',
    READ_FEED: 'read-feed',
    UNFOLLOW: 'unfollow',
    UPDATE_ANY_ACTIVITY: 'update-any-activity',
    UPDATE_ANY_COMMENT: 'update-any-comment',
    UPDATE_FEED: 'update-feed',
    UPDATE_FEED_FOLLOWERS: 'update-feed-followers',
    UPDATE_FEED_MEMBERS: 'update-feed-members',
    UPDATE_OWN_ACTIVITY: 'update-own-activity',
    UPDATE_OWN_ACTIVITY_BOOKMARK: 'update-own-activity-bookmark',
    UPDATE_OWN_COMMENT: 'update-own-comment'
};
const OwnCapability = {
    BLOCK_USERS: 'block-users',
    CHANGE_MAX_DURATION: 'change-max-duration',
    CREATE_CALL: 'create-call',
    CREATE_REACTION: 'create-reaction',
    ENABLE_NOISE_CANCELLATION: 'enable-noise-cancellation',
    END_CALL: 'end-call',
    JOIN_BACKSTAGE: 'join-backstage',
    JOIN_CALL: 'join-call',
    JOIN_ENDED_CALL: 'join-ended-call',
    KICK_USER: 'kick-user',
    MUTE_USERS: 'mute-users',
    PIN_FOR_EVERYONE: 'pin-for-everyone',
    READ_CALL: 'read-call',
    REMOVE_CALL_MEMBER: 'remove-call-member',
    SCREENSHARE: 'screenshare',
    SEND_AUDIO: 'send-audio',
    SEND_CLOSED_CAPTIONS_CALL: 'send-closed-captions-call',
    SEND_VIDEO: 'send-video',
    START_BROADCAST_CALL: 'start-broadcast-call',
    START_CLOSED_CAPTIONS_CALL: 'start-closed-captions-call',
    START_FRAME_RECORD_CALL: 'start-frame-record-call',
    START_RECORD_CALL: 'start-record-call',
    START_TRANSCRIPTION_CALL: 'start-transcription-call',
    STOP_BROADCAST_CALL: 'stop-broadcast-call',
    STOP_CLOSED_CAPTIONS_CALL: 'stop-closed-captions-call',
    STOP_FRAME_RECORD_CALL: 'stop-frame-record-call',
    STOP_RECORD_CALL: 'stop-record-call',
    STOP_TRANSCRIPTION_CALL: 'stop-transcription-call',
    UPDATE_CALL: 'update-call',
    UPDATE_CALL_MEMBER: 'update-call-member',
    UPDATE_CALL_PERMISSIONS: 'update-call-permissions',
    UPDATE_CALL_SETTINGS: 'update-call-settings'
};
;
 //# sourceMappingURL=index.es.mjs.map
}),
"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f372c1084d6ab70b2444e528581b28e5737394c72":"invalidateCacheAction"},"",""] */ __turbopack_context__.s([
    "invalidateCacheAction",
    ()=>invalidateCacheAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function invalidateCacheAction() {
    void (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete(`__clerk_invalidate_cache_cookie_${Date.now()}`);
}
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    invalidateCacheAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(invalidateCacheAction, "7f372c1084d6ab70b2444e528581b28e5737394c72", null);
}),
"[project]/.next-internal/server/app/meeting/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/meeting/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0000b7072d0981c5c80c7ec7cbf46259ea85ed00cc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getToken"],
    "7f0ff02e1e97a79cbb116548eec131f9ab88c4116b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["syncKeylessConfigAction"],
    "7f1394ffb2ecd4f8094ffe28788dc81381b6311125",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["detectKeylessEnvDriftAction"],
    "7f2007e0f06b42c29c026aa1cca8f172da37e7d051",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectKeylessMetadata"],
    "7f22a825b1f2cb8b81462d9e0ef0d160ef1dcd71e2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOrReadKeylessAction"],
    "7f2bb7e9c451711beb7efd45e34d49c963d68cc6b5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteKeylessAction"],
    "7f372c1084d6ab70b2444e528581b28e5737394c72",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateCacheAction"],
    "7fe13a6561b2abc40c19138ef9992413f4ef98d45f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatMetadataHeaders"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$meeting$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/meeting/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_3bd9ed38._.js.map