import React from "react";
import mock from '../../utils/mock';

const ListAndKeys = () => {

    const renderArray = (item, index) => {
        return (
            <div key={`Person-ID-${item.id}`}>
                <li>
                    {item.name}
                    {item.skills.map(renderSkills)}
                </li>
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div  key={`Skill-${index}`} style={{ paddingLeft: 20 }}>
                <li>Skill: {skill}</li>
            </div>
        )
    }
    
    return (
        <>
            <h3>Renderizando Array</h3>
            <ul>
                {mock.map(renderArray)}
            </ul>
        </>
    )
}

export default ListAndKeys;