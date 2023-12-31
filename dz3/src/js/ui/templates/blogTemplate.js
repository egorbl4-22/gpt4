export const createBlogTextTemplate =({description}) =>{
    const template =`
    <h5 class="blog_upper_text">${description}</h5>
    `
    return template;
}

export const createLeftBlocksTemplate =({title, description, src,href, title1}) =>
{
    const template = `
    <div class="left_block">
    <img src=${src}>
      <h5 class="data_text">${title}</h5>
      <h5 class="main_text">${description}</h5>
        <div class="bottom_next">
      <a href=${href} class="bottom_next">${title1}</a>
    </div>
    </div>
   `
   return template;
}

export const createMiddleBlock1Template=({title, description, src, href, title1}) =>
{
  const template =`
  <div class="middle_block1"> 
  <img src =${src}>
  <h5 class="data_text">${title}</h5>
  <h6 class="main_text1">${description}</h6>
  <div class="bottom_next">
  <a href=${href} class="bottom_next">${title1}</a>
</div>
</div>
  `;
  return template;
}

export const createMiddleBlock2Template=({title, description, src, href, title1}) =>
{
  const template =`
  <div class="middle_block2"> 
  <img src =${src}>
  <h5 class="data_text">${title}</h5>
  <h6 class="main_text1">${description}</h6>
  <div class="bottom_next">
  <a href=${href} class="bottom_next">${title1}</a>
</div>
</div>
  `;
  return template;
}

export const createRightBlock1Template=({title, description, src, href, title1}) =>
{
  const template =`
  <div class="right_block1"> 
  <img src =${src}>
  <h5 class="data_text">${title}</h5>
  <h6 class="main_text1">${description}</h6>
  <div class="bottom_next">
  <a href=${href} class="bottom_next">${title1}</a>
</div>
</div>
  `;
  return template;
}

export const createRightBlock2Template=({title, description, src, href, title1}) =>
{
  const template =`
  <div class="right_block2"> 
  <img src =${src}>
  <h5 class="data_text">${title}</h5>
  <h6 class="main_text1">${description}</h6>
  <div class="bottom_next">
  <a href=${href} class="bottom_next">${title1}</a>
</div>
</div>
  `;
  return template;
}


export const BlogTemplate =({ blog_upper_text,
  left_block,
  middle_blocks1,
  middle_blocks2,
  right_blocks1,
  right_blocks2
}) =>{
    const blogTextTemplate = createBlogTextTemplate(blog_upper_text);
    const blocksLeftTemplate = createLeftBlocksTemplate(left_block);
    const middleBlocks1Template = createMiddleBlock1Template(middle_blocks1);
    const middleBlocks2Template = createMiddleBlock2Template(middle_blocks2);
    const rightBlocks1Template = createRightBlock1Template(right_blocks1);
    const rightBlocks2Template = createRightBlock2Template(right_blocks2);
    const resultTemplate = `
    <div class="blog_text">
       ${blogTextTemplate}
      </div>
      <div class="blocks">  
        <div class="blocks1">   
        ${blocksLeftTemplate}
      <div class="middle_block">
        ${middleBlocks1Template}
        ${middleBlocks2Template}
      </div> 
      </div>
      <div class="right_block">
        ${rightBlocks1Template}
        ${rightBlocks2Template}      
      </div>
      </div>
    `;
    return resultTemplate;
}