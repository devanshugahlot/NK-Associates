const targetUrl = 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFeBFONcqbBRvPSErjBfWifztXgqdwHCpnzvgBqi_UT3qSMHZ75djzZMHM_pt2kzUGRA_P4Zug2TrXv1pYjDiB0FhBiRXOYnZtRRtAyqL1SDW4TGAjqSRJ-mW6hcXltMJWK5R-5do8m6Ys5p-xWyytHb87SiQ3o6DpOXJcrgPNUyr_Mnczk';

async function resolve() {
  const res = await fetch(targetUrl, { redirect: 'manual' });
  console.log('Location:', res.headers.get('location'));
}
resolve();
