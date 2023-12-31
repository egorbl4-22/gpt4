export const createIMGTemplate = ({src, alt}) => {
    const template = `<div class="photo_section">
    <img src=${src} alt=${alt}/>
</div>`;
return template;
}

export const createEarlyAccessTopTemplate = ({title}) =>{
    const template =`<h4 class="early_access_right_top">
    ${title}
</h4>`;
return template;
}

export const createEarlyAccessMiddleTemplate = ({title}) =>{
    const template =`<h4 class="early_access_right_middle">
    ${title}
</h4>`;
return template;
}

export const createEarlyAccessBottomTemplate = ({title}) =>{
    const template =`<h4 class="early_access_right_bottom">
    ${title}
</h4>`;
return template;
}

export const createEarlyAccessButtonTemplate = ({href, title}) =>{
    const template =` <a href=${href} class="right_cta">${title}</a>`;
return template;
}

export const EarlyAccessTemplate =({illustration,
    early_access_right_top,
    early_access_right_middle,
    early_access_right_bottom,
    early_access_right_bottom_button}) =>
{
    const earlyAccessIMG = createIMGTemplate(illustration);
        const earlyAccessTop = createEarlyAccessTopTemplate( early_access_right_top);
        const earlyAccessMiddle = createEarlyAccessMiddleTemplate(early_access_right_middle);
        const earlyAccessBottom = createEarlyAccessBottomTemplate(early_access_right_bottom);
        const earlyAccessButton = createEarlyAccessButtonTemplate(early_access_right_bottom_button);
        const resultTemplate = `
        ${earlyAccessIMG}
        <div class="early_access_right">
            ${earlyAccessTop}
            ${earlyAccessMiddle}
            ${earlyAccessBottom}
          <div class="early_access_right_cta">
            ${earlyAccessButton}
          </div>
        </div>
        `;
        return resultTemplate;
}