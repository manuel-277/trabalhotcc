Favorite
function saveToFavorites(title) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(title)) {
        favorites.push(title);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        showToast();
        updateFavoritesList();

        // Feedback visual no botão (opcional)
        const buttons = document.querySelectorAll(`button[onclick*="'${title}'"]`);
        buttons.forEach(btn => {
            if (btn.textContent.trim() === 'Guardar') {
                btn.textContent = 'Guardado!';
                btn.disabled = true;
                btn.style.backgroundColor = '#6b7280';
            }
        });
    }
}

function updateFavoritesList() {
    const list = document.getElementById('favorites-list');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.length === 0) {
        list.innerHTML = '<li>Nenhum destino guardado ainda.</li>';
    } else {
        list.innerHTML = favorites.map(item => `<li>${item}</li>`).join('');
    }
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

function showDetails(place) {
    // Substitui o alert por um modal mais elegante
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 2000;">
            <div style="background: white; padding: 25px; border-radius: 12px; max-width: 90%; width: 500px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                <h3 style="color: var(--primary-color); margin-bottom: 15px;">${place}</h3>
                <p>Hotéis, passeios, dicas e vídeos em breve!</p>
                <p style="font-size: 0.9rem; color: #6b7280; margin: 15px 0;">Esta funcionalidade estará disponível na próxima atualização.</p>
                <button onclick="this.parentElement.parentElement.remove()" 
                    style="margin-top: 15px; padding: 8px 20px; background: var(--secondary-color); color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                    Fechar
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// === Menu Hambúrguer ===
document.addEventListener('DOMContentLoaded', () => {
    // Carregar favoritos
    updateFavoritesList();

    // Menu hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active');
            const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
            hamburger.setAttribute('aria-expanded', !expanded);
        });

        // Fechar menu ao clicar num link (mobile)
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }
});

