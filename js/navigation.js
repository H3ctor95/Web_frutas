
(function() {
    'use strict';

    function cerrarMenu(navegacion, btnMenu, overlay) {
        navegacion.classList.remove('nav-abierto');
        btnMenu.classList.remove('menu-abierto');
        document.body.classList.remove('menu-activo');
        if (overlay) {
            overlay.classList.remove('overlay-visible');
            overlay.setAttribute('aria-hidden', 'true');
        }
        btnMenu.setAttribute('aria-label', 'Abrir menú de navegación');
    }

    document.addEventListener('DOMContentLoaded', function() {
        const btnMenu = document.getElementById('btn-menu');
        const navegacion = document.querySelector('.navegacion-principal');
        const overlay = document.getElementById('overlay-menu');

        if (!btnMenu || !navegacion) return;

        // Alternar menú al hacer clic en el botón
        btnMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            const estaAbierto = navegacion.classList.contains('nav-abierto');
            navegacion.classList.toggle('nav-abierto');
            btnMenu.classList.toggle('menu-abierto');
            document.body.classList.toggle('menu-activo');
            if (overlay) overlay.classList.toggle('overlay-visible');
            if (estaAbierto) {
                btnMenu.setAttribute('aria-label', 'Abrir menú de navegación');
                if (overlay) overlay.setAttribute('aria-hidden', 'true');
            } else {
                btnMenu.setAttribute('aria-label', 'Cerrar menú de navegación');
                if (overlay) overlay.setAttribute('aria-hidden', 'false');
            }
        });

        // Cerrar al hacer clic en el overlay (fondo oscuro)
        if (overlay) {
            overlay.addEventListener('click', function() {
                cerrarMenu(navegacion, btnMenu, overlay);
            });
        }

        // Cerrar al hacer clic en un enlace del menú
        navegacion.querySelectorAll('.enlace-menu').forEach(function(enlace) {
            enlace.addEventListener('click', function() {
                cerrarMenu(navegacion, btnMenu, overlay);
            });
        });

        // Cerrar al redimensionar si se pasa a desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) {
                cerrarMenu(navegacion, btnMenu, overlay);
            }
        });
    });
})();