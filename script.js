const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
    
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    
    const target = e.target.getAttribute("data-target");
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});


// ====== Popup Portfólio ======
      const popup = document.querySelector(".portfolio-popup");
      const ppTitle = popup.querySelector(".pp-title");
      const ppThumb = popup.querySelector(".pp-thumbnail img");
      const ppDesc = popup.querySelector(".pp-body .description");
      const ppInfo = popup.querySelector(".pp-body .general-info");
      const ppCloseBtn = popup.querySelector(".pp-close");

      function openPopup(item) {
        const title =
          item.querySelector(".portfolio-item-title")?.textContent?.trim() ||
          "Projeto";
        const img =
          item
            .querySelector(".portfolio-item-thumbnail img")
            ?.getAttribute("src") || "";
        const details = item.querySelector(".portfolio-item-details");

        ppTitle.textContent = title;
        ppThumb.src = img;
        ppThumb.alt = `Imagem do projeto: ${title}`;

        // Clona os conteúdos (se existirem)
        const desc =
          details?.querySelector(".description")?.innerHTML ||
          "<p>Sem descrição.</p>";
        const info =
          details?.querySelector(".general-info")?.innerHTML ||
          "<ul><li>Sem informações.</li></ul>";

        ppDesc.innerHTML = desc;
        ppInfo.innerHTML = info;

        popup.classList.add("open");
        document.body.style.overflow = "hidden"; 
      }

      function closePopup() {
        popup.classList.remove("open");
        document.body.style.overflow = "";
      }

      // Clique nos botões de cada item
      document.querySelectorAll(".view-project-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const item = e.target.closest(".portfolio-item");
          if (item) openPopup(item);
        });
      });

      // Botão fechar e ESC
      ppCloseBtn.addEventListener("click", closePopup);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && popup.classList.contains("open"))
          closePopup();
      });

      // Fechar clicando fora do conteúdo
      popup.addEventListener("click", (e) => {
        const content = popup.querySelector(".pp-content");
        if (!content.contains(e.target)) closePopup();
      });


      