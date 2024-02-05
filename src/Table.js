import React, { useEffect, useState } from "react";
import data from "./data.json"

const Table = () => {
    const [menOpened, setMenOpened] = useState(false)
    const [womenOpened, setWomenOpened] = useState(false)
    const [menOpenedAdult, setMenOpenedAdult] = useState(false)
    const [menOpenedChild, setMenOpenedChild] = useState(false)
    const [menOpenedOld, setMenOpenedOld] = useState(false)
    const [womenOpenedAdult, setWomenOpenedAdult] = useState(false)
    const [womenOpenedChild, setWomenOpenedChild] = useState(false)
    const [womenOpenedOld, setWomenOpenedOld] = useState(false)

    function openClick(params) {
        if (params === "Men") {
          return setMenOpened(!menOpened)
        } else if (params === "Women") {
            return setWomenOpened(!womenOpened)
        }
    }

    useEffect(()=>{
        if (menOpened === false) {
            setMenOpenedAdult(false)
            setMenOpenedChild(false)
            setMenOpenedOld(false)
        }
        if (womenOpened === false) {
            setWomenOpenedAdult(false)
            setWomenOpenedChild(false)
            setWomenOpenedOld(false)
        }
    }, [menOpened, womenOpened])

    return(
        <>
            <table style={{width: '50rem', }}>
                <thead>
                    <tr>
                        <th style={{width: '8rem'}}>Id</th>
                        <th style={{width: '37rem'}}>Name</th>
                        <th style={{width: '5rem'}}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((genderData, index)=>(
                        <>
                        <tr>
                            <td>{index + 1}</td>
                            <td style={{fontWeight: '900'}} className="menClosed" onClick={() => openClick(genderData.name)}>
                            {genderData.name == 'Men' ? (menOpened ? "-" :"+") : genderData.name == 'Women' ? (womenOpened ?  " -" : ' +  ') : null}{genderData.name} 
                            </td>
                            <td></td>
                        </tr>
                        {menOpened && genderData.name === "Men" && (
                            <>
                            <tr>
                                <td></td>
                                <td className="genderCategory" onClick={()=>{setMenOpenedAdult(!menOpenedAdult)}}>{menOpenedAdult ? " -" : ' +  '} {genderData.adult.name}</td>
                                <td></td>
                            </tr>
                            {menOpenedAdult && genderData.adult.data.map((value) => (
                                <tr>
                                        <td className="userId">{value.id}</td>
                                        <td className="genderName">{value.name}</td>
                                        <td>{value.age}</td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td className="genderCategory" onClick={()=>{setMenOpenedChild(!menOpenedChild)}}>{menOpenedChild ? " -" : ' +  '} {genderData.child.name}</td>
                                <td></td>
                            </tr>
                            {menOpenedChild && genderData.child.data.map((value) => (
                                <tr>
                                        <td className="userId">{value.id}</td>
                                        <td className="genderName">{value.name}</td>
                                        <td>{value.age}</td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td className="genderCategory" onClick={()=>{setMenOpenedOld(!menOpenedOld)}}>{menOpenedOld ? " -" : ' +  '} {genderData.old.name}</td>
                                <td></td>
                            </tr>
                            {menOpenedOld && genderData.old.data.map((value) => (
                                <tr>
                                        <td className="userId">{value.id}</td>
                                        <td className="genderName">{value.name}</td>
                                        <td>{value.age}</td>
                                </tr>
                            ))}
                            </>
                        )}
                        {womenOpened && genderData.name === "Women" && (
                            <>
                            <tr>
                                <td></td>
                                <td className="genderCategory" onClick={()=>{setWomenOpenedAdult(!womenOpenedAdult)}}>{genderData.adult.name}{womenOpenedAdult ? " -" : ' +  '}</td>
                                <td></td>
                            </tr>
                            {womenOpenedAdult && genderData.adult.data.map((value) => (
                                <tr>
                                        <td className="userId">{value.id}</td>
                                        <td className="genderName">{value.name}</td>
                                        <td>{value.age}</td>                                    
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td className="genderCategory" onClick={()=>{setWomenOpenedChild(!womenOpenedChild)}}>{genderData.child.name}{womenOpenedChild ? " -" : ' +  '}</td>
                                <td></td>
                            </tr>
                            {womenOpenedChild && genderData.child.data.map((value) => (
                                <tr>
                                        <td className="userId">{value.id}</td>
                                        <td className="genderName">{value.name}</td>
                                        <td>{value.age}</td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td className="genderCategory" onClick={()=>{setWomenOpenedOld(!womenOpenedOld)}}>{genderData.old.name}{womenOpenedOld ? " -" : ' +  '}</td>
                                <td></td>
                            </tr>
                            {womenOpenedOld && genderData.old.data.map((value) => (
                                <tr>
                                        <td className="userId">{value.id}</td>
                                        <td className="genderName">{value.name}</td>
                                        <td>{value.age}</td>
                                </tr>
                            ))}
                            </>
                        )}
                        </>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Table;