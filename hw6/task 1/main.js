const modal = document.getElementById('modal')
const openModal = document.getElementById("open-btn")
const closeModal = document.getElementById("close-btn")

openModal.addEventListener("click", () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close()
})

