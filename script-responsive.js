// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearElements = document.querySelectorAll("#currentYear")
  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear()
  })

  // Tab functionality for support page
  const tabButtons = document.querySelectorAll(".tab-button")
  if (tabButtons.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons and panes
        document.querySelectorAll(".tab-button").forEach((btn) => {
          btn.classList.remove("active")
        })
        document.querySelectorAll(".tab-pane").forEach((pane) => {
          pane.classList.remove("active")
        })

        // Add active class to clicked button and corresponding pane
        this.classList.add("active")
        const tabId = this.getAttribute("data-tab")
        document.getElementById(tabId).classList.add("active")
      })
    })
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById("mobileMenuToggle")
  const mobileMenu = document.getElementById("mobileMenu")

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
    })

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll("a, button")
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
      })
    })
  }

  // Close mobile menu when window is resized to desktop size
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && mobileMenu) {
      mobileMenu.classList.remove("active")
    }
  })
})

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })

    // Close mobile menu if open
    const mobileMenu = document.getElementById("mobileMenu")
    if (mobileMenu) {
      mobileMenu.classList.remove("active")
    }
  }
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })

  // Close mobile menu if open
  const mobileMenu = document.getElementById("mobileMenu")
  if (mobileMenu) {
    mobileMenu.classList.remove("active")
  }
}

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault()

  // Get form values
  const gameSelect = document.getElementById("game")
  const gameId = document.getElementById("gameId").value
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value

  // Validate form
  if (!gameSelect.value || !gameId) {
    alert("Por favor completa todos los campos")
    return
  }

  // Get game name for message
  let gameName = ""
  switch (gameSelect.value) {
    case "free-fire":
      gameName = "Free Fire"
      break
    case "blood-strike":
      gameName = "Blood Strike"
      break
    case "cod-mobile":
      gameName = "COD Mobile"
      break
    case "mobile-legends":
      gameName = "Mobile Legends"
      break
    default:
      gameName = gameSelect.value
  }

  // Get payment method for message
  let paymentMethodText = ""
  switch (paymentMethod) {
    case "credit-card":
      paymentMethodText = "Tarjeta de Crédito/Débito"
      break
    case "paypal":
      paymentMethodText = "PayPal"
      break
    case "pago-movil":
      paymentMethodText = "Pago Móvil"
      break
    case "binance":
      paymentMethodText = "Binance"
      break
    default:
      paymentMethodText = paymentMethod
  }

  // Open WhatsApp with message
  // Replace 'tunumero' with the actual WhatsApp number
  window.open(`https://wa.me/584245851434
}
