const u1 = 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG0dRwLIE6E6YsigchPufjSJegUkmckP0ykBovqWfZeCtOYKOoFDMzxY0mHVFruAR48z-BTKHF7qhY7_LOywY862h-8x0Dku8nfnZT_LZTxmSguOKW8jdvHzze-rYuZVzPmU1IT';
const u2 = 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGE9Of_jCmSGn6lkrE1KkQKweVF-CgekgusnUATGORpKn9wUhWjToOAAqS3N3dpcvqpGgUOTAd5VG4BylI50bEtb484qf9-6Y8yJ4b6buT0wAAGqjazk93J9hw_b6lkqA==';

async function resolve() {
  const r1 = await fetch(u1, { redirect: 'manual' });
  console.log('1:', r1.headers.get('location'));
  const r2 = await fetch(u2, { redirect: 'manual' });
  console.log('2:', r2.headers.get('location'));
}
resolve();
