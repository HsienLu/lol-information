
import HeroAvatarCard from "@/components/HeroAvatarCard"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

function HeroList(){
    const badgeTypeAll=['All','Marksman','Mage','Assassin','Tank','Fighter','Support']
    const badgeType=['Marksman']
    const [isAll,setIsAll]=useState(true)
    const [isMarksman,setIsMarksman]=useState(false)
    const [isMage,setIsMage]=useState(false)
    const [isAssassin,setIsAssassin]=useState(false)
    const [isTank,setIsTank]=useState(false)
    const [isFighter,setIsFighter]=useState(false)
    const [isSupport,setIsSupport]=useState(false)
    const [heroData,setHeroNameData]=useState<Array<object>>([])
    useEffect(()=>{
        console.log(import.meta.env.VITE_API_URL)
        fetch(`${import.meta.env.VITE_API_URL}/champion.json`)
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            let arrayData:object[]=Object.values(data.data)
            setHeroNameData(arrayData)
           
        }).catch(error=>console.error('Error',error))
    },[])

    let filterTagsData=heroData.filter((v:any)=>badgeType.some(tag=>v.tags.includes(tag)))
    useEffect(()=>{
        console.log(filterTagsData)
    },[filterTagsData])
    return(
        <>
        <div className="container mx-auto">
            <div className="mt-5 flex gap-5">
                {
                    badgeTypeAll.map((v:any,i:number)=>{
                        return(
                            <Badge key={i} className="hover:cursor-pointer" variant="outline" >{v}</Badge>
                        )
                    })
                }
                
            </div>
            <div className="my-4 flex gap-12 flex-wrap justify-center">
                {           
                        

                        filterTagsData.map((v:any)=>{
                            return(
                                <HeroAvatarCard key={v.id} heroPicURL={`${import.meta.env.VITE_IMG_URL}/14.3.1/img/champion/${v.image.full}`}  heroName={`${v.name}`}></HeroAvatarCard>
                            )
                        })
                    
                }
                
            </div>
        </div>
        </>
    )
}
export default HeroList