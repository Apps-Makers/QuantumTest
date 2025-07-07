document.addEventListener('DOMContentLoaded', function() {
    function updateDateTime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        const formattedDateTime = now.toLocaleDateString('es-ES', options);
        document.getElementById('date-time').textContent = formattedDateTime.charAt(0).toUpperCase() + formattedDateTime.slice(1);
    }

    updateDateTime();
    setInterval(updateDateTime, 60000); // Actualiza cada minuto
});
