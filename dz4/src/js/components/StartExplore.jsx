import start_explore from "../mockData/StartExploreData";

export const StartExploreLeftTemplate = ({start_explore_left}) =>{
    const {title, description} = start_explore_left;
    return (
        <>
        <div class="start_explore_text">
        <h5 class="top_text">
          {title}
        </h5>
        <h5 class="bottom_text">
          {description}
        </h5>
      </div>
        </>
    );
};

export const ButtonTemplate=({start_explore_button}) =>{
    const {href, title} = start_explore_button;
    return (

        <button href={href} class="explore">{title}</button>
    );
};

export const startExploreTemplate = () => {
    const {start_explore_left, start_explore_button} = start_explore;

    return (
        <div class="start_explore_left">
        <StartExploreLeftTemplate start_explore_left ={start_explore_left}/>
      <div class="button_explore">
        <ButtonTemplate start_explore_button ={start_explore_button}/>
      </div>
      </div>
    );
};

export default startExploreTemplate;