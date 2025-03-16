import { useEffect, useState } from "react";
import Proyecto from "../componentes/proyecto";
const VITE_TOKEN = import.meta.env.VITE_TOKEN;
const VITE_URL = import.meta.env.VITE_URL;


export default function SectionProject() {
    const [proyectos, setProyectos] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(VITE_URL+"/api/proyectos?populate=img&sort=fecha:desc", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${VITE_TOKEN}`,
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setProyectos(data);
                console.log(data);
                setLoading(false);
            })
            .catch((error) => console.error("Error en fetch:", error));
    }, []);


    return (
        <>
            <div className="bg-base-200 min-h-screen" id="proyectos">
                <h2 className="text-3xl font-bold text-center">Proyectos</h2>
                <br />
                <div className="container mx-auto flex flex-col justify-center w-2/3  gap-8 ">
                    {
                        loading ? <p>Cargando...</p> :
                            proyectos.data.map((proyecto, index) => {
                                return <Proyecto key={'proyecto' + index} title={proyecto.titulo} description={proyecto.descripcion} imgs={proyecto.img} link={proyecto.link} />
                            })
                    }
                </div>
            </div>
        </>
    )
}