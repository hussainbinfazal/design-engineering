// // // load-test.js

// // const http = require("http");
// // const https = require("https");

// // const URL = "http://localhost:3000"; // Change this
// // const TOTAL = 100000;
// // const CONCURRENT = 10000;

// // const client = URL.startsWith("https") ? https : http;

// // function sendRequest() {
// //   return new Promise((resolve) => {
// //     const req = client.get(URL, (res) => {
// //       res.resume(); // Discard response body
// //       res.on("end", resolve);
// //     });

// //     req.on("error", resolve);
// //     req.setTimeout(10000, () => {
// //       req.destroy();
// //       resolve();
// //     });
// //   });
// // }

// // async function main() {
// //   console.log(`Starting ${TOTAL} requests...`);

// //   let completed = 0;

// //   while (completed < TOTAL) {
// //     const batch = [];

// //     const batchSize = Math.min(CONCURRENT, TOTAL - completed);

// //     for (let i = 0; i < batchSize; i++) {
// //       batch.push(sendRequest());
// //     }

// //     await Promise.all(batch);

// //     completed += batchSize;

// //     process.stdout.write(
// //       `\rCompleted: ${completed}/${TOTAL}`
// //     );
// //   }

// //   console.log("\nDone!");
// // }

// // main();

// // load-test.js

// const http = require("http");
// const https = require("https");
// const { performance } = require("perf_hooks");

// const URL = "https://learnlofts.com/"; // Change to your server

// const TOTAL_REQUESTS = 100000;
// const CONCURRENT = 1000;

// const client = URL.startsWith("https") ? https : http;

// let success = 0;
// let failed = 0;

// let totalLatency = 0;
// let minLatency = Infinity;
// let maxLatency = 0;

// async function request() {
//     return new Promise((resolve) => {
//         const start = performance.now();

//         const req = client.get(URL, (res) => {
//             res.resume();

//             res.on("end", () => {
//                 const latency = performance.now() - start;

//                 totalLatency += latency;
//                 minLatency = Math.min(minLatency, latency);
//                 maxLatency = Math.max(maxLatency, latency);

//                 if (res.statusCode >= 200 && res.statusCode < 400) {
//                     success++;
//                 } else {
//                     failed++;
//                 }

//                 resolve();
//             });
//         });

//         req.on("error", () => {
//             failed++;
//             resolve();
//         });

//         req.setTimeout(10000, () => {
//             req.destroy();
//             failed++;
//             resolve();
//         });
//     });
// }

// async function main() {

//     console.log("======================================");
//     console.log("Starting Load Test");
//     console.log("======================================");

//     console.log(`URL          : ${URL}`);
//     console.log(`Requests     : ${TOTAL_REQUESTS}`);
//     console.log(`Concurrency  : ${CONCURRENT}`);
//     console.log("");

//     const startTime = performance.now();

//     let completed = 0;

//     while (completed < TOTAL_REQUESTS) {

//         const batch = [];

//         const batchSize = Math.min(CONCURRENT, TOTAL_REQUESTS - completed);

//         for (let i = 0; i < batchSize; i++) {
//             batch.push(request());
//         }

//         await Promise.all(batch);

//         completed += batchSize;

//         process.stdout.write(
//             `\rCompleted ${completed}/${TOTAL_REQUESTS}`
//         );
//     }

//     const totalTime = (performance.now() - startTime) / 1000;

//     console.log("\n");
//     console.log("============= RESULT =================");
//     console.log(`Total Requests : ${TOTAL_REQUESTS}`);
//     console.log(`Success        : ${success}`);
//     console.log(`Failed         : ${failed}`);
//     console.log(`Duration       : ${totalTime.toFixed(2)} sec`);
//     console.log(`RPS            : ${(TOTAL_REQUESTS / totalTime).toFixed(2)}`);
//     console.log(`Avg Latency    : ${(totalLatency / success).toFixed(2)} ms`);
//     console.log(`Min Latency    : ${minLatency.toFixed(2)} ms`);
//     console.log(`Max Latency    : ${maxLatency.toFixed(2)} ms`);
//     console.log("======================================");
// }

// main();