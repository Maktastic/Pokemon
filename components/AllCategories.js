import {useEffect, useState} from "react";

export async function getAllCategories() {
    let response =  await fetch('/api/allcategories')
    response = await response.json()
    return response
}

export async function getSpecificPokemonType(type) {
    let response = await fetch(`/api/getSpecificPokemonType/${type}`)
    response = await response.json()
    return response
}

export default function AllCategories() {
    const [ data, setData] = useState([])
    const [ pokemonType, setPokemonType ] = useState([])
    const [ typeName, setTypeName ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let response = await getAllCategories()
            setData(response.data)
        }
        fetchData()
    }, []);
    
    function showPokemon(name) {
        setTypeName(name)
        const data = async() => {
            const pokemon = await getSpecificPokemonType(name)
            setPokemonType(pokemon)
            return pokemon
        }
        data()
    }

    return (
        <>
            <h1 className="text-3xl font-semibold mb-4">Categories</h1>
            <div className='flex flex-col gap-10 p-10 w-full shadow-sm border border-gray-200'>
                <div className="grid grid-cols-4 gap-2">
                    {
                        data && data.length > 0 && data.map((category, index) => {
                            return (
                                <div key={index} className="bg-gray-50 w-full rounded-[8px] shadow-md cursor-pointer p-4 hover:bg-yellow-200 transition" onClick={() => {
                                    showPokemon(category.name)
                                }}>
                                    <h2 className="text-xl font-semibold">{category.name}</h2>
                                </div>
                            )
                        })
                    }
                </div>
                { pokemonType && pokemonType.length > 0 && (
                    <>
                        <h1 className="text-3xl font-semibold">Type: { typeName }</h1>
                        <div className="grid grid-cols-4 gap-2">
                            
                            {
                                pokemonType.map((data, index) => {
                                    return (
                                        // <>{data.pokemon.name}</>
                                        <>
                                            <div key={index} className="bg-gray-50 w-full rounded-[8px] shadow-md cursor-pointer p-4 hover:bg-yellow-200 transition">
                                                <h2 className="text-xl font-semibold">{data.pokemon.name}</h2>
                                            </div>
                                        </>
                                        
                                    )
                                })
                            }
                        </div>
                    </>
                )}
                
            </div>
        </>
    )
}