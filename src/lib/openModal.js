document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('modal').classList.add('hidden');
});

function openModal(selectedPackage) {
    document.getElementById('modal').classList.remove('hidden');
  
    hbspt.forms.create({
      portalId: "#",
      formId: selectedPackage,
      target: "#hubspotFormContainer",
    });
  }
  
function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('hubspotFormContainer').innerHTML = ""; // Reset the form container
  }
// Make functions globally accessible
window.openModal = openModal;
window.closeModal = closeModal;