document.getElementById('btnReg').addEventListener('click', () => {
  document.getElementById('mainContent').scrollIntoView({behavior: 'smooth'});
});

// Mappa valori 0-3 alle icone Bootstrap Icons dei dadi (bi-dice-1, bi-dice-2, bi-dice-3, bi-dice-4)
const diceIcons = [
  '<i class="bi bi-0-square" style="font-size:3rem;color:#1565c0;"></i>',
  '<i class="bi bi-1-square" style="font-size:3rem;color:#1565c0;"></i>',
  '<i class="bi bi-2-square" style="font-size:3rem;color:#1565c0;"></i>',
  '<i class="bi bi-3-square" style="font-size:3rem;color:#1565c0;"></i>'
];

function showDicePopup() {
  const faces = [0,1,2,3,0,1,2,3,0,1,2,3];
  const d1 = faces[Math.floor(Math.random()*faces.length)];
  const d2 = faces[Math.floor(Math.random()*faces.length)];

  Swal.fire({
    html: `
      <div style="display:flex;justify-content:center;gap:1.5rem;margin-bottom:1rem;">
        ${diceIcons[d1]}
        ${diceIcons[d2]}
      </div>
    `,
    imageUrl: './img/pikmindado.png',
    imageHeight: 180,
    background: '#f0f8f5',
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText: 'Rilancia',
    cancelButtonText: 'Chiudi',
    customClass: {
      popup: 'px-4 py-4',
      title: 'has-text-success',
      confirmButton: 'button is-info',
      cancelButton: 'button is-light'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      showDicePopup(); // Rilancia i dadi
    }
    // Se annulli, il popup si chiude
  });
}

document.getElementById('btnRoll').addEventListener('click', showDicePopup);

// Mostra il pulsante dopo aver scrollato un po'
window.addEventListener('scroll', function() {
  document.getElementById('scrollTopBtn').style.display =
    window.scrollY > 900 ? 'flex' : 'none';
});

// Scrolla in cima alla pagina
document.getElementById('scrollTopBtn').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
