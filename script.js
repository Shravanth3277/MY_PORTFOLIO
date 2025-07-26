<script>
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.99)';
            navbar.style.boxShadow = '0 10px 35px rgba(0, 0, 0, 0.9)';
        } else {
            navbar.style.backgroundColor = 'var(--navbar-bg)';
            navbar.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.8)';
        }
    });
</script>
