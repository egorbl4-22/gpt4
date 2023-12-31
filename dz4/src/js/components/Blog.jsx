import Blog from "../mockData/BlogData";
import Rectangle22 from "../../assets/img/Rectangle22.png";
import Rectangle23 from "../../assets/img/Rectangle23.png";
import Rectangle24 from "../../assets/img/Rectangle24.png";
import Rectangle25 from "../../assets/img/Rectangle25.png";
import Rectangle26 from "../../assets/img/Rectangle26.png";

export const UpperTextTemplate = ({blog_upper_text}) =>
{
    const {description} = blog_upper_text;
    
    return (
        <>
        <h5 class="blog_upper_text">{description}</h5>
        </>
    );
};

export const LeftBlockTemplate = ({left_block}) =>
{
    const {title, description, href, title1} = left_block;
    return (
        <>
        <div class="left_block">
        <img class="img" src={Rectangle22}/>
        <h5 class="data_text">{title}</h5>
        <h5 class="main_text">{description}</h5>
          <div class="bottom_next">
        <a href={href} class="bottom_next">{title1}</a>
      </div>
      </div>
        </>
    );
};

export const MiddleBlock1Template = ({middle_blocks1}) =>
{
    const {title, description, href, title1} = middle_blocks1;
    return (
        <>
        <img className="img" src={Rectangle23}/>
        <h5 class="data_text">{title}</h5>
        <h5 class="data_text">{description}</h5>
          <div class="bottom_next">
        <a href={href} class="bottom_next">{title1}</a>
      </div>

        </>
    );
};

export const MiddleBlock2Template = ({middle_blocks2}) =>
{
    const {title, description, href, title1} = middle_blocks2;
    return (
        <>

        <img className="img" src={Rectangle24}/>
        <h5 class="data_text">{title}</h5>
        <h5 class="data_text">{description}</h5>
          <div class="bottom_next">
        <a href={href} class="bottom_next">{title1}</a>
      </div>

        </>
    );
};

export const RightBlock1Template = ({right_blocks1}) =>
{
    const {title, description,  href, title1} = right_blocks1;
    return (
        <>

        <img className="img" src={Rectangle25}/>
        <h5 class="data_text">{title}</h5>
        <h5 class="data_text">{description}</h5>
          <div class="bottom_next">
        <a href={href} class="bottom_next">{title1}</a>
      </div>

        </>
    );
};

export const RightBlock2Template = ({right_blocks2}) =>
{
    const {title, description, href, title1} = right_blocks2;
    return (
        <> 
        <img className="img" src={Rectangle26}/>
        <h5 class="data_text">{title}</h5>
        <h5 class="data_text">{description}</h5>
          <div class="bottom_next">
        <a href={href} class="bottom_next">{title1}</a>
      </div>
        </>
    );
};

export const BlogTemplate = () =>{
    const {  blog_upper_text,left_block,middle_blocks1,
        middle_blocks2,right_blocks1, right_blocks2} = Blog;
    return (
        <>
        <div class="blog_text">
        <UpperTextTemplate blog_upper_text ={blog_upper_text}/>
        </div>
      <div class="blocks">  
        <div class="blocks1">   
        <LeftBlockTemplate left_block ={left_block}/>
        <div class="middle_block">
        <div class="middle_block1">
        <MiddleBlock1Template middle_blocks1 ={middle_blocks1}/>
        </div>
        <div class="middle_block2">
        <MiddleBlock2Template middle_blocks2 ={middle_blocks2}/>
        </div>
      </div>
      </div>
      <div class="right_block">
      <div class="right_block1">
      <RightBlock1Template right_blocks1 ={right_blocks1}/>
      </div>
      <div class="right_block2">
      <RightBlock2Template right_blocks2 ={right_blocks2}/>
      </div>
      </div>
      </div> 
      </>
    );
};

export default BlogTemplate; 