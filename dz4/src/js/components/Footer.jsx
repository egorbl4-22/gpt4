import footer from "../mockData/FooterData";
import gpt3 from "../../assets/img/GPT-3.png"
export const PiuTemplate =({piu}) =>{
    const {title}=piu;
    return (
      <>
        <h7 class="piu">{title}</h7>
        </>
    );
};

export const ButtonLastTemplate =({button_last}) => {
    const {title, href} = button_last;
    return (
        <button href={href} class="button_last"> 
        <div class="text_button">{title}</div>
      </button>
    );
};

export const Piu2Template = ({piu2_text}) =>
{
    const {src, title} =piu2_text;
    return (
        <>
        <img className="img" src={gpt3}/>
            <div class="last_address">{title}</div>
         </>
    );
};

export const LinksTemplate = ({ item }) => {
    const { title, href} = item;
    return (     
      <>
        <a href={href} class="footer_text"><h8>{title}</h8></a>
        </>
    );
  };

  export const LinksLastTemplate = ({ links_last }) => {
    return links_last.map((item, index) => (
      <LinksTemplate key={index} item={item} />
    ));
  };

  export const Links1Template = ({ item }) => {
    const { title, href} = item;
    return (
      <>
        <a href={href} class="footer_text"><h8>{title}</h8></a>
        </>
    );
  };

  export const Links1LastTemplate = ({ links1_last }) => {
    return links1_last.map((item, index) => (
      <Links1Template key={index} item={item} />
    ));
  };

  export const ContactTemplate = ({ item }) => {
    const { title} = item;
    return (
      <>
        <h8>{title}</h8>
        </>
    );
  };

  export const ContactLastTemplate = ({ contact_last }) => {
    return contact_last.map((item, index) => (
      <ContactTemplate key={index} item={item} />
    ));
  };

  export const footerTemplate =()=>
  {
    const {piu,
        button_last,
        piu2_text,
        links_last,
        links1_last,
        contact_last,}= footer;
        
        return (
            <>
            <PiuTemplate piu ={piu}/>
            <ButtonLastTemplate button_last ={button_last}/>
            <div class="piu2"> 
              <div class="piu2_text">
                <div class="address_text">
                  <Piu2Template piu2_text = {piu2_text}/>
                </div>
                <div class="links_last">
                  <div class="address">Ссылки</div>
                  <LinksLastTemplate links_last ={links_last}/>
                </div>
                <div class="company_last">
                  <div class="links">Компания</div>
                  <Links1LastTemplate links1_last ={links1_last}/>
                </div>
                <div class="contact_last">
                  <div class="contact">Контакты</div>
                  <ContactLastTemplate contact_last={contact_last}/>
                </div>
              </div>         
            </div>    
            </> 
        );
  };
  
  export default footerTemplate;