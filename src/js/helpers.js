export function timeDeltaToHHMM(timeDelta) {
  let TOTAL_SECONDS = (timeDelta - timeDelta % 1000) / 1000;
  let hours = (TOTAL_SECONDS - TOTAL_SECONDS % (60*60)) / (60*60)
  let minutes = (TOTAL_SECONDS - TOTAL_SECONDS % (60)) / 60 - (60*hours);
  let seconds = TOTAL_SECONDS - 60*minutes - 60*60*hours;
  return `${subzero(minutes)}:${subzero(seconds)}`;
}

export function subzero(num){
  return (''+num).length === 1 ? '0'+num : num;
}

export function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}