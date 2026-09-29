<script>

// Activar iconos
lucide.createIcons();


// Navbar al hacer scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add(
            "bg-stone-950/95",
            "backdrop-blur-md",
            "shadow-lg"
        );

    } else {

        navbar.classList.remove(
            "bg-stone-950/95",
            "backdrop-blur-md",
            "shadow-lg"
        );

    }

});


// Menú mobile
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});


// Cerrar menú al seleccionar una opción
document.querySelectorAll(".mobile-link").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});


// Formulario de disponibilidad
function checkAvailability() {

    alert(
        "¡Gracias! El sistema de reservas estará disponible próximamente."
    );

}

</script>




function checkAvailability() {

    const checkIn = document.querySelectorAll('input[type="date"]')[0].value;
    const checkOut = document.querySelectorAll('input[type="date"]')[1].value;

    const adults = document.querySelectorAll('select')[0].value;
    const children = document.querySelectorAll('select')[1].value;

    // Número de WhatsApp del hotel
    const phone = "5491112345678";

    // Mensaje que recibirá el hotel
    const message = `
Hola Hotel Aurora 👋

Quisiera consultar disponibilidad.

📅 Check-in: ${checkIn || "No seleccionado"}
📅 Check-out: ${checkOut || "No seleccionado"}
👤 ${adults}
👶 ${children}

¿Podrían indicarme qué habitaciones tienen disponibles y sus precios?

Muchas gracias.
`;

    // Codificar el mensaje para WhatsApp
    const whatsappURL =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Abrir WhatsApp
    window.open(whatsappURL, "_blank");
}