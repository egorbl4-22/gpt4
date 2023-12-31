export const createstartExploreTextTemplate=({title, description}) =>{

    const template = `
    <h5 class="top_text">
        ${title}
    </h5>
    <h5 class="bottom_text">
        ${description}
    </h5>
    `;
    return template;
}

export const createstartExploreButtonTemplate =({href, title}) =>{
    const template= `
    <button href=${href} class="explore">${title}</button>
    `;
    return template;
}

export const startExploreTemplate = ({start_explore_left,
    start_explore_button
}) =>
{
    const startExploreTemplate = createstartExploreTextTemplate(start_explore_left);
    const startExploreButtonTemplate = createstartExploreButtonTemplate(start_explore_button);
    const resultTemplate = `
        <div class="start_explore_left">
        <div class="start_explore_text">
            ${startExploreTemplate}
        </div>
        <div class="button_explore">
            ${startExploreButtonTemplate}
        </div>
        </div>
    `;
    return resultTemplate;
}