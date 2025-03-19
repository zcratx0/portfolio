const VITE_URL = import.meta.env.VITE_URL;


export default function Proyecto({ title, description, imgs, link }) {
    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-sm w-full">
                <div className="card-body w-full lg:w-1/3">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">Ver</a>
                    </div>
                </div>
                <figure className="w-full lg:w-2/3">
                    {
                        imgs !== undefined &&
                        imgs.map((img, index) => {
                            return <img key={'img' + index} src={`${VITE_URL}${img.url}`} className="w-96" />
                        })
                    }
                </figure>
            </div>
        </>
    )
}