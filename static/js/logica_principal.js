document.addEventListener('DOMContentLoaded', () => {

  /* ── Contador de contactos ─────────────────────────────── */
  actualizarContador();

  /* ── Búsqueda rápida (filtro en tabla) ─────────────────── */
  const searchInput = document.getElementById('searchInput');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      filtrarContactos(query);
    });
  }

  /* ── Botón ordenar A-Z ─────────────────────────────────── */
  const sortBtn = document.getElementById('sortBtn');
  let ordenAscendente = true;

  if (sortBtn) {
    sortBtn.addEventListener('click', () => {
      ordenarContactos(ordenAscendente);
      ordenAscendente = !ordenAscendente;
      sortBtn.textContent = ordenAscendente ? 'A-Z' : 'Z-A';
    });
  }

});

/* ============================================================
   FUNCIONES
   ============================================================ */

/**
 * Actualiza el badge con la cantidad de contactos visibles en la tabla.
 */
function actualizarContador() {
  const tbody       = document.getElementById('contactsTableBody');
  const countBadge  = document.getElementById('contactCount');
  const emptyState  = document.getElementById('emptyState');
  const tableWrapper = document.getElementById('tableWrapper');

  if (!tbody || !countBadge) return;

  const filas = tbody.querySelectorAll('tr:not([style*="display: none"])');
  const total = filas.length;

  countBadge.textContent = `${total} contacto${total !== 1 ? 's' : ''}`;

  // Mostrar estado vacío si no hay filas
  if (total === 0) {
    if (tableWrapper) tableWrapper.style.display = 'none';
    if (emptyState)   emptyState.style.display   = 'flex';
  } else {
    if (tableWrapper) tableWrapper.style.display = '';
    if (emptyState)   emptyState.style.display   = 'none';
  }
}

/**
 * Filtra las filas de la tabla según el texto de búsqueda.
 * @param {string} query - Texto a buscar.
 */
function filtrarContactos(query) {
  const filas = document.querySelectorAll('#contactsTableBody tr');

  filas.forEach(fila => {
    const nombre = fila.querySelector('.contact-name');
    if (!nombre) return;

    const textoFila = fila.textContent.toLowerCase();
    fila.style.display = textoFila.includes(query) ? '' : 'none';
  });

  actualizarContador();
}

/**
 * Ordena las filas de la tabla alfabéticamente por nombre.
 * @param {boolean} ascendente - true = A→Z, false = Z→A.
 */
function ordenarContactos(ascendente) {
  const tbody = document.getElementById('contactsTableBody');
  if (!tbody) return;

  const filas = Array.from(tbody.querySelectorAll('tr'));

  filas.sort((a, b) => {
    const nombreA = a.querySelector('.contact-name')?.textContent.trim().toLowerCase() || '';
    const nombreB = b.querySelector('.contact-name')?.textContent.trim().toLowerCase() || '';
    return ascendente
      ? nombreA.localeCompare(nombreB, 'es')
      : nombreB.localeCompare(nombreA, 'es');
  });

  // Re-insertar las filas ordenadas
  filas.forEach(fila => tbody.appendChild(fila));
}

