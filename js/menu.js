// (() => {
//     const menuBtnRef = document.querySelector("[data-menu-button]");
//     const mobilMenuRef = document.querySelector("[menu-button]");
//     // const mobilCloseRef = document.querySelector("[menu-close]");



//     menuBtnRef.addEventListener("click", () => {
//         const expanded =
//             menuBtnRef.getAttribute("aria-expanded") === "true" || false;
//         menuBtnRef.classList.toggle("is-open");
        
//         menuBtnRef.setAttribute("aria-expanded", !expanded);

//         mobilMenuRef.classList.toggle("is-open");


//     });
//     //  mobilCloseRef.addEventListener("click", () => {
//     //     // const expanded =
//     //     //     mobilCloseRef.getAttribute("aria-expanded") === "true" || false;
//     //     mobilCloseRef.classList.toggle("is-open");
        
//     //     // mobilCloseRef.setAttribute("aria-expanded", !expanded);

//     //     mobilMenuRef.classList.toggle("is-open");


//     // });
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
   

    
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);


  function toggleModal() {
    document.body.classList.toggle("menu-open");
    refs.modal.classList.toggle("is-hidden");
  }
  
})();