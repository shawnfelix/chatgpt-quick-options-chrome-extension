// Inject button next to "send" button
function injectMenuButton() {
    const textarea = document.getElementById("prompt-textarea");
    const textareaParent = textarea.parentElement;
    
    if (!textarea){
        console.log("gpt chrome extension cant find chat textarea")
        return;
    } 

    const menuButton = document.createElement('button');
    menuButton.textContent = "Menu";
    menuButton.id = "menu-button";
    textareaParent.parentElement.insertBefore(menuButton, textarea.parentElement.nextSibling);

  
    // Create menu
    const menu = document.createElement('div');
    menu.id = "gpt-extension-menu";
    menu.style.display = "none";
    document.body.appendChild(menu);
  
    // Add buttons to the menu
    const buttons = [
      { label: "Add Verbose", text: ". Verbose please" },
      { label: "No code", text: ". no code please" },
    ];
  
    buttons.forEach(item => {
      const button = document.createElement('button');
      button.textContent = item.label;
      button.addEventListener('click', () => {
        const inputBox = document.querySelector('textarea');
        inputBox.value += ` ${item.text}`;
      });
      menu.appendChild(button);
    });
  
    // Toggle menu visibility
    menuButton.addEventListener('click', () => {
      menu.style.display = menu.style.display === "none" ? "block" : "none";
    });
  }
  
  // Run the function when the page is fully loaded
  window.addEventListener('load', injectMenuButton);