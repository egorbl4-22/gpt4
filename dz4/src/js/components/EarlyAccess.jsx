import earlyAccess from "../../js/mockData/earlyAccess";
import  FeatureImage  from "../../assets/img/FeatureImage.png";

export const EarlyAccessTopTemplate =({early_access_right_top}) =>{
    const { title } = early_access_right_top;
    
    return (
        <>
        <h4 class="early_access_right_top">{title}</h4>
        </>
    );
};

export const EarlyAccessMiddleTemplate =({early_access_right_middle}) =>{
    const {title} = early_access_right_middle;
    
    return (
        <>
        <h4 class="early_access_right_middle">{title}</h4>
        </>
    );
};

export const EarlyAccessBottomTemplate =({early_access_right_bottom}) =>{
    const {title} = early_access_right_bottom;
    
    return (
        <>
         <h4 class="early_access_right_bottom">
                {title}
            </h4>
        </>
    );
};

export const IllustrationTemplate = ({ illustration }) => {
    const { alt } = illustration;
  
    return <img src={FeatureImage} alt={alt} />;
  };


export const ButtonTemplate =({early_access_right_bottom_button}) =>{
    const {title, href} = early_access_right_bottom_button;
    
    return ( 
    <a href={href} class="right_cta">{title}</a>
    );
};

  const earlyAccessTemplate = () => {
    const {illustration,
      early_access_right_top,
      early_access_right_middle,
      early_access_right_bottom,
      early_access_right_bottom_button} =
    earlyAccess;
  
    return (
      <>     
        <div class="photo_section">
        <IllustrationTemplate illustration={illustration} />
        </div>
        <div className="early_access_right">
            <EarlyAccessTopTemplate early_access_right_top={early_access_right_top} />
            <EarlyAccessMiddleTemplate early_access_right_middle={early_access_right_middle} />
            <EarlyAccessBottomTemplate early_access_right_bottom={early_access_right_bottom} />
            <div class="early_access_right_cta">
                <ButtonTemplate early_access_right_bottom_button ={early_access_right_bottom_button}/>
          </div>      
          </div>  
      </>
    );
  };
  
  export default earlyAccessTemplate;   