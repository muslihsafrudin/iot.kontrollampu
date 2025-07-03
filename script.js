document.addEventListener('DOMContentLoaded', () => {
    const showControlsBtn = document.getElementById('show-controls-btn');
    const backBtn = document.getElementById('back-btn');
    const welcomeScreen = document.getElementById('welcome-screen');
    const lampControls = document.getElementById('lamp-controls');
    const lampToggles = document.querySelectorAll('.lamp-toggle');

    // Tombol untuk menampilkan kontrol lampu
    showControlsBtn.addEventListener('click', () => {
        welcomeScreen.classList.add('hidden');
        lampControls.classList.remove('hidden');
    });

    // Tombol untuk kembali ke halaman awal
    backBtn.addEventListener('click', () => {
        lampControls.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');
    });

    // Event listener untuk setiap tombol lampu
    lampToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            const lampNumber = event.target.dataset.lamp;
            const currentState = event.target.textContent;

            // Mengubah status lampu
            if (currentState === 'ON') {
                event.target.textContent = 'OFF';
                console.log(`Lampu ${lampNumber} DIMATIKAN`);
            } else {
                event.target.textContent = 'ON';
                console.log(`Lampu ${lampNumber} DINYALAKAN`);
            }

            // Di sini Anda dapat menambahkan kode untuk mengirim perintah ke perangkat IoT
        });
    });
});