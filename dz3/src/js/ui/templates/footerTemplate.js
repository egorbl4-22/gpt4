export const createpiuTemplate = ({title}) =>{
    const template =`
    <h7 class="piu">${title}</h7>
    `;
    return template;
}

export const createbuttonLastTemplate = ({title, href}) =>{
    const template = `
    <button href=${href} class="button_last"> 
        <div class="text_button">${title}</div>
    </button>
    `;
    return template;
}

export const createpiu2Template = ({src, title}) =>
{
    const template = `
    <div class="address_text">
    <img src=${src}>
    <div class="last_address"> ${title}</div>
  </div>
    `;
    return template;
}

export const createfooterTextTemplate =({title, href}) =>{
   const template = `
   <a href=${href} class="footer_text">
   <h8>${title}</h8></a>
   `;
   return template;
}

export const createfooterLinksTemplate = (links_last) =>{
    const template = links_last
    .map((item) => createfooterTextTemplate(item))
    .join("");
    return template;
}

export const createfooterLinks1Template = (links1_last) =>{
    const template = links1_last
    .map((item) => createfooterTextTemplate(item))
    .join("");
    return template;
}

export const createContactTextTemplate=({title}) =>
{
    const template =`
    <a href="#" class="footer_text">
    <h8>${title}</h8></a>
    `;
    return template;
}

export const createfooterContactsTemplate = (contact_last) =>{
    const template = contact_last
    .map((item) => createContactTextTemplate(item))
    .join("");
    return template;
}

export const FooterTemplate = ({  piu,
    button_last,
    piu2_text,
    links_last,
    links1_last,
    contact_last}) =>{
        const piuText = createpiuTemplate(piu);
        const buttonLast = createbuttonLastTemplate(button_last);
        const piu2Text = createpiu2Template(piu2_text);
        const linksLast = createfooterLinksTemplate(links_last);
        const links1Last = createfooterLinks1Template(links1_last);
        const contactLast = createfooterContactsTemplate(contact_last);
        const resultTemplate = `
        ${piuText}
        ${buttonLast}
        <div class="piu2"> 
          <div class="piu2_text">
           ${piu2Text}
            <div class="links_last">
              <div class="address">Ссылки</div>
             ${linksLast}
            </div>
            <div class="company_last">
              <div class="links">Компания</div>
              ${links1Last}
            </div>
            <div class="contact_last">
              <div class="contact">Контакты</div>
              ${contactLast}
            </div>
          </div>     
        </div>
        `;
        return resultTemplate;
    }