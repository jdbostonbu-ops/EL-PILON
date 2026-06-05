/* ============================================================
   EL PUNTO EXACTO — BRUTALIST THEME FUNCTIONALITY
   Copied from Theme 09 in the original showcase.
   ============================================================ */

(function() {
    window.t09HandleSubmit = function(event) {
        event.preventDefault();
        var success = document.getElementById('t09-form-success');
        if (success) {
            success.classList.add('visible');
            event.target.reset();
            setTimeout(function() {
                success.classList.remove('visible');
            }, 5000);
        }
    };
})();
