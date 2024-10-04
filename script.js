document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
            setTimeout(() => {
                this.querySelector('.dropdown-content').style.opacity = '1';
            }, 0); // Allow the display to update before changing opacity
        });

        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-content').style.opacity = '0';
            setTimeout(() => {
                this.querySelector('.dropdown-content').style.display = 'none';
            }, 300); // Match the transition duration
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.querySelector('.dropdown-content').style.opacity = '0';
                setTimeout(() => {
                    dropdown.querySelector('.dropdown-content').style.display = 'none';
                }, 300); // Match the transition duration
            });
        }
    });
});
