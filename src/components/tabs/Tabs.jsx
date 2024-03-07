import { useState } from "react"
import { TABS } from "../../constants/tabs"
import { StyledContainer, StyledInfo, StyledTab } from "./tabs.styles"
import { v4 } from "uuid"

const Tabs =()=>{
    const[tabActive, setTabActive]=useState(0)
    
    return (  
    <> 
    <div>
         <h1>Tabs</h1>
         <StyledContainer>
        {
            TABS.map((tab, index)=>(
                <StyledTab key={v4()} $active={tabActive===index} onClick={()=> setTabActive(index)}>{tab.name}</StyledTab>
            ))
        }
        </StyledContainer>
        <div>
            <StyledInfo>{TABS[tabActive].info}</StyledInfo>     
        </div>
    </div>
           
    </>
       
    )

}



export default Tabs