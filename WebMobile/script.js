
    window.onload = function() {
        alert("Bem-vindo ao universo de Laura Mendonça! Explore e inspire-se!");
    };
    const button = document.getElementById('btnSaibaMais');

    button.addEventListener('mouseenter', function() {
        document.body.style.backgroundColor = '#f0f0f0'; 
    });

    button.addEventListener('mouseleave', function() {
        document.body.style.backgroundColor = ''; 
    });
